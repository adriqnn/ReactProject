import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import { Home } from './components/Core/Home/Home';
import { Header } from './components/Core/Header/Header';
import { Footer } from './components/Core/Footer/Footer';

import './App.css';
import { About } from './components/Core/About/About';
import { Contacts } from './components/Core/Contacts/Contacts';
import { Error } from './components/Core/Error/Error';

function App() {
  return (
      <AuthProvider>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>

          <Route path="/*" element={<Error/>}/>
        </Routes>

        <Footer/>
      </AuthProvider>

  );
};

export default App;
