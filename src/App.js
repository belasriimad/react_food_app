import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import {ShoppingContext} from './components/context/ShoppingContext';
import { foods, categories } from './data/food.js'
import Swal from 'sweetalert2';
import Cart from "./components/Cart";


function App() {
  const [cartItems,setCartItems] = useState([]);

  const addToCart = (item) => {
    let productItem = cartItems.find(product => product.id === item.id);
    if(productItem){
      productItem.quantity += 1;
      setCartItems([...cartItems]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been updated',
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      item.quantity = 1;
      setCartItems([item,...cartItems]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been saved',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  const incrementQ = (item) => {
    let productItem = cartItems.find(product => product.id === item.id);
    if(productItem){
      productItem.quantity += 1;
      setCartItems([...cartItems]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been updated',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  const decrementQ = (item) => {
    let productItem = cartItems.find(product => product.id === item.id);
    if(productItem){
      productItem.quantity -= 1;
      if(productItem.quantity === 0){
        setCartItems(cartItems.filter(product => product.id !== item.id));
      }else{
        setCartItems([...cartItems]);
      }
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been updated',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(product => product.id !== item.id));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your item has been removed',
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <ShoppingContext.Provider value={
        {
          foods, categories, addToCart, incrementQ,
          decrementQ, cartItems, removeFromCart
        }
      }
    >
      <div className="container">
        <BrowserRouter>
          <Navbar cartItems={cartItems}/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ShoppingContext.Provider>
  );
}

export default App;
