import { useEffect, useState } from "react";
import "./Weather.css";

export default function Weather({ searchCity }) {
  const [city, setCity] = useState("Gdańsk");
  const [degrees, setDegrees] = useState(21);
  const [description, setDescription] = useState("Cloudy");
  const [humidity, setHumidity] = useState(70);
  const [windSpeed, setWindSpeed] = useState(100);
  const [data, setData] = useState(null);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [error, setError] = useState(null);

  const apiKey = "561bdb2d3540aa62d31dc46cf5c2eefe";

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&appid=${apiKey}`
    )
      .then(res => res.json())
      .then(json => {
        if (!json.length) return setError("Invalid city name!");
        else setData(json);
        setError(null);
        setLat(json[0].lat);
        setLon(json[0].lon);
      });

    if (lat && lon) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      )
        .then(res => res.json())
        .then(json => {
          console.log(json);
          setCity(json.name);
          setDegrees(json.main.temp);
          setDescription(json.weather[0].main);
          setHumidity(json.main.humidity);
          setWindSpeed(json.wind.speed);
        });
    }
  }, [searchCity, lat, lon]);

  return (
    <div className="weather-wrapper">
      {error && <p className="error">{error}</p>}
      {data && (
        <div className="weather">
          <h2>{city}</h2>
          <div className="temperature">
            <p className="degrees">{degrees}&deg;C</p>
            <p>Icon</p>
          </div>
          <div className="about">
            <p className="description">{description}</p>
            <p className="humidity">Humidity: {humidity}%</p>
            <p className="wind">Wind speed: {windSpeed} km/h</p>
          </div>
        </div>
      )}
    </div>
  );
}
