import React from "react";
import "./TicketWidget.css";

function TickerWidget() {
  return (
    <div className="tickerWidget card">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <img
            src="/bitcoin.png"
            alt="BitFinex icon"
            width="60"
            height="60"
            className="bitcoinIcon"
          />
          <div className="info">
            <div className="points spaceBetween">
              <h4 className="mb-0">BTC/USD</h4>

              <h4 className="mb-0">9,974.0</h4>
            </div>
            <div className="volume spaceBetween">
              <p className="vol mb-0">
                <span className="fw-bold">VOL</span> <span>13,962</span>{" "}
                <span className="currency">BTC</span>
              </p>
              <p className="volChange mb-0">
                86.50 <span></span> (0.87%)
              </p>
            </div>
            <div className="lowHigh spaceBetween">
              <p className="low mb-0">
                <span className="fw-bold">LOW</span> <span>9,777.0</span>
              </p>
              <p className="high mb-0">
                <span className="fw-bold">HIGH</span> <span>10,471</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TickerWidget;
