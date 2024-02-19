import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handleDownload = () => {
    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.href = "src/assets/portfolio/VenkatDhulipalla.pdf"; // Set the URL of the PDF file
    anchor.download = "VenkatDhulipalla.pdf"; // Set the desired filename for the downloaded file

    // Programmatically trigger a click event on the anchor element
    document.body.appendChild(anchor);
    anchor.click();

    // Clean up
    document.body.removeChild(anchor);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar_main container-fluid">
        <div className="container navbar-col gx-0">
          <NavLink className="navbar-brand" to="/">
            <h2>Venkat</h2>
            <h2>Venkat</h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto nav_ul">
              <li className="nav-item">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/skills"> Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services"> Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio"> Portfoilo</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact"> Contact</NavLink>
              </li>
            </ul>
            <button type="button" className="nav_btn1" onClick={handleDownload}>
              Resume
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
