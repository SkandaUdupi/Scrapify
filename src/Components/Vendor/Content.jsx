import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import PickupReq from "./PickupReq";
import PickupBox from "./PickUp Box/PickupBox";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import Modal from "./PickUp Box/Modal";

const theme = createTheme();

const Main = () => {
  const [isOpen, setIsOpen] = useState(false); //Handling Modal
  const [pickupID, setPickupID] = useState(""); //  manage pickupID

  const onClickModal = (val) => {
    setIsOpen(val); //to manage the modal
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          width: { md: "70vw" },
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "50px" }}>
          Pickup Request
        </Typography>

        <PickupReq
          pickupId={(id) => {
            setPickupID(id); // Set pickupID, Id  the vendor hay typed in search bar
          }}
        />

        <Grid container spacing={2} sx={{ width: "100%" }}>
          {[122, 223, 73, 44, 115, 336, 117].map((item) => (
            <Grid key={item} item xs={12} md={6}>
              <Box sx={{ marginBottom: 2 }}>
                <PickupBox pickupId={item} setIsOpen={onClickModal} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        pickupID={pickupID}
      />
    </ThemeProvider>
  );
};

export default Main;
