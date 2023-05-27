const express = require('express');
const app = express();
const port = 3000;

const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://shawranjit040:Ranjit040@cluster0.kkxgacm.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'train_search';

const client = new MongoClient(uri);

// Connect to the database
client.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database');

  const db = client.db(dbName);
  const trainsCollection = db.collection('trains');

  app.use(express.static('public')); // Serve static files from the 'public' directory

  // Define API endpoints
  app.get('/trains', async (req, res) => {
    const { source, destination } = req.query;

    try {
      // Query the database to get the list of trains that match the source and destination stations
      const trains = await trainsCollection.find({ route: { $all: [source, destination] } }).toArray();

      // Sort the trains based on price
      const sortedTrains = trains.sort((a, b) => a.price - b.price);

      res.json(sortedTrains);
    } catch (error) {
      console.error('Error retrieving trains:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Start the web server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});


