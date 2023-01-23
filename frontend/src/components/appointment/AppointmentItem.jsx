import React from "react";

const AppointmentItem = ({ appointment }) => {
  return (
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
              <span className="ms-5"> {appointment.petName} </span>
            </h5>
            {/* Pet Type   */}
            <h5 className="text-center mt-3">
              Pet Type:
              <span className="ms-5"> {appointment.petType} </span>
            </h5>

            {/* Age   */}
            <h5 className="text-center mt-3">
              <span className="ms-4"> Age: </span>
              <span className="ms-5"> {appointment.petAge} </span>
            </h5>

            {/* Breed   */}
            <h5 className="text-center mt-3">
              Breed:
              <span className="ms-5"> {appointment.breed} </span>
            </h5>

            {/* Services   */}
            <h5 className="text-center mt-3">
              <i class="bi bi-clipboard-check"></i>
              <span className="ms-4"> {appointment.service} </span>
            </h5>
          </p>

          <div class="card-footer">Schedule in {appointment.date}</div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentItem;
