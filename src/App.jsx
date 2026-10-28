import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function Landing() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="app">
      <div className="background-image">
        <div className="content">
          <div className="plant_header_div">
            <h1 className="plant_header">Welcome To Paradise Nursery</h1>
          </div>
          <p className="plant_desc">
            Where Every Plant Finds a Home
          </p>
          <div className="div_get_started">
            <button className="button_get_started" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
