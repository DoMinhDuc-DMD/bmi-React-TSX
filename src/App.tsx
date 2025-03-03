import BMICalc from "./components/BMICalc";

function App() {
  return (
    <div className="form">
      <h1>BMI Calculator</h1>
      <div className="form-input">
        <BMICalc />
      </div>
      <div className="list-bmi"></div>
    </div>
  );
}

export default App;
