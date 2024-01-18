import React, { useState } from "react";
import "./searchBar.css";

const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`search-bar ${expanded ? "expanded" : ""}`}
      onClick={handleExpand}
    >
      <div className="complete-input">
        <div className="search-section">
          <input type="text" placeholder="Filter locations" />
        </div>
        <div className="search-section">
          <input type="number" placeholder="Filter guests" />
        </div>
        <div className="search-section">
          <button className="search-button">
            <img src="/public/lupita_rosa.svg" alt="Buscador" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
