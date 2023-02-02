import { useSelector, useDispatch } from "react-redux";
import { createDefaultSlot, getTimeSlot } from "../../features/time/timeSlice";

// Object Custom Styles ===============
const btnTimeSlot = {
  color: "white",
  backgroundColor: "#867dd9",
  marginTop: "1rem",
};

const NoTimeBtn = ({ slotDate }) => {
  // Initialize  Dispatch
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(createDefaultSlot({ dateRef: slotDate }));
    dispatch(getTimeSlot());
    console.log({ dateRef: slotDate });
  };

  return (
    <>
      <button
        onClick={() => handleSubmit()}
        className="btn"
        style={btnTimeSlot}
      >
        <span className="pe-2">Add Default Schedule</span>
      </button>
    </>
  );
};

export default NoTimeBtn;
