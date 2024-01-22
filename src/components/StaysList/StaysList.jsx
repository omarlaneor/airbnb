import React, { useEffect, useState } from "react";
import "./staysList.css";

const StaysList = () => {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    fetch("stays.json")
      .then((response) => response.json())
      .then((data) => setStays(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <ul className="stays-list">
      {stays.map((stay, index) => (
        <li key={index} className="stay-card">
          <img src={stay.photo} alt={stay.title} />
          <div className="info-section">
            <p className="type">{stay.type}</p>
            <p className="rating">
              <img src="/public/star.svg" alt="" />
              {stay.rating}
            </p>
          </div>
          <p className="title">{stay.title}</p>
        </li>
      ))}
    </ul>
  );
};
export default StaysList;
