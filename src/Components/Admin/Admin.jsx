import { Box } from "@mui/material";

import Main from "./Main";
import Navbar from "./Navbar";

const Admin = () => {
  return (
    <Box>
      <Navbar title={"dashboard"} />

      <Main />
    </Box>
  );
};

export default Admin;
