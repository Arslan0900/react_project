import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import CheckOut from './Components/CheckOut';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/CheckOut' element={<CheckOut/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
