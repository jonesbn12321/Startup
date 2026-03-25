const{ MongoClient }= require('mongo.db');
const config = require('./dbConfig.json');

const url =  `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);

const db = client.db('startup');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');

// Test the connection and exit the process if it fails
async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    client.close();
    process.exit(1);
  }
}

testConnection();
module.exports = {userCollection, scoreCollection};


