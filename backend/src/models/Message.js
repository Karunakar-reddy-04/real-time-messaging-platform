// backend/src/models/Message.js

import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Message = sequelize.define('Message', {
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    receiverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});

export { Message };
