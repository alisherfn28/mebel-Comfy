import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function MainLayout({ children }) {
  return (
    <div>
      <header>
        <div className="container header_container">
          <div className="logo">
            <h3>c</h3>
          </div>
          <div className="links">
            <Link className="nav-item" to="/">
              Home
            </Link>
            <Link className="nav-item" to="/products">
              Products
            </Link>
          </div>
          <div className="title">
            <h4>karzinka</h4>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}

export default MainLayout;
