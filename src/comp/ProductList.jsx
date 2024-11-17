import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ selectedBrand, setSelectedBrand }) => {
  const [products, setProducts] = useState([]); // Store products for the selected brand
  const navigate = useNavigate(); // Navigation hook

  // Handle brand selection and fetch products from corresponding JSON file
  useEffect(() => {
    if (selectedBrand) {
      fetch(`/data/${selectedBrand}.json`) // Load products for the selected brand
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching products:', error));
    }
  }, [selectedBrand]); // Re-fetch products when selectedBrand changes

  // Handle product click, navigate to ProductDetail with product details in the state
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, {
      state: { product }, // Pass the selected product via state
    });
  };

  return (
    <div className="product-list">
      <h2>Select a Brand</h2>

      {/* Inline styles for 4 brand images in a single row */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
        <div className="brand-item" onClick={() => setSelectedBrand('rolex')} style={{ textAlign: 'center', cursor: 'pointer' }}>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Rolex_logo.svg/390px-Rolex_logo.svg.png" alt="Rolex" className="brand-image" />
          <h3>ROLEX</h3>
        </div>

        <div className="brand-item" onClick={() => setSelectedBrand('casio')} style={{ textAlign: 'center', cursor: 'pointer' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Casio_logo.svg/768px-Casio_logo.svg.png" alt="Casio" className="brand-image" />
          <h3>CASIO</h3>
        </div>

        <div className="brand-item" onClick={() => setSelectedBrand('omega')} style={{ textAlign: 'center', cursor: 'pointer' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Omega_Logo.svg/477px-Omega_Logo.svg.png" alt="Omega" className="brand-image" />
          <h3>OMEGA</h3>
        </div>

        <div className="brand-item" onClick={() => setSelectedBrand('fossil')} style={{ textAlign: 'center', cursor: 'pointer' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Fossil_Group.png/330px-Fossil_Group.png" alt="Fossil" className="brand-image" />
          <h3>FOSSIL</h3>
        </div>
      </div>

      {selectedBrand && <h2>{selectedBrand.toUpperCase()} Watches</h2>}

      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id} onClick={() => handleProductClick(product)}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.brand}</p>
              <p>₹{product.price}</p>
              <p>{product.description}</p>
            </li>
          ))
        ) : (
          <p>No products available for this brand</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
