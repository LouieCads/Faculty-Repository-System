import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ToUpload from "../components/ToUpload";
import "./Home.css";

function Home() {
  return (
    <div>
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
      </div>
    </div>
  );
}

export default Home;
