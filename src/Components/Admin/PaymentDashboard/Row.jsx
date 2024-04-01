import { TableCell, TableRow } from "@mui/material";
import React from "react";

const Row = () => {
  return (
    <TableRow>
      <TableCell>Created At</TableCell>
      <TableCell>Payment ID</TableCell>
      <TableCell>Contact</TableCell>
      <TableCell>Amount</TableCell>
      <TableCell>Status</TableCell>
    </TableRow>
  );
};

export default Row;
