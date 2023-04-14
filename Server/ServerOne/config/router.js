const homeController = require("../controllers/homeController");
const adminController = require("../controllers/adminController");
const authController = require("../controllers/authController");
const burgerController = require("../controllers/burgerController");
const burgerIngredientController = require("../controllers/burgerIngredientController");
const pizzaController = require("../controllers/pizzaController");
const pizzaIngredientController = require("../controllers/pizzaIngredientController");
const session = require('../middlewares/session');
const profileController = require("../controllers/profileController");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/admin', adminController);
    app.use('/auth', authController);
    app.use('/burger', burgerController);
    app.use('/burgerIngredient', burgerIngredientController);
    app.use('/pizza', pizzaController);
    app.use('/pizzaIngredient', pizzaIngredientController);
    app.use('/profile', session(), profileController);
};