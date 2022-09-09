import React from "react";
import ApmForm from "./ApmForm";

const ApmTable = ({ appointments }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Appointment Status</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Service</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((apm) => (
              <tr>
                <td>{apm.apmStatus}</td>
                <td>{apm.date}</td>
                <td>{apm.time}</td>
                <td>{apm.service}</td>
                <td>
                  {/* View Button ========================================*/}
                  <ApmForm key={apm._id} apm={apm} />
                  {/*Delete Button ============================================ */}
                  <button type="button" class="ms-2 btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ApmTable;
