import React, { useRef, useEffect, useState } from "react";
import "./filterModal.css";
import staysData from "../../../stays.json";

const FilterModal = ({ onClose, onSearch }) => {
  const cerrarModal = useRef(null);
  const [locationFilter, setLocationFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [guests, setGuests] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [filteredLocations, setFilteredLocations] = useState(new Set());
  const [inputClicked, setInputClicked] = useState(false);
  const [showGuestControls, setShowGuestControls] = useState(false);

  useEffect(() => {
    if (inputClicked) {
      const filteredStays = staysData.filter(
        (stay) =>
          stay.city.toLowerCase().includes(locationFilter.toLowerCase()) &&
          stay.country.toLowerCase().includes(countryFilter.toLowerCase())
      );

      const uniqueLocations = new Set(filteredStays.map((stay) => stay.city));

      setFilteredLocations(uniqueLocations);
    }
  }, [inputClicked, locationFilter, countryFilter]);

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

    if (e.target.name === "guests") {
      setShowGuestControls(true);
    } else {
      setShowGuestControls(false);
    }

    setInputClicked(true);
  };

  const handleSearch = () => {
    onSearch({ location: locationFilter, guests: adults + children });
    onClose();
  };

  const incrementAdults = (e) => {
    e.stopPropagation();
    setAdults(adults + 1);
  };

  const decrementAdults = (e) => {
    e.stopPropagation();
    if (adults > 1) {
      setAdults(adults - 1);
    }
  };

  const incrementChildren = (e) => {
    e.stopPropagation();
    setChildren(children + 1);
  };

  const decrementChildren = (e) => {
    e.stopPropagation();
    if (children > 0) {
      setChildren(children - 1);
    }
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
              <div className="placeholder-top">LOCATION</div>
              <input
                type="text"
                placeholder="Add Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
            </div>
          </div>
          <div
            className="search-section-modal-guests"
            onClick={handleInputClick}
          >
            <div className="input-wrapper">
              <div className="placeholder-top">GUESTS</div>
              <div className="guests-input">
                <input
                  type="text"
                  placeholder="Add Guests"
                  value={adults + children + " guests"}
                  onChange={(e) => setGuests(e.target.value)}
                  name="guests"
                />
              </div>
            </div>
          </div>
          <div className="search-section-modal">
            <button className="search-button-modal" onClick={handleSearch}>
              <img src="/public/lupa.svg" alt="Buscador" />
              &nbsp; Search
            </button>
          </div>
        </div>
        {inputClicked && (
          <div className="filtered-locations">
            {Array.from(filteredLocations).map((location, index) => {
              const cityCountry = staysData.find(
                (stay) => stay.city === location
              );
              return (
                <div key={index}>
                  <img
                    className="location-icon"
                    src="/public/location.svg"
                    alt=""
                  />
                  {location}, {cityCountry && cityCountry.country}
                </div>
              );
            })}
          </div>
        )}
        <div className="controls-box">
          <h3>Adults</h3>
          <p>Ages 13 or above</p>
          {showGuestControls && (
            <div className="guests-controls">
              <button
                className="guests-control-button-plus"
                onClick={(e) => decrementAdults(e)}
              >
                -
              </button>{" "}
              {adults + " "}
              <button
                className="guests-control-button-less"
                onClick={(e) => incrementAdults(e)}
              >
                +
              </button>
            </div>
          )}
          <h3>Children</h3>
          <p>Ages 2-12</p>
          {showGuestControls && (
            <div className="guests-controls">
              <button
                className="guests-control-button-plus"
                onClick={(e) => decrementChildren(e)}
              >
                -
              </button>{" "}
              {children + " "}
              <button
                className="guests-control-button-less"
                onClick={(e) => incrementChildren(e)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
