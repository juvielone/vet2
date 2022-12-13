import CallAddForm from "./CalAddForm";

function CalModal({handleForm}) {
  return (
    <>
      <div style={{zIndex: "2" }}>
        <button
          type="button"
          className="btn btn-light"
          data-bs-toggle="modal"
          data-bs-target="#calModal"
          style={{ position: "relative", zIndex:2 }}
        >
           <i class="bi bi-calendar-plus pe-2"></i>
          Add Appointment
        </button>

        <div
          className="modal fade"
          id="calModal"
          tabindex="-1"
          aria-labelledby="calModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="calModalLabel">
                  Appointment Form
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <CallAddForm handleForm={handleForm}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalModal;
