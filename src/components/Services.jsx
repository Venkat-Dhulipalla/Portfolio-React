import React from "react";

import img1 from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/i1.png";
import img4 from "../assets/i2.png";
import img5 from "../assets/i3.png";

const Services = () => {
  return (
    <>
      <div className="about">
        <div className="container gx-0">
          <div className="row text-center gx-0">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h1>
                <img src={img1} alt="" />
                SERVICE
                <img src={img2} alt="" />
              </h1>
              <p className="px-5 px-md-5">
                As your friendly neighborhood Java Developer,Frontend Engineer
                and Full stack Developer, I'm here to spruce up your web
                presence with flair! Think of me as your digital superhero,
                blending code with data wizardry to rescue your website from the
                clutches of dullness!
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row gx-0 py-md-4 py-3 px-2 p-md-0">
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-down">
                <img src={img3} alt="" />
                <h2>Frontend Development</h2>
                <p>
                  Crafting visually captivating and responsive user interfaces
                  using HTML, CSS, and JavaScript to captivate your audience.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-up">
                <img src={img4} alt="" />
                <h2>MERN Stack Development</h2>
                <p>
                  Building robust web applications with MongoDB, Express.js,
                  React, and Node.js, ensuring seamless functionality and user
                  experience.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-up">
                <img src={img1} alt="" />
                <h2>Custom Web Apps</h2>
                <p>
                  Designing and developing tailor-made web applications to
                  address your specific needs and business goals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-down">
                <img src={img3} alt="" />
                <h2>Spring Boot Excellence</h2>
                <p>
                  Leverage our Spring Boot expertise for seamless web
                  development. Pixel-perfect implementation and responsive
                  designs ensure your ideas come to life with precision and
                  efficiency. Experience excellence in every project.
                </p>
              </div>
            </div>{" "}
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-up">
                <img src={img5} alt="" />
                <h2>Responsive Design</h2>
                <p>
                  Ensuring your digital assets look and function flawlessly on
                  various devices, from desktops to smartphones.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-up">
                <img src={img4} alt="" />
                <h2>Data Insights</h2>
                <p>
                  Unlocking actionable insights, our data analysis service
                  transforms raw data into strategic intelligence, empowering
                  informed decision-making and driving business growth through
                  precision, accuracy, and innovative analytical methodologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
