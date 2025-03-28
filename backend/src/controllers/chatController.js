// backend/src/controllers/chatController.js

import { Message } from '../models/Message.js';

// Send message
export const sendMessage = async (req, res) => {
    const { senderId, receiverId, message } = req.body;

    try {
        const newMessage = await Message.create({ senderId, receiverId, message });

        res.status(201).json({ message: 'Message sent successfully', newMessage });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get messages
export const getMessages = async (req, res) => {
    const { userId } = req.query;

    try {
        const messages = await Message.findAll({
            where: {
                [Op.or]: [
                    { senderId: userId },
                    { receiverId: userId }
                ]
            }
        });

        res.status(200).json({ messages });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
