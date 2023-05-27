# Fullstack-Assignment-Hackthon-Ranjit
<h2>This is the description of index.html file</h2>
<h3>The provided code is an HTML document that creates a simple train search interface. It includes dropdown menus to select a source and destination, a search button, and a table where train search results are displayed dynamically. JavaScript is used to handle the search functionality and update the table based on the selected source and destination.</h3>
<h2>This is the description of index.js file</h2>
<h3>The provided code is a Node.js application using Express framework to create a web server. It connects to a MongoDB database, serves static files from a "public" directory, and defines an API endpoint for retrieving train search results based on the requested source and destination stations. The retrieved data is sorted by price and sent as a JSON response. The server listens on port 3000 for incoming requests.</h3>
<h2>This is the description of dataGeneration.js file</h2>
<h3>The code connects to a MongoDB database and populates it with randomly generated train data. It creates a collection called 'trains' and generates 1000 train documents with random routes, distances, and ticket prices based on the distance. The data is inserted into the database using the MongoClient.</h3>
<h2>This is the description of train.js file</h2>
<h3>The code defines a Train class that represents a train with properties such as name, route, distance, and price. The Train class uses the ObjectId class from the 'mongodb' package to generate a unique identifier for each train. The price is calculated based on the distance. The class is exported for use in other modules.</h3>
