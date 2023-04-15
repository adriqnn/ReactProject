const restaurantController = require('express').Router();

const {} = require('../services/restaurantService');
const { parseError } = require('../util/parser');
const session = require('../middlewares/session');



module.exports = restaurantController;