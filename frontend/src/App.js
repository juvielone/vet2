import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ backgroundColor: "#dbf0f8" }}>

          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />


          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
