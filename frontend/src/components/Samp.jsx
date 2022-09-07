import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { updateAppointments } from "../features/appointment/apmSlice";

function Samp({ appointment }) {
  const dispatch = useDispatch();

  const { petName, petType, petAge, breed, service, date, time, _id } =
    appointment;
  //   Update State
  const [userApm, setUserApm] = useState({
    pName: petName,
    pType: petType,
    pAge: petAge,
    breedType: breed,
    pDate: date,
    pTime: time,
  });

  // Options Services
  const dbService = service.toString();
  const options = [
    { value: service, text: dbService },
    { value: "Check Up", text: "Check-Up 🩺" },
    { value: "Vaccine", text: "Vaccine 💉" },
    { value: "Grooming", text: "Grooming ✂" },
  ];

  const [services, setServices] = useState(options[0].value);
  const { pName, pType, pAge, breedType, pDate, pTime } = userApm;

  const onChange = (e) => {
    setUserApm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const apmData = {
      _id,
      petName: pName,
      petType: pType,
      petAge: pAge,
      breed: breedType,
      service: services,
      date: pDate,
      time: time,
    };

    dispatch(updateAppointments(apmData));
    // Refresh component upon submission
    window.location.reload(false);
  };

  //   Btn Modal ID's
  const apmId = appointment._id.toString().slice(0, 5);
  const modalId = petName + apmId;
  return (
    <>
      <button
        type="button"
        className="btn btn-primary mt-5 addApp-btn"
        data-bs-toggle="modal"
        data-bs-target={"#" + modalId}
      >
        <h3>
          <i class="bi bi-calendar-plus me-3"></i>
          {modalId}
        </h3>
      </button>

      {/* Modal Pop */}
      <div
        class="modal fade"
        id={modalId}
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
            {/* Form ==========================================*/}
            <div class="modal-body">
              <form className="row ms-3 mt-3" onSubmit={onSubmit}>
                {/* Pet Name */}
                <div className="col-lg-10">
                  <label for="exampleFormControlInput1" class="form-label">
                    Pet Name
                  </label>
                  <input
                    className="form-control "
                    type="text"
                    name="pName"
                    value={pName}
                    onChange={onChange}
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
                    name="pType"
                    value={pType}
                    onChange={onChange}
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
                    name="pAge"
                    value={pAge}
                    onChange={onChange}
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
                    name="breedType"
                    value={breedType}
                    onChange={onChange}
                    placeholder="Golden Retriever, Poodle, Bulldog"
                  />
                </div>

                {/* Services =======================*/}
                <div className="col-lg-10">
                  <label for="exampleFormControlInput1" class="form-label">
                    Services
                  </label>

                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.text}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="col-lg-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Date
                  </label>
                  <input
                    className="form-control"
                    onChange={onChange}
                    type="date"
                    name="pDate"
                    value={pDate}
                  />
                </div>

                {/* Time */}
                <div className="col-lg-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Time
                  </label>
                  <input
                    className="form-control "
                    type="time"
                    name="pTime"
                    value={pTime}
                    onChange={onChange}
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-success">
                    Update Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Samp;
