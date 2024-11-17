import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BasicTable from "./BasicTable";
import { Paper } from "@mui/material";
import "./App.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Apiscreen from "./Apiscreen";

export default function App() {
  const [updlaod, setUpload] = React.useState(false);
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <>
      {!updlaod && <Apiscreen setUpload={setUpload} />}
      {updlaod && (
        <div style={{ padding: "2%" }}>
          <p className="Gradient-text" style={{ paddingBottom: "5px" }}>
            Welcome Amazon,
          </p>
          <BasicTable />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: ".5%",
              paddingTop: "15px",
            }}
          >
            <Button
              sx={{ backgroundColor: "#4285F4" }}
              variant="contained"
              onClick={handleReload}
            >
              Confirm
            </Button>
          </Box>
        </div>
      )}
    </>
  );
}
