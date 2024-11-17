import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./App.css";
function createData(companyname, name, calories, fat, carbs, protein, dropoff) {
  return { companyname, name, calories, fat, carbs, protein, dropoff };
}

const rows = [
  createData(
    "Amazon",
    "Jon",
    "Mac",
    "543, Farnifold",
    "434, Amazon Way",
    "Nov 16 2024 8:00 AM",
    "Nov 16 2024 6:00 PM"
  ),
  createData(
    "Amazon",
    "Mick",
    "Jack",
    "123, Baralie road",
    "434, Amazon Way",
    "Nov 16 2024 8:00 AM",
    "Nov 16 2024 6:00 PM"
  ),
  createData(
    "Fedex",
    "Jeff",
    "Black",
    "678, Parkway",
    "434, Amazon Way",
    "Nov 16 2024 8:00 AM",
    "Nov 16 2024 6:00 PM"
  ),
  createData(
    "Amazon",
    "Jack",
    "Son",
    "435, German",
    "434, Amazon Way",
    "Nov 16 2024 8:00 AM",
    "Nov 16 2024 6:00 PM"
  ),
  createData(
    "Amazon",
    "David",
    "Mac",
    "777, Town",
    "434, Amazon Way",
    "Nov 16 2024 8:00 AM",
    "Nov 16 2024 6:00 PM"
  ),
  createData(
    "Amazon",
    "Shal",
    "Net",
    "345, UoM",
    "434, Amazon Way",
    "Nov 16 2024 8:00 AM",
    "Nov 16 2024 6:00 PM"
  ),
  createData(
    "Nike",
    "Alice",
    "Will",
    "4555, Raod ",
    "434, Amazon Way",
    "Nov 16 2024 8:00 AM",
    "Nov 16 2024 6:00 PM"
  ),
  createData(
    "Fedex",
    "Venka",
    "Nat",
    "76667, Hackcross",
    "434, Amazon Way",
    "Nov 16 2024 8:00 AM",
    "Nov 16 2024 6:00 PM"
  ),
];

export default function BasicTable({ admin }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="Gradient-text-table">
              {admin && (
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Company name
                </TableCell>
              )}
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                First name
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold" }}
                align="right"
              >
                Last Name
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold" }}
                align="right"
              >
                Pick Up Address
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold" }}
                align="right"
              >
                Dropoff Address
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold" }}
                align="right"
              >
                Pickup Date Time
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold" }}
                align="right"
              >
                Dropoff Date Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {admin && (
                  <TableCell component="th" scope="row">
                    {row.companyname}
                  </TableCell>
                )}
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.dropoff}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
