import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ addToCart }) => {
  const location = useLocation(); // Get location state passed from ProductList
  const { product } = location.state || {}; // Extract product from location.state

  // If no product is passed, show an error message
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <div className="detail-container">
        <img className="product-image" src={product.image} alt={product.name} />
        <div className="product-info">
          <h3>{product.brand}</h3>
          <p>{product.description}</p>
          <p><strong>Price: ₹{product.price}</strong></p>
          <button className="add-to-cart" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
