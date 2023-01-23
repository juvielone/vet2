import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import paw from "../img/paw.svg";
import homePic from "../img/home-pic.png";

import "./css/homepage.css";
const Homepage = () => {
  return (
    <Fragment>
      <Header />
      <div className="homepage-sec">
        <div class="container text-center">
          <div class="row">
            <div class="col-lg-6">
              <div className="heading-content">
                <h1>One stop shop for all</h1>
                <h1>
                  your <span className="msg-intro">pet needs</span>
                </h1>

                <p className="mt-5 " style={{ color: "#392921" }}>
                  We have dog supplies, cat supplies, rodent supplies, reptile
                  supplies and fish supplies all in one roof. We also have pet
                  foods, supplements, medicines, cages and accessories. Pet Town
                  is vet owned and managed.
                </p>

                <div style={{ width: "fit-content" }}>
                  <a
                    href="/register"
                    className="btn btn-register-cta btn-primary btn-lg mt-4 btn-link "
                    style={{ color: "white", width: "18rem" }}
                  >
                    <img src={paw} width="45" height="41" className="paw" />
                    Set Appointment
                  </a>

                  <a href="/login" className="btn btn-link btn-login-cta mt-4">
                    <i class="bi bi-person-fill me-1"></i>
                    Login
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-6 dog-container" style={{ height: "35rem" }}>
              <img src={homePic} className="dog-pic" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Homepage;
