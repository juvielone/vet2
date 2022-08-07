import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ backgroundColor: "#dbf0f8" }}>

          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mydashboard" element={<UserDashboard />} />




          </Routes>
          <Footer />
        </div>

      </Router>
    </div>
  );
}

export default App;
