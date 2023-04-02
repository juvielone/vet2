import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAppointments } from "../features/appointment/apmSlice";
import { getSchedules } from "../features/schedule/schedSlice";
import Spinner from "../components/Spinner";
import Header from "../components/Header";

const UserApm = () => {
  // Initialize Navigate  & Dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { schedule, isError, message, isLoading } = useSelector(
    (state) => state.schedule
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
      // console.log(message);
    }

    // Check if user is logged in
    if (!user) {
      navigate("/login");
    }

    // Fetch appointments
    dispatch(getAppointments());
    const userEmail = user.email.toString();
    dispatch(getSchedules(userEmail));
  }, [user, isError, message]);

  // Archive Filter
  const archiveFilter = schedule.filter((apm) =>
    apm.apmStatus.includes("Archived")
  );
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header bgColor={"#867DD9"} />

      <div className="container mt-5">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Appointment No</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
              <th scope="col">Service</th>
              <th scope="col">Pet Name</th>
            </tr>
          </thead>
          <tbody>
            {archiveFilter.map((archive) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserApm;
