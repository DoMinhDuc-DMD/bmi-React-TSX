export const ListItem = ({ bmi, time }: { bmi: string; time: string }) => {
  return (
    <li className="text-left px-1 py-0.5">
      - Your BMI was {bmi} on {time}.
    </li>
  );
};
