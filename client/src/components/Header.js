import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import umakLogo from "../images/umakLogo.png";
import "./header.css"

const header = () => {
  const home = "HOME";
  const about = "ABOUT US";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="navBar"
        position="static"
        sx={{ backgroundColor: "#01245B", padding: "12px" }}
      >
        {" "}
        {/*appbar = the whole navbar */}
        <Toolbar>
          <img className="umakLogo" src={umakLogo} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }} //space niya from the burger button
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            className="webtitleContainer"
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: "1.5em",
              color: "#FEFFF1",
              fontWeight: "800",
            }}
          >
            <p className="text1">University of Makati-</p>
            <p className="text2">Repository System</p>
          </Typography>
          <div className="btnMain">
            <Button color="inherit">Home</Button>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default header;
