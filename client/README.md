# PizzaBurgerSpot - React Application - Client Project!

## Getting Started:
This is a small react client-side application called PizzaBurgerSpot for managing collections of pizzas, burggers and restaurants - created by the users. The application runs with it's own REST-api server made with ExpressJS and is connected to a NoSQL database - MongoDB;

You need to download the client and run:
```
npm install --- to install the dependansies;
npm start --- to run the React client;
```
You also need to download the server and run:
```
npm install --- to install the dependansies;
npm start --- to run the REST-api server;
```

## Technologies used:

1. React Client:
    * react: 18.2.0;
    * react-dom: 18.2.0;
    * react-router-dom: 6.10.0;
    * react-scripts: 5.0.1;

2. ExpressJS Server:
    * bcrypt: 5.1.0;
    * cookie-parser: 1.4.6;
    * cors: 2.8.5;
    * express: 4.18.2;
    * express-validator: 6.14.2;
    * jsonwebtoken: 8.5.1;
    * mongoose: 6.8.0;
    * validator: 13.7.0;

## React Client Application Structure:

The Application has:
* Public Part - accessible for everyone without authentication;
* Private Part - accessible only for registered users of the application;

### Public Part -> Unauthenticated users;
    ```
    home - '/';
    ```
    ```
    contacts - '/contacts';
    ```
    ```
    about - '/';
    ```


### Private Part -> Authenticated users;

> Functionality:\
> -Login.\
> -Register.\
> -Profile Page with own Burgers/Pizzas.\
> -Create Manage and View Burgers.\
> -Create Manage and View Pizzas.\
> -Check Burger Ingredients.\
> -Check Pizza Ingredients.\
> -Home, About & Contacts\
> -Other\
> ...\
> More Functionality to come soon...\
> Thanks!

<p><img src="https://github.com/adriqnn/ReactProject/blob/master/client/public/assets/documentation/home-page-default.jpg">
<p><img src="https://github.com/adriqnn/ReactProject/blob/master/client/public/assets/documentation/login-page-default.jpg">