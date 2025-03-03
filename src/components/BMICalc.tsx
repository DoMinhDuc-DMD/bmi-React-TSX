import { ChangeEvent, useState } from "react";
import BMIInput from "./BMIInput";

const Status = {
  height: "",
  weight: "",
  date: new Date().toISOString().slice(0, 16),
  bmi: 0,
};

function getStatus() {
  const data = localStorage.getItem("BMI-Status");
  return data ? JSON.parse(data) : [];
}

function convertTime(dateString: string | number | Date) {
  let date = new Date(dateString);

  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();

  let hour = String(date.getHours() + 7).padStart(2, "0");
  let minute = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year}, ${hour}:${minute}`;
}

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
      { min: 18.5, max: 25, text: "Normal (healthy weight)" },
      { min: 25, max: 30, text: "Overweight" },
      { min: 30, max: 35, text: "Moderately obese" },
      { min: 35, max: 40, text: "Severely obese" },
      { min: 40, max: Infinity, text: "Very severely obese" },
    ];

    const category = bmiCategories.find(
      (item) =>
        parseFloat(bmiValue) >= item.min && parseFloat(bmiValue) <= item.max
    );
    let msg = `Today is ${date}. Your BMI is ${bmiValue}. You are ${category?.text}`;
    alert(msg);

    const newStatus = {
      ...status,
      bmi: parseFloat(bmiValue),
    };

    const history = getStatus();
    console.log(newStatus);

    if (!Array.isArray(history)) {
      localStorage.setItem("BMI-Status", JSON.stringify([newStatus]));
    } else {
      history.push(newStatus);
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
    <>
      <BMIInput
        handleChange={handleChange}
        handleClick={handleClick}
        height={status.height}
        weight={status.weight}
      />
    </>
  );
};

export default BMICalc;
