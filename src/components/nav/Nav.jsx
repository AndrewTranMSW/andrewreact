import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { useState } from "react";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome></AiOutlineHome>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FiUser></FiUser>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsBriefcase></BsBriefcase>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <AiOutlineFolderOpen></AiOutlineFolderOpen>
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <FaRegHandshake></FaRegHandshake>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlinePhone></AiOutlinePhone>
      </a>
    </nav>
  );
}
