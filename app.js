// app.js

const express = require('express');
const connectDB = require('./config/db');
const bp = require('body-parser');
var cors = require('cors');

// routes
const cars = require('./routes/api/cars');

const app = express();

// Connect to the database
connectDB();

// use body-parser
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// cors
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Hello Makers'));

// use routes
app.use('/api/cars', cars);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));