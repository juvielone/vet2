import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic2 from "../img/pic2.png";
import vetDog from "../img/vetDog.png";

function Contact() {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#EFEEF7" }}>
        <div className="container">
          <div
            className="row"
            style={{ paddingBottom: "3rem", paddingTop: "2rem" }}
          >
            <div className="col-lg-6">
              <h1>Contact Us</h1>
              <p className="mt-5" style={{ fontSize: "1.5rem" }}>
                If you have any questions, concerns, or would like to schedule
                an appointment, please don't hesitate to reach out to us at the
                number provided. Our team of experienced veterinarians and staff
                are here to help you and your furry companions with all your
                veterinary needs.
              </p>
              <button type="button" class="btn btn-primary btn-lg mt-5">
                <i class="bi bi-telephone-fill me-2"></i>
                289526787
              </button>
            </div>
            <div className="col-lg-6">
              <img src={vetDog} style={{ width: "35rem" }} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
