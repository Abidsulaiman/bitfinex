import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import TickerWidget from "./components/tickerWidget/TickerWidget";
import { PUBLIC_CHANNEL } from "./config";

function App() {
  const [state, setState] = useState();

  const ws = new WebSocket(PUBLIC_CHANNEL);

  useEffect(() => {
    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log("connected");
    };

    ws.onmessage = (evt) => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data);
      setState({ dataFromServer: message });
      console.log(message);
    };

    ws.onclose = () => {
      console.log("disconnected");
      // automatically try to reconnect on connection loss
    };
  }, []);

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
