import Weather from "./components/Weather";
import WeatherPages from "./components/WeatherPages";
import { Route,Routes } from "react-router-dom";
import Start from "./components/Start";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/start" element={<Weather/>}/>
        <Route path="/:id" element={<WeatherPages/>}/>
      </Routes>
    </div>
  );
}
export default App;