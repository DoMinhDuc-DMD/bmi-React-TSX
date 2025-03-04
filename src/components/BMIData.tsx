import { getData } from "./SupportFunc";

const BMIData = (selectedYear: string, selectedMonth: string) => {
  const data = getData();

  const filterYearData = data.filter((item: any) => {
    const year = new Date(item.date).getFullYear();
    return selectedYear && year === parseInt(selectedYear);
  });

  let labelData = filterYearData.map((item: any) =>
    new Date(item.date).toLocaleString().slice(0, 3)
  );

  let bmiData = filterYearData.map((item: any) => item.bmi);

  if (selectedMonth) {
    const filterMonthData = filterYearData.filter((item: any) => {
      const month = new Date(item.date).getMonth();
      return month - 1 === parseInt(selectedMonth);
    });
    labelData = filterMonthData.map((item: any) =>
      new Date(item.date).toLocaleString().slice(0, 3)
    );

    bmiData = filterMonthData.map((item: any) => item.bmi);
  }

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
