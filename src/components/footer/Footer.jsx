import React from "react";
import "./footer.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Andrew Tran
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/andrew.tran.7/" target="_blank">
          <AiOutlineFacebook />
        </a>
        <a href="https://www.instagram.com/andrewchran/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/ndrwtrn" target="_blank">
          <FiTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Developed with ❤ by Andrew Tran</small>
      </div>
    </footer>
  );
}
