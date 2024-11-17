import * as React from "react";
import Box from "@mui/material/Box";
import BasicTable from "./BasicTable";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Map from "./Map";

export default function AdminDatatable({ login }) {
  const logout = () => {
    window.location.reload();
  };
  const [sechudle, setSchudle] = React.useState(false);
  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "white" }}>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              <img src="mpact.png" style={{ height: "40px" }} />
            </Typography>

            <Button
              variant="contained"
              sx={{ backgroundColor: "#A64AC9", fontWeight: "bold" }}
              onClick={logout}
            >
              Logout
            </Button>
          </Toolbar>
          {!sechudle && <BasicTable admin={login} />}
          {sechudle && <Map />}
          {!sechudle && (
            <Button variant="contained" color="primary" onClick={setSchudle}>
              Schudle Ride
            </Button>
          )}
        </AppBar>
      </Box>
    </>
  );
}
