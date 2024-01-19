import React, { useRef, useEffect, useState } from "react";
import "./filterModal.css";
import staysData from "../../../stays.json";

const FilterModal = ({ onClose }) => {
  const cerrarModal = useRef(null);
  const [locationFilter, setLocationFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(new Set());

  useEffect(() => {
    const filteredStays = staysData.filter(
      (stay) =>
        stay.city.toLowerCase().includes(locationFilter.toLowerCase()) &&
        stay.country.toLowerCase().includes(countryFilter.toLowerCase())
    );

    const uniqueLocations = new Set(filteredStays.map((stay) => stay.city));

    setFilteredLocations(uniqueLocations);
  }, [locationFilter, countryFilter]);

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
              <input
                type="text"
                placeholder="Add Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
            </div>
          </div>
          <div
            className="search-section-modal-country"
            onClick={handleInputClick}
          >
            <div className="input-wrapper">
              <div className="placeholder-top">Country</div>
              <input
                type="text"
                placeholder="Add Country"
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
              />
            </div>
          </div>
          <div className="search-section-modal">
            <button className="search-button-modal">
              <img src="/public/lupa.svg" alt="Buscador" />
              &nbsp; Search
            </button>
          </div>
        </div>
        <div className="filtered-locations">
          {Array.from(filteredLocations).map((location, index) => {
            const matchingStay = staysData.find(
              (stay) => stay.city === location
            );
            return (
              <div key={index}>
                <img
                  className="location-icon"
                  src="/public/location.svg"
                  alt="Location Icon"
                />
                {location}, {matchingStay && matchingStay.country}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
