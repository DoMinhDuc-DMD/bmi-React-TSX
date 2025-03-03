import { convertTime, getData } from "./BMICalc";

const BMIData = (selectedYear: string, selectedMonth: string) => {
  const data = getData();

  const filteredData = data.filter((item: any) => {
    const year = new Date(item.date);
    return selectedYear && year.getFullYear() === parseInt(selectedYear);
  });

  const labelData = filteredData.map((item: any) =>
    convertTime(new Date(item.date).toLocaleString()).slice(0, 5)
  );
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

export default BMIData;
