import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addAppointments } from "../../features/admin/adminSlice";
import { getAllSrv, reset } from "../../features/service/srvSlice";
import Datetime from "react-datetime";
import AdminNav from "./AdminNav";
import apmFormPic from "../../img/apmForm.svg";
import "react-datetime/css/react-datetime.css";
import { useEffect } from "react";

function ApmFormAdmin() {
  const onChange = (e) => {
    setUserApm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  // Call service selector
  const { service, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.service
  );
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

    //Fetch timeslot only
    // dispatch(getTimeSlot());

    // Fetch all service
    dispatch(getAllSrv());

    // calls reset reducer after either of two are called
    dispatch(reset());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const apmData = {};
    // dispatch(addAppointments(apmData));
    toast.success("Appointment created successfully");

    console.log(userApm);
    //   refresh inputs
    setUserApm({
      apmEmail: "",
      apmDate: new Date(),
      apmTime: "",
      petName: "",
      petType: "",
      petAge: "",
      breed: "",
      services: serviceOP[0].value,
    });
  };
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
              <form className="row" onSubmit={handleSubmit}>
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
                <div className="col-lg-10">
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

                <div className="col-lg-10">
                  <label for="exampleFormControlInput1" class="form-label">
                    Date and Time
                  </label>
                </div>

                <div>
                  <button type="submit" className="btn btn-primary col-lg-10">
                    Set Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <img
            src={apmFormPic}
            className="pt-5 mt-5"
            style={{ position: "relative", top: "10rem" }}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default ApmFormAdmin;
