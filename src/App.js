import "./App.css";

import Admin from "./Components/Admin/Admin";
import Vendor from "./Components/Vendor/Vendor";
import SignUp from "./Components/SingUp_In/SingUp";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/SingUp_In/SingIn";
import Bill2 from "./Components/Vendor/Bill/Bill2";
import Payment from "./Components/Vendor/Bill/Payment";
function App() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <Navbar />
    //   <Grid container>
    //     <Grid item margin={7} xs={4} sx={{ md: { margin: "10000px" } }}>
    //       <Content />
    //     </Grid>
    //   </Grid>
    // </Box>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/vendor">
        <Route index element={<Vendor />} />
        <Route path="bill" element={<Bill2 />} />
      </Route>
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
