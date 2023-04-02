import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppointmentForm from "../components/appointment/AppointmentForm";
import Samp from "../components/Samp";
import Spinner from "../components/Spinner";
import Header from "../components/Header";
import { getAppointments, reset } from "../features/appointment/apmSlice";
import { getAllSrv } from "../features/service/srvSlice";
import { getSchedules } from "../features/schedule/schedSlice";
import ScheduleCard from "../components/user/scheduleCard";
import "./css/user.css";

const UserDashboard = () => {
  // Initialize Navigate  & Dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Call user state
  const { user } = useSelector((state) => state.auth);
  // Call appointment state
  const { appointment, isLoading, isError, message } = useSelector(
    (state) => state.appointment
  );

  // Call service
  const { service } = useSelector((state) => state.service);

  const { schedule } = useSelector((state) => state.schedule);
  useEffect(() => {
    if (isError) {
      toast.error(message);
      // console.log(message);
    }

    // Fetch all service
    dispatch(getAllSrv());

    // Check if user is logged in
    if (!user) {
      navigate("/login");
    }

    // Fetch appointments
    dispatch(getAppointments());
    const userEmail = user.email.toString();
    dispatch(getSchedules(userEmail));

    // Clear appointment state when user unmounts(leave) the dashboard
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const latestSched = schedule.length - 1;
  const latestResult = schedule.slice(latestSched, latestSched + 1);
  // const currentService = latestResult[0].service;
  // console.log(currentService);

  const filteredService = service.filter((perServ) =>
    perServ.srvName
      .toLowerCase()
      .includes(latestResult[0].service.toLowerCase())
  );
  console.log(filteredService);
  return (
    <>
      <Header bgColor={"#867DD9"} />
      <div style={{ backgroundColor: "#EFEEF7", margin: "0", padding: "0" }}>
        <section className="container pt-5 pb-5">
          <div className="container row" style={{ paddingBottom: "15rem" }}>
            <div className="col-lg-6 pb-5">
              <div class="card-info mt-5  row">
                {/* <img src={avatar} class="card-img-top avatar" /> */}
                <i
                  class="bi bi-person-fill text-center"
                  style={{ fontSize: "10rem", color: "#867DD9" }}
                ></i>
                <div class="card-body container">
                  <h2 class="card-title text-center">
                    {user && user.fname + " " + user.lname}
                  </h2>
                  <div className="profile-line mx-auto mt-3"></div>
                  <p class="card-text mt-5 pb-5">
                    {/* Address */}
                    <h5 className="text-center ms-4 mt-3">
                      From
                      <span className="ms-5">
                        <i class="bi bi-geo-alt-fill me-2"></i>
                        {user && user.streetNo + " " + user.city}
                      </span>
                    </h5>

                    <h5 className="text-center me-5 mt-3">
                      Member Since
                      <span className="ms-5">
                        {/* Timestamp to momentJs */}
                        2021, Feb 22
                      </span>
                    </h5>
                  </p>

                  <div className="row mt-2 pb-5">
                    <button
                      className="btn col-lg-6 mt-5 mx-auto fs-5"
                      style={{ backgroundColor: "#867DD9", color: "white" }}
                    >
                      <i class="bi bi-tools me-3 "></i>
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Content Preview ===================================================== */}
            {/* {schedule.map((sched) => (
              <ScheduleCard sched={sched} />
            ))} */}

            {/* Render Latest Schedule */}
            {latestResult.map((sched) => (
              <ScheduleCard
                current={sched}
                fillServ={filteredService}
                service={service}
                user={user}
              />
            ))}
            {/* <div className="col-lg-6 row mt-5 pb-5 app-form app-content">
              <div className="col-lg-10 col-sm-6 col-xs-6">
                <h4>My Appointment</h4>
              </div>
              <div className="col-lg-2 col-sm-6 col-xs-6">
                <button className="btn btn-primary btn-lg">
                  <i class="bi bi-clock"></i>
                </button>
              </div> */}

            {/* Appointment Info */}

            {/* {appointment.length > 0 ? (
                appointment.map((apm) => (
                  <Samp key={apm._id} appointment={apm} />
                ))
              ) : (
                <AppointmentForm />
                <h1>Whehehe</h1>
              )} */}
            {/* </div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default UserDashboard;
