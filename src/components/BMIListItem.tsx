export const ListItem = ({ bmi, time }: { bmi: string; time: string }) => {
  return (
    <li>
      Your BMI was {bmi} on {time}
    </li>
  );
};
