import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import UserDashboard from './pages/UserDashboard';
import AdminPanel from './pages/Admin/AdminPanel';
import Calendar from './pages/Admin/calendar/Calendar';
import ApmFormAdmin from './pages/Admin/ApmFormAdmin';
function App() {



  const [viewApm, setViewApm] = useState(true);
  const handleFilter = (viewState) => {
      setViewApm(viewState);
      console.log(viewApm);
  }


  return (
    <div className="App">
      <Router>

        <div>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mydashboard" element={<UserDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* ============================================ */}
            <Route path="/admin" element={<AdminPanel handleFilter={handleFilter} viewApm={viewApm}/>} />
            <Route path ="/admin/cal" element={<Calendar/>} />
            <Route path ="/admin/apmform" element={<ApmFormAdmin/>} />







          </Routes>
        
        </div>

      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
