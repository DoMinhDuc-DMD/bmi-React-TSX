import { useState } from "react";

const minHeight = 120;
const minWeight = 20;
const maxHeight = 230;
const maxWeight = 200;

const Calc = () => {
  const [weight, setWeight] = useState<number>(minWeight);
  const [height, setHeight] = useState<number>(minHeight);

  const onHeightChange = () => {
    setHeight(height);
    console.log();
  };

  const onWeightChange = () => {
    setWeight(weight);
    console.log();
  };

  return (
    <div>
      <div>
        <label htmlFor="height">Height: </label>
        <input
          value={height}
          max={maxHeight}
          min={minHeight}
          onChange={onHeightChange}
        />{" "}
        cm
      </div>
      <div>
        <label htmlFor="weight">Weight: </label>
        <input
          value={weight}
          max={maxWeight}
          min={minWeight}
          onChange={onWeightChange}
        />{" "}
        kg
      </div>
    </div>
  );
};

export default Calc;
