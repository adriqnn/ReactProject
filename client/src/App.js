import { Route, Routes } from 'react-router-dom';

import { ApplicationProvider } from './contexts/ApplicationContext';
import { BurgerProvider } from './contexts/BurgerContext';
import { PizzaProvider } from './contexts/PizzaContext';
import { RestaurantProvider } from './contexts/RestaurantContext';

import './App.css';
import { Header } from './components/Core/Header/Header';
import { Footer } from './components/Core/Footer/Footer';
import { Home } from './components/Core/Home/Home';
import { About } from './components/Core/About/About';
import { Contacts } from './components/Core/Contacts/Contacts';
import { Error } from './components/Core/Error/Error';
import { RouteGuardUnAuthenitcated } from './components/Shared/RouteGuardUnAuthenticated';
import { RouteGuardAuthenitcated } from './components/Shared/RouteGuardAuthenticated';

import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';
import { Profile } from './components/Auth/Profile/Profile';
import { ProfileUpdate } from './components/Auth/Profile/ProfileUpdate';
import { Logout } from './components/Auth/Logout/Logout';

import { Burgers } from './components/Burger/Burger/Burgers';
import { BurgerCreate } from './components/Burger/Burger-Create/Burger-Create';
import { BurgerDelete } from './components/Burger/Burger-Delete/Burger-Delete';
import { BurgerDetails } from './components/Burger/Burger-Details/Burger-Details';
import { BurgerIngredients } from './components/Burger/Burger-Ingredient/Burger-Ingredients';
import { BurgerIngredientDetails } from './components/Burger/Burger-Ingredient-Details/Burger-Ingredient-Details';

import { Pizzas } from './components/Pizza/Pizza/Pizzas';
import { PizzaCreate } from './components/Pizza/Pizza-Create/Pizza-Create';
import { PizzaDelete } from './components/Pizza/Pizza-Delete/Pizza-Delete';
import { PizzaDetails } from './components/Pizza/Pizza-Details/Pizza-Details';
import { PizzaIngredients } from './components/Pizza/Pizza-Ingredient/Pizza-Ingredients';
import { PizzaIngredientDetails } from './components/Pizza/Pizza-Ingredient-Details/Pizza-Ingredient-Details';

import { Restaurants } from './components/Restaurant/Restaurant/Restaurants';
import { RestaurantCreate } from './components/Restaurant/Restaurant-Create/Restaurant-Create';
import { RestaurantUpdate } from './components/Restaurant/Restaurant-Update/Restaurant-Update';
import { RestaurantDelete } from './components/Restaurant/Restaurant-Delete/Restaurant-Delete';
import { RestaurantDetails } from './components/Restaurant/Restaurant-Details/Restaurant-Details';

function App() {
  return (
      <ApplicationProvider>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route element={<RouteGuardUnAuthenitcated/>}>
            <Route path='/auth/login' element={<Login/>}/>
            <Route path='/auth/register' element={<Register/>}/>
          </Route>
          <Route element={<RouteGuardAuthenitcated/>}>
            <Route path='/auth/profile' element={<Profile/>}/>
            <Route path='/auth/logout' element={<Logout/>}/>
            <Route path='/auth/profile/update/:userId' element={<ProfileUpdate/>}/>
          </Route>

          <Route element={<BurgerProvider/>}>
            <Route path='/burgers' element={<Burgers/>}/>
            <Route path='/burgers/item/:burgerId' element={<BurgerDetails/>}/>
            <Route path='/burgers/burger-ingredients' element={<BurgerIngredients/>}/>
            <Route path='/burgers/burger-ingredients/:burgerIngredientId' element={<BurgerIngredientDetails/>}/>
            <Route element={<RouteGuardAuthenitcated/>}>
              <Route path='/burgers/create' element={<BurgerCreate/>}/>
              <Route path='/burgers/item/delete/:burgerId/:ownerId' element={<BurgerDelete/>}/>
            </Route>
          </Route>

          <Route element={<PizzaProvider/>}>
            <Route path='/pizzas' element={<Pizzas/>}/>
            <Route path='/pizzas/item/:pizzaId' element={<PizzaDetails/>}/> 
            <Route path='/pizzas/pizza-ingredients' element={<PizzaIngredients/>}/> 
            <Route path='/pizzas/pizza-ingredients/:pizzaIngredientId' element={<PizzaIngredientDetails/>}/>
            <Route element={<RouteGuardAuthenitcated/>}>
              <Route path='/pizzas/create' element={<PizzaCreate/>}/>   
              <Route path='/pizzas/item/delete/:pizzaId/:ownerId' element={<PizzaDelete/>}/>
            </Route>
          </Route>

          <Route element={<RestaurantProvider/>}>
            <Route path='/restaurants' element={<Restaurants/>}/>
            <Route path='/restaurants/item/:restaurantId' element={<RestaurantDetails/>}/>
            <Route element={<RouteGuardAuthenitcated/>}>
              <Route path='/restaurants/create' element={<RestaurantCreate/>}/>
              <Route path='/restaurants/item/update/:restaurantId/:ownerId' element={<RestaurantUpdate/>}/>
              <Route path='/restaurants/item/delete/:restaurantId/:ownerId' element={<RestaurantDelete/>}/>
            </Route>
          </Route>
          
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>

          <Route path="/*" element={<Error/>}/>
        </Routes>

        <Footer/>
      </ApplicationProvider>
  );
};

export default App;