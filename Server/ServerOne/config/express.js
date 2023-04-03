const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('../middlewares/cors');
const session = require('../middlewares/session');
const trimBody = require('../middlewares/trimBody');
const cookieSecret = 'PizzaBurgerSpot';

module.exports = (app) => {
    app.use(express.json());
    app.use(cors());
    app.use(cookieParser(cookieSecret));
    app.use(trimBody());
    // app.use(session());
    //session
    app.use('/static', express.static('static'));
};