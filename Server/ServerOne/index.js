const express = require('express');
const expressConfig = require('./config/express');
const routerConfig = require('./config/router');
const databaseConfig = require('./config/database');
const databaseInitConfig = require('./init/database_initializer');

async function start(){
    const app = express();

    expressConfig(app);
    routerConfig(app);
    await databaseConfig(app);
    databaseInitConfig(app);

    app.listen(3000, () => console.log('Server listening on port 3000'));
};

start();