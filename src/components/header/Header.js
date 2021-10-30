import React from "react";
import { useDispatch } from "react-redux";
import { disconnectSocket } from "../../features/slices/tickerSlice";
import "./Header.css";

function Header({ title }) {
  const dispatch = useDispatch();

  return (
    <header className="py-3 px-5 bg-dark tickerAppHeader">
      <h1 className="fs-3 fw-bold text-center text-secondary mb-0">{title}</h1>
      <button
        className="btn btn-danger rounded-pill px-5"
        onClick={() => dispatch(disconnectSocket())}
      >
        Disconnect
      </button>
    </header>
  );
}

export default Header;
