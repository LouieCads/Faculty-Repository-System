import React from "react";
import "./LandingPage.css"; // Import the CSS file
import backgroundImage from "../images/umakBG.png"; // Correct the import path
import Button from '@mui/material/Button'; // Import the Button component from Material-UI


const LandingPage = () => {
  return (
    <div
      className="LPcontainer"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text1">
        <p>Home of the</p>
        <h1>Great Brave Herons</h1>
      </div>
      <div className="LPBtnCtnr">
        <Button color="inherit">START</Button>
      </div>
    </div>
  );
};

export default LandingPage;
