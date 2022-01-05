import { useContext } from "react";
import "./App.css";
import data from "./data/iller.json";
import { CityProvider, CityContext } from "./context/citycontext";

function App() {
  const { setCity, weather } = useContext(CityContext);
  return (
    <CityProvider>
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

          <div className="text-center">{weather}</div>
        </div>
      </div>
    </CityProvider>
  );
}

export default App;
