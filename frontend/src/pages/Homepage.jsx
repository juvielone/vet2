import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import paw from "../img/paw.svg";
import doggo from "../img/dog-hero.png";

import "./homepage.css";
const Homepage = () => {
  return (
    <Fragment>
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-6">
            <div className="heading-content">
              <h1>All Creatures,</h1>
              <h1>Great and Small</h1>

              <p className="mt-5 ms-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>

              <button className="btn btn-register btn-primary btn-lg mt-4">
                <img src={paw} width="45" height="41" className="paw" />
                <Link to="/register" className="btn-link">
                  Register
                </Link>
              </button>

              <button className="btn btn-link btn-login mt-4">
                <i class="bi bi-person-fill me-1"></i>
                Login
              </button>
            </div>
          </div>

          <div class="col-lg-6 dog-container">
            <img src={doggo} width="480" height="600" className="dog-pic" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
