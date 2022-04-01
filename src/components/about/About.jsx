import React from "react";
import "./about.css";
import ME from "../../assets/meanddogs.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";

export default function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me and my dogs!"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Years test test</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200 clients</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>20 completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            laudantium mollitia quam velit sequi nobis quisquam in quasi ratione
            praesentium libero debitis fugiat ab numquam inventore, ipsa ipsum
            culpa explicabo.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
}
