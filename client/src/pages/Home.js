import React from "react";
import Header from "../components/Header";
import ToUpload from "../components/ToUpload";
import ViewAll from "../components/ViewAll";
import "../css/Home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="mainContainer">
        <div className="textContainer">
          <h1>ThesHub:</h1>
          <p>
            The smart way to check research originality!
            Upload student's thesis, and let it scan for similar thesis titles
            in seconds.
          </p>
        </div>
        <ToUpload />
        <ViewAll />
      </div>
    </div>
  );
}

export default Home;
