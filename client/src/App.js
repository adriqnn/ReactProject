import { Route, Routes } from 'react-router-dom';

import { ApplicationProvider } from './contexts/ApplicationContext';

import './App.css';
import { Home } from './components/Core/Home/Home';
import { Header } from './components/Core/Header/Header';
import { Footer } from './components/Core/Footer/Footer';
import { About } from './components/Core/About/About';
import { Contacts } from './components/Core/Contacts/Contacts';
import { Error } from './components/Core/Error/Error';
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';
import { Profile } from './components/Auth/Profile/Profile';
import { Logout } from './components/Auth/Logout/Logout';
import { Burgers } from './components/Burger/Burger/Burgers';
import { Pizzas } from './components/Pizza/Pizza/Pizzas';
import { BurgerCreate } from './components/Burger/Burger-Create/Burger-Create';
import { PizzaCreate } from './components/Pizza/Pizza-Create/Pizza-Create';
import { BurgerDelete } from './components/Burger/Burger-Delete/Burger-Delete';
import { PizzaDelete } from './components/Pizza/Pizza-Delete/Pizza-Delete';
import { BurgerDetails } from './components/Burger/Burger-Details/Burger-Details';
import { PizzaDetails } from './components/Pizza/Pizza-Details/Pizza-Details';
import { BurgerIngredients } from './components/Burger/Burger-Ingredient/Burger-Ingredients';
import { PizzaIngredients } from './components/Pizza/Pizza-Ingredient/Pizza-Ingredients';
import { BurgerIngredientDetails } from './components/Burger/Burger-Ingredient-Details/Burger-Ingredient-Details';
import { PizzaIngredientDetails } from './components/Pizza/Pizza-Ingredient-Details/Pizza-Ingredient-Details';
import { ProfileUpdate } from './components/Auth/Profile/ProfileUpdate';
import { RouteGuardUnAuthenitcated } from './components/Shared/RouteGuardUnAuthenticated';
import { RouteGuardAuthenitcated } from './components/Shared/RouteGuardAuthenticated';
import { BurgerProvider } from './contexts/BurgerContext';
import { PizzaProvider } from './contexts/PizzaContext';

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
          
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>

          <Route path="/*" element={<Error/>}/>
        </Routes>

        <Footer/>
      </ApplicationProvider>
  );
};

export default App;