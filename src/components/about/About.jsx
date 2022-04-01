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
              <small>6 years as MSW, 1 year as developer</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>19 completed</small>
            </article>
          </div>

          <p>
            After six years as a trained medical social worker, I am
            transitioning into the world of software development. I aim to make
            an impact in the field of technology with my real-world experiences
            and motivation to learn new things in an ever-changing environment.
          </p>
          <p>
            In my spare time, I like to build computers, play Magic: The
            Gathering, and I have been a professional wedding and portrait
            photographer for the past 8 years.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
}
