import React from "react";
import "./portfolio.css";
import Portfolio1 from "../../assets/Portfolio1.png";
import Portfolio2 from "../../assets/Portfolio2.png";
import Portfolio3 from "../../assets/Portfolio3.png";
import Portfolio4 from "../../assets/Portfolio4.png";
import Portfolio5 from "../../assets/Portfolio5.jpeg";
import Portfolio6 from "../../assets/Portfolio6.png";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* What's That Anime */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio1} alt="What's that Anime?" />
          </div>
          <h3>What's That Anime?</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AndrewTranMSW/whatsThatAnime"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://andrewtranmsw.github.io/whatsThatAnime/"
              target="_blank"
              className="btn btn-primary"
            >
              Deployed Link
            </a>
          </div>
        </article>
        {/* Seeded */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio2} alt="Seeded" />
          </div>
          <h3>Seeded</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sabhanson/seeded"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://seed-ed.herokuapp.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Deployed Link
            </a>
          </div>
        </article>
        {/* Ftchr */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio3} alt="Ftchr App" />
          </div>
          <h3>Ftchr App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/amiramonte/FTCHr-Project-3"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://ftchrapp.herokuapp.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Deployed Link
            </a>
          </div>
        </article>
        {/* WorkDay Scheduler */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio4} alt="Workday Scheduler" />
          </div>
          <h3>Work Day Scheduler</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AndrewTranMSW/workDayScheduler"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://andrewtranmsw.github.io/workDayScheduler/"
              target="_blank"
              className="btn btn-primary"
            >
              Deployed Link
            </a>
          </div>
        </article>
        {/* TeamProfile Generator */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio5} alt="Team Profile Generator" />
          </div>
          <h3>Team Profile Generator</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AndrewTranMSW/teamProfileGenerator"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://youtu.be/Y5oiq1yPFvs"
              target="_blank"
              className="btn btn-primary"
            >
              Walkthrough Video
            </a>
          </div>
        </article>
        {/* Text Editor */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio6} alt="Text Editor" />
          </div>
          <h3>Text Editor</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AndrewTranMSW/TextEditor"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://cryptic-woodland-98824.herokuapp.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Deployed Link
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
