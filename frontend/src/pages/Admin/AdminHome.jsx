import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserTable from "../../components/admin/UserTable";
import ApmTable from "../../components/admin/ApmTable";
import ApmArchived from "../../components/admin/ApmArchived";
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
  }, [adminUser, navigate, isError, message, dispatch, appointments.apmStatus]);

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
    apm.apmStatus.includes("Cancelled")
  );

  // Archive Filter
  const archiveFilter = appointments.filter((apm) =>
    apm.apmStatus.includes("Archived")
  );

  // All appointment Filter
  const allAppointments = appointments.filter(
    (apm) => !apm.apmStatus.includes("Archived")
  );

  // All pending appointment Filter
  const pendingAppointments = appointments.filter((apm) =>
    apm.apmStatus.includes("Pending")
  );

  // All approve appointment Filter
  const approvedAppointments = appointments.filter((apm) =>
    apm.apmStatus.includes("Approved")
  );

  // All reject appointment Filter
  const rejectAppointments = appointments.filter((apm) =>
    apm.apmStatus.includes("Cancelled")
  );

  const [apointmentView, setAppointmentView] = useState(allAppointments);

  const viewTable = (filter) => {
    switch (filter) {
      case "Appointment":
        return <ApmTable appointments={apointmentView} dispatch={dispatch} />;
      case "Users":
        return <UserTable users={users} />;
      case "Archive":
        return <ApmArchived archives={archiveFilter} />;
      default:
        return <p>Please refresh</p>;
    }
  };

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
          <div className="col-lg-2 btn btn-primary card-genre">
            <div
              className="card-body"
              onClick={() => setAppointmentView(pendingAppointments)}
            >
              <span className="card-icon">
                <i class="bi bi-calendar-plus"></i>
              </span>
              <span className="card-desc">Pending</span>
              <h5>{pendingFilter.length}</h5>
            </div>
          </div>

          {/* Approved */}
          <div
            className="col-lg-2 btn btn-success card-genre"
            onClick={() => setAppointmentView(approvedAppointments)}
          >
            <div className="card-body">
              <span className="card-icon">
                <i class="bi bi-calendar2-check-fill"></i>
              </span>
              <span className="card-desc">Approved</span>
              <h5>{approveFilter.length}</h5>
            </div>
          </div>

          {/* Rejected */}
          <div
            className="col-lg-2 btn btn-danger card-genre"
            onClick={() => setAppointmentView(rejectAppointments)}
          >
            <div className="card-body">
              <span className="card-icon">
                <i class="bi bi-calendar-x-fill"></i>
              </span>
              <span className="card-desc">Rejected</span>
              <h5>{rejectFilter.length}</h5>
            </div>
          </div>

          {/* All */}
          <div
            className="col-lg-2 btn btn-dark card-genre"
            onClick={() => setAppointmentView(allAppointments)}
          >
            <div className="card-body">
              <span className="card-icon">
                <i class="bi bi-calendar-week-fill"></i>
              </span>
              <span className="card-desc">All</span>
              <h5>{allAppointments.length}</h5>
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
            <option
              selected
              onClick={() => {
                setFilter("Appointment");
              }}
            >
              Appointment
            </option>
            <option onClick={() => setFilter("Users")} value="Users">
              Users
            </option>
            <option onClick={() => setFilter("Archive")} value="Archive">
              Archive
            </option>
          </select>
          <div className="btn-toolbar mb-2 mb-md-0"></div>
        </div>

        {/* {viewApm ? (
          <ApmTable appointments={appointments} />
        ) : (
          <UserTable users={users} />
        )} */}

        {/* {filter == "Appointment" ? (
          <ApmTable appointments={appointments} dispatch={dispatch} />
        ) : (
          <UserTable users={users} />
        )} */}
        {viewTable(filter)}
        {/* ====================================== */}
      </main>
    </>
  );
};

export default AdminPanel;
