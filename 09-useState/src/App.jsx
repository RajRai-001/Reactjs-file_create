import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [num, setNum] = useState(10);

  return (
    <div className="container">
      <div className="card">

        <h1 className="title">Counter App</h1>

        <div className="counter">
          {num}
        </div>

        <div className="buttons">

          <button
            className="btn green"
            onClick={() => setNum(num + 1)}
          >
            <span>📈</span>
            <p>+1</p>
          </button>

          <button
            className="btn blue"
            onClick={() => setNum(num + 5)}
          >
            <span>🚀</span>
            <p>+5</p>
          </button>

          <button
            className="btn orange"
            onClick={() => setNum(num - 5)}
          >
            <span>📉</span>
            <p>-5</p>
          </button>

          <button
            className="btn red"
            onClick={() => setNum(num - 1)}
          >
            <span>⬇️</span>
            <p>-1</p>
          </button>

        </div>

      </div>
    </div>
  );
};

export default App;