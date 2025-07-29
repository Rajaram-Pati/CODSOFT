import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./screen/Signup";
import Login from "./screen/Login";
import LandingPage from './screen/LandingPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
