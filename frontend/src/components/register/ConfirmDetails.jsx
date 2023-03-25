import ModalSubmit from "./ModalSubmit";
import pawSvg from "../../img/paw.svg";

const ConfirmDetails = ({ newUser, userApm, handleSubmit }) => {
  const { fname, lname, addr, mobileNo, email, city } = newUser;
  const { petName, petAge, breed, petType, service } = userApm;
  return (
    <>
      <div className="container row ms-4">
        <div className="col-lg-6">
          <h4 class="mb-3">
            <i class="bi bi-shield-fill-check me-3"></i>
            Owner Details
          </h4>
          {/* Form */}
          <span class="needs-validation" novalidate>
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
                  placeholder={fname}
                  value=""
                  readonly
                />
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
                  placeholder={lname}
                  readonly
                />
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
                  placeholder={addr}
                  readonly
                />
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
                  placeholder={city}
                  readonly
                />
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
                  readonly
                  placeholder={mobileNo}
                />
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
                  placeholder={email}
                  readonly
                />
              </div>
            </div>
          </span>
        </div>
        <div className="col-lg-6">
          {/* Pet Details  =========================================*/}

          <h4 class="mb-3">
            <i class="bi bi-box2-heart me-3"></i>
            Pet Details
          </h4>
          {/* Form */}
          <span class="needs-validation" novalidate>
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
                  value=""
                  placeholder={petName}
                  readonly
                />
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
                  placeholder={petAge}
                  readonly
                />
              </div>

              {/* Pet Breed */}
              <div class="col-sm-6">
                <label for="petBreed" class="form-label">
                  Pet Breed
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="petBreed"
                  placeholder={breed}
                  readonly
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
                  disabled
                >
                  <option>Select Pet type</option>
                  <option value={petType} selected>
                    {petType}
                  </option>
                </select>
              </div>

              {/* Pet Servicw */}
              <div class="col-sm-12">
                <label for="text" class="form-label">
                  Pet Service <span class="text-muted">(Required)</span>
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  disabled
                >
                  <option value={service} selected>
                    {service}
                  </option>
                </select>
                <div class="invalid-feedback">Please select pet type.</div>
              </div>
            </div>
          </span>
          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              class="btn btn-primary"
              // onClick={() => handleSubmit()}
              style={{
                marginTop: "2rem",
                backgroundColor: "#867DD9",
                color: "white",
                borderColor: "#867DD9",
              }}
            >
              <img src={pawSvg} style={{ width: "2rem" }} />
              Confirm Your Appointment
            </button>
          </form>

          {/* <ModalSubmit /> */}
        </div>
      </div>
    </>
  );
};

export default ConfirmDetails;
