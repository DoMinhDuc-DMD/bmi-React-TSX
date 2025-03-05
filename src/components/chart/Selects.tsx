import { ChangeEvent } from "react";

export default function Selects({
  handleYearChange,
  handleMonthChange,
  uniqueYears,
  availableMonths,
}: {
  handleYearChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleMonthChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  uniqueYears: number[];
  availableMonths: number[];
}) {
  return (
    <>
      <select
        className="border rounded-md py-1 px-2 cursor-pointer"
        defaultValue="Select Year"
        onChange={handleYearChange}
      >
        <option disabled>Select Year</option>
        {uniqueYears.map((year: any, index: number) => (
          <option key={index}>{year}</option>
        ))}
      </select>
      <select
        className="border rounded-md py-1 px-2 cursor-pointer"
        defaultValue="Select Month"
        onChange={handleMonthChange}
      >
        <option disabled>Select Month</option>
        {availableMonths.map((month: any, index: any) => (
          <option key={index} value={month}>
            {new Date(0, month).toLocaleString("en-US", { month: "long" })}
          </option>
        ))}
      </select>
    </>
  );
}
