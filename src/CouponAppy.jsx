import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyCupon } from "./Store";    // your redux action

function CouponApply() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleApply = () => {
    dispatch(applyCoupon(input));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Coupon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleApply}>Apply Coupon</button>
    </>
  );
}

export default CouponApply;
