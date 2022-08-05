import React from "react";
import paw from "../img/paw.svg";
import pic1 from "../img/pic1.png";
import pic2 from "../img/pic2.png";
import pic3 from "../img/pic3.png";
import pic4 from "../img/pic4.png";

import "./register.css";

const Register = () => {
  return (
    <div className="container register-section">
      <div className="row">
        <div className="col-lg-6 form-container row">
          <h1 className="mt-2 signup-content">
            <i class="bi bi-patch-check-fill"></i>
            <span className="ms-3">Sign Up</span>
          </h1>
          <p className="mt-4 signup-content col-lg-10 ms-4  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi
            dignissimos aliquid odit aut! Id aliquam doloribus ullam sunt
            excepturi cupiditate delectus.
          </p>
          {/* Form */}
          <form className="row ms-3 mt-3">
            {/* First Name */}
            <div className="col-lg-5">
              <input
                className="form-control "
                type="text"
                name="fname"
                placeholder="First Name"
              />
            </div>

            {/* Last Name */}
            <div className="col-lg-5">
              <input
                className="form-control "
                type="text"
                name="lname"
                placeholder="Last Name"
              />
            </div>
            {/* Email */}
            <div className="col-lg-10">
              <input
                className="form-control "
                type="email"
                name="email"
                placeholder="Email(Required)"
              />
            </div>
            {/* Password */}
            <div className="col-lg-10">
              <input
                className="form-control "
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            {/* Mobile number */}
            <div className="col-lg-10">
              <input
                className="form-control "
                type="text"
                name="mobile"
                placeholder="Mobile number"
              />
            </div>

            {/* Street No */}
            <div className="col-lg-5">
              <input
                className="form-control "
                type="text"
                name="streetNo"
                placeholder="Street No"
              />
            </div>

            {/* City */}
            <div className="col-lg-5">
              <input
                className="form-control "
                type="text"
                name="city"
                placeholder="City"
              />
            </div>

            <button className="btn btn-success btn-register btn-lg">
              <img src={paw} width="45" height="41" className="paw" />
              Sign Up
            </button>
          </form>
        </div>

        {/*  Carousel */}
        <div className="col-lg-6">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide ms-5"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner ms-5">
              <div class="carousel-item active">
                <img src={pic1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={pic2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={pic3} class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
