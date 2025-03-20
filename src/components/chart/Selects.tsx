import { ChangeEvent } from "react";

export default function Selects({
  handleYearChange,
  handleMonthChange,
  uniqueYears,
  availableMonths,
  selectedYear,
  selectedMonth,
}: {
  handleYearChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleMonthChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  uniqueYears: number[];
  availableMonths: number[];
  selectedYear: string;
  selectedMonth: string;
}) {
  return (
    <>
      {selectedYear && (
        <select className="border rounded-lg py-1 px-2 cursor-pointer" value={selectedMonth} onChange={handleMonthChange}>
          <option value="" disabled>
            Select Month
          </option>
          {availableMonths.map((month, index) => (
            <option key={index} value={month}>
              {new Date(0, month).toLocaleString("en-US", { month: "long" })}
            </option>
          ))}
        </select>
      )}
      <select className="border rounded-lg py-1 px-2 cursor-pointer" value={selectedYear} onChange={handleYearChange}>
        <option value="" disabled>
          Select Year
        </option>
        {uniqueYears.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  );
}
