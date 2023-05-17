import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllSrv } from "../features/service/srvSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import paw from "../img/paw.svg";
import pic1 from "../img/pic3.png";
import homePic from "../img/home-pic.png";
import "./css/homepage.css";
import HomeService from "../components/homepage/HomeService";
import Spinner from "../components/Spinner";

const Homepage = () => {
  const dispatch = useDispatch();

  // Call service selector
  const { service, isError, isSuccess, isLoading } = useSelector(
    (state) => state.service
  );
  useEffect(() => {
    // Fetch all service
    dispatch(getAllSrv());
    console.log(service);
  }, [isError, isSuccess, dispatch]);

  const serviceClass =
    service.length <= 2 ? "col-lg-6 col-md-6" : "col-lg-4 col-md-4";
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
                  <Link
                    to="/register"
                    className="btn btn-register-cta btn-primary btn-lg mt-4 btn-link "
                    style={{ color: "white", width: "18rem" }}
                  >
                    <img src={paw} width="45" height="41" className="paw" />
                    Set Appointment
                  </Link>

                  <Link to="/login" className="btn btn-link btn-login-cta mt-4">
                    <i class="bi bi-person-fill me-1"></i>
                    Login
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-lg-6 dog-container" style={{ height: "35rem" }}>
              <img src={homePic} className="dog-pic" />
            </div>
          </div>
        </div>

        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-6">
              <img src={pic1} />
            </div>
            <div className="col-lg-6">
              <h1>Happy Pet Month!</h1>
              <p className="mt-5" style={{ fontSize: "1.5em" }}>
                Let's embrace the bond we share with our pets and shower them
                with extra love, care, and attention. From playful romps in the
                park to cozy cuddle sessions at home, every moment spent with
                our pets becomes a treasured memory, reminding us of the
                happiness they bring.
              </p>

              <p className="mt-5" style={{ fontSize: "1.5em" }}>
                Use this code to get 2% discount on all our services!
                <button
                  className="btn btn-register-cta btn-primary btn-lg mt-4 "
                  style={{ color: "white", width: "12rem" }}
                  onClick={() => navigator.clipboard.writeText("PETMNTH")}
                >
                  <h4>
                    {" "}
                    <i class="bi bi-clipboard-check me-3"></i>PETMNTH
                  </h4>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div class="container" id="hanging-icons">
          <h1 class="pb-2 border-bottom text-center">Our Services</h1>
          <div className="row pt-5 pb-5">
            {isLoading ? (
              <Spinner />
            ) : (
              service.map((perService) => (
                <div class={serviceClass}>
                  <HomeService service={perService} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Homepage;
