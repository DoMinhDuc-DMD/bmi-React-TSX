export const ListItem = ({ bmi, time }: { bmi: string; time: string }) => {
  const dateObj = new Date(time);
  let timeObj = `${dateObj.toLocaleString("en-US", {
    month: "long",
  })} ${dateObj.getDate()}`;

  return (
    <li className="text-left px-1 py-0.5">
      - Your BMI was {bmi} on {timeObj}.
    </li>
  );
};
