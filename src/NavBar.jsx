import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

function NavBar() {
  const cartitems = useSelector(globalState => globalState.cart);
  const cartCount = cartitems.reduce((total, item) => total + item.quantity, 0);

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to /search?q=searchTerm
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">FOODIE HUB</div>

      <ul className="nav-links">
        <li><Link to="/home">🏡Home</Link></li>

        {/* Dropdown for Categories */}
        <li className="dropdown">
          <span>🍽️ Categories ▼</span>
          <ul className="dropdown-menu">
            <li><Link to="/veg">🥕 Veg</Link></li>
            <li><Link to="/nonVeg">🍗 NonVeg</Link></li>
            <li><Link to="/fruits">🍒 Fruits</Link></li>
            <li><Link to="/chocolates">🍫 Chocolates</Link></li>
            <li><Link to="/milkitems">🥛 MilkItems</Link></li>
            <li><Link to="/sweets">🍭 Sweets</Link></li>
          </ul>
        </li>

        <li><Link to="/aboutUs">📖 About Us</Link></li>
        <li><Link to="/ContactUs">📞 ContactUs</Link></li>
        <li><Link to="/cart">🛒 Cart{cartCount}</Link></li>
        <li><Link to="/orders">🧾 Orders</Link></li>
        <li><Link to="/registerform">📟 RegisterForm</Link></li>
        <li><Link to="/login">🔑Login</Link></li>
      </ul>

      {/* Search form */}
      <form className="search-form" onSubmit={handleSearchSubmit} style={{ marginLeft: 'auto' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
          aria-label="Search"
        />
        <button type="submit" className="search-button">🔍</button>
      </form>
    </nav>
  );
}

export default NavBar;
