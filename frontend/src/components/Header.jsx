import React from "react";
import "./header.css";
import logo from "../img/vet-logo.png";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg  container" style={{ zIndex: 1 }}>
      <div class="container">
        <a className="navbar-brand" href="#">
          <h1 className="logo-title">
            <img src={logo} alt="" width="140" height="148"></img>
            The Vet Project
          </h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown ">
          <ul class="navbar-nav ms-auto gap-5">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="btn btn-lg btn-contact" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
