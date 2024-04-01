import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const StyledTableContainer = styled(TableContainer)`
  max-width: 100%;
`;

const StyledTable = styled(Table)`
  min-width: 650px;
`;

const Dashboard = () => {
  const [details, setdetails] = useState([]);

  const fetchdet = async () => {
    const response = await fetch("http://localhost:8080/getdetails");
    const data = await response.json()
    setdetails(data.items)
    // console.log(data.items)
  };

  // fetchdet();
  useEffect(() => {
    if(details.length==0){
      fetchdet();
    console.log(details);
    }
  }, [details]);

  return (
    <StyledTableContainer
      component={Paper}
      sx={{ width: { md: "80%", xs: "100%" } }}
    >
      <StyledTable aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ minWidth: "150px" }}>Created at</TableCell>
            <TableCell style={{ minWidth: "150px" }}>Payment ID</TableCell>
            <TableCell style={{ minWidth: "150px" }}>Contact</TableCell>

            <TableCell style={{ minWidth: "150px" }}>Amount</TableCell>
            <TableCell style={{ minWidth: "150px" }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Insert your table rows here */}
          <TableRow>
            <TableCell>2024-03-31</TableCell>
            <TableCell>1233</TableCell>
            <TableCell>John</TableCell>

            <TableCell>$100.00</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
          {/* Add more rows as needed */}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default Dashboard;
