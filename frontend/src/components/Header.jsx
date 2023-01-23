import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import "./header.css";
import logo from "../img/vetlogo.png";

const Header = ({ bgColor }) => {
  // Initialize Navigate  & Dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Call user state
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset);
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: bgColor ? bgColor : "#EFEEF7",
        paddingTop: "2rem",
      }}
    >
      <div className="container">
        {user ? (
          <Link to="/" className="navbar-brand">
            <h1 className="logo-title">
              <img src={logo} width="240"></img>
            </h1>
          </Link>
        ) : (
          <Link to="/" className="navbar-brand">
            <h1 className="logo-title ">
              <img src={logo} alt="" width="240" height="78"></img>
            </h1>
          </Link>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto gap-5">
            {user ? (
              <>
                {/* Dashboard */}
                <li className="nav-item">
                  <button className="nav-link btn-lg btn btn-light">
                    <i class="bi bi-house me-2"></i>
                    Dashboard
                  </button>
                </li>

                {/* Appointment */}
                <li class="nav-item dropdown ">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "white" }}
                  >
                    <i class="bi bi-calendar-event me-2"></i>
                    Appointment
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Log out */}
                <li className="nav-item">
                  <button
                    onClick={onLogout}
                    className="nav-link btn btn-lg btn-contact"
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link home-nav"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link home-nav">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link btn btn-lg btn-contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
