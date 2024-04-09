import { Box, Typography } from "@mui/material";
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
        <Typography variant="h4" sx={{ margin: "50px 0 " }}>
          Pickup Request
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {[122, 223, 73, 44, 115, 336, 117].map((item) => (
            <Box key={item} width={{ xs: "100%", md: "calc(50% - 8px)" }}>
              <PickupBox pickupId={item} setIsOpen={onClickModal} />
            </Box>
          ))}
        </Box>
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
