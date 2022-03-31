import React from "react";
import "./header.css";
import CTA from "./CTA";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Andrew Tran</h2>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
      </div>
    </header>
  );
}
