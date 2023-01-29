import { Fragment } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const PatientForm = ({
  newUser,
  onChangeOwner,
  onChangeApm,
  userApm,
  setUserApm,
  serviceOptions,
  petOptions,
  // submitAppointment,
}) => {
  const { fname, lname, addr, city, mobileNo, email, password, password2 } =
    newUser;
  const { petName, petAge, breed, petType, service } = userApm;
  // Slide validation
  let isComplete = false;

  // If all form complete next button shows
  if (
    fname != "" &&
    lname != "" &&
    addr != "" &&
    city != "" &&
    mobileNo != "" &&
    email != "" &&
    password != "" &&
    password2 != "" &&
    petName != "" &&
    petAge != "" &&
    breed != "" &&
    service != "" &&
    petType != ""
  ) {
    isComplete = true;
  }

  return (
    <div className="container row ms-4">
      <div className="col-lg-6">
        <h4 class="mb-3">
          <i class="bi bi-shield-fill-check me-3"></i>
          Owner Details
        </h4>
        {/* Form */}
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            {/* First Name */}
            <div class="col-sm-6">
              <label for="firstName" class="form-label">
                First name
              </label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                onChange={onChangeOwner}
                value={fname}
                name="fname"
                required
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>

            {/* Last Name */}
            <div class="col-sm-6">
              <label for="lastName" class="form-label">
                Last name
              </label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                onChange={onChangeOwner}
                value={lname}
                name="lname"
                required
              />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>

            {/* Address */}
            <div class="col-sm-8">
              <label for="address" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="address"
                onChange={onChangeOwner}
                value={addr}
                name="addr"
                placeholder="Street No, Brgy"
                required
              />
              <div class="invalid-feedback">
                Please enter your complete address.
              </div>
            </div>

            {/* City */}
            <div class="col-sm-4">
              <label for="address" class="form-label">
                City
              </label>
              <input
                type="text"
                class="form-control"
                id="city"
                onChange={onChangeOwner}
                value={city}
                name="city"
                placeholder="City"
                required
              />
              <div class="invalid-feedback">
                Please enter your complete address.
              </div>
            </div>

            {/* Phone */}
            <div class="col-sm-6">
              <label for="mobileNumber" class="form-label">
                Mobile Number <span class="text-muted">(Required)</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="mobileNumber"
                onChange={onChangeOwner}
                value={mobileNo}
                name="mobileNo"
                placeholder="+63"
              />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            {/* Email */}
            <div class="col-sm-6">
              <label for="email" class="form-label">
                Email <span class="text-muted">(Required)</span>
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                onChange={onChangeOwner}
                value={email}
                name="email"
                placeholder="you@example.com"
              />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            {/* Password */}
            <div class="col-sm-6">
              <label for="pass" class="form-label">
                Password <span class="text-muted">(Required)</span>
              </label>
              <input
                type="password"
                class="form-control"
                id="pass"
                onChange={onChangeOwner}
                value={password}
                name="password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div class="col-sm-6">
              <label for="pass2" class="form-label">
                Confirm Password <span class="text-muted">(Required)</span>
              </label>
              <input
                type="password"
                class="form-control"
                id="pass2"
                onChange={onChangeOwner}
                name="password2"
                value={password2}
                required
              />
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-6">
        {/* Pet Details  =========================================*/}

        <h4 class="mb-3">
          <i class="bi bi-box2-heart me-3"></i>
          Pet Details
        </h4>
        {/* Form */}
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            {/* First Name */}
            <div class="col-sm-12">
              <label for="petName" class="form-label">
                Pet name
              </label>
              <input
                type="text"
                class="form-control"
                id="petName"
                value={petName}
                name="petName"
                onChange={onChangeApm}
                required
              />
              <div class="invalid-feedback">Valid pet name is required.</div>
            </div>

            {/* Pet Age */}
            <div class="col-sm-6">
              <label for="petAge" class="form-label">
                Pet Age
              </label>
              <input
                type="text"
                class="form-control"
                id="petAge"
                placeholder="Age (Months)"
                value={petAge}
                name="petAge"
                onChange={onChangeApm}
                required
              />
              <div class="invalid-feedback">Please enter your pet age.</div>
            </div>

            {/* Pet Breed */}
            <div class="col-sm-6">
              <label for="petBreed" class="form-label">
                Pet Breed
              </label>
              <input
                type="text"
                class="form-control"
                id="breed"
                placeholder="Poodle, Pug, Persian"
                onChange={onChangeApm}
                value={breed}
                name="breed"
                required
              />
            </div>

            {/* Pet Type */}
            <div class="col-sm-12">
              <label for="text" class="form-label">
                Pet Type <span class="text-muted">(Required)</span>
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                name="petType"
                value={petType}
                onChange={(e) =>
                  setUserApm({
                    ...userApm,
                    petType: e.target.value,
                  })
                }
              >
                {petOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div class="invalid-feedback">Please select pet type.</div>
            </div>

            {/* Pet Service */}
            <div class="col-sm-12">
              <label for="text" class="form-label">
                Pet Service <span class="text-muted">(Required)</span>
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={service}
                // onChange={(e) => setService(e.target.value)}
                onChange={(e) =>
                  setUserApm({
                    ...userApm,
                    service: e.target.value,
                  })
                }
              >
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div class="invalid-feedback">Please select a service.</div>
            </div>
          </div>
        </form>
      </div>
      {isComplete && (
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
      {/* <button
        className="btn btn-next"
        type="button"
        style={{ marginLeft: "55rem", width: "10rem" }}
        onClick={submitAppointment}
      >
        Submit <i class="bi bi-arrow-right-short"></i>
      </button> */}
    </div>
  );
};

export default PatientForm;
