import axios from 'axios';
import express, { json } from 'express';
import { connectToDatabase } from './src/db/connection.js';
import dotenv from 'dotenv';
import User from './src/db/models/User.js';

dotenv.config();

const app = express();

app.use(json());

app.post('/', async (req, res) => {
    try { 
        const { id } = req.params;
        const { name, email, password } = req.body;
        
        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            message: 'success',
            payload: user
        });
    } catch (err) {
        res.status(500).json({
            message: 'error',
            payload: err
        });
    }
});

connectToDatabase(process.env.MONGO_URI);

app.listen(3333, () => {
    console.log("Server connected");
})