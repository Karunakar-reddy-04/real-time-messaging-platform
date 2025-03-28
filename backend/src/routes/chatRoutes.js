// backend/src/routes/chatRoutes.js

import express from 'express';
import { sendMessage, getMessages } from '../controllers/chatController.js';

const router = express.Router();

// Send message route
router.post('/send', sendMessage);

// Get messages route
router.get('/messages', getMessages);

export default router;
