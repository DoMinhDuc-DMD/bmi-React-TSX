export const ListItem = ({
  bmi,
  time,
  selectedYear,
  selectedMonth,
}: {
  bmi: string;
  time: string;
  selectedYear: string;
  selectedMonth: string;
}) => {
  const dateObj = new Date(time);

  let monthObj = `${dateObj.toLocaleString("en-US", {
    month: "long",
  })}`;

  let dayObj = `${dateObj.toLocaleString("en-US", {
    month: "long",
  })} ${dateObj.getDate()}`;

  return (
    <>
      {selectedYear && selectedMonth ? (
        <li className="text-left px-1 py-0.5">
          - Your BMI was {bmi} on {dayObj}.
        </li>
      ) : selectedYear ? (
        <li className="text-left px-1 py-0.5">
          - Your average BMI was {bmi} in {monthObj}.
        </li>
      ) : null}
    </>
  );
};
