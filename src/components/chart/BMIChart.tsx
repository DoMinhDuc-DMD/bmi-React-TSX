import { ChangeEvent, useState } from "react";
import { getData } from "../SupportFunc";
import { BMILineChart } from "./BMILineChart";
import BMIList from "../list/BMIList";
import { RestartAltRounded } from "@mui/icons-material";
import Selects from "./Selects";

function BMIChart() {
  const data = getData();
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [availableMonths, setAvailableMonths] = useState<number[]>([]);

  const getYearData = data.map((item: any) => {
    const date = new Date(item.date);
    return date.getFullYear();
  });

  const uniqueYears = [...new Set<number>(getYearData)];

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    setSelectedYear(year);

    const filterYearData = data.filter((item: any) => {
      const date = new Date(item.date);
      return date.getFullYear().toString() === year;
    });

    const getMonthData = filterYearData.map((item: any) =>
      new Date(item.date).getMonth()
    );

    const uniqueMonths = [...new Set<number>(getMonthData)] as number[];
    setSelectedMonth("");
    setAvailableMonths(uniqueMonths);
  };

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };

  const handleReset = () => {
    setSelectedYear("");
  };

  return (
    <div>
      <div className="flex justify-end items-center my-2 gap-x-2">
        <Selects
          handleYearChange={handleYearChange}
          handleMonthChange={handleMonthChange}
          uniqueYears={uniqueYears}
          availableMonths={availableMonths}
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
        />
        <RestartAltRounded
          className="border rounded cursor-pointer"
          onClick={handleReset}
        />
      </div>
      <div className="flex gap-x-1">
        <BMILineChart
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
        />
        <BMIList selectedYear={selectedYear} selectedMonth={selectedMonth} />
      </div>
    </div>
  );
}

export default BMIChart;
