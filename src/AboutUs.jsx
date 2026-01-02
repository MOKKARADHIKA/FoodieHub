import React from "react";
import "./AboutUs.css"; // (Optional if you want to style later)

function AboutUs() {
  return (
    <>
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <p className="about-text">
        Welcome to our Food Delivery App — your one-stop destination for fresh,
        delicious and hygienic food delivered straight to your doorstep.  
        We believe that<strong> “Good food brings happiness”</strong> and that's exactly
        what we aim to deliver with every order.
      </p>

      <h2 className="about-subtitle">Why Choose Us?</h2>
      <ul className="about-list">
        <li>Fresh and high-quality ingredients</li>
        <li>Wide variety of Veg, Non-Veg, Snacks, Desserts and Beverages</li>
        <li>Fast and reliable doorstep delivery</li>
        <li>Affordable pricing and exciting offers</li>
        <li>Secure payments and smooth ordering experience</li>
        <li>Friendly customer support available anytime</li>
      </ul>

      <h2 className="about-subtitle">Our Mission</h2>
      <p className="about-text">
        Our mission is to make food ordering easy, enjoyable and accessible for
        everyone. Whether you are craving a spicy biryani, a healthy salad or a
        chocolate dessert — we are here to serve you with love.
      </p>

      <h2 className="about-subtitle">Our Vision</h2>
      <p className="about-text">
        To become the most trusted and loved food app by connecting people with
        great taste, quality and reliability. We constantly improve our services
        to meet your expectations and deliver the best experience every time.
      </p>

      <h2 className="about-subtitle">Join Us on a Delicious Journey!</h2>
      <p className="about-text">
        Thank you for choosing our app. We are grateful for your trust and
        support. Your happiness motivates us to cook more, serve more and grow
        more.  
        <br />
        <strong>Order now and enjoy your favourite dishes anytime, anywhere!</strong>
      </p>
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

export default AboutUs;
