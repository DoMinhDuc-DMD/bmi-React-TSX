import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import BMIData from "../BMIData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Types = {
  selectedYear: string;
  selectedMonth: string;
};

export const BMILineChart = ({ selectedYear, selectedMonth }: Types) => {
  return (
    <div className="w-[55%] text-center">
      <h1 className="text-xl font-medium">BMI Chart</h1>
      <Line className="bg-gray-200 rounded-sm p-2" data={BMIData(selectedYear, selectedMonth)} />
    </div>
  );
};
