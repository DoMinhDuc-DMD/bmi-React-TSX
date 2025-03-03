import { ChangeEvent } from "react";

type BMIInputProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  height: string;
  weight: string;
};

const BMIInput = ({
  handleChange,
  handleClick,
  height,
  weight,
}: BMIInputProps) => {
  return (
    <div className="formInput">
      <div className="inputs">
        <div className="weightInput">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            id="weight"
            type="number"
            placeholder="50"
            max="150"
            min="30"
            value={weight}
            onChange={handleChange}
          />
        </div>
        <div className="heightInput">
          <label htmlFor="height">Height (cm)</label>
          <input
            id="height"
            type="number"
            placeholder="150"
            max="200"
            min="100"
            value={height}
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        id="bmi-cal"
        className="bmi-btn"
        onClick={handleClick}
        disabled={!weight || !height}
      >
        Calculate
      </button>
    </div>
  );
};

export default BMIInput;
