import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./App.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Box, Modal, TextField } from "@mui/material";

export default function Apiscreen({ setUpload }) {
  const [open, setOpen] = React.useState(false);

  // Handlers to open and close the modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div
        style={{
          padding: "2%",
          paddingBottom: "5px",
          textAlign: "center",
          height: "570px",
          display: "flex",
        }}
      >
        <div class="container">
          <div>
            <p className="Gradient-text">Welcome Amazon,</p>
          </div>
          <br />

          <p class="subheading">
            Integrating the Workday API into our system allows us to efficiently
            manage attendance and employee data while supporting transportation
            solutions, ensuring a seamless experience that promotes better
            engagement and reliability for our workforce.
          </p>
          <p class="subheading">
            Mpact allows to sync with your HR port data using apis
          </p>
          <img
            src="/workday.png"
            style={{ height: "100px", padding: "50px" }}
          />
          <img src="/adp.png" style={{ height: "100px", padding: "50px" }} />
          <img src="/saas.jpg" style={{ height: "100px", padding: "50px" }} />
        </div>

        <div>
          <CloudDownloadIcon
            sx={{
              color: "black",
              paddingTop: "10px",
              fontSize: 250,
              color: "#4285F4",
            }}
            onClick={handleOpen}
          />
          <Typography variant="h6" component="div" sx={{ color: "black" }}>
            Or
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "#4285F4", fontWeight: "bold" }}
          >
            Upload
          </Button>
        </div>
      </div>
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
            Enter API Details
          </Typography>
          <TextField
            label="Api URL"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
          />
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setUpload(true)}
            >
              Submit
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
