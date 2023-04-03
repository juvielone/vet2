import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import "pure-react-carousel/dist/react-carousel.es.css";
const DatetimeForm = ({
  setUserApm,
  userApm,
  filterTime,
  openTimeFilter,
  slotID,
  setSlotID,
}) => {
  const handleBtnClick = (dateTime) => {
    setSlotID({ ...slotID, _id: dateTime._id });
    setUserApm({
      ...userApm,
      apmTime: dateTime.time,
    });
    console.log("clicked");
  };

  return (
    <>
      <div className="row container me-5">
        {/* Calendar */}
        <div className="col-lg-6">
          <div
            style={{
              marginLeft: "10rem",
              paddingBottom: "1rem",
            }}
          >
            <h2 className="me-5 pb-3" style={{ color: "#867DD9" }}>
              Select Date
            </h2>

            <Flatpickr
              options={{
                dateFormat: "Y-m-d H:i",
                inline: true,
                minDate: "today",
              }}
              value={userApm.apmDate}
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
          </div>
        </div>
        {/* Time */}
        <div className="col-lg-6">
          <h2 className="me-5 ps-5" style={{ color: "#867DD9" }}>
            Select A Time
          </h2>

          <div className="container row timeslot-container">
            {/* TimeSlots */}
            {filterTime.length <= 0 || openTimeFilter.length <= 0 ? (
              <div className="text-center pt-5">
                <i class="bi bi-calendar-x-fill fs-1 text-center"></i>
                <h3 class="fw-bold mb-0 fs-4 pb-2 ">Sorry no slot available</h3>
                <p>Please select another date.</p>
              </div>
            ) : (
              filterTime.map((dateTime) => (
                <div className="col-lg-6">
                  <button
                    style={{ width: "6.5rem" }}
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
        </div>
      </div>
      {userApm.apmTime != "" && (
        <button
          className="btn btn-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          style={{ marginLeft: "55rem", width: "10rem" }}
        >
          Next <i class="bi bi-arrow-right-short"></i>
        </button>
      )}
    </>
  );
};

export default DatetimeForm;
