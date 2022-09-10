import React from "react";
import "./footer.css";
import AdminForm from "./admin/AdminForm";
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
            © 2020 Copyright: Juvielone Joshua Lagos
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
