const express = require('express');
const cors = require('cors');
const {data} = require('./data/data');
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;
const conString = 'mongodb+srv://talha:bayansar@cluster0.hgfnb.mongodb.net/nodetodo?retryWrites=true&w=majority';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

MongoClient.connect(conString, {
    useUnifiedTopology: true
  }, (error, client) => {
if (error) return console.log(error)
console.log('Connected to db!')
})

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