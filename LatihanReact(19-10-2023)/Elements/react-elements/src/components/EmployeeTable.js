import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const EmployeeTable = ({ foods = [], judulKolomPertama }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, padding: "20px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{judulKolomPertama}</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foods.map((food) => (
            <TableRow
              key={food.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {food.name}
              </TableCell>
              <TableCell align="right">{food.calories}</TableCell>
              <TableCell align="right">{food.fat}</TableCell>
              <TableCell align="right">{food.carbs}</TableCell>
              <TableCell align="right">{food.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
