import React from "react";
import "./LandingPage.css";
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
        <Link to="/home">
          <Button color="inherit">START</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
