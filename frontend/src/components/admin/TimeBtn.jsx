// Object Custom Styles ===============
const btnTimeSlot = {
  color: "white",
  backgroundColor: "#867dd9",
  marginTop: "1rem",
};

const TimeBtn = ({ dateTime, deleteTimeSlot }) => {
  return (
    <>
      <button key={dateTime._id} className="btn" style={btnTimeSlot}>
        <span className="pe-2">{dateTime.time}</span>
        <i
          onClick={() => deleteTimeSlot(dateTime._id)}
          class="bi bi-trash3 btn"
          style={{ color: "white" }}
        ></i>
      </button>
    </>
  );
};

export default TimeBtn;
