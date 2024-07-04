import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h3>BorderPass</h3>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>
    </header>
  );
};

export default Header;
