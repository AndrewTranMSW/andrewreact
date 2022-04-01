import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Experience with Bootstrap, MUI, and Foundation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Strong foundation in JavaScript with vanilla JS and React</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>RESTful APIs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Backend knowledge with Node, Express, Mongodb, and MySQL</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Experienced with HTML, CSS, and ES6</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Great communication with team members and co-developers</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Fun Facts</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>I am bilingual in English and Vietnamese</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>I ride a Triumph Bonneville 900cc</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Favorite Magic decks: B/R Vampires and U/B Sea Monsters</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>
                I'm a wedding and portrait photographer. Let me take a photo of
                you!
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>I am a big mechanical keyboard enthusiast</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Experienced in the Adobe Creative Suite</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
      </div>
    </section>
  );
}
