import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementItem,
  decrementItem,
  applyCoupon,
  fetchVegProducts,
  addToCart,
  placeOrder,
  getAllOrders,
  CLEAR_CART,
} from "./Store";
import SendOrderEmail from "./SendOrderEmail";
import "./Cart.css";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import BalloonsUp from "./BalloonsUp";

function Cart() {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);
  const coupon = useSelector((state) => state.coupon);
  const { loading, vegItems, error } = useSelector((state) => state.veg);
  const navigate = useNavigate();

  // get veg items when page loads
  useEffect(() => {
    dispatch(fetchVegProducts());
  }, [dispatch]);

  const [customerEmail, setCustomerEmail] = useState("");
  const [manualDiscount, setManualDiscount] = useState(0);
  const [couponInput, setCouponInput] = useState("");
  const [showQR, setshowQR] = useState(false);

  const totalAmount = cartitems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const finalDiscountPercent = coupon.applied ? coupon.discount : manualDiscount;
  const discountAmount = (totalAmount * finalDiscountPercent) / 100;
  const priceAfterDiscount = totalAmount - discountAmount;
  const gstAmount = (priceAfterDiscount * 18) / 100;
  const netAmount = priceAfterDiscount + gstAmount;

  const upiId = "sandhyakolakani26@okhdfcbank";
  const payerName = "Food Store";
  const upiLink = `upi://pay?pa=${upiId}&pn=${payerName}&am=${totalAmount}&cu=INR`;

  // ================= HANDLE CHECKOUT =================
 let handleCheckout = () => {
  const orderData = {
    items: cartitems,
    totalAmount,
    discountAmount,
    gstAmount,
    netAmount,
    orderDate: new Date(),
  };

  dispatch(placeOrder(orderData))
    .unwrap()
    .then(() => {
      toast.success("Order Placed Successfully 🎉"); 
      dispatch(CLEAR_CART()); // 🔥 EMPTY CART AFTER SUCCESS
      dispatch(getAllOrders());

      Swal.fire({
        icon: "success",
        title: "💚 Order Placed",
        text: "Your order has been placed successfully!",
        confirmButtonText: "Go to Orders",
        confirmButtonColor: "#28a745",
      }).then(() => {
        BalloonsUp(600);
        navigate("/orders");
      });
    })  // <-- no semicolon here
    .catch((error) => {
      toast.error("Failed to place order");
    });
};


  return (
    <>
      <div className="cart-container" style={{ paddingTop: "60px" }}>
        <h1>Shopping Cart</h1>

        {cartitems.length === 0 ? (
          <h2 className="empty-cart">Your cart is empty 😢</h2>
        ) : (
          <>
            <ul className="cart-items">
              {cartitems.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="item-left">
                    <img src={item.img} alt={item.name} className="cart-img" />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p>Price: ₹{item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>

                  <div>
                    <button
                      className="btn btn-remove"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                    <button
                      className="btn btn-plus"
                      onClick={() => dispatch(incrementItem(item.id))}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-minus"
                      onClick={() => dispatch(decrementItem(item.id))}
                    >
                      -
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Apply Discount */}
            <h2>Select Discount</h2>
            <div className="discount-buttons">
              <button onClick={() => setManualDiscount(10)}>10%</button>
              <button onClick={() => setManualDiscount(20)}>20%</button>
              <button onClick={() => setManualDiscount(30)}>30%</button>
            </div>
            <h3>Selected Discount: {finalDiscountPercent}%</h3>

            {/* Apply Coupon */}
            <h2>Apply Coupon</h2>
            <div className="coupon-section">
              <input
                type="text"
                placeholder="Enter coupon"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
              />
              <button onClick={() => dispatch(applyCoupon(couponInput))}>
                Apply
              </button>
            </div>
            <p>{coupon.message}</p>

            {/* Billing */}
            <div className="billing-box">
              <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
              <h3>Discount ({finalDiscountPercent}%): ₹{discountAmount.toFixed(2)}</h3>
              <h3>Amount After Discount: ₹{priceAfterDiscount.toFixed(2)}</h3>
              <h3>GST (18%): ₹{gstAmount.toFixed(2)}</h3>
              <h2>Net Amount: ₹{netAmount.toFixed(2)}</h2>
            </div>

            {/* Email Section */}
            <div className="email-section">
              <h4>Enter your email to receive order details</h4>
              <input
                type="email"
                placeholder="youremail@example.com"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
              <SendOrderEmail
                cartItems={cartitems}
                netAmount={netAmount}
                tax={gstAmount}
                totalAmount={totalAmount}
                customerEmail={customerEmail}
              />
            </div>

            {/* QR + Checkout */}
            <div>
              <button
                onClick={() => setshowQR(true)}
                style={{
                  borderRadius: "5px",
                  backgroundColor: "lightblue",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              >
                Scanner (Pay Now)
              </button>

              <button
                onClick={handleCheckout}
                style={{ paddingLeft: "20px", borderRadius: "5px" }}
              >
                Checkout
              </button>

              {showQR && (
                <div>
                  <h2>Scan to Pay</h2>
                  <h2>Total Amount ₹{totalAmount}</h2>
                  <QRCodeCanvas value={upiLink} size={250} />
                </div>
              )}
            </div>
          </>
        )}
      </div>
       {/* 🔥 Toast Container */}
      {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover
        draggable
        newestOnTop
      /> */}

      {/* Footer */}
      <footer
        className="text-white text-center py-4 mt-5"
        style={{
          backgroundColor: "#1f3a20",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        <div className="container-fluid">
          <p className="mb-1">
            © {new Date().getFullYear()} BigBasket. All rights reserved.
          </p>
          <p className="mb-0">
            📍 Address: 123 Grocery Street, Hyderabad, India | 📞 +91 6305892838
          </p>
          <p className="mb-0">
            📧 Email:{" "}
            <a href="mailto:support@bigbasket.com" className="text-info">
              support@FoodieHub.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Cart;
