import { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import "pure-react-carousel/dist/react-carousel.es.css";
const DatetimeForm = ({ setTime, time, setUserApm, userApm }) => {
  const [dayTime, setDayTime] = useState("AM");

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
          <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={25}
            totalSlides={2}
            dragEnabled={false}
            // style={{ backgroundColor: "yellow" }}
          >
            <ButtonBack
              className="btn btn-prev-carousel"
              onClick={() => setDayTime("AM")}
            >
              <i class="bi bi-chevron-left"></i>
            </ButtonBack>
            <span className="dayTime">{dayTime}</span>
            <ButtonNext
              className="btn btn-next-carousel"
              onClick={() => setDayTime("PM")}
            >
              <i class="bi bi-chevron-right"></i>
            </ButtonNext>
            <Slider>
              <Slide index={0}>
                <div className="container row timeslot-container">
                  {/* TimeSlots */}
                  <div className="col-lg-6">
                    <button
                      onClick={() =>
                        setUserApm({
                          ...userApm,
                          apmTime: "10:00",
                        })
                      }
                      className="btn btn-time"
                    >
                      10:00
                    </button>
                  </div>
                  <div className="col-lg-6">
                    <button
                      onClick={() =>
                        setUserApm({
                          ...userApm,
                          apmTime: "11:00",
                        })
                      }
                      className="btn btn-time"
                    >
                      11:00
                    </button>
                  </div>
                  <div className="col-lg-6">
                    <button
                      onClick={() =>
                        setUserApm({
                          ...userApm,
                          apmTime: "09:00",
                        })
                      }
                      className="btn btn-time"
                    >
                      09:00
                    </button>
                  </div>
                  <div className="col-lg-6">
                    <button
                      onClick={() =>
                        setUserApm({
                          ...userApm,
                          apmTime: "08:00",
                        })
                      }
                      className="btn btn-time"
                    >
                      08:00
                    </button>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>I am the second Slide.</Slide>
            </Slider>
          </CarouselProvider>
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
