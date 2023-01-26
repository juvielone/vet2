import React from "react";
import AdminNav from "./AdminNav";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

const TimeSlotPage = () => {
  const btnTimeSlot = {
    color: "white",
    backgroundColor: "#867dd9",
    marginTop: "1rem",
  };
  return (
    <>
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
        {/* Date Input */}
        <div className="  col-lg-6 px-5 mt-5" style={{}}>
          <h1 className="pb-5">Day Of The Event</h1>
          <Flatpickr
            options={{
              dateFormat: "Y-m-d H:i",
              inline: true,
              minDate: "today",
            }}
            name="date"
            // placeholder="Select Date"
          />
        </div>

        {/* Time input */}
        <div className="col-lg-5 mt-5">
          <h1 className="pb-5">Pick a Time</h1>
          <div className="row pb-5">
            <label class="form-label">Time</label>
            <div className="col-lg-6">
              <input className="form-control " type="time" />
            </div>
            <div className="col-lg-6">
              <button
                className="btn"
                style={{ backgroundColor: "#42A5F5", color: "white" }}
              >
                Add Time
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <button className="btn" style={btnTimeSlot}>
                <span className="pe-2">10:00</span>
                <i class="bi bi-trash3 btn" style={{ color: "white" }}></i>
              </button>
            </div>
            <div className="col-lg-6">
              <button className="btn" style={btnTimeSlot}>
                <span className="pe-2">11:00</span>
                <i class="bi bi-trash3 btn" style={{ color: "white" }}></i>
              </button>
            </div>
            <div className="col-lg-6">
              <button className="btn" style={btnTimeSlot}>
                <span className="pe-2">12:00</span>
                <i class="bi bi-trash3 btn" style={{ color: "white" }}></i>
              </button>
            </div>
            <div className="col-lg-6">
              <button className="btn" style={btnTimeSlot}>
                <span className="pe-2">03:00</span>
                <i class="bi bi-trash3 btn" style={{ color: "white" }}></i>
              </button>
            </div>
            <div className="col-lg-6">
              <button className="btn" style={btnTimeSlot}>
                <span className="pe-2">18:00</span>
                <i class="bi bi-trash3 btn" style={{ color: "white" }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeSlotPage;
