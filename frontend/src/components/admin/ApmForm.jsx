import { useState } from "react";
import moment from "moment";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import { useSelector, useDispatch } from "react-redux";
import { reset, updateAppointment } from "../../features/admin/adminSlice";
import Spinner from "../../components/Spinner";

const ApmForm = ({ apm }) => {
  const dateStyle = {
    borderRadius: "2px",
    border: "none",
    borderBottom: "1px solid #E0E0E0",
    boxShadow: "0 1px 5px -2px rgba(0,0,0,.2)",
  };
  // Call user admin
  const { isLoading } = useSelector((state) => state.admin);

  // Initialize  Dispatch
  const dispatch = useDispatch();
  // console.log(juvie);

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
      _id: _id,
      // petName: pName,
      // petType: pType,
      // petAge: pAge,
      // breed: breedType,
      // service: services,
      date: pDate,
      time: pTime,
      apmStatus: "Approved",
    };

    console.log(apmData);
    dispatch(updateAppointment(apmData));
    // Refresh component upon submission
    window.location.reload(false);
  };

  // Reject Butoon =====================================================================
  const handleReject = () => {
    const apmData = {
      _id: _id,
      apmStatus: "Cancelled",
    };

    dispatch(updateAppointment(apmData));
    // Refresh component upon submission
    window.location.reload(false);
  };

  // Time Conversion
  const timeInput = moment(pTime, ["h:mm A"]).format("HH:mm");

  //   Btn Modal ID's
  const apmId = apm._id.toString().slice(0, 5);
  const modalId = petName + apmId;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target={"#" + modalId}
      >
        <i class="bi bi-pencil-square pe-3"></i>
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
                        {apm.email}
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
                    disabled
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
                    disabled
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
                    disabled
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
                    disabled
                  />
                </div>

                {/* Services =======================*/}
                <div className="col-lg-10">
                  <label for="exampleFormControlInput1" class="form-label">
                    Services
                  </label>

                  <input
                    class="form-select"
                    aria-label="Default select example"
                    value={services}
                    disabled
                  ></input>
                </div>

                {/* Date */}
                {/* <div className="col-lg-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Date s
                  </label>
                  <input
                    className="form-control"
                    onChange={onChange}
                    type="date"
                    name="pDate"
                    value={new Date(pDate)}
                  />
                </div> */}
                {/* Date ======== */}
                <div className="col-lg-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Appointment Date
                  </label>
                  <Flatpickr
                    className="form-control"
                    style={dateStyle}
                    options={{
                      defaultDate: pDate,
                      dateFormat: "Y-m-d ",
                      inline: false,
                    }}
                    name="dateRef"
                    onChange={(selectedDates, dateStr, instance) => {
                      const firstDate = selectedDates[0];

                      setUserApm({
                        ...userApm,
                        pDate: firstDate,
                      });
                    }}
                  />
                </div>

                {/* Time */}
                <div className="col-lg-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Time
                  </label>
                  <Flatpickr
                    className="form-control"
                    style={dateStyle}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: "G:i:K",
                      defaultDate: timeInput,
                      time_24hr: false,
                    }}
                    name="pTime"
                    onChange={(selectedDates, dateStr, instance) => {
                      setUserApm({
                        ...userApm,
                        pTime: dateStr,
                      });
                    }}
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    onClick={handleUpdate}
                    class="btn btn-success"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={handleReject}
                  >
                    Reject
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
