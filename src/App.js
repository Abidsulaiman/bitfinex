import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import TickerWidget from "./components/tickerWidget/TickerWidget";

function App() {
  return (
    <div className="app">
      <Header title="BitFinex Ticker App" />

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
