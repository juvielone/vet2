import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, register } from "../features/auth/authSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import paw from "../img/paw.svg";
import pic1 from "../img/pic1.png";
import pic2 from "../img/pic2.png";
import pic3 from "../img/pic3.png";
import pic4 from "../img/pic4.png";

import "./register.css";

const Register = () => {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
    streetNo: "",
    city: "",
  });

  // Destructuring userdata
  const { fname, lname, email, password, phone, streetNo, city } = userData;

  // Initialize Navigate  & Dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Calling states using useSelector
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // If registration is success navigate to dashboard
    if (isSuccess || user) {
      navigate("/mydashboard");
    }

    // calls reset reducer after either of two are called
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      fname,
      lname,
      email,
      password,
      phone,
      streetNo,
      city,
    };

    // Calling regiter in our authSlice
    // Passing userDate in the register
    dispatch(register(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <div className="container register-section">
        <div className="row">
          <div className="col-lg-6 form-container row">
            <h1 className="mt-2 signup-content">
              <i class="bi bi-patch-check-fill"></i>
              <span className="ms-3">Sign Up</span>
            </h1>
            <p className="mt-4 signup-content col-lg-10 ms-4  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              sequi dignissimos aliquid odit aut! Id aliquam doloribus ullam
              sunt excepturi cupiditate delectus.
            </p>
            {/* Form */}
            <form className="row ms-3 mt-3" onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="col-lg-5">
                <input
                  className="form-control "
                  type="text"
                  name="fname"
                  value={fname}
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </div>

              {/* Last Name */}
              <div className="col-lg-5">
                <input
                  className="form-control "
                  type="text"
                  name="lname"
                  value={lname}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
              {/* Email */}
              <div className="col-lg-10">
                <input
                  className="form-control "
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email(Required)"
                />
              </div>
              {/* Password */}
              <div className="col-lg-10">
                <input
                  className="form-control "
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>

              {/* Mobile number */}
              <div className="col-lg-10">
                <input
                  className="form-control "
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  placeholder="Mobile number"
                />
              </div>

              {/* Street No */}
              <div className="col-lg-5">
                <input
                  className="form-control "
                  type="text"
                  name="streetNo"
                  value={streetNo}
                  onChange={handleChange}
                  placeholder="Street Name & No, Brgy."
                />
              </div>

              {/* City */}
              <div className="col-lg-5">
                <input
                  className="form-control "
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleChange}
                  placeholder="City"
                />
              </div>

              <button
                type="submit"
                className="btn btn-success btn-signup btn-lg"
              >
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
                <div class="carousel-item active" data-bs-interval="2000">
                  <img src={pic1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={pic2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={pic3} class="d-block w-100" alt="..." />
                </div>

                <div class="carousel-item">
                  <img src={pic4} class="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Register;
