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
    <div className="formInput text-center">
      <div className="inputs">
        <div className="weightInput w-[50%] float-left py-4">
          <label htmlFor="weight">Weight (kg)</label>
          <br />
          <input
            id="weight"
            className="w-[80%] p-2 rounded border"
            type="number"
            placeholder="50"
            max="150"
            min="30"
            value={weight}
            onChange={handleChange}
          />
        </div>
        <div className="heightInput w-[50%] float-left py-4">
          <label htmlFor="height">Height (cm)</label>
          <br />
          <input
            id="height"
            className="w-[80%] p-2 rounded border"
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
        className="bmi-btn py-2 px-7 bg-blue-400 rounded-2xl hover:bg-blue-700 hover:text-white hover:cursor-pointer disabled:bg-blue-400 disabled:text-black disabled:cursor-no-drop"
        onClick={handleClick}
        disabled={!weight || !height}
      >
        Calculate
      </button>
    </div>
  );
};

export default BMIInput;
