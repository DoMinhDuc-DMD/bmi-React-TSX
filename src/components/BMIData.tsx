import { getData } from "./SupportFunc";

const BMIData = (selectedYear: string, selectedMonth: string) => {
  const data = getData();

  const filterYearData = data.filter((item: any) => {
    const year = new Date(item.date).getFullYear();
    return selectedYear && year === parseInt(selectedYear);
  });

  const monthMap = new Map();

  filterYearData.forEach((item: any) => {
    const month = new Date(item.date).getMonth();
    if (!monthMap.has(month)) {
      monthMap.set(month, []);
    }
    monthMap.get(month).push(item.bmi);
  });

  let labelData = Array.from(monthMap.keys()).map((month) =>
    new Date(0, month).toLocaleString("en-US", { month: "long" })
  );

  let bmiData = Array.from(monthMap.values()).map((bmiArray: number[]) => {
    const total = bmiArray.reduce((sum, bmi) => sum + bmi, 0);
    return parseFloat((total / bmiArray.length).toFixed(2));
  });

  if (selectedMonth) {
    const filterMonthData = filterYearData.filter((item: any) => {
      const month = new Date(item.date).getMonth();
      return month === parseInt(selectedMonth);
    });
    labelData = filterMonthData.map((item: any) =>
      new Date(item.date).getDate()
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
