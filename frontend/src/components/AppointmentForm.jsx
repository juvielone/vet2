import React from "react";
import "./appointmentForm.css";

const AppointmentForm = () => {
  return (
    <div className="col-lg-12 mt-5 pb-5">
      <h1 className="text-center mt-5 app-msg">You have no appointment</h1>
      <button
        type="button"
        className="btn btn-primary mt-5 addApp-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <h3>
          <i class="bi bi-calendar-plus me-3"></i>
          Set Appointment
        </h3>
      </button>

      {/* Modal Pop */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Appointment Form
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* Form */}
              <form className="row ms-3 mt-3">
                {/* Pet Name */}
                <div className="col-lg-10">
                  <label for="exampleFormControlInput1" class="form-label">
                    Pet Name
                  </label>
                  <input
                    className="form-control "
                    type="text"
                    name="pname"
                    placeholder="Pet Name"
                  />
                </div>

                {/* Pet Type */}

                <div className="col-lg-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Pet Type
                  </label>
                  <input
                    className="form-control "
                    type="text"
                    name="lname"
                    placeholder="Dog, Cat, Snake"
                  />
                </div>
                {/* Pet Age */}

                <div className="col-lg-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Pet Age
                  </label>
                  <input
                    className="form-control "
                    type="petAge"
                    name="petAge"
                    placeholder="2 Months"
                  />
                </div>

                {/* Breed */}
                <div className="col-lg-10">
                  <label for="exampleFormControlInput1" class="form-label">
                    Breed
                  </label>
                  <input
                    className="form-control "
                    type="text"
                    name="fname"
                    placeholder="Golden Retriever, Poodle, Bulldog"
                  />
                </div>

                {/* Services */}
                <div className="col-lg-10">
                  <label for="exampleFormControlInput1" class="form-label">
                    Services
                  </label>

                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="Check-up">Check-Up</option>
                    <option value="Vaccines">Vaccines</option>
                    <option value="Grooming">Grooming</option>
                  </select>
                </div>

                {/* Date */}
                <div className="col-lg-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Date
                  </label>
                  <input className="form-control " type="date" name="time" />
                </div>

                {/* Time */}
                <div className="col-lg-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Time
                  </label>
                  <input
                    className="form-control "
                    type="time"
                    name="fname"
                    placeholder="Golden Retriever, Poodle, Bulldog"
                  />
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Set Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
