import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppointmentForm from "../components/appointment/AppointmentForm";
import Samp from "../components/Samp";
import Spinner from "../components/Spinner";
import Header from "../components/Header";
import { getAppointments, reset } from "../features/appointment/apmSlice";
import avatar from "../img/avatar.png";
import faqIcon from "../img/faqIcon.svg";
import instructionsIcon from "../img/instructions-icon.svg";
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

  useEffect(() => {
    if (isError) {
      toast.error(message);
      // console.log(message);
    }

    // Check if user is logged in
    if (!user) {
      navigate("/login");
    }

    // Notifications
    // toast.success(`Welcome ${user.fname}`, {
    //   position: toast.POSITION.TOP_CENTER,
    //   toastId: user.email
    // });

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

            <div className="col-lg-6 row mt-5">
              <div class="card card-appointment">
                <div class="card-body">
                  <h3>
                    {" "}
                    <i class="bi bi-check-circle-fill me-3"></i> Appointment
                    Booked !
                  </h3>
                  <p className="ms-5 pt-2">
                    Please check your email for updates and reminders
                  </p>
                  <div className="card-line ms-3"></div>
                  <div className="row pt-2">
                    <span className="fs-5 pb-3" style={{ color: "#585252" }}>
                      Booked for
                    </span>
                    <div className="col-lg-6 fs-5">
                      {/* Pet Name */}
                      <p>
                        <span style={{ color: "#585252" }}>Pet Name: </span>
                        <span className="fw-bold">Sachi </span>
                      </p>

                      {/* Pet Type */}
                      <p>
                        <span style={{ color: "#585252" }}>Pet Type: </span>
                        <span className="fw-bold">Dog </span>
                      </p>

                      {/* Breed */}
                      <p>
                        <span style={{ color: "#585252" }}>Breed: </span>
                        <span className="fw-bold">Shitxu </span>
                      </p>
                    </div>
                    {/* Service */}
                    <div className="col-lg-6 fs-5">
                      {/* Pet Service */}
                      <p>
                        <span style={{ color: "#585252" }}>Pet Service: </span>
                        <span className="fw-bold">Vaccine </span>
                      </p>

                      {/* Pet Fee */}
                      <p>
                        <span style={{ color: "#585252" }}>Pet Fee: </span>
                        <span className="fw-bold">500.00 </span>
                      </p>
                    </div>
                  </div>
                  {/* Date and Button */}
                  <div className="row mt-2">
                    <div className="col-lg-6">
                      <p className="fs-5">Date and Time</p>
                      <p className="fw-bold fs-6">6:00 AM Sat, 08 Feb 2023</p>
                    </div>
                    <div className="col-lg-6 d-grid">
                      {" "}
                      <button
                        className="btn btn-outline-primary mt-3"
                        style={{ height: "3rem" }}
                      >
                        <h5>Reschedule</h5>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instruction CTA Button */}
              <button className="btn col-lg-6 mb-5 profile-cta ">
                <img
                  className="me-5"
                  src={instructionsIcon}
                  style={{ width: "10rem" }}
                />
              </button>
              {/* FAQ CTA Button */}
              <button className="btn col-lg-6 mb-5 profile-cta ">
                <img
                  className="me-5"
                  src={faqIcon}
                  style={{ width: "9rem", marginLeft: "2rem" }}
                />
              </button>
            </div>

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
