const mongoose = require('mongoose');
const CONNECTION_STRING = 'mongodb://localhost:27017/react_pizza_burger_spot';

module.exports = async (app) => {
    try{
        await mongoose.connect(CONNECTION_STRING, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Database connected...');
    }catch(err){
        console.error('Error initiazlizing database!');
        console.error(err.message);
        process.exit(1);
    };
};