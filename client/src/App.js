import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import RegistrationSuccess from "./pages/RegistrationSuccess";

function App() {
  return (
    <Router>
      {/* <Link to="view">View</Link> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registrationSuccess" element={<RegistrationSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
