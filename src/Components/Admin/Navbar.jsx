import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar({title}) {
  const navigate = useNavigate();

  const handleNav = () => {
    if(title === "dashboard") {
      navigate('/admin/dashboard')
    }else {
      navigate('/admin')
    }
  }
  return (

    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Scrapify
          </Typography>
          <Button onClick={handleNav} color="inherit">
            {title}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>

  );
}
