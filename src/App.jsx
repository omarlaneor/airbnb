import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import StaysList from "./components/StaysList/StaysList";
import "./App.css";

function App() {
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    guests: "",
  });
  const [filteredStays, setFilteredStays] = useState([]);

  const handleSearch = (filters) => {
    setSearchFilters(filters);

    const filteredStays = staysData.filter(
      (stay) =>
        stay.city.toLowerCase().includes(filters.location.toLowerCase()) &&
        stay.guests.toString().includes(filters.guests.toString())
    );

    setFilteredStays(filteredStays);
  };

  return (
    <div className="general">
      <div className="app">
        <div className="logo-container">
          <img src="../public/logo.png" alt="Logo img" />
        </div>
        <div className="search-container">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      <div className="app2">
        <h2 className="subtitle">Stays in Finland</h2>
        <StaysList stays={filteredStays} />
      </div>
      <div className="footer">
        <p>---- Created by Milansu - Funval 2024 ----</p>
      </div>
    </div>
  );
}

export default App;
