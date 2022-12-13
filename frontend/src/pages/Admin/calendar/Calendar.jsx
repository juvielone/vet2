// Redux Import
import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAppointments, reset } from "../../../features/admin/adminSlice";

// CALENDAR IMPORT
import { Calendar as CalDate, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Other Packeges
import { toast } from "react-toastify";


import AdminNav from "../AdminNav";
import CalModal from "./CalModal";
import Spinner from "../../../components/Spinner";

const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function Calendar() {
   // Initialize Navigate  & Dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // Call user admin
  const { appointments, isLoading, isError, message } = useSelector(
    (state) => state.admin
  );

  // Maps events
  const events= appointments.map((apm)=>{
    return {
      title:apm.service,
      start: new Date(apm.date),
      end: new Date(apm.date),
      allDay: false
    }
  })

  console.log(events);
  

  // Handle Form Call back
  const handleForm = (formData) => {
    console.log(formData);
    dispatch(addAppointments(formData));

  }

  useEffect(() => {
    // Handles error 
    if(isError){
      toast.error(message);
    }
    dispatch(reset())
  },[isError]);

//   Loader 
  if (isLoading || !appointments.length === 0) {
    return <Spinner />;
  }

 
  return (
    <Fragment>


      <AdminNav/>
      <div className="container mt-2 pb-5" 
      style={{position: "relative", left:"8rem",
      height: "100%"
      }}
      >
        
        <CalModal handleForm={handleForm}/>
   
      <CalDate
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "700px", margin: "50px" }}
        />


      </div>

      

    </Fragment>
  );
}

export default Calendar;
