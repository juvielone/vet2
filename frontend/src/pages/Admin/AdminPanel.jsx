import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserTable from "../../components/admin/UserTable";

import {
  getUsers,
  getAppointments,
  reset,
} from "../../features/admin/adminSlice";

import "./admin.css";
const AdminPanel = () => {
  // Initialize Navigate  & Dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [viewUser, setViewUser] = useState(true);

  // Call user admin
  const { users, appointments, isLoading, isError, message } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // Fetch users
    dispatch(getUsers());

    // Fetch Appointments
    dispatch(getAppointments());

    // Clear appointment state when user unmounts(leave) the dashboard
    return () => {
      dispatch(reset());
    };
  }, [navigate, isError, message]);
  console.log(users);
  return (
    <>
      {/* Navigation ======================= */}
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <h2 className="text-white">Admin</h2>
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
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <span
                      data-feather="home"
                      className="align-text-bottom"
                    ></span>
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span
                      data-feather="file"
                      className="align-text-bottom"
                    ></span>
                    Users
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span
                      data-feather="shopping-cart"
                      className="align-text-bottom"
                    ></span>
                    Appointments
                  </a>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                <span>Request reports</span>
                <a
                  className="link-secondary"
                  href="#"
                  aria-label="Add a new report"
                >
                  <span
                    data-feather="plus-circle"
                    className="align-text-bottom"
                  ></span>
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    Current month
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* Navlinks  =========================================== */}

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {/* Main Chart ============================== */}

            {/* Pending */}
            <div className="row container">
              <div className="col-lg-3 btn btn-primary card-genre">
                <div className="card-body">
                  <span className="card-icon">
                    <i class="bi bi-calendar-plus"></i>
                  </span>
                  <span className="card-desc">Pending</span>
                  <h5>5</h5>
                </div>
              </div>

              {/* Approved */}
              <div className="col-lg-3 btn btn-success card-genre">
                <div className="card-body">
                  <span className="card-icon">
                    <i class="bi bi-calendar2-check-fill"></i>
                  </span>
                  <span className="card-desc">Approved</span>
                  <h5>8</h5>
                </div>
              </div>

              {/* Rejected */}
              <div className="col-lg-3 btn btn-danger card-genre">
                <div className="card-body">
                  <span className="card-icon">
                    <i class="bi bi-calendar-x-fill"></i>
                  </span>
                  <span className="card-desc">Rejected</span>
                  <h5>2</h5>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => setViewUser(true)}
                  >
                    Users
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => setViewUser(false)}
                >
                  Appointments
                </button>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">Appointment #</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Service</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>
                      <button type="button" class="btn btn-info">
                        View
                      </button>
                      <button type="button" class="ms-2 btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>

                  {viewUser ? (
                    <UserTable users={users} />
                  ) : (
                    <tr>
                      <td>Appointments</td>
                    </tr>
                  )}

                  {/* ====================================== */}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
