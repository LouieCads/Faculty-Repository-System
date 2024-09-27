import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import View from "./components/ViewAll";

function App() {
  return (
    <Router>
      {/* <Link to="view">View</Link> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
