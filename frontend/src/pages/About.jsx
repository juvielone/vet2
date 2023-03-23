import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic1 from "../img/pic1.png";
import pic2 from "../img/pic2.png";
import pic3 from "../img/pic3.png";
import pic4 from "../img/pic4.png";

function About() {
  return (
    <>
      <Header />
      <div
        className="container-fluid"
        style={{ backgroundColor: "#EFEEF7", margin: "0", padding: "0" }}
      >
        <div className="container">
          <h1 className="text-center" style={{ paddingBottom: "1.5rem" }}>
            About Us
          </h1>

          <div className="row">
            <div className="col-lg-3">
              <img
                src={pic1}
                style={{ width: "20rem", paddingBottom: "5rem" }}
              />
            </div>
            <div className="col-lg-3">
              <img
                src={pic2}
                style={{ width: "20rem", paddingBottom: "5rem" }}
              />
            </div>
            <div className="col-lg-3">
              <img
                src={pic3}
                style={{ width: "20rem", paddingBottom: "5rem" }}
              />
            </div>
            <div className="col-lg-3">
              <img
                src={pic4}
                style={{ width: "20rem", paddingBottom: "5rem" }}
              />
            </div>
          </div>
          <p className="" style={{ fontSize: "1.5rem" }}>
            We are a team of dedicated veterinarians who are passionate about
            providing high-quality care to animals in need. Our clinic is
            located at{" "}
            <i>
              #75 Tandang Sora Ave. Brgy. Culiat, Quezon City, Philippines,
              1128,{" "}
            </i>
            and we are proud to serve the local community and beyond.
          </p>

          <p style={{ fontSize: "1.5rem" }}>
            Our mission is to provide compassionate and personalized veterinary
            care to our clients and their pets. We understand that pets are an
            important part of your family, and we strive to treat each patient
            with the same level of care and attention that we would give to our
            own pets.
          </p>
          <p style={{ paddingBottom: "2rem", fontSize: "1.5rem" }}>
            If you have any questions or concerns about your pet's health,
            please do not hesitate to contact us at <i>289526787.</i> We look
            forward to meeting you and your furry friends!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
