import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Display = ({ id, subcat }) => {
  const [editedPrice, setEditedPrice] = useState(null);
  const [editedIndex, setEditedIndex] = useState(null);

  const handleEditPrice = (index, value) => {
    setEditedIndex(index);
    setEditedPrice(value); // Update editedPrice when editing
  };

  const onSavePrice = (index) => {
    // Here, you can handle saving the edited price
    console.log(subcat[index].subcat, editedPrice); //subcat,price
    // Reset edited price and index after saving

    //save to DB
    // setEditedPrice(null);
    // setEditedIndex(null);
  };

  return (
    <Box sx={{ margin: "1.2rem 0",display:"flex", flexDirection:"column"  }}>
      <Box sx={{display:"flex",flexDirection:"row", columnGap:"6rem"}}>
      <Typography variant="h6" align="center" sx={{ marginBottom: "1rem" }}>
        Name
      </Typography>
      <Typography variant="h6" align="center" sx={{ marginBottom: "1rem" }}>
        Price
      </Typography>
      </Box>
    
      <Divider sx={{ margin: "1rem 0" }} />
      {subcat.map(({ subcat: name, subCatPrice }, index) => (
        <Box
          key={name}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          margin="2vh 0"
          textAlign="center"
          fontSize="14px"
          columnGap="6rem"
        >
          <Typography>{name}</Typography>
          <FormControl>
            <TextField
            sx={{maxWidth:{md:"150px",xs:"130px"}}}
              value={editedIndex === index ? editedPrice : subCatPrice}
              variant="outlined"

              inputProps={{
                style: { fontSize: "14px" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">₹</InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    {editedIndex === index ? (
                      <IconButton
                        onClick={() => onSavePrice(index)}
                        size="small"
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    ) : (
                      <IconButton
                        onClick={() => handleEditPrice(index, subCatPrice)}
                        size="small"
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
              onChange={(e) => handleEditPrice(index, e.target.value)}
            />
          </FormControl>
        </Box>
      ))}
    </Box>
  );
};

export default Display;
