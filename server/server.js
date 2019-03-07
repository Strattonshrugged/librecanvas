import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import mongo_config from './config';
import passport from 'passport';

import User from './models/User';
import passport_config from './config';

const app = express();
const router = express.Router();

// Parser for POST data
app.use(bodyParser.json());
app.use(cors());

// Mongo Connection
mongoose.connect(mongo_config.mongoURL, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

// Passport Init
app.use(passport.initialize());

// Set up API routes
app.use('/', router);

// Listen on provided port, on all network interfaces.
app.listen(4000, () => console.log(`Express server running on port 4000`));