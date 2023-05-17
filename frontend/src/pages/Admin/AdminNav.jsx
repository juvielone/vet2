import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addAppointments,
  logout,
  reset,
} from "../../features/admin/adminSlice";
import logo from "../../img/vetlogo.png";

function AdminNav({ handleFilter }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle Form Call back
  const handleForm = (formData) => {
    console.log(formData);
    dispatch(addAppointments(formData));
  };

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
    dispatch(reset);
  };

  return (
    <Fragment>
      {/* Navigation ======================= */}
      <header
        className="navbar navbar-dark sticky-top  flex-md-nowrap p-0 shadow"
        style={{ backgroundColor: "#928CCA" }}
      >
        <nav className="navbar-brand">
          <img src={logo} width="240" height="78" />
        </nav>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            {/* <h3 className="light-text-emphasis">Admin Dashboard</h3> */}
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
            <div className="position-sticky sidebar-sticky">
              <ul className="nav flex-column" style={{ paddingTop: "4.5rem" }}>
                {/* Dashboard */}

                <li className="nav-item">
                  <Link
                    to="/admin"
                    className="btn btn-light"
                    style={{ width: "100%" }}
                  >
                    <span className="me-5 fs-5  mr-3">
                      <i class="bi bi-house-fill fs-4 pe-2"></i>
                      Dashboard
                    </span>
                  </Link>
                </li>

                {/* View Calendar */}
                <li className="nav-item mt-3">
                  <Link
                    to="/admin/cal"
                    className="btn btn-light"
                    style={{ width: "100%" }}
                  >
                    <span className="me-4 fs-5 ">
                      <i class="bi bi-calendar-event pe-2 "></i>
                      View Calendar
                    </span>
                  </Link>
                </li>

                <li class="border-top my-3 mt-3"></li>

                {/* Appointment Collapse */}
                <li class="mb-1 mt-3">
                  <button
                    class=" fs-5 btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#apm-collapse"
                    aria-expanded="true"
                  >
                    Appointment
                    <i class="bi bi-calendar3 ms-3"></i>
                  </button>
                  <div class="collapse show" id="apm-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small fs-6">
                      <li>
                        <a
                          className="link-dark d-inline-flex text-decoration-none rounded"
                          onClick={() => {
                            navigate("/admin/apmform");
                          }}
                        >
                          Add Appointment
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Services Collpase */}
                <li class="mb-1 mt-3">
                  <button
                    class=" fs-5 btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#service-collapse"
                    aria-expanded="true"
                  >
                    Time & Service
                    <i class="bi bi-funnel-fill ms-3"></i>
                  </button>
                  <div class="collapse show" id="service-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small fs-6">
                      <li>
                        <a
                          onClick={() => {
                            navigate("/admin/timeslot");
                          }}
                          class="link-dark d-inline-flex text-decoration-none rounded"
                        >
                          Update Time Slot
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            navigate("/admin/service");
                          }}
                          class="link-dark d-inline-flex text-decoration-none rounded"
                        >
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Promotion */}
                {/* Services Collpase */}
                <li class="mb-1 mt-3">
                  <button
                    class=" fs-5 btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#promo-collapse"
                    aria-expanded="true"
                  >
                    Promotions
                    <i class="bi bi-funnel-fill ms-3"></i>
                  </button>
                  <div class="collapse show" id="promo-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small fs-6">
                      <li>
                        <a
                          onClick={() => {
                            navigate("/admin/promo");
                          }}
                          class="link-dark d-inline-flex text-decoration-none rounded"
                        >
                          Promo Table
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="border-top my-3"></li>

                {/* Account Setting */}
                <li className="nav-item mt-5">
                  <a
                    // to="/admin"
                    onClick={onLogout}
                    className="btn btn-light"
                    style={{ width: "100%" }}
                  >
                    <span className="me-5 fs-5">
                      <i class="bi bi-box-arrow-in-right pe-2"></i>
                      Sign Out
                    </span>
                  </a>
                </li>

                {/* <li className="nav-item">
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
                </li> */}
                {/* =================================================== */}
                {/* <li className="nav-item">
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
                </li> */}
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
