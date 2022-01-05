import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    let data = localStorage.getItem(city);
    let exp = localStorage.getItem(`exp-${city}`);
    if (data && exp > Date.now()) {
      setWeather(data);
    } else {
      let url = `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${7}&appid=eeaf063d086b4c9222dcaa0155c5fd8b`;
      const d = axios.get(url);
      localStorage.setItem(city, d);
      localStorage.setItem(`exp-${city}`, Date.now() + 24 * 60 * 60 * 1000);
      setWeather(d);
    }
  }, [city]);

  const values = {
    city: city,
    setCity: setCity,
    weather: weather,
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};
