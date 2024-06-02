import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logoHeader from "./Yellow and green Logo.png";
import "./header.css";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    fetchMeals(event.target.value);
  };

  const fetchMeals = async () => {
    try {
      const response = await fetch(`api/meals?title=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  const handleSearchButtonClick = () => {
    if (searchQuery.trim() !== "") {
      console.log("search");
      fetchMeals();
    }
  };

  useEffect(() => {
    // Only fetch meals if searchQuery is not empty
    if (searchQuery.trim() !== "") {
      fetchMeals();
    } else {
      // If searchQuery is empty, clear the searchResults
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleIconClick = () => {
    if (searchResults.length > 0) {
      history.push(`/meals/${searchResults[0].id}`);
    }
  };

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
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search meals..."
          />
          <button className="search-button" onClick={handleSearchButtonClick}>
            <FaSearch className="search-icon" onClick={handleIconClick} />
          </button>
          <ul>
            {searchResults.map((meal) => (
              <li key={meal.id}>
                <Link to={`/meals/${meal.id}`}>{meal.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
