import React from 'react';
import Products from './components/Products'
import Cart from './components/Cart'
import { Routes, Route } from 'react-router-dom'
import './App.css';


const App = (props) => {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
