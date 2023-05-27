const { MongoClient } = require('mongodb');

const stations = [
  'Station A',
  'Station B',
  'Station C',
  'Station D',
  'Station E',
  // Add more stations as needed
];

const totalTrains = 1000;
const dbUrl = 'mongodb+srv://shawranjit040:Ranjit040@cluster0.kkxgacm.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URL
const dbName = 'train_search'; // Replace with your database name

// Helper function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function populateDatabase() {
  try {
    const client = await MongoClient.connect(dbUrl);
    const db = client.db(dbName);
    const trainsCollection = db.collection('trains');

    const trains = [];

    // Generate 1000 trains and their routes
    for (let i = 1; i <= totalTrains; i++) {
      const train = {
        name: `Train ${i}`,
        route: [],
        distance: 0,
      };

      const numStations = getRandomNumber(2, 5); // Randomly choose the number of stations in a route
      let prevStation = null;

      // Generate a route for the train
      for (let j = 0; j < numStations; j++) {
        let station;
        do {
          station = stations[getRandomNumber(0, stations.length - 1)]; // Randomly choose a station
        } while (station === prevStation); // Ensure the current station is not the same as the previous station

        train.route.push(station);
        prevStation = station;

        if (j > 0) {
          // Calculate the distance between consecutive stations
          const distance = getRandomNumber(50, 200); // Assuming distance is in kilometers
          train.distance += distance;
        }
      }

      // Calculate ticket price based on distance
      train.price = train.distance * 1.25; // Rs 1.25 per kilometer

      trains.push(train);
    }

    // Insert the generated trains into the database
    await trainsCollection.insertMany(trains);
    console.log('Train data inserted into the database.');

    client.close();
  } catch (error) {
    console.error('Error while populating the database:', error);
  }
}

populateDatabase();
