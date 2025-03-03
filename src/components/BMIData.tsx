import { convertTime, getData } from "./BMICalc";

const LineChartData = () => {
  const data = getData();
  const labelData = data.map((item: any) => convertTime(item.date));
  const bmiData = data.map((item: any) => item.bmi);

  return {
    labels: labelData,
    datasets: [
      {
        label: "BMI",
        data: bmiData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
};

export default LineChartData;
