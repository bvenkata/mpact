import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Modal, TextField } from "@mui/material";
import { Image } from "@mui/icons-material";
import "./App.css";

export default function Home({ setAuth }) {
  const [open, setOpen] = React.useState(false);

  // Handlers to open and close the modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "55vh",
        }}
      >
        <img src="map1.png" />
        <div class="container">
          <div>
            <p className="Gradient-text" sx={{ fontSize: "45px" }}>
              Business Shuttle Services in Memphis, TN
            </p>
          </div>
          <br />
          <br />
          <p class="subheading">
            Mpact provides customized shuttle services that cater to the
            specific transportation needs of those living and working in
            Memphis.
          </p>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontWeight: "bold" }}
            onClick={handleOpen}
          >
            Sign In
          </Button>
        </div>
      </Box>
      <Modal
        open={open}
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
            Login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ mt: 2 }}
          />
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" color="primary" onClick={setAuth}>
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
