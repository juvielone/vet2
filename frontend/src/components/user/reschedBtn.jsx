import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { updateSchedules } from "../../features/schedule/schedSlice";
import { getTimeSlot, updateTimeSlot } from "../../features/time/timeSlice";
import moment from "moment";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

const ReschedBtn = ({ currentApm }) => {
  // Initialize Navigate  & Dispatch
  const dispatch = useDispatch();

  // Calling auth selector
  // Call time selector
  const { time } = useSelector((state) => state.timeslot);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   New Sched State
  const [newSched, setNewSched] = useState({
    newDate: currentApm.date,
    newTime: currentApm.time,
  });

  const rescheduleData = {
    _id: currentApm._id,
    date: newSched.newDate,
    time: newSched.newTime,
  };

  // Initialize slotime status
  const [slotID, setSlotID] = useState({
    _id: "",
    status: "Taken",
  });

  const handleBtnClick = (dateTime) => {
    setSlotID({ ...slotID, _id: dateTime._id });

    setNewSched({
      ...newSched,
      newTime: dateTime.time,
    });
    console.log(slotID);
    console.log(newSched);
  };

  useEffect(() => {
    //Fetch timeslot only
    dispatch(getTimeSlot());
  }, [dispatch]);

  // Return array of timeslot if date from DB matches dateRef
  const regTime = time.filter(
    (timeSlotDB) =>
      moment(timeSlotDB.date_ref).format("MM-DD-YYYY") ==
      moment(newSched.newDate).format("MM-DD-YYYY")
  );

  const handleReschedule = (e) => {
    e.preventDefault();

    batch(() => {
      dispatch(updateSchedules(rescheduleData));
      dispatch(updateTimeSlot(slotID));
    });

    // Refresh component
    window.location.reload(false);
    // console.log(rescheduleData);
  };

  return (
    <>
      <Button
        variant="outline-primary"
        bsClass="userReschedBtn"
        onClick={handleShow}
        style={{ height: "3rem" }}
      >
        Reschedule
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Schedule</Modal.Title>
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
                setNewSched({
                  ...newSched,
                  newDate: firstDate,
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
                  <div className="col-lg-">
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
          <Button variant="danger" onClick={handleClose}>
            Cancel Appointment
          </Button>
          <form onSubmit={handleReschedule}>
            <Button variant="primary" type="submit">
              Reschedule
            </Button>
          </form>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReschedBtn;
