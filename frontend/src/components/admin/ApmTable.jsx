import React from "react";
import moment from "moment";
import ApmForm from "./ApmForm";

const ApmTable = ({ appointments, dispatch }) => {
  const getColor = (condition) => {
    if (condition == "Pending") {
      return {
        color: "#0D6EFD",
      };
    } else if (condition == "Approved") {
      return {
        color: "#2DA366",
      };
    } else if (condition == "Cancelled") {
      return {
        color: "#BB2D3B",
      };
    } else {
      return { color: "black" };
    }
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead className="table-dark">
            <tr>
              <th scope="col">Appointment No</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
              <th scope="col">Service</th>
              <th scope="col">Pet Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((apm) => (
              <tr>
                {/* APM No */}
                <td>{apm._id.toString().slice(0, 8).toUpperCase()}</td>
                {/* APM Date */}
                <td>{moment(apm.date).format("LL")}</td>
                {/* APM Time */}
                <td>{apm.time}</td>
                {/* APM Status */}
                <td style={getColor(apm.apmStatus)}>{apm.apmStatus}</td>
                {/* APM Service */}
                <td>{apm.service}</td>
                {/* User Email */}
                <td>{apm.petName}</td>
                <td>
                  <ApmForm key={apm._id} apm={apm} dispatch={dispatch} />
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
