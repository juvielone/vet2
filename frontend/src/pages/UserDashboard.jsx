import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import avatar from "../img/avatar.png";
import AppointmentForm from "../components/AppointmentForm";
import "./user.css";

const UserDashboard = () => {
  const [appointment, setAppointment] = useState(false);

  // Initialize Navigate  & Dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Call user state
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

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

          {appointment ? (
            <div className="col-lg-12 mt-5">
              <button
                class="btn btn-primary btn-app"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <h5>
                  Appoint No: <span className="pe-5">DOG3330AVC</span>
                  <i class="bi bi-box-arrow-up-right"></i>
                </h5>
              </button>
              <div class="collapse" id="collapseExample">
                <div class="card card-body app-pop">
                  <p class="card-text">
                    {/* Pet Name */}
                    <h5 className="text-center mt-3">
                      Pet Name:
                      <span className="ms-5"> Yob </span>
                    </h5>
                    {/* Pet Type   */}
                    <h5 className="text-center mt-3">
                      Pet Type:
                      <span className="ms-5"> Dog </span>
                    </h5>

                    {/* Age   */}
                    <h5 className="text-center mt-3">
                      <span className="ms-4"> Age: </span>
                      <span className="ms-5"> 5 (Months) </span>
                    </h5>

                    {/* Breed   */}
                    <h5 className="text-center mt-3">
                      Breed:
                      <span className="ms-5"> Pitbull </span>
                    </h5>

                    {/* Services   */}
                    <h5 className="text-center mt-3">
                      <i class="bi bi-clipboard-check"></i>
                      <span className="ms-4"> Check-up </span>
                    </h5>
                  </p>

                  <div class="card-footer">Schedule in Nov 18 2022</div>
                </div>
              </div>
            </div>
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
