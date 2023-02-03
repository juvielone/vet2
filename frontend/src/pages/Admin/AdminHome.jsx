import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserTable from "../../components/admin/UserTable";
import ApmTable from "../../components/admin/ApmTable";
import AdminNav from "./AdminNav";
import Spinner from "../../components/Spinner";

import {
  getUsers,
  getAppointments,
  reset,
} from "../../features/admin/adminSlice";

import "../css/admin.css";
const AdminPanel = ({ handleFilter, viewApm }) => {
  // Initialize Navigate  & Dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Filter State
  const [filter, setFilter] = useState("Appointment");

  // Call user admin
  const { users, adminUser, appointments, isLoading, isError, message } =
    useSelector((state) => state.admin);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // Check if user is logged in
    if (!adminUser) {
      navigate("/");
    }

    // Fetch users
    dispatch(getUsers());

    // Fetch Appointments
    dispatch(getAppointments());

    // Clear appointment state when user unmounts(leave) the dashboard
    return () => {
      dispatch(reset());
    };
  }, [adminUser, navigate, isError, message, dispatch]);

  console.log(filter);
  // Approve Filter
  const approveFilter = appointments.filter((apm) =>
    apm.apmStatus.includes("Approved")
  );

  // Pending Filter
  const pendingFilter = appointments.filter((apm) =>
    apm.apmStatus.includes("Pending")
  );

  // Reject Filter
  const rejectFilter = appointments.filter((apm) =>
    apm.apmStatus.includes("Reject")
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <AdminNav handleFilter={handleFilter} />

      <main
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        style={{ paddingBottom: "100%" }}
      >
        {/* Main Chart ============================== */}

        {/* Pending */}
        <div className="row container">
          <div className="col-lg-3 btn btn-primary card-genre">
            <div className="card-body">
              <span className="card-icon">
                <i class="bi bi-calendar-plus"></i>
              </span>
              <span className="card-desc">Pending</span>
              <h5>{pendingFilter.length}</h5>
            </div>
          </div>

          {/* Approved */}
          <div className="col-lg-3 btn btn-success card-genre">
            <div className="card-body">
              <span className="card-icon">
                <i class="bi bi-calendar2-check-fill"></i>
              </span>
              <span className="card-desc">Approved</span>
              <h5>{approveFilter.length}</h5>
            </div>
          </div>

          {/* Rejected */}
          <div className="col-lg-3 btn btn-danger card-genre">
            <div className="card-body">
              <span className="card-icon">
                <i class="bi bi-calendar-x-fill"></i>
              </span>
              <span className="card-desc">Rejected</span>
              <h5>{rejectFilter.length}</h5>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          {/* <h1 className="h2">Dashboard</h1> */}
          <select
            value={filter}
            class="form-select mt-4"
            onChange={(e) => setFilter(e.target.value)}
            style={{ width: "25%" }}
          >
            <option selected onClick={() => setFilter("Appointment")}>
              Appointment
            </option>
            <option onClick={() => setFilter("Users")} value="Users">
              Users
            </option>
          </select>
          <div className="btn-toolbar mb-2 mb-md-0"></div>
        </div>

        {/* {viewApm ? (
          <ApmTable appointments={appointments} />
        ) : (
          <UserTable users={users} />
        )} */}

        {filter == "Appointment" ? (
          <ApmTable appointments={appointments} />
        ) : (
          <UserTable users={users} />
        )}

        {/* ====================================== */}
      </main>
    </>
  );
};

export default AdminPanel;
