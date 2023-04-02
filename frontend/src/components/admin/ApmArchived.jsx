import moment from "moment";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteAppointment } from "../../features/admin/adminSlice";

const ApmArchived = ({ archives }) => {
  const dispatch = useDispatch();

  const handleReload = () => {
    window.location.reload(false);
  };

  const handleRemove = (archive) => {
    dispatch(deleteAppointment(archive._id));
    // Refresh component upon submission
    toast.error("Removing Appointment...", { autoClose: 2000 });
    setTimeout(handleReload, 2000);
  };
  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
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
          {archives.map((archive) => (
            <tr>
              {/* archive No */}
              <td>{archive._id.toString().slice(0, 8).toUpperCase()}</td>
              {/* archive Date */}
              <td>{moment(archive.date).format("LL")}</td>
              {/* archive Time */}
              <td>{archive.time}</td>
              {/* archive Status */}
              <td>{archive.apmStatus}</td>
              {/* archive Service */}
              <td>{archive.service}</td>
              {/* User Email */}
              <td>{archive.petName}</td>
              <td>
                <Button variant="danger" onClick={() => handleRemove(archive)}>
                  <i class="bi bi-trash3 pe-1"></i>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ApmArchived;
