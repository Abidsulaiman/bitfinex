import React from "react";
import "./Header.css";

function Header({ title }) {
  return (
    <header className="py-3 px-5 bg-dark tickerAppHeader">
      <h1 className="fs-3 fw-bold text-center text-secondary mb-0">{title}</h1>
      <button className="btn btn-success rounded-pill px-5">Connect</button>
    </header>
  );
}

export default Header;
