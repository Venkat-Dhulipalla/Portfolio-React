import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer container-fluid">
        <div className="footer_main container">
          <div className="footer_1">
            <a className="navbar-brand my-3" href="#">
              <h2>Venkat</h2>
              <h2>Venkat</h2>
            </a>
            <p className="mt-4">
              Let's build something incredible together. Reach out via email or
              connect on LinkedIn and GitHub. Explore my portfolio for more.
            </p>
            <div className="ft_icon">
              <a
                href="https://www.linkedin.com/in/venkat-dhulipalla/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Venkat-Dhulipalla"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="footer_2">
            <h4 className="pb-2">Quick Links</h4>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact"> Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_3">
            <h4 className="pb-2">Leave A Message</h4>

            <form action="https://formspree.io/f/xgegkpkj" method="POST">
              <div className="footer_3_input mt-4">
                <input
                  type="text"
                  name="message"
                  placeholder="Message"
                  required
                />

                <button className="btn3" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- ******************************************** --> */}
      <div className="footer_end">
        <p>© 2024 | All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
