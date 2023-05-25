import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, register } from "../features/auth/authSlice";
import { createSchedule } from "../features/schedule/schedSlice";
import { getTimeSlot, updateTimeSlot } from "../features/time/timeSlice";
import { getAllSrv } from "../features/service/srvSlice";
import moment from "moment";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import ServiceRegForm from "../components/register/ServiceRegForm";
import DatetimeForm from "../components/register/DatetimeForm";
import PatientForm from "../components/register/PatientForm";
import ConfirmDetails from "../components/register/ConfirmDetails";
import "./css/registerX.css";

function RegisterX() {
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

  // Pet Options
  const petOptions = [
    { value: "", label: "Select Pet Type" },
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Fish", label: "Fish" },
  ];

  // Owner Registration State ==============================
  const [newUser, setNewUser] = useState({
    fname: "",
    lname: "",
    addr: "",
    city: "",
    mobileNo: "",
    email: "",
    password: "",
    password2: "",
  });

  // Initialize Navigate  & Dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Calling auth selector
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // Call time selector
  const { time } = useSelector((state) => state.timeslot);

  // Call service selector
  const { service } = useSelector((state) => state.service);
  const serviceLoading = useSelector((state) => state.service.isLoading);
  const serviceClass =
    service.length <= 2 ? "col-lg-6 col-md-6" : "col-lg-4 col-md-4";

  // Services Options
  const db = service.map((srv) => ({
    value: srv.srvName,
    label: srv.srvName,
  }));

  // Get Time Slot ID and update its status

  // Service Map
  const serviceOP = [{ value: "", label: "Select Service" }, ...db];
  console.log(serviceOP);

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

  // Initialize slotime status
  const [slotID, setSlotID] = useState({
    _id: "",
    status: "Taken",
  });

  // Return array of timeslot if date from DB matches dateRef
  const regTime = time.filter(
    (timeSlotDB) =>
      moment(timeSlotDB.date_ref).format("MM-DD-YYYY") ==
      moment(userApm.apmDate).format("MM-DD-YYYY")
  );

  // Returns array and count the number of Open
  const openTimeFilter = regTime.filter((myTime) =>
    myTime.status.includes("Open")
  );

  const userData = {
    fname: newUser.fname,
    lname: newUser.lname,
    email: newUser.email,
    password: newUser.password,
    phone: newUser.mobileNo,
    streetNo: newUser.addr,
    city: newUser.city,
  };

  const schedData = {
    email: newUser.email,
    date: userApm.apmDate,
    time: userApm.apmTime,
    petName: userApm.petName,
    petType: userApm.petType,
    petAge: userApm.petAge,
    breed: userApm.breed,
    service: userApm.service,
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // If registration is success navigate to dashboard
    if (isSuccess || user) {
      navigate("/mydashboard");
    }

    //Fetch timeslot only
    dispatch(getTimeSlot());

    // Fetch all service
    dispatch(getAllSrv());

    // calls reset reducer after either of two are called
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleTimeUpdate = () => {
    // Calls and Update Time Slots
    toast.success("Saving timeslot", {
      autoClose: 1000,
      position: "top-center",
    });
    // Calls and Update Time Slots
    dispatch(updateTimeSlot(slotID));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(slotID);

    // Calls and pass userData to authSlice
    dispatch(register(userData));

    // Calls and pass schedData to schedSlice
    dispatch(createSchedule(schedData));

    // Refresh component
    // toast.success("Logging In...");
    // setTimeout(() => {
    //   window.location.reload(false);
    // }, 2500);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <div className="pb-5" style={{ backgroundColor: "#EFEEF7" }}>
        {/* Bread Container */}
        <div className="container">
          <div className=" pt-5">
            <div className="bread-container mx-auto">
              {/* BreadCrumbs */}
              {/* Service */}
              <button
                type="button"
                className="btn bread one"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                aria-current="true"
                aria-label="Slide 1"
              >
                <i class="bi bi-collection-fill me-3"></i>
                Choose A Service
              </button>

              {/* Confirm Date and Time */}
              <button
                type="button"
                className="btn bread one"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              >
                <i class="bi bi-calendar-check-fill me-3"></i>
                Confirm Date & Time
              </button>

              {/* Patient Details */}
              <button
                type="button"
                className="btn bread one"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              >
                <i class="bi bi-person-circle me-2"></i>
                Patient Details
              </button>

              {/* Confirmed Details */}
              <button
                type="button"
                className="btn bread one"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              >
                <i class="bi bi-file-earmark-check-fill me-2"></i>
                Confirm Details
              </button>

              {/* BreadCrumbs =========================== */}
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
                  {/* Date time components */}
                  <h1>Service Form</h1>
                  <div className="row pt-5 pb-5 container">
                    <ServiceRegForm
                      service={service}
                      serviceLoading={serviceLoading}
                      serviceClass={serviceClass}
                    />
                  </div>
                </div>

                {/* Second Slide */}
                <div class="carousel-item">
                  {/* Date time components */}
                  <div style={{ padding: "1rem" }}>
                    <h3 className="text-center">
                      {moment(userApm.apmDate).format("ddd, MMMM Do YYYY")}
                    </h3>
                    <h3 className="text-center">{userApm.apmTime}</h3>
                  </div>
                  <DatetimeForm
                    handleTimeUpdate={handleTimeUpdate}
                    userApm={userApm}
                    setUserApm={setUserApm}
                    filterTime={regTime}
                    openTimeFilter={openTimeFilter}
                    slotID={slotID}
                    setSlotID={setSlotID}
                  />
                </div>

                {/* Third Slide */}
                <div class="carousel-item">
                  <PatientForm
                    newUser={newUser}
                    userApm={userApm}
                    setUserApm={setUserApm}
                    onChangeOwner={onChangeOwner}
                    onChangeApm={onChangeApm}
                    serviceOptions={serviceOP}
                    petOptions={petOptions}
                    // submitAppointment={submitAppointment}
                  />
                </div>
                {/* Fourth Slide */}
                <div class="carousel-item">
                  <ConfirmDetails
                    newUser={newUser}
                    userApm={userApm}
                    handleSubmit={handleSubmit}
                  />
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
