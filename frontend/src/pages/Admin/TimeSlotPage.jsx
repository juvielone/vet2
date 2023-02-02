import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createTimeSlot,
  getTimeSlot,
  deleteTimeSlot,
  reset,
} from "../../features/time/timeSlice";
import moment from "moment";

import AdminNav from "./AdminNav";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import TimeBtn from "../../components/admin/TimeBtn";
import NoTimeBtn from "../../components/admin/NoTimeSlot";
import Spinner from "../../components/Spinner";

const TimeSlotPage = () => {
  // Slot State
  const [slot, setSlot] = useState({
    dateRef: new Date(),
    time: "",
    status: "Open",
  });

  // Initialize  Dispatch
  const dispatch = useDispatch();

  const deleteSlot = (id) => {
    dispatch(deleteTimeSlot(id));
    console.log(id);
  };

  const handleSubmit = () => {
    dispatch(createTimeSlot(slot));
    console.log(slot);
  };

  // Call user admin
  const { time, isLoading, isError, message } = useSelector(
    (state) => state.timeslot
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // Fetch time
    dispatch(getTimeSlot());

    // Clear appointment state when user unmounts(leave) the dashboard
    return () => {
      dispatch(reset());
    };
  }, [isError, message, deleteTimeSlot, dispatch, createTimeSlot]);

  // const dbDate = time.map((samp) => moment(samp.date_ref).format("MM-DD-YYYY"));
  const dbDateLocal = time.map((samp) => samp.date_ref);

  // Return array of timeslot if date from DB matches dateRef
  const filterTime = time.filter(
    (timeSlotDB) =>
      moment(timeSlotDB.date_ref).format("MM-DD-YYYY") ==
      moment(slot.dateRef).format("MM-DD-YYYY")
  );
  // console.log(moment(slot.dateRef).format("MM-DD-YYYY"));
  // console.log({ dbDate });
  console.log(filterTime);

  if (isLoading) {
    return <Spinner />;
  }

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
            name="dateRef"
            onChange={(selectedDates, dateStr, instance) => {
              const firstDate = selectedDates[0];

              setSlot({
                ...slot,
                dateRef: firstDate,
              });
            }}
            // placeholder="Select Date"
          />
        </div>

        {/* Time input */}
        <div className="col-lg-5 mt-5">
          <h1 className="pb-5">Pick a Time</h1>
          <div className="row pb-5">
            <label class="form-label">Time</label>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="time"
                value={slot.time}
                name="time"
                onChange={(e) => {
                  setSlot((prevInput) => ({
                    ...prevInput,
                    time: e.target.value,
                  }));
                }}
              />
            </div>
            {/* Submit BTN */}
            <div className="col-lg-6">
              <button
                onClick={() => handleSubmit()}
                className="btn"
                style={{ backgroundColor: "#42A5F5", color: "white" }}
              >
                Add Time
              </button>
              <h1> {moment(slot.dateRef).format("MM-DD-YYYY")}</h1>
            </div>
          </div>

          <div className="row">
            {/* Render certain time when date is clicked */}
            {/* {filterTime.map((dateTime) =>
              dateTime.length == 0 ? <h1>TimeSlots</h1> : <h1>No Time Slots</h1>
            )} */}

            {filterTime.length <= 0 ? (
              <NoTimeBtn slotDate={slot.dateRef} />
            ) : (
              filterTime.map((dateTime) => (
                <div className="col-lg-6">
                  <TimeBtn
                    dateTime={dateTime}
                    slot={slot}
                    setSlot={setSlot}
                    deleteTimeSlot={deleteSlot}
                  />
                </div>
              ))
              //
              // filterTime.map((dateTime) => {
              //   <div className="col-lg-6">
              //     <h1>sdsa</h1>
              //     <TimeBtn dateTime={dateTime} slot={slot} setSlot={setSlot} />;
              //   </div>;
              // })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeSlotPage;
