// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser, clearMessages } from "./Store"; // Adjust the import path

// function RegisterForm() {
//   const dispatch = useDispatch();
//   const { loading, error, successMessage } = useSelector((state) => state.user);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     mobile: "",
//     address: "",
//   });

//   // New state to handle mobile validation error
//   const [mobileError, setMobileError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     if (e.target.name === "mobile") {
//       setMobileError(""); // clear mobile error when user types
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Mobile number validation: exactly 10 digits and all numeric
//     if (form.mobile.length !== 10 || !/^\d{10}$/.test(form.mobile)) {
//       setMobileError("Please enter a valid 10-digit mobile number");
//       return; // prevent submission
//     }

//     dispatch(registerUser(form));
//   };

//   const handleReset = () => {
//     setForm({
//       name: "",
//       email: "",
//       password: "",
//       mobile: "",
//       address: "",
//     });
//     setMobileError("");
//     dispatch(clearMessages());
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
//       <label htmlFor="name" style={{ display: "block", marginBottom: 5 }}>
//         Name:
//       </label>
//       <input
//         id="name"
//         type="text"
//         name="name"
//         placeholder="Enter your name"
//         value={form.name}
//         onChange={handleChange}
//         required
//         style={{ display: "block", marginBottom: 15, width: "100%" }}
//       />

//       <label htmlFor="email" style={{ display: "block", marginBottom: 5 }}>
//         Email:
//       </label>
//       <input
//         id="email"
//         type="email"
//         name="email"
//         placeholder="Enter your email"
//         value={form.email}
//         onChange={handleChange}
//         required
//         style={{ display: "block", marginBottom: 15, width: "100%" }}
//       />

//       <label htmlFor="password" style={{ display: "block", marginBottom: 5 }}>
//         Password:
//       </label>
//       <input
//         id="password"
//         type="password"
//         name="password"
//         placeholder="Enter your password"
//         value={form.password}
//         onChange={handleChange}
//         required
//         style={{ display: "block", marginBottom: 15, width: "100%" }}
//       />

//       <label htmlFor="mobile" style={{ display: "block", marginBottom: 5 }}>
//         Mobile:
//       </label>
//       <input
//         id="mobile"
//         type="text"
//         name="mobile"
//         placeholder="Enter your mobile number"
//         value={form.mobile}
//         onChange={handleChange}
//         style={{ display: "block", marginBottom: 5, width: "100%" }}
//       />
//       {/* Show mobile validation error below input */}
//       {mobileError && <p style={{ color: "red", marginTop: 0, marginBottom: 15 }}>{mobileError}</p>}

//       <label htmlFor="address" style={{ display: "block", marginBottom: 5 }}>
//         Address:
//       </label>
//       <input
//         id="address"
//         type="text"
//         name="address"
//         placeholder="Enter your address"
//         value={form.address}
//         onChange={handleChange}
//         style={{ display: "block", marginBottom: 15, width: "100%" }}
//       />

//       <button type="submit" disabled={loading} style={{ marginRight: 10 }}>
//         {loading ? "Registering..." : "Register"}
//       </button>
//       <button type="button" onClick={handleReset}>
//         Reset
//       </button>

//       {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
//       {successMessage && <p style={{ color: "green", marginTop: 10 }}>{successMessage}</p>}
//     </form>
//   );
// }
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearMessages } from "./Store";
import "./RegisterForm.css";

function RegisterForm() {
  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector((state) => state.user);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
  });

  const [mobileError, setMobileError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "mobile") setMobileError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.mobile.length !== 10 || !/^\d{10}$/.test(form.mobile)) {
      setMobileError("Please enter a valid 10-digit mobile number");
      return;
    }

    dispatch(registerUser(form));
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      password: "",
      mobile: "",
      address: "",
    });
    setMobileError("");
    dispatch(clearMessages());
  };

  return (
    <>
    <div className="register-page-wrapper">
      <form className="register-form-container" onSubmit={handleSubmit}>
        {/* Title added for UI */}
        <h2 className="register-title">Create Your Account</h2>

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="mobile">Mobile:</label>
        <input
          id="mobile"
          type="text"
          name="mobile"
          placeholder="Enter your mobile number"
          value={form.mobile}
          onChange={handleChange}
        />
        {mobileError && <p className="error">{mobileError}</p>}

        <label htmlFor="address">Address:</label>
        <input
          id="address"
          type="text"
          name="address"
          placeholder="Enter your address"
          value={form.address}
          onChange={handleChange}
        />

        <div className="register-form-buttons">
          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>

        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
      
    </div>
    <footer
        className="text-white text-center py-4 mt-5"
        style={{ backgroundColor: '#1f3a20', borderRadius: '20px', padding: '30px',width:"1340px" }}
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

export default RegisterForm;
