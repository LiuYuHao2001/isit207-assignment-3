import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navigation">
      <h2>
        <Link to="/">Pet Heaven</Link>
      </h2>
      <ul>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        {!isLoggedIn && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={onLogout} className="logout-button">
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
