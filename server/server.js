require('dotenv').config();
const connectDB = require('./config/db');
const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

//Middleware

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});

connectDB();
