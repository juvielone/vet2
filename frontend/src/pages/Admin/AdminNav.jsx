import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addAppointments } from "../../features/admin/adminSlice";
import logo from "../../img/vetlogo.png";
import CalModal from "./calendar/CalModal";

function AdminNav({ handleFilter }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // Handle Form Call back
  const handleForm = (formData) => {
    console.log(formData);
    dispatch(addAppointments(formData));
  };

  return (
    <Fragment>
      {/* Navigation ======================= */}
      <header
        className="navbar navbar-dark sticky-top  flex-md-nowrap p-0 shadow"
        style={{ backgroundColor: "#928CCA",  }}
      >
        <nav className="navbar-brand">
          <img src={logo} width="240" height="78" />
        </nav>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#">
              Sign out
            </a>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          {/* Navlinks =================================== */}
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column" style={{ paddingTop: "4.5rem" }}>
                <li className="nav-item">
                  <button className="btn btn-light">
                    <i class="bi bi-house pe-2"></i>
                    Dashboard
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-light"
                    onClick={() => {
                      navigate("/admin");
                      handleFilter(false);
                    }}
                  >
                    <i class="bi bi-people pe-2"></i>
                    Users
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-light"
                    onClick={() => {
                      navigate("/admin");
                      handleFilter(true);
                    }}
                  >
                    <i class="bi bi-clipboard-data-fill pe-2"></i>
                    Appointments
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-light"
                   onClick={() =>{
                     navigate("/admin/apmform") ;
                    }
                  }>
                  <i class="bi bi-calendar-plus pe-2"></i>
                    Add Appointment
                  </button>

                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                <span>Calendar View</span>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <Link to="/admin/cal" className="btn btn-light">
                    <i class="bi bi-calendar-event pe-2"></i>
                    View Calendar
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* Navlinks  =========================================== */}
    </Fragment>
  );
}

export default AdminNav;
