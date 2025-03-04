import { ListItem } from "./BMIListItem";
import { getData } from "./SupportFunc";

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
        const month = new Date(item.date).getMonth() - 1;
        return month === parseInt(selectedMonth);
      })
    : filterYearData;

  return (
    <div className="formList">
      <h1>BMI List</h1>
      <ul className="listBMI">
        {filteredData.map((item: any, index: number) => (
          <ListItem key={index} bmi={item.bmi} time={item.date} />
        ))}
      </ul>
    </div>
  );
}
