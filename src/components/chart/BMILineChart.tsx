import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import BMIData from "../BMIData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Types = {
  selectedYear: string;
  selectedMonth: string;
};

export const BMILineChart = ({ selectedYear, selectedMonth }: Types) => {
  const options = {};
  return (
    <div className="formChart w-[50%] text-center">
      <h1 className="text-xl font-medium">BMI Chart</h1>
      <Line
        className="bg-gray-200 rounded-sm p-2"
        options={options}
        data={BMIData(selectedYear, selectedMonth)}
      />
    </div>
  );
};
