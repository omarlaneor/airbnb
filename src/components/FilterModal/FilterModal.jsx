import React from "react";
import "./filterModal.css";

const FilterModal = ({ onClose }) => {
  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        <div className="complete-input-modal">
          <div
            className="search-section-modal-location"
            onClick={handleInputClick}
          >
            <div className="input-wrapper">
              <div className="placeholder-top">Location</div>
              <input type="text" placeholder="Add Location" />
            </div>
          </div>
          <div
            className="search-section-modal-guests"
            onClick={handleInputClick}
          >
            <div className="input-wrapper">
              <div className="placeholder-top">Guests</div>
              <input type="number" placeholder="Add Guests" />
            </div>
          </div>
          <div className="search-section-modal">
            <button className="search-button-modal">
              <img src="/public/lupa.svg" alt="Buscador" />
              &nbsp; Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
