import BMICalc from "./components/BMICalc";
import BMIChart from "./components/BMIChart";

function App() {
  return (
    <div className="form w-4xl bg-white rounded mx-auto my-30 p-5">
      <h1 className="text-2xl font-medium text-center">BMI Tracker</h1>
      <BMICalc />
      <BMIChart />
    </div>
  );
}

export default App;
