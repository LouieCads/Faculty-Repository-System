import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ToUpload from "../components/ToUpload";
import ViewAll from "../components/ViewAll";
import "./Home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="mainContainer">
        <div className="textContainer">
          <h1>ThesHub:</h1>
          <p>
            Welcome to ThesHub, the smart way to check research originality!
            Upload student's thesis, and let Spotter scan for similar thesis titles
            in seconds.
          </p>
        </div>
        <SearchBar />
        <ToUpload />
        <ViewAll />
      </div>
    </div>
  );
}

export default Home;
