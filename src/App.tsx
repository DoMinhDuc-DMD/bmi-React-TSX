import BMICalc from "./components/BMICalc";
import BMIChart from "./components/BMIChart";

function App() {
  return (
    <div className="form">
      <h1>BMI Tracker</h1>
      <BMICalc />
      <BMIChart />
    </div>
  );
}

export default App;
