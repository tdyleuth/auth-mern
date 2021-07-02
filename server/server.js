require('dotenv').config();
const connectDB = require('./config/db');
const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = 3000;

const userRouter = require('./routes/user-routes');

app.get('/', (req, res) => {
    res.send('Hello World');
});

//Middleware
app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());

app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});

connectDB();
