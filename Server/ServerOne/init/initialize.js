const { countBurgerIngredients, createBurgerIngredient } = require('../services/burgerIngredientService');
const { countBurgers, createBurgerForDB } = require('../services/burgerService');
const { countPizzaIngredients, createPizzaIngredient } = require('../services/pizzaIngredientService');
const { countPizzas, createPizzaForDB } = require('../services/pizzaService');
const { createRole, countRoles } = require('../services/roleService');
const { countUsers, createAdmin } = require('../services/userService');

module.exports = async () => {
    const ROLES_INITIALIZED = await countRoles();
    const ADMIN_INITIALIZED = await countUsers();
    const PIZZA_INGREDIENTS_INITIALIZED = await  countPizzaIngredients();
    const BURGER_INGREDIENTS_INITIALIZED = await countBurgerIngredients();
    const BURGERS_INITIALIZED = await countBurgers();
    const PIZZA_INITIALIZED = await countPizzas();

    if(ROLES_INITIALIZED == 0){
        await Promise.all(require('./role_db.json').map(e => createRole(e)));
    };
    if(ADMIN_INITIALIZED == 0){
        await createAdmin();
    };
    if(PIZZA_INGREDIENTS_INITIALIZED == 0){
        await Promise.all(require('./pizza_ingredients_db.json').map(e => createPizzaIngredient(e)));
    };
    if(BURGER_INGREDIENTS_INITIALIZED == 0){
        await Promise.all(require('./burger_ingredients_db.json').map(e => createBurgerIngredient(e)));
    };
    if(BURGERS_INITIALIZED == 0){
        await Promise.all(require('./burgers_db.json').map(e => createBurgerForDB(e)));
    };
    if(PIZZA_INITIALIZED == 0){
        await Promise.all(require('./pizzas_db.json').map(e => createPizzaForDB(e)));
    };
};




// let ROLES_INITIALIZED = count().then((v) => v).then(v => v);
// console.log(ROLES_INITIALIZED);
// let ROLES_INITIALIZED = count().then((v) => v);
// console.log(ROLES_INITIALIZED); 
//const roles = require('./role_db.json').map(async(e) => await create(e));