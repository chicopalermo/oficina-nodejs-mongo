import express, { json } from 'express';
import { connectToDatabase } from './src/db/connection.js';
import dotenv from 'dotenv';
import userRouter from './src/user/userRouter.js';
import postRouter from './src/post/postRouter.js';

dotenv.config();

const app = express();

app.use(json());

app.use('/users', userRouter);
app.use('/posts', postRouter);

connectToDatabase(process.env.MONGO_URI);

app.listen(3333, () => {
    console.log("Server connected");
})