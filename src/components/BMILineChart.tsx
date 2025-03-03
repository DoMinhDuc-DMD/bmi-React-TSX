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
import BMIData from "./BMIData";

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
  return <Line options={options} data={BMIData(selectedYear, selectedMonth)} />;
};
