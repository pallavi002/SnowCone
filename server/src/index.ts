import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import 'dotenv';

import database  from '../config/database';

const app = express();

app.use(cors({
    credentials: true
}));

app.use(compression());

app.use(cookieParser());

app.use(bodyParser.json());

database();

app.listen(1234, () => {console.log("server running on port 1234")})

