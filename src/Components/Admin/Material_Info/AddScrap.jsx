import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormLabel,
  Input,
  Typography,
  useMediaQuery,
  Collapse,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const AddScrap = ({ id }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [expanded, setExpanded] = useState(false); //to manage the dropdown of add scrap
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onNameInput = (e) => {
    setInputName(e.target.value);
  };
  const onPriceInput = (e) => {
    setInputPrice(e.target.value);
  };
  const onAddSubCat = () => {
    //  Add to DataBase
    //inputName and inputPrice has data enterd by user

    setInputName("");
    setInputPrice("");
  };

  return (
    <Card
      variant="outlined"
      sx={{
        padding: 1,
        overflow: "auto",
        resize: "horizontal",
        margin: "40px 0 ",
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ marginBottom: expanded ? "20px" : "0" }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              marginLeft: "10px",
              fontSize: isSmallScreen ? "16px" : "24px",
            }}
            level="title-lg"
          >
            Add New Scrap
          </Typography>
          <CardActions>
            {expanded ? (
              <RemoveIcon
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="hide details"
              />
            ) : (
              <AddIcon
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show details"
              />
            )}
          </CardActions>
        </Stack>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{
            width: { md: "100px", xs: "140px" }, //Change the width of the form box
            marginLeft: { xs: "10px", md: "30px" },
          }}
        >
          <FormControl>
            <FormLabel sx={{ fontSize: isSmallScreen ? "14px" : "16px" }}>
              Name
            </FormLabel>
            <Input
              sx={{ fontSize: isSmallScreen ? "14px" : "16px", width: "10rem" }}
              onChange={onNameInput}
              value={inputName}
            />
          </FormControl>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: isSmallScreen ? "14px" : "16px",
                marginTop: "18px",
              }}
            >
              Price
            </FormLabel>
            <Input
              sx={{ fontSize: isSmallScreen ? "14px" : "16px", width: "10rem" }}
              onChange={onPriceInput}
              value={inputPrice}
            />
          </FormControl>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={onAddSubCat}
              sx={{ marginTop: "1.2rem" }}
            >
              Save
            </Button>
          </CardActions>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default AddScrap;
