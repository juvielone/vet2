import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { createSchedule } from "../../features/schedule/schedSlice";
import { getTimeSlot, updateTimeSlot } from "../../features/time/timeSlice";
import Form from "react-bootstrap/Form";
import Flatpickr from "react-flatpickr";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import moment from "moment";

const UserApmForm = ({ service, user }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Initialize Navigate  & Dispatch
  const dispatch = useDispatch();

  // Calling auth selector
  // Call time selector
  const { time } = useSelector((state) => state.timeslot);

  // Call service selector
  //   const { service } = useSelector((state) => state.service);

  // Pet Options
  const petOptions = [
    { value: "", label: "Select Pet Type" },
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Fish", label: "Fish" },
  ];

  // Services Options
  const db = service.map((srv) => ({
    value: srv.srvName,
    label: srv.srvName,
  }));

  // Get Time Slot ID and update its status

  // Service Map
  const serviceOP = [{ value: "", label: "Select Service" }, ...db];
  // Appointment State ==============================
  const [userApm, setUserApm] = useState({
    apmDate: new Date(),
    apmTime: "",
    petName: "",
    petType: petOptions[0].value,
    petAge: "",
    breed: "",
    service: serviceOP[0].value,
  });

  //   New Sched State
  const [newSched, setNewSched] = useState({
    newDate: null,
    newTime: null,
  });

  useEffect(() => {
    //Fetch timeslot only
    dispatch(getTimeSlot());
  }, [dispatch]);

  // Initialize slotime status
  const [slotID, setSlotID] = useState({
    _id: "",
    status: "Taken",
  });

  // Onchange appointment
  const onChangeApm = (e) => {
    setUserApm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const schedData = {
    email: user.email,
    date: userApm.apmDate,
    time: userApm.apmTime,
    petName: userApm.petName,
    petType: userApm.petType,
    petAge: userApm.petAge,
    breed: userApm.breed,
    service: userApm.service,
  };

  const handleBtnClick = (dateTime) => {
    setSlotID({ ...slotID, _id: dateTime._id });

    setUserApm({
      ...userApm,
      apmTime: dateTime.time,
    });
  };

  //   Reload
  const handleReload = () => {
    window.location.reload(false);
  };
  //   Handle Submission
  const handleSubmit = () => {
    // console.log(schedData);
    // Calls and pass schedData to schedSlice
    dispatch(createSchedule(schedData));
    dispatch(updateTimeSlot(slotID));

    toast.success("Setting Appointment", { autoClose: 2000 });
    setTimeout(handleReload, 2000);
    // toast.success("hdasd");
  };

  // Return array of timeslot if date from DB matches dateRef
  const regTime = time.filter(
    (timeSlotDB) =>
      moment(timeSlotDB.date_ref).format("MM-DD-YYYY") ==
      moment(userApm.apmDate).format("MM-DD-YYYY")
  );

  return (
    <>
      <Button
        variant="primary"
        size="lg"
        onClick={handleShow}
        style={{ marginLeft: "11rem" }}
      >
        Set Appointment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ paddingRight: "2rem" }}>
              <span className="fs-5 fw-semibold">Pick A Date</span>
            </Form.Label>
            <Flatpickr
              options={{
                dateFormat: "Y-m-d ",
                inline: false,
                minDate: "today",
              }}
              value={newSched.newDate}
              name="date"
              onChange={(selectedDates, dateStr, instance) => {
                const firstDate = selectedDates[0];
                console.log({ firstDate, dateStr });
                setUserApm({
                  ...userApm,
                  apmDate: firstDate,
                });
              }}
            />
            <h5 className="pt-5 fs-5">Pick Time</h5>
            <div className="row">
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
                      // style={{}}
                      // onClick={}
                      onClick={() => handleBtnClick(dateTime)}
                      className="btn btn-time"
                      disabled={dateTime.status == "Taken" && true}
                    >
                      {dateTime.time}
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="col-lg-12 mt-5">
              {/* Pet Details  =========================================*/}

              <h4 class="mb-3">
                <i class="bi bi-box2-heart me-3"></i>
                Pet Details
              </h4>
              {/* Form */}
              <span class="needs-validation" novalidate>
                <div class="row g-3">
                  {/* First Name */}
                  <div class="col-sm-12">
                    <label for="petName" class="form-label">
                      Pet name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="petName"
                      value={userApm.petName}
                      name="petName"
                      onChange={onChangeApm}
                      required
                    />
                    <div class="invalid-feedback">
                      Valid pet name is required.
                    </div>
                  </div>

                  {/* Pet Age */}
                  <div class="col-sm-6">
                    <label for="petAge" class="form-label">
                      Pet Age
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="petAge"
                      placeholder="Age (Months)"
                      value={userApm.petAge}
                      name="petAge"
                      onChange={onChangeApm}
                      required
                    />
                    <div class="invalid-feedback">
                      Please enter your pet age.
                    </div>
                  </div>

                  {/* Pet Breed */}
                  <div class="col-sm-6">
                    <label for="petBreed" class="form-label">
                      Pet Breed
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="breed"
                      placeholder="Poodle, Pug, Persian"
                      onChange={onChangeApm}
                      value={userApm.breed}
                      name="breed"
                      required
                    />
                  </div>

                  {/* Pet Type */}
                  <div class="col-sm-12">
                    <label for="text" class="form-label">
                      Pet Type <span class="text-muted">(Required)</span>
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      name="petType"
                      value={userApm.petType}
                      onChange={(e) =>
                        setUserApm({
                          ...userApm,
                          petType: e.target.value,
                        })
                      }
                    >
                      {petOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div class="invalid-feedback">Please select pet type.</div>
                  </div>

                  {/* Pet Service */}
                  <div class="col-sm-12">
                    <label for="text" class="form-label">
                      Pet Service <span class="text-muted">(Required)</span>
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      value={userApm.service}
                      // onChange={(e) => setService(e.target.value)}
                      onChange={(e) =>
                        setUserApm({
                          ...userApm,
                          service: e.target.value,
                        })
                      }
                    >
                      {serviceOP.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div class="invalid-feedback">Please select a service.</div>
                  </div>
                </div>
              </span>
            </div>
            {/* <button
              className="btn btn-time"
              onClick={() =>
                setNewSched({
                  ...newSched,
                  newTime: "11:00",
                })
              }
            >
              {newSched.newTime}
            </button> */}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Set appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserApmForm;
