import { ChangeEvent, useState } from "react";
import Calc from "./components/BMICalc";

const Status = {
  height: "",
  weight: "",
};

function App() {
  const [status, setStatus] = useState(Status);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = () => {
    const heightInMeters = parseFloat(status.height) / 100;
    const bmiValue = (
      parseFloat(status.weight) /
      (heightInMeters * heightInMeters)
    ).toFixed(2);

    switch (true) {
      case parseFloat(bmiValue) < 15:
        alert(`Your BMI is ${bmiValue}. You are Very severely underweight`);
        break;
      case parseFloat(bmiValue) >= 15 && parseFloat(bmiValue) < 16:
        alert(`Your BMI is ${bmiValue}. You are Severely underweight`);
        break;
      case parseFloat(bmiValue) >= 16 && parseFloat(bmiValue) < 18.5:
        alert(`Your BMI is ${bmiValue}. You are Underweight`);
        break;
      case parseFloat(bmiValue) >= 18.5 && parseFloat(bmiValue) < 25:
        alert(`Your BMI is ${bmiValue}. You are Normal (healthy weight)`);
        break;
      case parseFloat(bmiValue) >= 25 && parseFloat(bmiValue) < 30:
        alert(`Your BMI is ${bmiValue}. You are Overweight`);
        break;
      case parseFloat(bmiValue) >= 30 && parseFloat(bmiValue) < 35:
        alert(`Your BMI is ${bmiValue}. You are Moderately obese`);
        break;
      case parseFloat(bmiValue) >= 35 && parseFloat(bmiValue) < 40:
        alert(`Your BMI is ${bmiValue}. You are Severely obese`);
        break;
      case parseFloat(bmiValue) >= 40:
        alert(`Your BMI is ${bmiValue}. You are Very severely obese`);
    }

    setStatus(Status);
  };

  return (
    <Calc />
    // <div className="form">
    //   <h1>BMI Calculator</h1>
    //   <div className="weight-input">
    //     <label htmlFor="height">Weight: </label>
    //     <input
    //       id="weight"
    //       type="number"
    //       min="30"
    //       max="300"
    //       placeholder="50"
    //       value={status.weight}
    //       onChange={handleChange}
    //     />{" "}
    //     kg
    //   </div>
    //   <div className="height-input">
    //     <label htmlFor="height">Height: </label>
    //     <input
    //       id="height"
    //       type="number"
    //       min="100"
    //       max="200"
    //       placeholder="150"
    //       value={status.height}
    //       onChange={handleChange}
    //     />{" "}
    //     cm
    //   </div>
    //   <button
    //     id="bmi-cal"
    //     className="bmi-btn"
    //     onClick={handleClick}
    //     disabled={status.weight === "" || status.height === ""}
    //   >
    //     Calculate
    //   </button>
    // </div>
  );
}

export default App;
