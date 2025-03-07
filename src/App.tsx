import BMICalc from "./components/input/BMICalc";
import BMIChart from "./components/chart/BMIChart";

function App() {
  return (
    <div className="w-200 bg-white rounded mx-auto my-30 p-5">
      <h1 className="text-2xl font-medium text-center">BMI Tracker</h1>
      <BMICalc />
      <BMIChart />
    </div>
  );
}

export default App;
