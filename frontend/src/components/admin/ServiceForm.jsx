const ServiceForm = () => {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="bi bi-plus-circle-fill pe-3"></i>
        Add Service
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add A Service
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* Service Form =========================== */}
              <form className="row ms-3 mt-3">
                {/* Service Name */}
                <div className="col-lg-10">
                  <label for="exampleFormControlInput1" class="form-label">
                    Service Name
                  </label>
                  <input
                    className="form-control "
                    type="text"
                    placeholder="Service Name"
                  />
                </div>

                {/* Service Description */}

                <div className="col-lg-10">
                  <label for="exampleFormControlInput1" class="form-label">
                    Service Description
                  </label>
                  <div class="mb-3">
                    <textarea
                      class="form-control "
                      id="exampleFormControlTextarea1"
                      rows="3"
                      cols="10"
                    ></textarea>
                  </div>
                </div>

                {/* Service Fee */}

                <div className="col-lg-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Service Fee
                  </label>
                  <input className="form-control " />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceForm;
