import { useState, useEffect } from "react";
import "./App.css";
import data from "./data/iller.json";
import axios from "axios";
function App() {
  const [city, setCity] = useState("İstanbul");

  useEffect(() => {
    effect;
    return () => {
      cleanup;
    };
  }, [input]);

  return (
    <div className="App">
      <div className="space-y-10">
        <div>
          <select
            className="text-center py-2 border "
            name="il"
            id="il"
            onChange={(e) => {
              setCity(
                e.target.value[0].toUpperCase() +
                  e.target.value.toLocaleLowerCase("tr").substring(1)
              );
            }}
          >
            {data.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="text-center">{city} hava durumu :</div>
      </div>
    </div>
  );
}

export default App;
