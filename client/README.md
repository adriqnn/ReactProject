# PizzaBurgerSpot - React Application - Educational Client Project!

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

### Public Part -> Unauthenticated users:
```
home - 'http://localhost:3000/';
```

```
about - 'http://localhost:3000/about';
```

```
contacts - 'http://localhost:3000/contacts';
```

```
login - 'http://localhost:3000/auth/login';
```

```
register - 'http://localhost:3000/auth/register';
```

```
pizzas - 'http://localhost:3000/pizzas';
```

```
pizza details - 'http://localhost:3000/pizzas/item/id';
```

```
pizza ingredients  - 'http://localhost:3000/pizzas/pizza-ingredients';
```

```
pizza ingredient details - 'http://localhost:3000/pizzas/pizza-ingredients/id';
```

```
burgers - 'http://localhost:3000/burgers';
```

```
burger details - 'http://localhost:3000/burgers/item/id';
```

```
burger ingredients - 'http://localhost:3000/burgers/burger-ingredients';
```

```
burger ingredient details - 'http://localhost:3000/burgers/burger-ingredients/id';
```

```
restaurants - 'http://localhost:3000/restaurants';
```

```
restaurant details - 'http://localhost:3000/restaurants/item/id';
```

```
error - 'http://localhost:3000/*';
```

### Private Part -> Authenticated users;

```
logout - 'http://localhost:3000/auth/logout';
```

```
profile - 'http://localhost:3000/auth/profile';
```

```
profile update - 'http://localhost:3000/auth/profile/update/id';
```

```
burger create - 'http://localhost:3000/burgers/create';
```

```
burger delete - 'http://localhost:3000/burgers/item/delete/id';
```

```
pizza create - 'http://localhost:3000/pizzas/create';
```

```
pizza delete - 'http://localhost:3000/pizzas/item/delete/id';
```

```
restaurant create - 'http://localhost:3000/restaurants/create';
```

```
restaurant update - 'http://localhost:3000/restaurants/item/update/id';
```

```
restaurant delete - 'http://localhost:3000/restaurants/item/delete/id';
```

## General Information:

1. Dynamic Pages:
    * Profile Page;
    * Burgers Page;
    * Burger Details Page;
    * Burger Ingredients Page;
    * Burger Ingredient Details Page;
    * Pizzas Page;
    * Pizza Details Page;
    * Pizza Ingredients Page;
    * Pizza Ingredient Details Page;
    * Restaurants Page;
    * Restaurant Details Page;
2. Specific Views:
    * Burgers Catalog and Burger Details;
    * Burger Ingredients Catalog and Burger Ingredient Details;
    * Pizza Catalog and Pizza Details;
    * Pizza Ingredients Catalog and Pizza Ingredient Details;
    * Restaurant Catalog and Restaurant Details;
3. CRUD Collection:
    * Users - Create, Read and Update;
    * Burgers - Create, Read, Delete and Like/Unlike Functionality;
    * Pizzas - Create, Read, Delete and Like/Unlike Functionality;
    * Restaurants - Create, Read, Update and Delete; 
4. Using React for client-side;
5. Using REST-api server connected to MongoDB;
6. User Authentication, authorized requests and guest/user guards;
7. Client-side routing in App.js with react-router-dom;
8. Application has statefull and stateless components, bound forms, component styling and other;
9. Used GitHub for the application source control;
10. Application has data validation for the forms and error handling for the server requests and other parts where it is needed;
11. Application is divided into multiple components with separate css files;
12. Application has documentation for the setup, use and functionality;
13. Application has 4 contexts:
    * ApplicationContext;
    * BurgerContext;
    * PizzaContext;
    * RestaurantContext;
14. Application has some other features:
    * Hooks;
    * Guards;
15. Good UI/UX;
16. Used Google Drive to store Assets;

> More Functionality to come soon...\

Thanks!

## Some Pictures from the Application:

<p><img src="https://github.com/adriqnn/ReactProject/blob/master/client/public/assets/documentation/home-page-default.jpg">
<p><img src="https://github.com/adriqnn/ReactProject/blob/master/client/public/assets/documentation/login-page-default.jpg">
<p><img src="https://github.com/adriqnn/ReactProject/blob/master/client/public/assets/documentation/register-page-default.jpg">
<p><img src="https://github.com/adriqnn/ReactProject/blob/master/client/public/assets/documentation/burgers-catalog-page-default.jpg">
<p><img src="https://github.com/adriqnn/ReactProject/blob/master/client/public/assets/documentation/pizzas-catalog-page-default.jpg">