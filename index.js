'use strict';
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('hello, gyík');
});

app.listen(PORT, ()=> {
    console.log(`Server is running on the PORT: ${PORT}`);
});

