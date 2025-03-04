export function getData() {
  const data = localStorage.getItem("BMI-Status");
  return data ? JSON.parse(data) : [];
}

export function convertTime(dateString: string | number | Date) {
  let date = new Date(dateString);

  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
