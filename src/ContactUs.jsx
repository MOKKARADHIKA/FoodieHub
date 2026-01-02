import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactUs() {
  return (
    <div className="container-fluid py-4">
      <div className='non-veg'>
      <h1 className="text-center text-primary mb-4" style={{marginTop:"18px"}}>📞 Contact Us</h1>
      <p className="lead text-center">
        We're here to help! Whether you have a question about your order, need assistance with the app, or just want to share feedback—we’d love to hear from you.
      </p>

      {/* 🔹 Contact Services */}
      <div className="row text-center mt-5">
        <h3 className="mb-4 text-success">💼 Contact Services</h3>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🛒 Order Issues</h5>
              <p className="card-text">Delayed, missing, or incorrect items? Let us know and we’ll fix it.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">💻 Technical Support</h5>
              <p className="card-text">Having trouble with the app or website? We’ll help you out.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">💬 Feedback</h5>
              <p className="card-text">Your feedback matters! Share your thoughts to help us improve.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">📈 Business Inquiries</h5>
              <p className="card-text">Interested in partnering with BigBasket? Get in touch with our team.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Contact Details */}
      <div className="row mt-5">
        <div className="col-md-6">
          <h4>📧 Email Support</h4>
          <p>
            Reach us at <a href="mailto:mokkaradhika502@gmail.com"><strong>mokkaradhika502@gmail.com</strong></a> for any queries or support-related concerns. We typically respond within 24 hours.
          </p>
        </div>

        <div className="col-md-6">
          <h4>📱 Phone Support</h4>
          <p>
            Call us at <strong>6305892838</strong> <br />
            <small>(Available Monday–Saturday, 9:00 AM to 6:00 PM)</small>
          </p>
        </div>
      </div>

      {/* 🔹 Office Address & Message Form */}
      <div className="row mt-4">
        <div className="col-md-6">
          <h4>📍 Our Office</h4>
          <p>
            FoodieHub HQ<br />
            Ameerpet, Hyderabad<br />
            Telangana, India – 500016
          </p>
        </div>

        <div className="col-md-6">
          <h4>💬 Send Us a Message</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

      {/* 🔹 Footer Message */}
      <div className="mt-5 text-center">
        <h5>🤝 We're Always Listening</h5>
        <p className="fw-bold">
          Your feedback helps us grow and serve you better. Thank you for choosing BigBasket!
        </p>
      </div>
      </div>
      {/* Footer */}
      <footer
        className="text-white text-center py-4 mt-5"
        style={{ backgroundColor: '#1f3a20', borderRadius: '20px', padding: '30px' }}
      >
        <div className="container-fluid">
          <p className="mb-1">© {new Date().getFullYear()} FoodieHub. All rights reserved.</p>
          <p className="mb-0">
            📍 Address: 123 Grocery Street, Hyderabad, India | 📞 +91 6305892838
          </p>
          <p className="mb-0">
            📧 Email:{' '}
            <a href="mailto:support@bigbasket.com" className="text-info">
              support@bigbasket.com
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
    </div>
  );
}

export default ContactUs;