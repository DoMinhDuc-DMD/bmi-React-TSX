import { ListItem } from "./BMIListItem";
import { getData } from "../SupportFunc";

export default function BMIList({
  selectedYear,
  selectedMonth,
}: {
  selectedYear: string;
  selectedMonth: string;
}) {
  const data = getData();

  const filterYearData = data.filter((item: any) => {
    const year = new Date(item.date).getFullYear();
    return selectedYear && year === parseInt(selectedYear);
  });

  const filteredData = selectedMonth
    ? filterYearData.filter((item: any) => {
        const month = new Date(item.date).getMonth();
        return month === parseInt(selectedMonth);
      })
    : filterYearData;

  const monthArray: number[] = [];
  filterYearData.forEach((item: any) => {
    const month = new Date(item.date).getMonth();
    if (!monthArray.includes(month)) {
      monthArray.push(month);
    }
  });

  const avgBMIMonth = monthArray.map((month) => {
    const monthData = filterYearData.filter(
      (item: any) => new Date(item.date).getMonth() === month
    );

    const total = monthData.reduce(
      (sum: number, item: any) => sum + parseFloat(item.bmi),
      0
    );

    return monthData.length
      ? parseFloat((total / monthData.length).toFixed(2))
      : 0;
  });

  return (
    <div className="w-[50%] text-center">
      <h1 className="text-xl font-medium">BMI List</h1>
      <ul className="bg-gray-200 rounded-sm p-2 h-[213px] overflow-y-auto">
        {selectedYear && selectedMonth
          ? filteredData
              .map((item: any, index: number) => (
                <ListItem
                  key={index}
                  bmi={item.bmi}
                  time={item.date}
                  selectedYear={selectedYear}
                  selectedMonth={selectedMonth}
                />
              ))
              .reverse()
          : selectedYear
          ? monthArray.map((month, index) => (
              <ListItem
                key={`month-${index}`}
                bmi={avgBMIMonth[index].toString()}
                time={(month + 1).toLocaleString()}
                selectedYear={selectedYear}
                selectedMonth={selectedMonth}
              />
            ))
          : null}
      </ul>
    </div>
  );
}
