import React from "react";
import "./footer.css";
import AdminForm from "./admin/AdminForm";
const Footer = () => {
  return (
    <section className="footer-sec">
      <div className="">
        <footer className="text-center text-lg-start">
          <div className="container d-flex justify-content-center py-5">
            {/* Links to facebook page */}
          <a href="https://www.facebook.com/pettownph" target="_blank" rel="noreferrer">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-floating mx-2"
              >
              <i class="bi bi-facebook"></i>
            </button>
              </a>
         
            {/* Admin Controls */}
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#adminModal"
              className="btn btn-primary btn-lg btn-floating mx-2"
            >
              <i class="bi bi-key"></i>
            </button>
            {/* Admin Form Modal */}
            <AdminForm />
          </div>

          {/* Copyright  */}
          <div className="text-center text-black p-3 copyright">
            © 2022 Copyright: Group 9
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
