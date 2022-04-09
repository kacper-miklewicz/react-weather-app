import "./Search.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Search({ searchCity, setSearchCity }) {
  const [city, setCity] = useState("");

  const handleClick = e => {
    setSearchCity(city);
  };

  return (
    <div className="search">
      <label htmlFor="search">Enter city name</label>
      <div>
        <input
          type="text"
          id="search"
          onChange={e => setCity(e.target.value)}
          value={city}
        />
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
