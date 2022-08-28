import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentItem from "../components/AppointmentItem";
import Samp from "../components/Samp";
import Spinner from "../components/Spinner";
import { getAppointments, reset } from "../features/appointment/apmSlice";
import avatar from "../img/avatar.png";
import "./user.css";

const UserDashboard = () => {
  const [appointmentExist, setAppointmentExist] = useState(false);

  // Initialize Navigate  & Dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Call user state
  const { user } = useSelector((state) => state.auth);
  // Call appointment state
  const { appointment, isLoading, isError, message } = useSelector(
    (state) => state.appointment
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // Check if user is logged in
    if (!user) {
      navigate("/login");
    }

    // Fetch appointments
    dispatch(getAppointments());

    // Clear appointment state when user unmounts(leave) the dashboard
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="container mt-5 pb-5">
      <div className="container row" style={{ paddingBottom: "15rem" }}>
        <div className="col-lg-6 pb-5 text-white">
          <div class="card-info mt-5 rounded row">
            <img src={avatar} class="card-img-top avatar" />
            <div class="card-body">
              <h2 class="card-title text-center">
                {user && user.fname + " " + user.lname}
              </h2>
              <p class="card-text">
                {/* Email */}
                <h5 className="text-center mt-3">
                  <i class="bi bi-envelope col-lg-6"></i>
                  <span className="ms-5"> {user && user.email} </span>
                </h5>
                {/* Phone Number */}
                <h5 className="text-center mt-3">
                  <i class="bi bi-telephone"></i>
                  <span className="ms-5"> 09458120633 </span>
                </h5>

                {/* Address */}
                <h5 className="text-center mt-3">
                  <i class="bi bi-geo-alt-fill"></i>

                  <span className="ms-5">
                    Lives in{" "}
                    <strong>{user && user.streetNo + " " + user.city}</strong>
                  </span>
                </h5>
              </p>

              <div className="row mt-5 pb-5">
                <h4 className="status col-lg-4 col-sm-12">Status </h4>
                <button class="btn btn-light col-lg-3 col-sm-12 btn-stat">
                  <i class="bi bi-person-plus-fill me-3"></i>
                  New Member
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================== */}

        <div className="col-lg-6 row mt-5 pb-5 app-form app-content">
          <div className="col-lg-10 col-sm-6 col-xs-6">
            <h4>My Appointment</h4>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-6">
            <button className="btn btn-primary btn-lg">
              <i class="bi bi-clock"></i>
            </button>
          </div>

          {/* Appointment Info */}

          {appointment.length > 0 ? (
            appointment.map((apm) => <Samp key={apm._id} appointment={apm} />)
          ) : (
            <AppointmentForm />
            // <h1>Whehehe</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
