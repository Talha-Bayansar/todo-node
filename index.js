const express = require('express');
const cors = require('cors');
const {data} = require('./data/data');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

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