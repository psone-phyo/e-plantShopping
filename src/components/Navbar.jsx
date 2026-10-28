import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <button className="navbar-brand" onClick={() => navigate('/')}>
        🌿 Paradise Nursery
      </button>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Plants</Link>
        <button className="cart-icon-wrapper" onClick={() => navigate('/cart')}>
          <span role="img" aria-label="Shopping cart">🛒</span>
          <span className="cart-quantity">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
