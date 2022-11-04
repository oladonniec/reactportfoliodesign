import React from "react";
import "./about.css";
import me from "../../assets/images/abdulsemiu.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>7 Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed projects</small>
            </article>
          </div>
          <p>
            I am a Frontend Web/Software Engineer with 2 - 3 year freelance
            experience. I am passion driven towards creating amazing designs and
            user interface that will give users the best of experience. I put my
            integrity at the top of my priorities. I deliver work whenever
            promised and I am someone that takes corrections and sees them as an
            opportunity to learn and grow. If you work with me, I can assure you
            continuity as I have committed my life to Web/Software development
            and really trying to be the best and greatest there can ever be lol.
            Thank you as you reach out.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
