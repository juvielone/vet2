import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer-sec">
      <div className="">
        <footer className="text-center text-lg-start">
          <div className="container d-flex justify-content-center py-5">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-floating mx-2"
            >
              <i class="bi bi-facebook"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-floating mx-2"
            >
              <i class="bi bi-github"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-floating mx-2"
            >
              <i class="bi bi-instagram"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-floating mx-2"
            >
              <i class="bi bi-linkedin"></i>
            </button>
          </div>

          {/* Copyright  */}
          <div className="text-center text-black p-3 copyright">
            © 2020 Copyright:
            <a href="https://mdbootstrap.com/" />
            Juvielone Joshua Lagos
          </div>
          {/* Copyright  */}
        </footer>
      </div>
    </section>
  );
};

export default Footer;
