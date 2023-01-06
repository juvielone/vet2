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
          <h1 className="text-center" style={{ paddingBottom: "1rem" }}>
            About Us
          </h1>
          <h4 className="text-center" style={{ paddingBottom: "5rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            natus tempore. Quisquam, consectetur iusto beatae ipsa eligendi iure
            modi excepturi, voluptate voluptatem esse laborum alias ea
            praesentium, eum suscipit optio!
          </h4>
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
