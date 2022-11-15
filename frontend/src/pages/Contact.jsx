import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic2 from "../img/pic2.png";

function Contact() {
  return (
    <>
      <Header />
      <div className="container">
        <div
          className="row"
          style={{ paddingBottom: "3rem", paddingTop: "2rem" }}
        >
          <div className="col-lg-6">
            <h1>Contact Us</h1>
            <h4 style={{ marginTop: "3rem" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              commodi porro pariatur fuga quibusdam, tenetur nam amet quod
              deleniti ut dolores veritatis quo architecto ratione culpa
              voluptas reiciendis possimus. Eius?
            </h4>
            <button type="button" class="btn btn-primary btn-lg mt-5">
              <i class="bi bi-chat-fill me-2"></i>
              Chat With Us
            </button>
          </div>
          <div className="col-lg-6">
            <img src={pic2} className="ms-5" />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
