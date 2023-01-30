import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSchedules } from "../../features/schedule/schedSlice";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

const ReschedBtn = ({ currentApm }) => {
  const dispatch = useDispatch();
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
  const handleReschedule = () => {
    // Update Pending Schdule

    dispatch(updateSchedules(rescheduleData));

    // Refresh component
    window.location.reload(false);
  };

  console.log(newSched.newDate);
  console.log(newSched.newTime);

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
            <button
              className="btn btn-time"
              onClick={() =>
                setNewSched({
                  ...newSched,
                  newTime: "11:00",
                })
              }
            >
              {newSched.newTime}
            </button>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel Appointment
          </Button>
          <Button variant="primary" onClick={handleReschedule}>
            Reschedule
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReschedBtn;
