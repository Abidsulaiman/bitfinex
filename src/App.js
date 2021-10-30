import React from "react";
import "./App.css";
import TickerWidget from "./components/TickerWidget";

function App() {
  return (
    <div className="app">
      <header className="py-3 bg-dark">
        <h1 className="fs-3 fw-bold text-center text-secondary mb-0">
          BitFinex Ticker App
        </h1>
      </header>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <TickerWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
