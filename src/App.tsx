import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signin from './components/Signin';
import CheckOut from './components/CheckOut';
import Data from './components/Data';
import { ProductItem } from './components/Data';
import { useState } from "react";

export interface ProductItem2 extends ProductItem {
  quantity: number;
}
const App = () => {
  const [cartItems, setCartItems] = useState<ProductItem2[]>([]);
  const addToCart = (product: ProductItem) => {
    // console.log(`product${product}`)
    const ProductExit = cartItems.find((item: ProductItem) => (item.id === product.id));
    console.log(ProductExit)
    if (ProductExit) {
      setCartItems(
        cartItems.map((item: ProductItem2) =>
          item.id === product.id
            ? { ...ProductExit, quantity: ProductExit.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleCartClear =():void =>{
    setCartItems([])
  };

  const { ProductItems } = Data;
  return (
    <>
      {/* {document.log(ProductItems)} */}
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
