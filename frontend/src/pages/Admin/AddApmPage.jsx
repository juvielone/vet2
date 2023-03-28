import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { toast } from "react-toastify";
import { addAppointments } from "../../features/admin/adminSlice";
import { createSchedule } from "../../features/schedule/schedSlice";
import { getAllSrv, reset } from "../../features/service/srvSlice";
import { getTimeSlot, updateTimeSlot } from "../../features/time/timeSlice";
import AdminNav from "./AdminNav";
import moment from "moment";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import Spinner from "../../components/Spinner";

function ApmFormAdmin() {
  const onChange = (e) => {
    setUserApm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  // Call service selector
  const { service, isError, isSuccess, message } = useSelector(
    (state) => state.service
  );

  // Call time selector
  const { time } = useSelector((state) => state.timeslot);

  // Call time selector
  const { schedule, isLoading } = useSelector((state) => state.schedule);
  console.log(schedule);

  // Bootstrap Btn
  const [checked, setChecked] = useState(false);
  // Services Options
  const db = service.map((srv) => ({
    value: srv.srvName,
    label: srv.srvName,
  }));

  const serviceOP = [{ value: "", label: "Select Service" }, ...db];

  const [userApm, setUserApm] = useState({
    apmEmail: "",
    apmDate: new Date(),
    apmTime: "",
    petName: "",
    petType: "",
    petAge: "",
    breed: "",
    services: serviceOP[0].value,
  });

  const {
    apmEmail,
    apmDate,
    apmTime,
    petName,
    petType,
    petAge,
    breed,
    services,
  } = userApm;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Fetch timeslot only
    dispatch(getTimeSlot());

    // Fetch all service
    dispatch(getAllSrv());

    // calls reset reducer after either of two are called
    dispatch(reset());
  }, [dispatch, schedule]);

  // Return array of timeslot if date from DB matches dateRef
  const regTime = time.filter(
    (timeSlotDB) =>
      moment(timeSlotDB.date_ref).format("MM-DD-YYYY") ==
      moment(userApm.apmDate).format("MM-DD-YYYY")
  );

  // Initialize slotime status
  const [slotID, setSlotID] = useState({
    _id: "",
    status: "Taken",
  });
  const schedData = {
    email: userApm.apmEmail,
    date: userApm.apmDate,
    time: userApm.apmTime,
    petName: userApm.petName,
    petType: userApm.petType,
    petAge: userApm.petAge,
    breed: userApm.breed,
    service: userApm.services,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addAppointments(apmData));
    batch(() => {
      dispatch(createSchedule(schedData));
      dispatch(updateTimeSlot(slotID));
    });

    window.location.reload(false);
  };

  const handleBtnClick = (dateTime) => {
    setSlotID({ ...slotID, _id: dateTime._id });
    setUserApm({
      ...userApm,
      apmTime: dateTime.time,
    });
    console.log(userApm);
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <AdminNav />
      <div
        className="row container pb-5"
        style={{
          position: "relative",
          top: "1rem",
          left: "15.5rem",
          width: "80.2rem",
          height: "80%",
        }}
      >
        {/* Form appointment */}
        <div className="col-lg-6 pb-2">
          <div class="card">
            <div className="card-body">
              <h5 className="card-title pb-3">
                <i class="bi bi-pencil pe-3"></i>
                Create Appointment
              </h5>
              <form className="row">
                {/* Pet Type */}

                <div className="col-lg-10">
                  <label for="exampleFormControlInput1" class="form-label">
                    Patient Email
                  </label>
                  <input
                    className="form-control "
                    type="email"
                    name="apmEmail"
                    value={apmEmail}
                    onChange={onChange}
                    required
                  />
                </div>

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
                    type="number"
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
                <div className="col-lg-10 pb-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Services
                  </label>

                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(e) =>
                      setUserApm({
                        ...userApm,
                        services: e.target.value,
                      })
                    }
                  >
                    {serviceOP.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}

                <div></div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div class="card pb-4">
            <div className="card-body">
              <h5 className="card-title pb-3">
                <i class="bi bi-calendar3-week pe-3"></i>
                Date And Time
              </h5>
              {/* Date time components */}
              <h5 className="me-5 pb-3 pt-5">Select Date</h5>
              <Flatpickr
                options={{
                  dateFormat: "Y-m-d H:i",
                  inline: false,
                  minDate: "today",
                }}
                value={apmDate}
                name="date"
                // onChange={(selectedDates, dateStr) => setDate(dateStr)}
                onChange={(selectedDates, dateStr, instance) => {
                  const firstDate = selectedDates[0];
                  console.log({ firstDate, dateStr });
                  setUserApm({
                    ...userApm,
                    apmDate: firstDate,
                  });
                }}
                placeholder="Select Date"
              />

              <h5 className="pt-4">Pick A Time</h5>
              <div className="row pb-4">
                {regTime.length <= 0 ? (
                  <div className="text-center pt-5">
                    <i class="bi bi-calendar-x-fill fs-1 text-center"></i>
                    <h3 class="fw-bold mb-0 fs-4 pb-2 ">
                      Sorry no slot available
                    </h3>
                    <p>Please select another date.</p>
                  </div>
                ) : (
                  regTime.map((dateTime) => (
                    <div className="col-lg-6">
                      <button
                        style={{ width: "6.5rem" }}
                        onClick={() => handleBtnClick(dateTime)}
                        className="btn btn-time "
                        disabled={dateTime.status == "Taken" && true}
                      >
                        {dateTime.time}
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            style={{
              width: "20rem",
              marginLeft: "40rem",
              position: "relative",
              bottom: "3rem",
            }}
            // onClick={handleSubmit}
            className="btn btn-primary col-lg-10"
          >
            Set Appointment
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default ApmFormAdmin;
