import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    const value = Number(inputRef.current.value);
    if (isNaN(value)) return;
    setResult((prev) => prev + value);
  }

  function minus(e) {
    e.preventDefault();
    const value = Number(inputRef.current.value);
    if (isNaN(value)) return;
    setResult((prev) => prev - value);
  }

  function times(e) {
    e.preventDefault();
    const value = Number(inputRef.current.value);
    if (isNaN(value)) return;
    setResult((prev) => prev * value);
  }

  function divide(e) {
    e.preventDefault();
    const value = Number(inputRef.current.value);
    if (isNaN(value) || value === 0) {
      alert("Division par zéro impossible.");
      return;
    }
    setResult((prev) => prev / value);
  }

  function resetInput(e) {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <form>
          <p ref={resultRef} className="result-display">
            {result}
          </p>
          <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
            className="number-input"
          />
          <div className="buttons-row">
            <button onClick={plus}>Add</button>
            <button onClick={minus}>Subtract</button>
            <button onClick={times}>Multiply</button>
            <button onClick={divide}>Divide</button>
          </div>
          <div className="buttons-row">
            <button onClick={resetInput}>Reset input</button>
            <button onClick={resetResult}>Reset result</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
