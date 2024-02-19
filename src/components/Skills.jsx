import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const ab = 100;
  const cd = 90;
  const cb = 95;
  const ef = 80;
  const gh = 85;
  const ij = 70;
  return (
    <>
      <div className="skills">
        <div className="container gx-0 px-3 px-md-0">
          <div className="row gx-0 align-items-center">
            <div className="col-md-6">
              <div className="skill_col1">
                <h5>MY SKILLS</h5>
                <h1>I am great in what I</h1>
                <h1>do and I am loving it</h1>
                <p>
                  I am a dynamic software developer with a passion for exploring
                  the full stack. Proficient in React's UI capabilities and
                  Spring Boot's backend prowess, I thrive on crafting immersive
                  experiences. Each project is a journey of innovation, with
                  every line of code adding depth and richness. Ready to bring
                  my expertise and enthusiasm to your team. Let's embark on this
                  tech adventure together!
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill_col2">
                <div className="row ">
                  <div className="col-md-4 col-9">
                    <div className="skill_col">
                      <CircularProgressbar value={ab} text={`${ab}%`} />
                      <h3>Java</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={cd} text={`${cd}%`} />
                      <h3>Spring Framework</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={cd} text={`${cd}%`} />
                      <h3>Python</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={gh} text={`${gh}%`} />
                      <h3>React JS</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={cd} text={`${cd}%`} />
                      <h3>CSS</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={gh} text={`${gh}%`} />
                      <h3>JavaScript</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={ij} text={`${ij}%`} />
                      <h3>MongoDB</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={ij} text={`${ij}%`} />
                      <h3>AWS</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={ab} text={`${ab}%`} />
                      <h3>HTML</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
