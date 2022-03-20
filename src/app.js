const express = require('express');
const app = express();

// Database
const db = require('./database');
db('mongodb://mongodb/ma_database_test');

// Cors
const cors = require('cors');
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
}));

// Json
const { json, urlencoded } = express;
app.use(json());
app.use(urlencoded({ extended: false }));

// Router
const router = require('./routes');
app.use(router);

// Execute server
app.listen(4000, () => {
    console.log('Server running.... in port 4000');
})