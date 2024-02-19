import React from "react";

import img1 from "../assets/portfolio/1.png";
import img2 from "../assets/portfolio/2.png";
import img3 from "../assets/portfolio/3.png";
import img4 from "../assets/portfolio/4.png";
import img5 from "../assets/portfolio/5.png";
import img6 from "../assets/portfolio/6.png";
import img7 from "../assets/portfolio/7.png";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";

const Portfolio = () => {
  const handleblog = () => {
    document.getElementById("portfolio_col1").style.display = "flex";
    document.getElementById("portfolio_col2").style.display = "flex";
    document.getElementById("portfolio_col3").style.display = "flex";
    document.getElementById("btn3").style.display = "none";
  };
  return (
    <>
      <div className="section4">
        <div className="container gx-0 px-3 px-md-0">
          <div className="row text-center gx-0">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h1 className="sec4_h1">
                <img src={icon1} alt="" />
                PORTFOLIO
                <img src={icon2} alt="" />
              </h1>
              <p className="px-2 px-md-5 sec4_p">
                Explore my diverse portfolio showcasing web projects ranging
                from responsive websites to dynamic web applications,
                highlighting creativity, functionality, and user experience.
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row gx-0 py-4">
            <div className="row gx-0">
              {/* 1st */}
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img1} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>MovieQuest 🎬</h4>
                      <p>Explore Your Movie Library</p>
                      <a
                        href="https://github.com/Venkat-Dhulipalla/MovieQuest"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">Github</button>
                      </a>
                      <span style={{ marginRight: "10px" }}></span>
                      <a
                        href="https://world-moviequest.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">Demo</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd */}

              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img7} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>IPL Dashboard</h4>
                      <p>
                        IPL Dashboard Website With React JS, H2db and Springboot
                      </p>
                      <a
                        href="https://github.com/Venkat-Dhulipalla/IPL-Dashboard.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">Github</button>
                      </a>
                      <span style={{ marginRight: "10px" }}></span>
                      <a
                        href="http://ec2-18-219-41-233.us-east-2.compute.amazonaws.com:8080/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">Demo</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3rd */}
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img3} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Fast Pizza Store</h4>
                      <p>Pizza Ordering and Delivery Website With React JS</p>
                      <a
                        href="https://github.com/Venkat-Dhulipalla/Fast-PizzaStore"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">Github</button>
                      </a>
                      <span style={{ marginRight: "10px" }}></span>
                      <a
                        href="https://fast-pizzastore.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">Demo</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-0 ">
              {/* 4th */}
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img4} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Far Away</h4>
                      <p>Travel Checklist Website With React JS</p>
                      <a
                        href="https://github.com/Venkat-Dhulipalla/Travel-list"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">Github</button>
                      </a>
                      <span style={{ marginRight: "10px" }}></span>
                      <a
                        href="https://venkat-travel-list.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">Demo</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* 5th */}
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img5} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Student Manager</h4>
                      <p>
                        Student Managment website With React JS, SQL and
                        Springboot
                      </p>
                      <a
                        href="https://github.com/Venkat-Dhulipalla/Student-Manager.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">Github</button>
                      </a>
                      <span style={{ marginRight: "10px" }}></span>
                      <a
                        href="https://github.com/Venkat-Dhulipalla/Student-Manager.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">Demo</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* 6th */}
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img6} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Todo App</h4>
                      <p>Todo Website With React JS</p>
                      <a
                        href="https://github.com/Venkat-Dhulipalla/TodoApp.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">Github</button>
                      </a>
                      <span style={{ marginRight: "10px" }}></span>
                      <a
                        href="https://venkat-react-todoapp.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">Demo</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-0" id="portfolio_col1">
              {/* 7th */}
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img2} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Weather App</h4>
                      <p>Weather App With React JS</p>
                      <a
                        href="https://github.com/Venkat-Dhulipalla/React-Weather-App"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">Github</button>
                      </a>
                      <span style={{ marginRight: "10px" }}></span>
                      <a
                        href="https://weather-app-venkat.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">Demo</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img5} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Ezewev Agency Tempalte</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-EvewezTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Github
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img6} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Tech Company Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-WebTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Github
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* End here 7  */}
            {/* <div className="row gx-0" id="portfolio_col2">
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img7} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Sviss Tours Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-TouristsTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Github
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img8} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Electricity Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-ElectricTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Github
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img9} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Property Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-HouseTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Github
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-0" id="portfolio_col3">
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img10} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>UniLend App Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-AppTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Github
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img11} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Agro Farm Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-FurnitureTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Github
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="text-center pt-4 d-flex justify-content-center">
            <button
              className="btn3 border-0 mt-3"
              id="btn3"
              onClick={handleblog}
            >
              Show More ...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
