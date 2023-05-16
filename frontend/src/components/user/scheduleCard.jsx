import { Link } from "react-router-dom";
import moment from "moment";

import instructionsIcon from "../../img/instructions-icon.svg";
import faqIcon from "../../img/faqIcon.svg";
import ReschedBtn from "../user/reschedBtn";
import UserApmForm from "./userApmForm";
const ScheduleCard = ({ current, fillServ, service, user }) => {
  const isDone = current.apmStatus == "Archived" ? true : false;

  return (
    <>
      <div className="col-lg-6 row mt-5">
        <div class="card card-appointment mb-4">
          <div class="card-body pb-5">
            {isDone ? (
              <>
                <div className="text-center pt-3">
                  <i class="bi bi-calendar-x-fill fs-1 text-center"></i>
                  <h3 class="fw-bold mb-0 fs-4 pb-2 ">No Appointment set.</h3>
                  <p>Please set an appointment here.</p>
                </div>
                <UserApmForm service={service} user={user} />
              </>
            ) : (
              <>
                {/* // Schedule process not done */}
                <h3>
                  {" "}
                  <i class="bi bi-check-circle-fill me-3"></i> Appointment{" "}
                  {current.apmStatus} !
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
                      <span className="fw-bold"> {current.petName} </span>
                    </p>

                    {/* Pet Type */}
                    <p>
                      <span style={{ color: "#585252" }}>Pet Type: </span>
                      <span className="fw-bold">{current.petType} </span>
                    </p>

                    {/* Breed */}
                    <p>
                      <span style={{ color: "#585252" }}>Breed: </span>
                      <span className="fw-bold">{current.breed} </span>
                    </p>
                  </div>
                  {/* Service */}
                  <div className="col-lg-6 fs-5">
                    {/* Pet Service */}
                    <p>
                      <span style={{ color: "#585252" }}>Pet Service: </span>
                      <span className="fw-bold">{current.service} </span>
                    </p>

                    {/* Pet Fee */}
                    <p>
                      <span style={{ color: "#585252" }}>Pet Fee: </span>
                      <span className="fw-bold">
                        {/* {filteredService && filteredService.srvFee} */}
                        {fillServ[0].srvFee + " PHP"}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Date and Button */}
                <div className="row mt-2">
                  <div className="col-lg-6">
                    <p className="fs-5">Date and Time</p>
                    <p className="fw-bold fs-6">
                      {/* 6:00 AM Sat, 08 Feb 2023 */}
                      {`${current.time} , ${moment(current.date).format(
                        "MMMM Do YYYY"
                      )}`}
                    </p>
                  </div>
                  <div className="col-lg-6 d-grid">
                    {" "}
                    {/* <button
                      className="btn btn-outline-primary mt-3"
                      style={{ height: "3rem" }}
                    >
                      <h5>Reschedule</h5>
                    </button> */}
                    <ReschedBtn currentApm={current} />
                  </div>
                </div>
              </>
            )}
          </div>
          {/* === */}
        </div>

        {/* FAQ CTA Button */}
        {/* Appointment */}
        <Link
          to="/myappointment"
          className="nav-item btn col-lg-6 mb-5 profile-cta"
          style={{ textDecoration: "none" }}
        >
          <i
            class="bi bi-calendar-heart-fill me-2"
            style={{ fontSize: "4rem", color: "#867DD9" }}
          ></i>{" "}
          <br />
          My Appointment
        </Link>
      </div>
    </>
  );
};

export default ScheduleCard;
