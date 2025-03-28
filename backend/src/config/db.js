// backend/src/config/db.js

import mysql from 'mysql2';

// Create the MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Export the connection pool
const connectDB = () => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            process.exit(1);
        } else {
            console.log('Connected to the MySQL database');
            connection.release();
        }
    });
};

export default connectDB;
