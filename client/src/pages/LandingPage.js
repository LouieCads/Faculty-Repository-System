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
        <p>Home of the</p>
        <h1>Great Brave Herons</h1>
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
