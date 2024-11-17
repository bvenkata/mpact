import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BasicTable from "./BasicTable";
import { Modal, Paper, TextField } from "@mui/material";
import "./App.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Apiscreen from "./Apiscreen";
import Home from "./Home";
import App from "./App";

export default function App1() {
  const [auth, setAuth] = React.useState(false);
  const [getintouch, setGetintouch] = React.useState(false);
  const handleOpen = () => setGetintouch(true);
  const handleClose = () => setGetintouch(false);
  const logout = () => {
    if (auth) window.location.reload();
    else handleOpen();
  };
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
              onClick={() => logout()}
            >
              {!auth ? "Get in Touch" : "Logout"}
            </Button>
          </Toolbar>
          {!auth && <Home setAuth={setAuth} />}
          {auth && <App />}
        </AppBar>
        {!auth && (
          <div className="marquee-container">
            <div className="marquee">
              <img
                src="/amazon.jpg"
                style={{ height: "100px", padding: "50px" }}
              />
              <img
                src="/fedex.png"
                style={{ height: "100px", padding: "50px" }}
              />
              <img
                src="/nike.jpg"
                style={{ height: "100px", padding: "50px" }}
              />
              <img
                src="/amazon.jpg"
                style={{ height: "100px", padding: "50px" }}
              />
              <img
                src="/fedex.png"
                style={{ height: "100px", padding: "50px" }}
              />
              <img
                src="/nike.jpg"
                style={{ height: "100px", padding: "50px" }}
              />
              <img
                src="/amazon.jpg"
                style={{ height: "100px", padding: "50px" }}
              />
              <img
                src="/fedex.png"
                style={{ height: "100px", padding: "50px" }}
              />
              <img
                src="/nike.jpg"
                style={{ height: "100px", padding: "50px" }}
              />
            </div>
          </div>
        )}
      </Box>
      <Box sx={{ height: "10px", alignContent: "center", padding: "10px" }}>
        Copyright 2024 Mpact. All rights reserved.
      </Box>
      <Modal
        open={getintouch}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Get In Touch
          </Typography>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Contact"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
          />
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
