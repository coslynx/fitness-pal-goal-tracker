import express from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import api from './services/api.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const mongoUri = process.env.MONGODB_URI;

async function connectToDatabase() {
  try {
    const client = new MongoClient(mongoUri);
    await client.connect();
    console.log('Connected to MongoDB');
     api.setMongoClient(client);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

connectToDatabase();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Fitness Tracker API');
});

app.use((err, req, res, next) => {
  console.error('Unhandled exception:', err);
  res.status(500).send('An unexpected error occurred.');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});