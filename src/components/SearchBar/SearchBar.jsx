import React, { useState } from "react";
import "./searchBar.css";
import FilterModal from "../FilterModal/FilterModal";

const SearchBar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleExpand = () => {
    setShowModal(!showModal);
  };

  const handleContainerClick = (e) => {
    e.stopPropagation();
    setShowModal(!showModal);
  };

  return (
    <div className="search-bar-container" onClick={handleContainerClick}>
      <div className={`search-bar ${showModal ? "showModal" : ""}`}>
        <div className="complete-input">
          <div className="search-section">
            <input placeholder="Add location" />
          </div>
          <div className="search-section">
            <input type="number" placeholder="Add guests" />
          </div>
          <div className="search-section">
            <button className="search-button">
              <img src="lupita_rosa.svg" alt="Buscador" />
            </button>
          </div>
        </div>
      </div>
      {showModal && <FilterModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default SearchBar;
