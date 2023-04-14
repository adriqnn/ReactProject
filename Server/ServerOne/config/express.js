const express = require('express');
const cors = require('../middlewares/cors');
const cookieParser = require('cookie-parser');
const cookieSecret = 'PizzaBurgerSpot';
const trimBody = require('../middlewares/trimBody');

module.exports = (app) => {
    app.use(express.json());
    app.use(cors());
    app.use(cookieParser(cookieSecret));
    app.use(trimBody());
    app.use('/static', express.static('static'));
};