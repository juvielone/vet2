import { useState } from "react";

const EditService = ({ service, handleUpdate, index }) => {
  const [newSrv, setNewSrv] = useState({
    _id: service._id,
    srvName: service.srvName,
    srvDesc: service.srvDesc,
    srvFee: service.srvFee,
  });
  const btnId = service.srvName.replace(/\s+/g, "");
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target={`#${btnId}`}
      >
        <i class="bi bi-pencil-square pe-2"></i>
        Edit
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id={btnId}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit Service
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form className="row ms-3 mt-3">
                {/* Service Name */}
                <div className="col-lg-10">
                  <label for="exampleFormControlInput1" class="form-label">
                    Service Name
                  </label>
                  <input
                    className="form-control "
                    type="text"
                    name="srvName"
                    placeholder={service.srvName}
                    value={newSrv.srvName}
                    onChange={(e) =>
                      setNewSrv({
                        ...newSrv,
                        srvName: e.target.value,
                      })
                    }
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
                      placeholder={service.srvDesc}
                      value={newSrv.srvDesc}
                      onChange={(e) =>
                        setNewSrv({
                          ...newSrv,
                          srvDesc: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                </div>

                {/* Service Fee */}

                <div className="col-lg-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Service Fee
                  </label>
                  <input
                    className="form-control "
                    placeholder={service.srvFee}
                    value={newSrv.srvFee}
                    onChange={(e) =>
                      setNewSrv({
                        ...newSrv,
                        srvFee: e.target.value,
                      })
                    }
                  />
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
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => handleUpdate(newSrv)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditService;
