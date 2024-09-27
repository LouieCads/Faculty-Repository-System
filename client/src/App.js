import './App.css';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ToUpload from "./components/ToUpload";
import LandingPage from "./pages/LandingPage";

import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 

function App() {
  return (
    <>
      <LandingPage />
      <Header />
      <div className="mainContainer">
        <div className="textContainer">
          <h1>Spotter:</h1>
          <p>
            Welcome to Spotter, the smart way to check research originality!
            Upload student files, and let Spotter scan for similar thesis titles
            in seconds. Fast, reliable, and designed to keep your submissions
            unique. Safeguard academic integrity with ease!
          </p>
        </div>
        <SearchBar />
        <ToUpload />

        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
