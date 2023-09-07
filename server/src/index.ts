import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';

import database from './config/database';
import initRoutes from './routes';

const app = express();

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

app.listen(1234, () => {
    console.log("server running on port 1234");
});
