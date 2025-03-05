export const ListItem = ({ msg }: { msg: string }) => {
  return (
    <li className="text-left px-1 py-0.5">
      {msg.slice(0, 9)} was {msg.slice(12, 39)} were {msg.slice(42, -1)}.
    </li>
  );
};
