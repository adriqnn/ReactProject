const burgerController = require('express').Router();

const { getAllBurgers, getById, deleteById, createRequestBurger, getBurgersByUserId, upvote, downvote } = require('../services/burgerService');
const { parseError } = require('../util/parser');
const session = require('../middlewares/session');
const { getUserById } = require('../services/userService');

burgerController.get('/', async (req, res) => {
    try{
        const burgers = await getAllBurgers();
        res.json(burgers);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

burgerController.get('/:id', async (req, res) => {
    try{
        const item = await getById(req.params.id);
        if(!item){
            throw new Error('Item not in the database`');
        }
        res.json(item);
    }catch(err) {
        const message = parseError(err);
        res.status(400).json({message});
    };
});

burgerController.delete('/delete/:id', session(), async (req, res) => {
    const item = await getById(req.params.id);
    try{
        await deleteById(req.params.id);
        res.status(200).send({message: 'Item Deleted!'});
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

burgerController.post('/create/new', session(), async (req, res) => {
    const item = req.body.burger;
    try{
        const burger = await createRequestBurger(item);
        res.status(200).send({burger});
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

burgerController.get('/user/:id', session(), async (req, res) => {
    const id = req.params.id;
    try{
        const burgers = await getBurgersByUserId(id);
        res.status(200).json(burgers);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

burgerController.get('/upvote/:itemId/:userId', session(), async (req, res) => {
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
        res.status(200).json({message: 'Burger Liked!'});
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

burgerController.get('/downvote/:itemId/:userId', session(), async (req, res) => {
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
        res.status(200).json({message: 'Burger Unliked!'});
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

module.exports = burgerController;