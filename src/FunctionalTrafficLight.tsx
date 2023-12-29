import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [currentLight, setCurrentLight] = useState(1);
  const [lightValues, setLightValues] = useState({
    red: "red",
    green: "black",
    yellow: "black",
  });

  const trafficSignal = () => {
    if (currentLight === 0) {
      lightValues.red = "red";
      lightValues.green = "black";
      lightValues.yellow = "black";
    }
    if (currentLight === 1) {
      lightValues.red = "black";
      lightValues.green = "green";
      lightValues.yellow = "black";
    }
    if (currentLight === 2) {
      lightValues.red = "black";
      lightValues.green = "black";
      lightValues.yellow = "yellow";
    }
    return lightValues;
  };
  const lightChange = () => {
    if (currentLight < 2) {
      setCurrentLight(currentLight + 1);
    } else {
      setCurrentLight(0);
    }
    setLightValues(trafficSignal());
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${lightValues.red}`}></div>
        <div className={`circle ${lightValues.yellow}`}></div>
        <div className={`circle ${lightValues.green}`}></div>
      </div>
      <button
        className="next-state-button"
        onClick={() => {
          lightChange();
        }}
      >
        Next State
      </button>
    </div>
  );
};
