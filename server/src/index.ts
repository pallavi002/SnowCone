import express from 'express';
import http from 'http'; // Import the 'http' module
const socketIo = require("socket.io")

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
const io = socketIo(server,{ 
    cors: {
      origin: "http://localhost:3001"
    }
})

io.on("connection", (socket: any) => {
    console.log("client connected: ", socket.id);
    
    // socket.join("clock-room");
    socket.on('chat message', (message: string) => {
        console.log(`Message received: ${message}`);
        
        // Emit the 'chat message' event to all connected clients
        io.emit('chat message', message);
    });
    
    socket.on("disconnect", (reason: any) => {
        console.log(reason);
    });
});


server.listen(1234, () => {
    console.log("Server running on port 1234");
});
