const pizzaController = require('express').Router();

const { getAllPizzas, getById, deleteById, createRequestPizza, getPizzasByUserId, upvote, downvote } = require('../services/pizzaService');
const { parseError } = require('../util/parser');
const session = require('../middlewares/session');
const { getUserById } = require('../services/userService');

pizzaController.get('/', async (req, res) => {
    try{
        const pizzas = await getAllPizzas();
        res.json(pizzas);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

pizzaController.get('/:id', async (req, res) => {
    try{
        const item = await getById(req.params.id);
        if(!item){
            throw new Error('Item not in the database`');
        };
        res.json(item);
    }catch(err) {
        const message = parseError(err);
        res.status(400).json({message});
    };
});

pizzaController.delete('/delete/:id', session(), async (req, res) => {
    const item = await getById(req.params.id);
    try{
        await deleteById(req.params.id);
        res.status(200).send({message: 'Item Deleted!'});
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

pizzaController.post('/create/new', session(), async (req, res) => {
    const item = req.body.pizza;
    try{
        const pizza = await createRequestPizza(item);
        res.status(200).send({pizza});
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

pizzaController.get('/user/:id', session(), async (req, res) => {
    const id = req.params.id;
    try{
        const pizzas = await getPizzasByUserId(id);
        res.status(200).json(pizzas);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

pizzaController.get('/upvote/:itemId/:userId', session(), async (req, res) => {
    try{
        const itemById = await getById(req.params.itemId);
        const userById = await getUserById(req.params.userId);
        if(!itemById || !userById){
            throw new Error('Verification Error!');
        };
        if(itemById.likes.map(e => e.toString()).includes(userById._id.toString())){
            throw new Error('Cannot upvote twice!');
        };
        await upvote(req.params.itemId, userById._id);
        res.status(200).json({message: 'Pizza Liked!'});
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

pizzaController.get('/downvote/:itemId/:userId', session(), async (req, res) => {
    try{
        const itemById = await getById(req.params.itemId);
        const userById = await getUserById(req.params.userId);
        if(!itemById || !userById){
            throw new Error('Verification Error!');
        };
        if(!itemById.likes.map(e => e.toString()).includes(userById._id.toString())){
            throw new Error('Cannot dislike!');
        };
        await downvote(req.params.itemId, userById._id);
        res.status(200).json({message: 'Pizza Unliked!'});
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

module.exports = pizzaController;