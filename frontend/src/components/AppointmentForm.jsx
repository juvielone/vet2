import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createAppointment } from "../features/appointment/apmSlice";
import "./appointmentForm.css";

const AppointmentForm = () => {
  const [userApm, setUserApm] = useState({
    petName: "",
    petType: "",
    petAge: "",
    breed: "",
    date: "",
    time: "",
  });

  const { petName, petType, petAge, breed, date, time } = userApm;

  // Options Services
  const options = [
    { value: "", text: "--Choose Service--" },
    { value: "Check Up", text: "Check-Up 🩺" },
    { value: "Vaccine", text: "Vaccine 💉" },
    { value: "Grooming", text: "Grooming ✂" },
  ];

  const [service, setService] = useState(options[0].value);
  const dispatch = useDispatch();

  

  const onChange = (e) => {
    setUserApm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const apmData = {
      petName,
      petType,
      petAge,
      breed,
      service,
      date,
      time,
    };
    dispatch(createAppointment(apmData));
    // Refresh component
    toast.success("Appointment created successfully")
  };
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
            {/* Form ==========================================*/}
            <div class="modal-body">
              <form className="row ms-3 mt-3 needs-validation" novalidate>
                {/* Pet Name */}
                <div className="col-lg-10">
                  <label for="exampleFormControlInput1" class="form-label">
                    Pet Name
                  </label>
                 <input
                    className="form-control"
                    type="text"
                    name="petName"
                    value={petName}
                    onChange={onChange}
                    placeholder="Pet Name"
                    required
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
                    name="petType"
                    value={petType}
                    onChange={onChange}
                    placeholder="Dog, Cat, Snake"
                    required
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
                    value={petAge}
                    onChange={onChange}
                    placeholder="2 Months"
                    required
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
                    name="breed"
                    value={breed}
                    onChange={onChange}
                    placeholder="Golden Retriever, Poodle, Bulldog"
                    required
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
                    value={service}
                    onChange={(e) => setService(e.target.value)}
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
                    name="date"
                    value={date}
                    required
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
                    name="time"
                    value={time}
                    onChange={onChange}
                    required
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
                  <button type="button" onClick={handleSubmit} data-bs-dismiss="modal" class="btn btn-primary">
                    Set Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
