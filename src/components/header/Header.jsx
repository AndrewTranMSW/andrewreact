import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Pic.jpg";
import { HeaderSocials } from "./HeaderSocials";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Andrew Tran</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="a photo of me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
