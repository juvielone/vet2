import moment from "moment";
import instructionsIcon from "../../img/instructions-icon.svg";
import faqIcon from "../../img/faqIcon.svg";

const ScheduleCard = ({ current }) => {
  const isDone = current.apmStatus == "Done" ? true : false;

  return (
    <>
      <div className="col-lg-6 row mt-5">
        <div class="card card-appointment">
          <div class="card-body">
            {isDone ? (
              <h1>Done Appointment</h1>
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
                      <span className="fw-bold">500.00 </span>
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
                    <button
                      className="btn btn-outline-primary mt-3"
                      style={{ height: "3rem" }}
                    >
                      <h5>Reschedule</h5>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
          {/* === */}
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
    </>
  );
};

export default ScheduleCard;
