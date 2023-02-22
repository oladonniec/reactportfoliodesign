import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: "https://i.postimg.cc/zfLL1Fy8/restaurantscreenshot.png",
    title: "React Restaurant Frontend App",
    demo: "https://oladonniec.github.io/restaurantsample/",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/kML0tPj3/reactlandingpagescreenshot.png",
    title: "React Landing Page",
    demo: "https://oladonniec.github.io/myandingpage/",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/sgzHzj2m/reactnftlandingpage.png",
    title: "NFT Website Landing Page",
    demo: "https://oladonniec.github.io/nftlanding/",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/mDnW6jgL/Screenshot.png",
    title: "JavaScript Clock",
    github: "https://github.com/oladonniec/JavaScript-Clock",
    demo: "https://github.com/oladonniec/JavaScript-Clock",
  },
  {
    id: 5,
    image: "https://i.postimg.cc/k5Zq5Nmn/Capture.png",
    title: "JavaScript Cart",
    github: "https://github.com/oladonniec/javascriptcart",
    demo: "https://github.com/oladonniec/javascriptcart",
  },
  {
    id: 6,
    image: "https://i.postimg.cc/q7ZHTbWC/newscreen.png",
    title: "JavaScipt Quiz App",
    github: "https://github.com/oladonniec/javascriptquizapp",
    demo: "https://github.com/oladonniec/javascriptquizapp",
  },
  {
    id: 7,
    image: "https://i.postimg.cc/DZmy3V4n/Savvy-ecommerce-home-screen.png",
    title: "Savvy Accessories Ecommerce Web App",
    github: "https://github.com/oladonniec/savvyaccessories",
    demo: "https://github.com/oladonniec/savvyaccessories",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
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
