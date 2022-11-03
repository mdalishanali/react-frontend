import { useState, useEffect } from "react";
import "./App.css";
import ReactGA from "react-ga";
const TRACKING_ID = "G-7PK2R2M5C8";
ReactGA.initialize(TRACKING_ID);

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  const handleInc = () => {
    ReactGA.event({
      category: "counter",
      action: "test action",
      label: "test lable",
      value: 5,
    });
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>Count {count}</h1>
      <button onClick={handleInc}>Inc</button>
    </div>
  );
}

export default App;
