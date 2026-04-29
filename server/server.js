const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
// You must download your serviceAccountKey.json from Firebase Console
// and place its contents into firebase-admin.json in the project root.
try {
  const serviceAccount = require('./firebase-admin.json');
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log('Firebase Admin Initialized Successfully.');
} catch (error) {
  console.warn('WARNING: Could not initialize Firebase Admin. Did you configure firebase-admin.json?');
}

let db = null;
if (admin.apps && admin.apps.length > 0) {
  db = admin.firestore();
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 1. Create or Update User Profile
app.post('/api/user', async (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  const { uid, email, name, photoURL, skillsToTeach, skillsToLearn, skillLevel, availability } = req.body;
  
  if (!uid) return res.status(400).json({ error: 'Missing UID' });

  try {
    const userRef = db.collection('users').doc(uid);
    const doc = await userRef.get();
    
    if (!doc.exists) {
      // New user
      await userRef.set({
        uid, email, name, photoURL,
        skillsToTeach: skillsToTeach || [],
        skillsToLearn: skillsToLearn || [],
        skillLevel: skillLevel || 'Beginner',
        availability: availability || 'Flexible',
        skillCoins: 10, // starting balance
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
    } else {
      // Update existing user profile
      await userRef.update({
        skillsToTeach: skillsToTeach !== undefined ? skillsToTeach : doc.data().skillsToTeach,
        skillsToLearn: skillsToLearn !== undefined ? skillsToLearn : doc.data().skillsToLearn,
        skillLevel: skillLevel !== undefined ? skillLevel : doc.data().skillLevel,
        availability: availability !== undefined ? availability : doc.data().availability,
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
    }
    
    const updatedDoc = await userRef.get();
    res.json({ success: true, user: updatedDoc.data() });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get User Profile
app.get('/api/user/:uid', async (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  try {
    const doc = await db.collection('users').doc(req.params.uid).get();
    if (doc.exists) {
      res.json({ success: true, user: doc.data() });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Helper function for AI matching logic
function calculateMatchScore(userA, userB) {
  let score = 0;
  
  const aTeaches = (userA.skillsToTeach || []).map(s => s.toLowerCase());
  const aLearns = (userA.skillsToLearn || []).map(s => s.toLowerCase());
  const bTeaches = (userB.skillsToTeach || []).map(s => s.toLowerCase());
  const bLearns = (userB.skillsToLearn || []).map(s => s.toLowerCase());

  // Check what A teaches against what B wants to learn
  aTeaches.forEach(skillA => {
    bLearns.forEach(skillB => {
      if (skillA === skillB) score += 2; // Exact match
      else if (skillA.includes(skillB) || skillB.includes(skillA)) score += 1; // Partial match
    });
  });

  // Check what B teaches against what A wants to learn
  bTeaches.forEach(skillB => {
    aLearns.forEach(skillA => {
      if (skillA === skillB) score += 2; // Exact match
      else if (skillA.includes(skillB) || skillB.includes(skillA)) score += 1; // Partial match
    });
  });

  return score;
}

// 2. Get Users / Suggested Matches
app.get('/api/users', async (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  const { uid } = req.query; // current user id to find matches
  
  try {
    const usersSnapshot = await db.collection('users').get();
    const allUsers = [];
    usersSnapshot.forEach(doc => {
      if (doc.id !== uid) {
        allUsers.push(doc.data());
      }
    });

    if (uid) {
      // Get current user to score matches
      const currentUserDoc = await db.collection('users').doc(uid).get();
      if (currentUserDoc.exists) {
        const currentUser = currentUserDoc.data();
        
        allUsers.forEach(user => {
          user.matchScore = calculateMatchScore(currentUser, user);
        });

        // Sort by best match score descending
        allUsers.sort((a, b) => b.matchScore - a.matchScore);
      }
    }
    
    res.json({ success: true, users: allUsers });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 3. Create Exchange Request
app.post('/api/match', async (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  const { requesterId, targetId, skillRequested } = req.body;
  
  if (!requesterId || !targetId) return res.status(400).json({ error: 'Missing requester or target ID' });

  try {
    const requestRef = db.collection('requests').doc();
    await requestRef.set({
      id: requestRef.id,
      requesterId,
      targetId,
      skillRequested: skillRequested || null,
      status: 'pending', // pending, accepted, rejected
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    res.json({ success: true, requestId: requestRef.id });
  } catch (error) {
    console.error('Error creating request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 4. Get Matches/Requests for User
app.get('/api/matches/:userId', async (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  const { userId } = req.params;

  try {
    // Get requests sent TO this user (Received requests)
    const receivedSnapshot = await db.collection('requests')
      .where('targetId', '==', userId)
      .get();
      
    // Get requests sent BY this user (Sent requests)
    const sentSnapshot = await db.collection('requests')
      .where('requesterId', '==', userId)
      .get();

    const received = [];
    receivedSnapshot.forEach(doc => received.push(doc.data()));

    const sent = [];
    sentSnapshot.forEach(doc => sent.push(doc.data()));

    // For received requests, fetch requester info
    for (let req of received) {
      const userDoc = await db.collection('users').doc(req.requesterId).get();
      req.requesterInfo = userDoc.exists ? userDoc.data() : null;
    }
    
    // For sent requests, fetch target info
    for (let req of sent) {
      const userDoc = await db.collection('users').doc(req.targetId).get();
      req.targetInfo = userDoc.exists ? userDoc.data() : null;
    }

    res.json({ success: true, received, sent });
  } catch (error) {
    console.error('Error fetching matches:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Handle request accept/reject
app.post('/api/match/:requestId', async (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  const { requestId } = req.params;
  const { status } = req.body; // 'accepted' or 'rejected'

  if (!['accepted', 'rejected'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  try {
    const requestRef = db.collection('requests').doc(requestId);
    await requestRef.update({
      status,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Error updating request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 5. Chat Endpoints
app.post('/api/chat', async (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  const { requestId, senderId, text } = req.body;

  if (!requestId || !senderId || !text) {
    return res.status(400).json({ error: 'Missing chat fields' });
  }

  try {
    const messageRef = db.collection('messages').doc();
    await messageRef.set({
      id: messageRef.id,
      requestId,
      senderId,
      text,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    res.json({ success: true, messageId: messageRef.id });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/chat/:requestId', async (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  const { requestId } = req.params;

  try {
    const messagesSnapshot = await db.collection('messages')
      .where('requestId', '==', requestId)
      .orderBy('createdAt', 'asc')
      .get();

    const messages = [];
    messagesSnapshot.forEach(doc => {
      messages.push(doc.data());
    });

    res.json({ success: true, messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
