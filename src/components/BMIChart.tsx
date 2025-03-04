import { ChangeEvent, useState } from "react";
import { getData } from "./SupportFunc";
import { BMILineChart } from "./BMILineChart";
import BMIList from "./BMIList";

function BMIChart() {
  const data = getData();
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const getYearData = data.map((item: any) => {
    const date = new Date(item.date);
    return date.getFullYear();
  });
  const uniqueYears = [...new Set(getYearData)];

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
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
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
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
