import pawSvg from "../../img/paw.svg";
import { Link } from "react-router-dom";

const ModalSubmit = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{
          backgroundColor: "#867DD9",
          color: "white",
          borderColor: "#867DD9",
        }}
      >
        <img src={pawSvg} style={{ width: "2rem" }} />
        Confirm Your Appointment
      </button>

      {/* <!-- Modal --> */}
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
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body row">
              <div className="col-lg-12 text-center">
                <i
                  class="bi bi-check-circle-fill"
                  style={{ fontSize: "4rem", color: "#8BC541" }}
                ></i>
                <h1>Awesome</h1>
                <h5 className="pt-4">
                  Your booking has been confirmed. Check your email for details{" "}
                </h5>
              </div>
            </div>
            <div class="modal-footer mx-auto mt-4">
              <Link
                to="/login"
                class="btn"
                style={{
                  backgroundColor: "#8BC541",
                  color: "white",
                  width: "10rem",
                }}
              >
                Login
              </Link>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                style={{
                  width: "10rem",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSubmit;
