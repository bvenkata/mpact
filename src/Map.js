import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./App.css";
import { height } from "@mui/system";

export default function Map() {
  return (
    <>
      <div style={{ padding: "50px" }}>
        <img src="MapView.png" style={{ height: "500px", width: "100%" }} />
      </div>
    </>
  );
}
