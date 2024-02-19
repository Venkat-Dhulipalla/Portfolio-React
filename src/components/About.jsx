// import React from "react";
import img1 from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/i1.png";
import img4 from "../assets/i2.png";
import img5 from "../assets/i3.png";
// import img6 from "../assets/about-main.png";
import img6 from "../assets/p2.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="container gx-0">
          <div className="row text-center gx-0">
            <div className="col-md-2"></div>
            <div className="col-md-8 px-2 px-md-0">
              <h1>
                <img src={img1} alt="" />
                WELCOME TO MY WORLD
                <img src={img2} alt="" />
              </h1>
              <p className="px-1 px-md-5">
                As a young go-getter, I'm aiming to rock the world as a
                full-stack developer and dive deep into the exciting realms of
                machine learning, data science.
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row gx-0 py-md-4 py-3 px-2 p-md-0">
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-down">
                <img src={img3} alt="" />
                <h2>Creativity</h2>
                <p>
                  Creative thinker with a penchant for innovation, consistently
                  delivering imaginative solutions that captivate and inspire.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-up">
                <img src={img4} alt="" />
                <h2>Dedication</h2>
                <p>
                  A steadfast commitment to surpassing expectations, driven by
                  an unwavering work ethic and a relentless pursuit of
                  excellence in every task undertaken.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-down">
                <img src={img5} alt="" />
                <h2>Hard Work</h2>
                <p>
                  Characterized by resilience and tenacity, persistently
                  confronting challenges with diligence, perseverance, and a
                  proactive mindset to achieve desired results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************* */}
      <div className="section1 container-fluid">
        <div className="container gx-0 px-md-0 px-3">
          <div className="row gx-0 align-items-center">
            <div className="col-md-6" data-aos="fade-down">
              <div className="sec1_col1">
                <img src={img6} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <div className="sec1_col2">
                <h4>ABOUT ME</h4>
                <h1>
                  I am a <span>Web Developer & Java Developer</span>
                </h1>
                <p>
                  Experienced Full Stack Engineer skilled in Java, Spring Boot,
                  ReactJS, and AWS. Proficient in data analysis, machine
                  learning, and problem-solving. Strong communicator and
                  collaborator, with a track record of successful project
                  management and research contributions. Committed to continuous
                  learning and innovation in the rapidly evolving tech
                  landscape.
                </p>
                <p></p>
                <div className="row gx-0">
                  <div className="col-md-7">
                    <h5>NAME :</h5>
                    <p>Venkat Dhulipalla</p>
                    <h5>EMAIL :</h5>
                    <p>Venkatdhulipalla21@gmail.com</p>
                    <h5>PHONE NO :</h5>
                    <p>9408433274</p>
                  </div>
                  <div className="col-md-5">
                    <h5>AGE :</h5>
                    <p>24</p>
                    <h5>EDUCATION :</h5>
                    <p>Masters of Science in Computer Science</p>
                    <h5>WEB DEVELOPER :</h5>
                    <p>Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************* */}
      {/* ************************************* */}
    </>
  );
};

export default About;