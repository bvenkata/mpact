import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BasicTable from "./BasicTable";
import AdminDatatable from "./AdminDatatable";

export default function Admin() {
  const [login, setLogin] = React.useState(false);
  return (
    <>
      {!login && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <img
            src="mpact.png"
            alt="Your Logo"
            style={{ marginBottom: "20px", height: "55px" }}
          />
          Admin Page
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={setLogin}>
            Login
          </Button>
        </Box>
      )}
      {login && (
        <>
          <AdminDatatable login={login} />
        </>
      )}
    </>
  );
}
