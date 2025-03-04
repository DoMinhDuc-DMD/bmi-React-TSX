export function getData() {
  const data = localStorage.getItem("BMI-Status");
  return data ? JSON.parse(data) : [];
}

export function convertTime(dateString: string | number | Date) {
  let date = new Date(dateString);

  let day = String(date.getDate());
  let month = date.toLocaleString("en-US", { month: "long" });
  let year = date.getFullYear();

  return `${month} ${day} ${year}`;
}
