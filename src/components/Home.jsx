import React from "react";
import { ReactTyped } from "react-typed";
import img2 from "../assets/p2.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="row_main">
          <div className="row gx-0">
            <div className="col-md-3"></div>
            {/* ******************* */}
            <div className="col-md-6">
              {/* ******************* */}
              <div className="home_col">
                <img src={img2} className="img-fluid" alt="heroimage" />
                <h3>Hello, My Name is</h3>
                <h2>
                  Venkat <span>Dhulipalla</span>{" "}
                </h2>
                <h1>
                  I am a{" "}
                  <ReactTyped
                    strings={[
                      "Front End Developer",
                      "Java Developer",
                      "React Developer",
                      "Data Analyst",
                    ]}
                    typeSpeed={100}
                    loop
                  />
                </h1>
                {/* <p>A passionate Web Developer who works on</p> */}
                <div className="home_text"></div>
                <div className="home_btns">
                  <button type="button" className="home_btn1">
                    <NavLink to="/contact">HIRE ME</NavLink>
                  </button>
                  <button type="button" className="home_btn2">
                    <NavLink to="/about">ABOUT ME</NavLink>
                  </button>
                </div>
              </div>
            </div>
            {/* ******************* */}
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      {/* ********* */}
      {/* ********* */}
    </>
  );
};

export default Home;
