import { ChangeEvent, useState } from "react";
import BMIInput from "./BMIInput";
import { convertTime, getData } from "./SupportFunc";

const Status = {
  weight: "",
  height: "",
  date: new Date().toISOString(),
  bmi: 0,
  msg: "",
};

const BMICalc = () => {
  const [status, setStatus] = useState(Status);

  const handleClick = () => {
    const heightInMeters = parseFloat(status.height) / 100;
    const bmiValue = (
      parseFloat(status.weight) /
      (heightInMeters * heightInMeters)
    ).toFixed(2);
    const date = convertTime(status.date);

    const bmiCategories = [
      { min: 0, max: 15, text: "Very severely underweight" },
      { min: 15, max: 16, text: "Severely underweight" },
      { min: 16, max: 18.5, text: "Underweight" },
      { min: 18.5, max: 25, text: "Normal" },
      { min: 25, max: 30, text: "Overweight" },
      { min: 30, max: 35, text: "Moderately obese" },
      { min: 35, max: 40, text: "Severely obese" },
      { min: 40, max: Infinity, text: "Very severely obese" },
    ];

    const category = bmiCategories.find(
      (item) =>
        parseFloat(bmiValue) >= item.min && parseFloat(bmiValue) <= item.max
    );
    let msg = `Your BMI is ${bmiValue} on ${date}. You are ${category?.text}.`;
    alert(msg);

    const newStatus = {
      ...status,
      bmi: parseFloat(bmiValue),
      date: date,
      msg: msg,
    };

    const history = getData();

    if (!Array.isArray(history)) {
      localStorage.setItem("BMI-Status", JSON.stringify([newStatus]));
    } else {
      const existData = history.findIndex((item: any) => item.date === date);
      if (existData !== -1) {
        history[existData] = newStatus;
      } else {
        history.push(newStatus);
      }
      history.sort((a: any, b: any) => Date.parse(a.date) - Date.parse(b.date));
      localStorage.setItem("BMI-Status", JSON.stringify(history));
    }
    setStatus(Status);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <BMIInput
      handleChange={handleChange}
      handleClick={handleClick}
      height={status.height}
      weight={status.weight}
    />
  );
};

export default BMICalc;
