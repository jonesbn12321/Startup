const{ MongoClient }= require('mongodb');
const config = require('./dbConfig.json');

const client = new MongoClient(config.mongoUri);

const db = client.db('startup');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');

// Test the connection and exit the process if it fails
async function testConnection() {
  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database because ${ex.message}`);
    process.exit(1);
  }
}

testConnection();
module.exports = {userCollection, scoreCollection};
console.log("URI:", config.mongoUri);


