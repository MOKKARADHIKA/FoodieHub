import React, { useEffect, useState } from "react";

function OfferTimer({ endTime }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div style={{ 
      background: "#ffefc2", 
      padding: "6px 12px", 
      borderRadius: "8px", 
      fontWeight: "bold", 
      color: "#d9534f" 
    }}>
      ⏳ Offer Ends In:{" "}
      {timeLeft.hours ?? "00"}h : {timeLeft.minutes ?? "00"}m : {timeLeft.seconds ?? "00"}s
    </div>
  );
}

export default OfferTimer;