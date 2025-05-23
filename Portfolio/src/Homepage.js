import React from "react";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Mail from "./Mail";
import "./common.css";

export default function Homepage() {
  const profile = {
    mailid: "amritanshtripathi150304@gmail.com",
    phone: "7999757480",
    github: "https://github.com/amritansh1503",
    linkedin: "https://www.linkedin.com/in/amritansh-tripathi150304/",
  };

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Amritansh Tripathi's Portfolio</h1>
      <div className="content-wrapper">
        <div className="card">
          <About />
        </div>
        <div className="card">
          <Projects />
        </div>
        <div className="card-row">
          <div className="card">
            <Skills />
          </div>
          <div className="contact-wrapper">
            <div className="contact-card">
              <Contact
                contact={{
                  mailid: `mailto:${profile.mailid}`,
                  phone: `tel:${profile.phone}`,
                  github: profile.github,
                  linkedin: profile.linkedin,
                }}
              />
            </div>
            <div className="mail-card">
              <Mail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
