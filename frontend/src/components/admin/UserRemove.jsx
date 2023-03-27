import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../features/admin/adminSlice";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UserRemove = ({ eachUsers }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRemove = () => {
    dispatch(deleteUser(eachUsers._id.toString()));
    setShow(false);
    toast.success("User removed successfully");
  };

  //   Btn Modal ID's
  const apmId = eachUsers._id.toString().slice(0, 5);
  const modalId = eachUsers.lname + apmId;
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <i class="bi bi-trash3 pe-3"></i>
        Remove
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="" style={{ fontSize: "1.2rem" }}>
            Are you sure you want to remove{" "}
            {eachUsers.fname + " " + eachUsers.lname} account?
          </p>
          <p className="pt-3">
            Note: Removing this account also remove its appointments
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRemove}>
            Yes, remove this account
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <button
        type="button"
        class="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target={"#" + modalId}
      >
        <i class="bi bi-trash3 pe-3"></i>
        Remove
      </button>

      <div
        class="modal fade"
        id={modalId}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {eachUsers.fname}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p className="" style={{ fontSize: "1.2rem" }}>
                Are you sure you want to remove{" "}
                {eachUsers.fname + " " + eachUsers.lname} account?
              </p>

              <p className="pt-3">
                Note: Removing this account also remove its appointments
              </p>
            </div>
            <div class="modal-footer">
              <button
                onClick={() => dispatch(deleteUser(eachUsers._id))}
                type="button"
                class="btn btn-primary"
              >
                Yes, remove this account
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default UserRemove;
