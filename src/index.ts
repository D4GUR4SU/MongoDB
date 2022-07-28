import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { todoRouter } from './routes/todo';

const app = express();
app.use(json());
app.use(todoRouter);

mongoose.connect('mongodb+srv://root:root@test.mongodb.net/?retryWrites=true&w=majority', () => {
  console.log('Connected to MongoDB');
})


app.listen(3000, () => {
  console.log('Server listening on port 3000');
})