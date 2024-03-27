// import React, { useState } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import Item from "./Item";

// import Navbar from "../Navbar";
// import PaymentSummary from "./PaymentSummary";

// const Bill = () => {
//   const [items, setItems] = useState([{ id: 1, quantity: 1, price: 0 }]);
//   const [showPaymentSummary, setShowPaymentSummary] = useState(false);
//   const handleAddItem = () => {
//     const newItem = { id: items.length + 1, quantity: 1, price: 0 };
//     setItems([...items, newItem]);
//   };
//   const handlePay = () => {
//     setShowPaymentSummary(true);
//   };

//   const [item, setItem] = useState([]);

//   const getData = ({ item, qty, price }) => {
//     const newItem = { item: item, quantity: qty, price: price };

//     setItem((prevItem) => {
//       return [...prevItem, newItem];
//     });

//     console.log(item);
//     console.log("2");
//   };

//   return (
//     <Box>
//       <Navbar />
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           rowGap: "5vh",

//           marginLeft: { md: 40, xs: 6 },
//           marginTop: 3,
//           border: "2px solid black",
//           borderRadius: "5px",
//           width: { md: "60vw", xs: "65vw" },
//           padding: "40px",
//         }}
//       >
//         <Typography>Bill</Typography>
//         {items.map((item) => (
//           <Box
//             key={item.id}
//             sx={{
//               display: "flex",
//               columnGap: "2vw",
//               alignItems: { md: "center" },
//             }}
//           >
//             <Typography>{item.id}.</Typography>
//             <Item key={item.id} itemData={(data) => getData(data)} />
//           </Box>
//         ))}
//         <Box>
//           <Button
//             sx={{ width: "6vw", marginRight: 4 }}
//             variant="contained"
//             onClick={handleAddItem}
//           >
//             Add Item
//           </Button>
//         </Box>
//         <Button
//           sx={{ width: "5vw", marginRight: 4 }}
//           variant="contained"
//           onClick={handlePay}
//         >
//           Pay
//         </Button>
//         {showPaymentSummary && <PaymentSummary items={items} />}
//       </Box>
//     </Box>
//   );
// };

// export default Bill;
