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

  return (
    <div className="w-[50%] text-center">
      <h1 className="text-xl font-medium">BMI List</h1>
      <ul className="bg-gray-200 rounded-sm p-2 h-[213px] overflow-y-auto">
        {filteredData
          .map((item: any, index: number) => (
            <ListItem key={index} bmi={item.bmi} time={item.date} />
          ))
          .reverse()}
      </ul>
    </div>
  );
}
