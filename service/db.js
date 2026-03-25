const{ MongoClient }= require('mongodb');
const config = require('./dbConfig.json');

const client = new MongoClient(config.mongoUri);

let db;
let userCollection;
let scoreCollection;

async function initDb() {
  try {
    await client.connect();
    db = client.db('startup');
    userCollection = db.collection('user');
    scoreCollection = db.collection('score');
    console.log("Connected to database");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
}

initDb();

module.exports = { 
  get userCollection() { return userCollection; },
  get scoreCollection() { return scoreCollection; }
};


