import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders } from "./Store";
import "./Orders.css";

function Orders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const { orders, loading, error } = useSelector((state) => state.orders);

  if (loading) return <h2>Loading orders...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  // ============================
  // ⭐ FILTER — Only today's orders
  // ============================
  const today = new Date().toLocaleDateString();
  const todaysOrders = orders.filter(
    (order) =>
      order.createdAt &&
      new Date(order.createdAt).toLocaleDateString() === today
  );

  return (
    <>
      <h2 style={{ textAlign: "center", color: "green", paddingTop: "50px" }}>
        My Orders (Today)
      </h2>

      <div className="orders-container">
        {todaysOrders.length === 0 ? (
          <p>No orders available for today.</p>
        ) : (
          todaysOrders.map((order, index) => (
            <div key={index} className="order-card">
              <h4>Order #{index + 1}</h4>
              <h5>Items:</h5>

              <div className="items-list">
                {order.items && order.items.length > 0 ? (
                  order.items.map((item, i) => (
                    <div key={i} className="order-item">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="order-img"
                      />
                      <div className="order-item-details">
                        <p>
                          <strong>{item.name}</strong>
                        </p>
                        <p>Qty: {item.quantity}</p>
                        <p>Price: ₹{item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No items found in this order.</p>
                )}
              </div>

              <div className="order-info">
                <p>
                  <strong>Total:</strong> ₹{order.totalAmount || 0}
                </p>
                <p>
                  <strong>Shipping:</strong> ₹{order.shipping || 0}
                </p>
                <p>
                  <strong>Taxes:</strong> ₹{order.taxes || 0}
                </p>
                <p>
                  <strong>Net Amount:</strong> ₹{order.netAmount || 0}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleDateString()
                    : "N/A"}
                </p>
                <p>
                  <strong>Time:</strong>{" "}
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleTimeString()
                    : "N/A"}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      <footer
        className="text-white text-center py-4 mt-5"
        style={{
          backgroundColor: "#1f3a20",
          width: "1340px",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        <div className="container-fluid">
          <p className="mb-1">
            © {new Date().getFullYear()} FoodieHub. All rights reserved.
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
          <div className="mt-2">
            <a href="#" className="text-white me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Orders;
