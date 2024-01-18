import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import StaysList from "./components/StaysList/StaysList";
import "./App.css";

function App() {
  return (
    <div className="general">
      <div className="app">
        <div className="logo-container">
          <img src="../public/logo.png" alt="Logo img" />
        </div>
        <div className="search-container">
          <SearchBar />
        </div>
      </div>
      <div className="app2">
        <h2 className="subtitle">Stays in Finland</h2>
        <StaysList />
      </div>
      <div className="footer">
        <p>---- Created by Milansu - Funval 2024 ----</p>
      </div>
    </div>
  );
}

export default App;
