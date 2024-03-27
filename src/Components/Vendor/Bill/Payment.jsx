import React from "react";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";

function Payment() {
  const location = useLocation();
  const { billItems } = location.state;
  //   console.log(billItems)
  const totalPrice = billItems.reduce((total, item) => total + item.tprice, 0);

  const billHtml = `
  <div style="font-family: Arial, sans-serif; padding: 20px;">
  <div style="text-align: center;"><img src="https://firebasestorage.googleapis.com/v0/b/scrapify-d8c70.appspot.com/o/website_images%2Fscrapify_logo.png?alt=media&token=a3004af8-7aa3-4997-8bc9-e9d2eeb3d089" alt="" height="100" width="100"></div>
  <div style="border-bottom: 0.5px dotted grey;margin-bottom: 10px;">
       <h3>Order Id : 66876345</h3>
       <h5 style="color:grey">10/03/2024</h5>
  </div>
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="border-bottom: 1.5px solid grey;">
  <th style=" padding: 8px;color:grey;">Item</th>
  <th style=" padding: 8px;color:grey;"></th>
  <th style=" padding: 8px;color:grey;">Price</th>
</tr>
</thead>
  <tbody>
    ${billItems
      .map(
        (item, index) => `
      <tr key="${index}">
        <td style="text-align: center;padding: 10px;">${item.subcat}</td>
         <td style="text-align: center;padding: 10px;"></td>
        <td style="text-align: center;padding: 10px;">${item.tprice}</td>
      </tr>
    `
      )
      .join("")}
    <tr style="border-top: 2px solid grey;margin:10px 0;border-bottom: 2px solid grey;">
    <td style="text-align: center;padding: 10px;font-weight: bold;color:grey">Total </td>
    <td></td>
    <td style="text-align: center;padding: 10px;font-weight: bolder;">&#x20B9;
    ${totalPrice.toFixed(2)}</td>
  </tr>
  </tbody>
</table>

`;

  const sendEmail = async () => {
    try {
      const response = await axios.post("http://localhost:8080/send-email", {
        from: "onboarding@resend.dev",
        to: "rohanacharv@gmail.com",
        subject: "Hello World",
        html: billHtml,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  // -------------------- PAYMENT ------------------------------  //
  const amount = totalPrice;

  const paymentHandle = async (e) => {
    // const response = await fetch("http://localhost:8080/payment", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     amount: amount,
    //     from: "onboarding@resend.dev",
    //     to: "rohanacharv@gmail.com",
    //     subject: "Hello World",
    //     html: billHtml,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    const response = await axios.post("http://localhost:8080/payment", {
      amount: amount,
      from: "onboarding@resend.dev",
      to: "developersapple3@gmail.com",
      subject: "Scrapify Invoice",
      html: billHtml,
    });

    console.log(response.data);
    // const responseData = await response.json();
    // console.log(responseData);
    // const paymentId = responseData.paymentId;

    // console.log("Payment ID:", paymentId);
    // var options = {
    //   key: "rzp_test_jsDx2yQY9RMGEC", // Enter the Key ID generated from the Dashboard
    //   amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //   currency: "INR",
    //   name: "Scrapify", //your business name
    //   description: "Test Transaction",
    //   image: "https://example.com/your_logo",
    //   order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //   handler: async function (response) {
    //     const body = {
    //       ...response,
    //     };

    //     const validateRes = await fetch(
    //       "http://localhost:8080/order/validate",
    //       {
    //         method: "POST",
    //         body: JSON.stringify(body),
    //         headers: {
    //           "Content-type": "application/json",
    //         },
    //       }
    //     );

    //     const jsonRes = await validateRes.json();
    //     console.log(jsonRes);
    //   },
    //   prefill: {
    //     //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
    //     name: "Skanda Udupi", //your customer's name
    //     email: "skanda.udupi@example.com",
    //     contact: "9000090000", //Provide the customer's phone number for better conversion rates
    //   },
    //   config: {
    //     display: {
    //       hide: [
    //         {
    //           method: "wallet",
    //         },
    //         {
    //           method: "paylater",
    //         },
    //       ],
    //     },
    //   },

    //   notes: {
    //     address: "Razorpay Corporate Office",
    //   },
    //   theme: {
    //     color: "#3399cc",
    //   },
    // };
    // var rzp1 = new window.Razorpay(options);
    // rzp1.on("payment.failed", function (response) {
    //   alert(response.error.code);
    //   alert(response.error.description);
    //   alert(response.error.source);
    //   alert(response.error.step);
    //   alert(response.error.reason);
    //   alert(response.error.metadata.order_id);
    //   alert(response.error.metadata.payment_id);
    // });

    // rzp1.open();
    // e.preventDefault();
  };

  return (
    <>
      <h1>This is payment gateway</h1>
      <h2>
        Once the payment the bill should automatically be sent through email.
        Now I have made it a manual buttton
      </h2>
      <Button onClick={sendEmail}>Send bill via email</Button>
      <Button onClick={paymentHandle}>Pay</Button>
    </>
  );
}

export default Payment;
