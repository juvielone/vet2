import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ServiceForm = ({ srvData, setSrvData, handleSubmit, show, setShow }) => {
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        <i class="bi bi-plus-circle-fill pe-3"></i>
        Add Service
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                name="srvName"
                value={srvData.srvName}
                onChange={(e) =>
                  setSrvData({
                    ...srvData,
                    serviceName: e.target.value,
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
                  value={srvData.srvDesc}
                  onChange={(e) =>
                    setSrvData({
                      ...srvData,
                      serviceDesc: e.target.value,
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
                value={srvData.srvFee}
                onChange={(e) =>
                  setSrvData({
                    ...srvData,
                    serviceFee: e.target.value,
                  })
                }
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ServiceForm;
