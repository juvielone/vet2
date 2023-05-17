import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllSrv } from "../features/service/srvSlice";
import { getAllPromo } from "../features/promotion/promoSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import paw from "../img/paw.svg";
import pic1 from "../img/pic1.png";
import pic2 from "../img/pic2.png";
import pic3 from "../img/pic3.png";
import pic4 from "../img/pic4.png";
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

  // Call promotion
  const promotion = useSelector((state) => state.promotion.promotion);
  const promotionLoading = useSelector((state) => state.promotion.isLoading);

  useEffect(() => {
    // Fetch all service
    dispatch(getAllSrv());

    // Fetch all service
    dispatch(getAllPromo());
  }, [isError, isSuccess, dispatch]);

  const serviceClass =
    service.length <= 2 ? "col-lg-6 col-md-6" : "col-lg-4 col-md-4";

  const images = [pic1, pic2, pic3, pic4];
  const randomPicNum = Math.floor(Math.random() * 4) + 1;
  console.log(promotion);
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

            <div class="col-lg-6 dog-container" style={{ height: "30rem" }}>
              <img src={homePic} className="dog-pic" />
            </div>
          </div>
        </div>

        <div className="container-fluid service-container">
          <div class="container mt-4">
            <h1 class="pb-2 text-center">Our Services</h1>
            <div className="row pt-5 pb-5 container">
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

        {promotionLoading ? (
          <Spinner />
        ) : (
          <div className="container-fluid pb-5">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                {promotion.map((promo, index) => (
                  <div
                    className={
                      index === 0 ? "carousel-item active" : "carousel-item"
                    }
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6">
                          <img src={images[index + 1]} className="ms-5" />
                        </div>
                        <div className="col-lg-6">
                          <h1>{promo.promoName}</h1>
                          <p className="mt-5" style={{ fontSize: "1.5em" }}>
                            {promo.promoDesc}
                          </p>

                          <p className="mt-5" style={{ fontSize: "1.5em" }}>
                            Use this code to get {promo.promoDiscount}% discount
                            on all our services!
                            <button
                              className="btn btn-register-cta btn-primary btn-lg mt-4 "
                              style={{ color: "white", width: "15rem" }}
                              onClick={() =>
                                navigator.clipboard.writeText(promo.promoCode)
                              }
                            >
                              <h4>
                                {" "}
                                <i class="bi bi-clipboard-check me-3"></i>
                                {promo.promoCode}
                              </h4>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Homepage;
