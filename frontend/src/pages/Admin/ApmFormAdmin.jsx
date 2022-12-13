import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {addAppointments} from "../../features/admin/adminSlice"
import Datetime from "react-datetime";
import AdminNav from "./AdminNav";
import apmFormPic from "../../img/apmForm.svg"
import "react-datetime/css/react-datetime.css";

function ApmFormAdmin() {
  const [userApm, setUserApm] = useState({
    ownerName: "",
    ownerAddr: "",
    petName: "",
    petType: "",
    petAge: "",
    breed: "",
  });

  const { petName, petType, petAge, breed, ownerName, ownerAddr } = userApm;

  // Options Services
  const options = [
    { value: "", text: "--Choose Service--" },
    { value: "Check Up", text: "Check-Up 🩺" },
    { value: "Vaccine", text: "Vaccine 💉" },
    { value: "Grooming", text: "Grooming ✂" },
  ];

  const [service, setService] = useState(options[0].value);
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  const onChange = (e) => {
    setUserApm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apmData = {
      ownerName,
      ownerAddr,
      petName,
      petType,
      petAge,
      breed,
      service,
      date,
    };
    // Send data to controllers
      dispatch(addAppointments(apmData));
      toast.success("Appointment created successfully")

      console.log(apmData);
    //   refresh inputs
      setUserApm({
        ownerName: "",
        ownerAddr: "",
        petName: "",
        petType: "",
        petAge: "",
        breed: "",
      });
      setService(options[0].value);
      setDate(new Date());
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
          height:"80%"
        }}
      >
        {/* Form appointment */}
        <div  className="col-lg-6 pb-2">
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
                    Owner Name
                  </label>
                  <input
                    className="form-control "
                    type="text"
                    name="ownerName"
                    value={ownerName}
                    onChange={onChange}
                    required
                  />
                </div>

                {/* Pet Age */}

                <div className="col-lg-10">
                  <label for="exampleFormControlInput1" class="form-label">
                    Complete Address
                  </label>
                  <input
                    className="form-control "
                    type="text"
                    name="ownerAddr"
                    value={ownerAddr}
                    onChange={onChange}
                    placeholder="123 Main Street"
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
                    type="petAge"
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
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.text}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}

                <div className="col-lg-10">
                  <label for="exampleFormControlInput1" class="form-label">
                    Date and Time
                  </label>
                  <Datetime
                    value={date}
                    onChange={(date) => setDate(date._d)}
                  />
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
        <div className="col-lg-5" >
          <img src={apmFormPic} className="pt-5 mt-5"
          style={{position:"relative", top:"10rem"}}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default ApmFormAdmin;
