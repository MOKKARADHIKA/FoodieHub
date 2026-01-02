// src/Login.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "./Store";
import "./Login.css"

function Login() {
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated, userInfo } = useSelector(
    (state) => state.user
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };

  return (
    <>
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Please login to continue</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="login-input"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="login-input"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && <p className="login-error">{error}</p>}
        {isAuthenticated && (
          <p className="login-success">
            Login Successful! Welcome {userInfo?.name}
          </p>
        )}
      </div>
    </div>
    <footer
        className="text-white text-center py-4 mt-5"
        style={{ backgroundColor: '#1f3a20', borderRadius: '20px', padding: '30px',width:'1340px' }}
      >
        <div className="container-fluid">
          <p className="mb-1">© {new Date().getFullYear()} FoodieHub. All rights reserved.</p>
          <p className="mb-0">
            📍 Address: 123 Grocery Street, Hyderabad, India | 📞 +91 6305892838
          </p>
          <p className="mb-0">
            📧 Email:{' '}
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

export default Login;
