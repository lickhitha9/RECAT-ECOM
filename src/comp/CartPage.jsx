import React from 'react';
import './CartPage.css'; // Ensure the CSS file is imported correctly

const CartPage = ({ cart, onRemoveItem, onUpdateQuantity }) => {
  console.log('CartPage is rendered'); // Check if this is printed in the console
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <button
                onClick={() => onRemoveItem(index)}
                className="remove-button"
              >
                Remove
              </button>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <strong>{item.name}</strong> - ₹{item.price} x
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => onUpdateQuantity(index, e.target.value)}
                  className="quantity-input"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
      
      {/* Dummy buttons for Checkout and Proceed */}
      <div className="cart-buttons">
        <button className="checkout-button">Checkout</button>
        <button className="proceed-button">Proceed</button>
      </div>
    </div>
  );
};

export default CartPage;
