import React from "react";
import emailjs from "emailjs-com";

function SendOrderEmail({cartItems, netAmount, tax, totalAmount, gstAmount,customerEmail }) {

  const sendEmail = () => {

    if (!customerEmail) {
      alert("Please enter a valid email!");
      return;
    }

    const templateParams = {
      customer_name: "Customer",  // add input if needed
      email: customerEmail,
      order_id: Date.now().toString(),
      


      orders: cartItems.map(item => ({
        name: item.name,
        units: item.quantity,
        price: item.price
      })),

      shipping: 50,   // change if you want dynamic shipping
      
      totalAmount: totalAmount.toFixed(2),
      netAmount:netAmount,
      
        tax:gstAmount
    };

    emailjs.send(
      "service_67oxk28",
      "template_sdzzkks",
      templateParams,
      "KWKJMPkVuzo7k_-GU"
    )
    .then(() => {
      alert("Email sent successfully!");
    })
    .catch(error => {
      alert("Failed to send email. Check console.");
      console.error("EmailJS error:", error);
    });
  };

  return (
    <button onClick={sendEmail} style={{borderRadius:"10px",marginLeft:'5px'}}>Send Order Email</button>
  );
}

export default SendOrderEmail;