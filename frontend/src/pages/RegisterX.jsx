import { useState } from "react";
import moment from "moment";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DatetimeForm from "../components/register/DatetimeForm";
import PatientForm from "../components/register/PatientForm";
import ConfirmDetails from "../components/register/ConfirmDetails";
import "./css/registerX.css";

function RegisterX() {
  // Date and Time State ==============================
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  // Onchange appointment
  const onChangeApm = (e) => {
    setUserApm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Onchange Owner
  const onChangeOwner = (e) => {
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Services Options
  const serviceOptions = [
    { value: "", label: "Select Service" },
    { value: "Vaccine", label: "Vaccine" },
    { value: "Check-up", label: "Check-up" },
    { value: "Grooming", label: "Grooming" },
  ];

  // Pet Options
  const petOptions = [
    { value: "", label: "Select Pet Type" },
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Fish", label: "Fish" },
  ];

  // Service State ===========================
  const [service, setService] = useState(serviceOptions[0].value);

  // Pet Type State =================================
  const [petType, setPetType] = useState(petOptions[0].value);

  // Owner Registration State ==============================
  const [newUser, setNewUser] = useState({
    fname: "",
    lname: "",
    addr: "",
    mobileNo: "",
    email: "",
    password: "",
    password2: "",
  });

  // Appointment State ==============================
  const [userApm, setUserApm] = useState({
    apmDate: new Date("2023-01-25"),
    apmTime: "",
    petName: "",
    petAge: "",
    breed: "",
    service: serviceOptions[0].value,
    petType: petOptions[0].value,
  });

  // Submit Appointment
  // const submitAppointment = (userApm) => {
  //   setUserApm({
  //     ...userApm,
  //     [userApm.apmDate]: date,
  //     [userApm.service]: service,
  //   });
  //   console.log(userApm);
  // };
  console.log(newUser);
  console.log(userApm);
  console.log("sadsa");
  return (
    <>
      <Header />
      <div className="pb-5" style={{ backgroundColor: "#EFEEF7" }}>
        {/* Bread Container */}
        <div className="container">
          <div className=" pt-5">
            <div className="bread-container mx-auto">
              {/* BreadCrumbs */}
              <button
                type="button"
                className="btn bread one"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                aria-current="true"
                aria-label="Slide 1"
              >
                <i class="bi bi-calendar-check-fill me-3"></i>
                Confirm Date & Time
              </button>
              <button
                type="button"
                className="btn bread one"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              >
                <i class="bi bi-person-circle me-2"></i>
                Patient Details
              </button>
              <button
                type="button"
                className="btn bread one"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              >
                <i class="bi bi-file-earmark-check-fill me-2"></i>
                Confirm Details
              </button>

              {/* BreadCrumbs */}
            </div>

            {/* Carousel Container */}
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="false"
              data-bs-interval="false"
              style={{ marginTop: "2rem" }}
            >
              <div className="bread-line mx-auto"></div>
              <div class="carousel-inner pt-5">
                {/*  First Slide */}
                <div class="carousel-item active">
                  <div style={{ padding: "1rem" }}>
                    <h3 className="text-center">
                      {moment(userApm.apmDate).format("ddd, MMMM Do YYYY")}
                    </h3>
                    <h3 className="text-center">{time}</h3>
                  </div>
                  {/* Date time components */}
                  <DatetimeForm
                    userApm={userApm}
                    setUserApm={setUserApm}
                    setTime={setTime}
                    time={time}
                  />
                </div>

                {/* Second Slide */}
                <div class="carousel-item">
                  <PatientForm
                    newUser={newUser}
                    userApm={userApm}
                    setUserApm={setUserApm}
                    onChangeOwner={onChangeOwner}
                    onChangeApm={onChangeApm}
                    serviceOptions={serviceOptions}
                    petOptions={petOptions}
                    // submitAppointment={submitAppointment}
                  />
                </div>
                {/*  */}
                <div class="carousel-item">
                  <ConfirmDetails newUser={newUser} userApm={userApm} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterX;
