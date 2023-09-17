import express from 'express';
import http from 'http'; // Import the 'http' module
import { Server } from 'socket.io'; // Import Server type

import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';

import database from './config/database';
import initRoutes from './routes';

const app = express();
const server = http.createServer(app); // Create an HTTP server

dotenv.config();

app.use(cors({
    credentials: true
}));

app.use(compression());

app.use(cookieParser());

// Use the built-in Express JSON and URL-encoded body parsing middleware
app.use(express.json()); // for JSON data
app.use(express.urlencoded({ extended: true })); // for form data

database();
initRoutes(app);

// Initialize Socket.IO with the HTTP server
const io = new Server(server);

// Define your Socket.IO logic here

io.on('connection', (socket) => {
    socket.broadcast.emit('hi');

    // Handle events and communication with connected clients here

    socket.on('chat message', (message) => {
        console.log(message);
        // Broadcast the message to all connected clients
        io.emit('chat message', message);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected.');
    });
});

server.listen(1234, () => {
    console.log("Server running on port 1234");
});
