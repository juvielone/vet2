import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getOne,
  reset,
  updateAppointment,
} from "../../features/admin/adminSlice";

const ApmForm = ({ apm }) => {
  // Initialize  Dispatch
  const dispatch = useDispatch();

  const { petName, petType, petAge, breed, service, date, time, _id } = apm;
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

  // Local States
  const [services, setServices] = useState(options[0].value);
  const { pName, pType, pAge, breedType, pDate, pTime } = userApm;

  const onChange = (e) => {
    setUserApm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Approve and Update Button =====================================================================

  const handleUpdate = () => {
    const apmData = {
      _id,
      petName: pName,
      petType: pType,
      petAge: pAge,
      breed: breedType,
      service: services,
      date: pDate,
      time: time,
      apmStatus: "Approved",
    };

    dispatch(updateAppointment(apmData));
    // Refresh component upon submission
    window.location.reload(false);
  };

  // Reject Butoon =====================================================================
  const handleReject = () => {
    const apmData = {
      _id,
      apmStatus: "Reject",
    };

    dispatch(updateAppointment(apmData));
    // Refresh component upon submission
    window.location.reload(false);
  };

  // Call user admin
  const { oneUser, isError, message } = useSelector((state) => state.admin);

  const handleClick = () => {
    const apmUserId = apm.user.toString();
    dispatch(getOne(apmUserId));
  };

  //   Btn Modal ID's
  const apmId = apm._id.toString().slice(0, 5);
  const modalId = petName + apmId;
  console.log(oneUser);
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={"#" + modalId}
        onClick={handleClick}
      >
        View
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
                {/* Pagination =================== */}
                <nav aria-label="...">
                  <ul class="pagination pagination-lg">
                    <li class="page-item active" aria-current="page">
                      <span class="page-link">Appointment</span>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        {oneUser
                          ? oneUser.fname + " " + oneUser.lname
                          : "Owner"}
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* ========================= */}
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
              <form className="row ms-3 mt-3">
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
                    class="btn btn-danger"
                    onClick={handleReject}
                  >
                    Reject
                  </button>
                  <button onClick={handleUpdate} class="btn btn-success">
                    Approve
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApmForm;
