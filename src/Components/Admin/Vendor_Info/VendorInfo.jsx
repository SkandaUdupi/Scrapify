import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { vendors } from "./VendorTable";

const VendorInfo = () => {
  // Access URL parameters
  const { id } = useParams();

  // Find the vendor object with the matching id
  const vendor = vendors.find((vendor) => vendor.id === parseInt(id));

  return (
    <Box
      sx={{
        margin: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6" sx={{ margin: "20px" }}>
        Vendor Details
      </Typography>

      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box sx={{ p: 2, flexGrow: "1", marginLeft: "10px" }}>
          <Typography sx={{ lineHeight: 2 }}>Name: {vendor.name}</Typography>
          <Typography sx={{ lineHeight: 2 }}>Email: {vendor.email}</Typography>
          <Typography sx={{ lineHeight: 2 }}>
            Contact: {vendor.contactNumber}
          </Typography>
          <Typography sx={{ lineHeight: 2 }}>
            Address: {vendor.address}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: "1" }}>
          <img
            src="placeholder.jpg"
            alt="Vendor photo"
            style={{ height: "140px", width: "130px" }}
          />
        </Box>
      </Box>

      <Typography variant="h6" sx={{ margin: "20px" }}>Previous Pickups</Typography>
      <Box>
      <TableContainer component={Paper} sx={{ margin: "20px",width:"70%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pickup ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Customer Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vendor.pickupHistory.map((pickup) => (
              <TableRow key={pickup.pickupId}>
                <TableCell>{pickup.pickupId}</TableCell>
                <TableCell>{pickup.amount}</TableCell>
                <TableCell>{pickup.customerName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </Box>
  );
};

export default VendorInfo;
