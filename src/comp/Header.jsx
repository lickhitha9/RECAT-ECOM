import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

const Header = ({ cartCount }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header">
      <h1>Dashboard</h1>
      <div className="profile" onClick={toggleDropdown} role="button" aria-haspopup="true" aria-expanded={isDropdownOpen}>
        
        {isDropdownOpen && (
          <div className="dropdown">
            <ul>
              <li>Profile Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
      <Link to="/cart" className="cart-icon">
        <img src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png" alt="Cart" />
        <span className="cart-count">{cartCount}</span>
      </Link>
    </div>
  );
};

export default Header;
