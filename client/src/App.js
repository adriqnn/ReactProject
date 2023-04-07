import { Route, Routes } from 'react-router-dom';

import { ApplicationProvider } from './contexts/ApplicationContext';

import { Home } from './components/Core/Home/Home';
import { Header } from './components/Core/Header/Header';
import { Footer } from './components/Core/Footer/Footer';

import './App.css';
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

function App() {
  return (
      <ApplicationProvider>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/auth/login' element={<Login/>}/>
          <Route path='/auth/register' element={<Register/>}/>
          <Route path='/auth/profile' element={<Profile/>}/>
          <Route path='/auth/logout' element={<Logout/>}/>

          <Route path='/burgers' element={<Burgers/>}/>
          <Route path='/burgers/create' element={<BurgerCreate/>}/>
          <Route path='/burgers/item/delete/:burgerId' element={<BurgerDelete/>}/>
          {/* <Route path='/burgers/item/:burgerId' element={<BurgerDetails/>}/> */}

          <Route path='/pizzas' element={<Pizzas/>}/>
          <Route path='/pizzas/create' element={<PizzaCreate/>}/> 
          <Route path='/pizzas/item/delete/:pizzaId' element={<PizzaDelete/>}/> 
          
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>

          <Route path="/*" element={<Error/>}/>
        </Routes>

        <Footer/>
      </ApplicationProvider>

  );
};

export default App;
