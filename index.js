const express = require('express');
const cors = require('cors');
const {data} = require('./data/data');
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;
const uri = "mongodb+srv://talha:password@cluster0.hgfnb.mongodb.net/namedb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  if (err) console.log("error")
  // perform actions on the collection object
  client.close();
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json(data);
});
app.post('/', (req, res) => {
    data.push({
        todo: req.body.todo
    });
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});