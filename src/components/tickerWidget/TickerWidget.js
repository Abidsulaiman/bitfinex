import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { useSelector } from "react-redux";
import "./TicketWidget.css";

function TickerWidget() {
  const { value } = useSelector((state) => state.ticker);
  return (
    <div className="tickerWidget card bg-dark border-0 shadow">
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
            <div className="points spaceBetween mb-1">
              <h4 className="mb-0">BTC/USD</h4>

              <h4 className="mb-0">{value ? value[0] : "..."}</h4>
            </div>
            <div className="volume spaceBetween mb-1">
              <p className="vol mb-0">
                <span className="fw-bold">VOL</span>{" "}
                <span>{value ? value[7].toFixed(2) : "..."}</span>{" "}
                <span className="currency">BTC</span>
              </p>
              <p className="volChange mb-0">
                {value ? value[3].toFixed(2) : "..."}
                <span>
                  <IoMdArrowDropup fontSize="20px" />
                </span>{" "}
                ({value ? value[5] : "..."})
              </p>
            </div>
            <div className="lowHigh spaceBetween mb-1">
              <p className="low mb-0">
                <span className="fw-bold">LOW</span>{" "}
                <span>{value ? value[8] : "..."}</span>
              </p>
              <p className="high mb-0">
                <span className="fw-bold">HIGH</span>{" "}
                <span>{value ? value[9] : "..."}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TickerWidget;
