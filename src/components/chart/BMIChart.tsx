import { ChangeEvent, useState } from "react";
import { getData } from "../SupportFunc";
import { BMILineChart } from "./BMILineChart";
import BMIList from "../list/BMIList";
import { RestartAltRounded } from "@mui/icons-material";

function BMIChart() {
  const data = getData();
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [availableMonths, setAvailableMonths] = useState<number[]>([]);

  const getYearData = data.map((item: any) => {
    const date = new Date(item.date);
    return date.getFullYear();
  });

  const uniqueYears = [...new Set(getYearData)];

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
    setAvailableMonths(uniqueMonths);
  };

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="showData">
      <div className="selectChart flex justify-center items-center my-4 gap-x-5">
        {/* Year Select */}
        <select
          className="slt-year border rounded-md py-1 px-2"
          defaultValue="Select Year"
          onChange={handleYearChange}
        >
          <option disabled>Select Year</option>
          {uniqueYears.map((year: any, index: number) => (
            <option key={index}>{year}</option>
          ))}
        </select>
        {/* Month Select */}
        <select
          className="slt-month border rounded-md py-1 px-2"
          defaultValue="Select Month"
          onChange={handleMonthChange}
        >
          <option disabled>Select Month</option>

          {availableMonths.map((month, index) => (
            <option key={index} value={month}>
              {new Date(0, month).toLocaleString("en-US", { month: "long" })}
            </option>
          ))}
        </select>
        <RestartAltRounded
          className="border rounded cursor-pointer"
          onClick={handleReset}
        />
      </div>
      <div className="formData flex gap-x-1">
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
