import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: "https://i.postimg.cc/Ls6Dry3C/todoscreenshot.png",
    title: "Todo-List App",
    github: "https://github.com/oladonniec/javascripttodoapp",
    demo: "https://github.com/oladonniec/javascripttodoapp",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/mDnW6jgL/Screenshot.png",
    title: "JavaScript Clock",
    github: "https://github.com/oladonniec/JavaScript-Clock",
    demo: "https://github.com/oladonniec/JavaScript-Clock",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/k5Zq5Nmn/Capture.png",
    title: "JavaScript Cart",
    github: "https://github.com/oladonniec/javascriptcart",
    demo: "https://github.com/oladonniec/javascriptcart",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/q7ZHTbWC/newscreen.png",
    title: "JavaScipt Quiz App",
    github: "https://github.com/oladonniec/javascriptquizapp",
    demo: "https://github.com/oladonniec/javascriptquizapp",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
