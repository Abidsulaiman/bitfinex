import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import TickerWidget from "./components/tickerWidget/TickerWidget";
import { MESSAGE, PUBLIC_CHANNEL } from "./config";
import { storeData } from "./features/slices/tickerSlice";

const ws = new WebSocket(PUBLIC_CHANNEL);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    ws.onmessage = (event) => {
      let response = JSON.parse(event.data);
      if (response[1] !== "hb") {
        dispatch(storeData(response[1]));
      }
    };

    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log("connected");
      ws.send(MESSAGE);
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
