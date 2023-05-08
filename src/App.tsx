import React, { useCallback } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signin from './components/Signin';
import CheckOut from './components/CheckOut';
import Data from './components/Data';
import { ProductItem } from './components/Data';
import { useState } from "react";

export interface CartItm extends ProductItem {
  quantity: number;
}
const App = () => {
  const [cartItems, setCartItems] = useState<CartItm[]>([]);
  const addToCart = useCallback( (product: CartItm) => {
    const ProductExit = cartItems.find((item: CartItm) => (item.id === product.id));
    if (ProductExit) {
      setCartItems(
        cartItems.map((item: CartItm) =>
          item.id === product.id
            ? { ...ProductExit, quantity: ProductExit.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  },[cartItems])
  const handleCartClear =():void =>{
    setCartItems([])
  };

  const { ProductItems } = Data;
  return (
    <>
      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path='/' element={<Home productItems={ProductItems} addToCart={addToCart} />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/CheckOut' element={<CheckOut cartItems={cartItems} handleCartClear={handleCartClear} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
