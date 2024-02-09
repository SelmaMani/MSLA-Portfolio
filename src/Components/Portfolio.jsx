/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/projects.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ENSIA Tech Community Website 🎉",
    description:
      "Led front-end and back-end development for the club website. Directed team, managed timelines, and ensured seamless functionality.",
    url: "https://etc-club.vercel.app/",
  },
  {
    title: "Nursery Management System - SafeCorner 🌱 -",
    description:
      "Led a 6-member team to develop a Nursery Management System within a 14-week timeframe under instructor guidance.",
    url: "",
  },
  {
    title: "English Learning Assistant 📚 - Englify - ",
    description:
      "Led a team in winning first place after 40 hours of intensive coding, employing fine-tuning techniques to train a GPT model tailored to enhance English learning in Algerian contexts. ",
    url: "",
  },
  {
    title: "Note App 📝 - Notiverse -",
    description: "Actively involved in app development using Flutter, Riverpod and ObjectBox to create a note-taking app. ",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
