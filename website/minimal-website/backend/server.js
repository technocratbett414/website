const express = require('express');
const cors = require('cors');
const { mongoClient } = require('mongodb');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const url = 'mongodb://localhost:27017';
const { MongoClient } = require('mongodb'); // at the top
const client = new MongoClient(url);
const dbName = 'ofvdb';

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/api/form', async(req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName); // Get database
        const collection = db.collection('forms'); // Get collection
        await collection.insertone(req.body);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
    //Here you will save the data to the data base
    Consule.log('Received form data:', req.body);
    res.json({Success: true});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
})