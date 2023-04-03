const { getAllBurgerIngredient, getById } = require('../services/burgerIngredientService');
const { parseError } = require('../util/parser');
const burgerIngredientController = require('express').Router();

burgerIngredientController.get('/', async (req, res) => {
    try{
        const ingredients = await getAllBurgerIngredient();
        res.json(ingredients);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };

});

burgerIngredientController.get('/:id', async (req, res) => {
    try{
        const item = await getById(req.params.id);
        if(!item){
            throw new Error('Item not in the database!');
        }
        res.json(item);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

module.exports = burgerIngredientController;