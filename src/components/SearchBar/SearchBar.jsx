import React, { useState } from "react";
import "./searchBar.css";
import FilterModal from "../FilterModal/FilterModal";

const SearchBar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleExpand = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      className={`search-bar ${showModal ? "showModal" : ""}`}
      onClick={handleExpand}
    >
      <div className="complete-input">
        <div className="search-section">
          <input type="text" placeholder="Add location" />
        </div>
        <div className="search-section">
          <input type="number" placeholder="Add guests" />
        </div>
        <div className="search-section">
          <button className="search-button">
            <img src="/public/lupita_rosa.svg" alt="Buscador" />
          </button>
        </div>
      </div>
      {showModal && <FilterModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default SearchBar;
