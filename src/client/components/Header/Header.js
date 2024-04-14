import React from "react";
import { Link } from "react-router-dom";
import logoHeader from "./Yellow and green Logo.png";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="description-header">
        <img className="logo-header" src={logoHeader} alt="Main-logo" />
        <h4>Mama G Meal Sharing!</h4>
      </div>
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/meals" className="nav-link">
          Meals
        </Link>
        <Link to="/addMeal" className="nav-link">
          Add Meal
        </Link>

        <Link to="/blog" className="nav-link">
          Blog
        </Link>
      </nav>
    </header>
  );
}
