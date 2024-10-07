import React from "react";
import "../css/LandingPage.css";
import backgroundImage from "../images/umakBG.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="LPcontainer"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text1">
        <p>Home of the Great <span className="brave-herons">Brave Herons</span></p>
        <h1>Faculty Repository</h1>
      </div>
      <div className="LPBtnCtnr">
        <div className="login"><Link to="/login"><Button color="inherit">Login</Button></Link></div>
        <div className="registration"><Link to="/registration"><Button color="inherit">Register</Button></Link></div>
      </div>
    </div>
  );
};

export default LandingPage;
