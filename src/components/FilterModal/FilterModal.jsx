import React, { useRef, useEffect } from "react";
import "./filterModal.css";

const FilterModal = ({ onClose }) => {
  const cerrarModal = useRef(null);

  useEffect(() => {
    const teclaEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const clicOutside = (event) => {
      if (cerrarModal.current && !cerrarModal.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("keydown", teclaEsc);
    document.addEventListener("click", clicOutside);

    return () => {
      document.removeEventListener("keydown", teclaEsc);
      document.removeEventListener("click", clicOutside);
    };
  }, [onClose]);

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="filter-modal" ref={cerrarModal}>
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
