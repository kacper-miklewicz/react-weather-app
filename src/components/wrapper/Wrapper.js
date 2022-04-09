import "./Wrapper.css";

import Search from "../search/Search";
import Weather from "../weather/Weather";
import { useState } from "react";

export default function Wrapper() {
  const [searchCity, setSearchCity] = useState("gdansk");
  return (
    <div className="wrapper">
      <h1>myWeather</h1>
      <Search setSearchCity={setSearchCity} />
      <Weather searchCity={searchCity} />
    </div>
  );
}
