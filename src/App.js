import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './comp/Sidebar';
import Header from './comp/Header';
import ProductList from './comp/ProductList';
import ProductDetail from './comp/ProductDetail';
import CartPage from './comp/CartPage';

const App = () => {
  const [cart, setCart] = useState([]); // Store cart items
  const [selectedBrand, setSelectedBrand] = useState(null); // Track selected brand

  // Add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  // Remove item from the cart
  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
  };

  // Update quantity of items in the cart
  const handleUpdateQuantity = (index, quantity) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: Number(quantity) } : item
    );
    setCart(updatedCart);
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Header cartCount={cart.length} />
          <Routes>
            <Route
              path="/"
              element={
                <ProductList 
                  selectedBrand={selectedBrand} 
                  setSelectedBrand={setSelectedBrand} 
                />
              }
            />
            <Route
              path="/product/:id"
              element={<ProductDetail addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cart={cart}
                  onRemoveItem={handleRemoveItem}
                  onUpdateQuantity={handleUpdateQuantity}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
