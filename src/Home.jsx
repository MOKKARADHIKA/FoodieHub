import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import OfferTimer from './OfferEndTime';
import './Home.css';
import OfferTimer from './OfferTimer';

function Home() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const navigate = useNavigate();

  return (
    <div className='non-veg'>
    <div className="container-fluid py-4">
     {/* Header */}
<h1 className="text-center mb-4" style={{ color: '#2c6e49', fontWeight: '700', paddingTop:"80px" }}>
  🍽️ Welcome to FoodieHub
</h1>
<p className="lead text-center" style={{ color: '#444', fontSize: '1.2rem', marginBottom: '3rem' }}>
  Your go-to app for fresh veggies, delicious meals, and delightful sweets — all in one place!
</p>

{/* About FoodieHub Section */}
<div
  className="container-fluid my-5 px-4 py-5"
  style={{
    borderRadius: "20px",
    background: "linear-gradient(135deg, #fefefe, #d1f2b2ff, #75eb98ff, #4dd0e1)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
  }}>
  <div className="row align-items-center">
    {/* Text Content - Left Side */}
    <div className="col-md-6">
      <h2
        style={{
          background: "linear-gradient(90deg, #2c6e49, #00bcd4, #3f51b5)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "800",
          marginBottom: "20px",
        }}
      >
        🍽️ What is FoodieHub?
      </h2>
      <p style={{ fontSize: "1.1rem", color: "#333", lineHeight: "1.8" }}>
        <strong>FoodieHub</strong> is your all-in-one food ordering platform offering fresh vegetables, mouth-watering meals, and sweet treats delivered right to your doorstep. Whether you're craving healthy options or indulgent flavors, we have it all.
      </p>

      <h4
        style={{
          background: "linear-gradient(90deg, #2c6e49, #009688, #00bcd4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "700",
          marginTop: "30px",
        }}
      >
        💡 Why choose FoodieHub?
      </h4>
      <p style={{ fontSize: "1.05rem", color: "#333", lineHeight: "1.8" }}>
        Skip the hassle of cooking or waiting in lines. FoodieHub lets you explore a wide variety of cuisines and fresh produce, all with quick delivery, secure payments, and amazing deals tailored just for you.
      </p>

      <h4
        style={{
          background: "linear-gradient(90deg, #2c6e49, #43a047, #00c853)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "700",
          marginTop: "30px",
        }}
      >
        ⚙ How it works
      </h4>
      <ol
        style={{
          fontSize: "1.05rem",
          color: "#333",
          lineHeight: "1.8",
          paddingLeft: "1.2rem",
        }}
      >
        <li>Browse diverse categories like Fresh Veggies, Hot Meals, Snacks, and Desserts.</li>
        <li>Add your favorite dishes and items to the cart.</li>
        <li>Select a convenient delivery slot.</li>
        <li>Checkout safely with multiple payment options including cards, UPI, or cash.</li>
        <li>Sit back and relax while we prepare and deliver your order quickly.</li>
      </ol>
    </div>


          {/* Image - Right Side */}
          <div className="col-md-6 text-center">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/254814167976123.6432c4d743d88.png"
              alt="About BigBasket"
              className="img-fluid rounded shadow-lg"
              style={{
                maxHeight: "480px",
                objectFit: "cover",
                borderRadius: "20px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
            />
          </div>
        </div>
      </div>

      {/* Available Items Section */}
      <h2 className="text-center mt-5 mb-4" style={{ color: '#2c6e49', fontWeight: '700' }}>
        Available Items
      </h2>

      <div className="container">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          {[
            'https://png.pngtree.com/png-vector/20240204/ourlarge/pngtree-indian-lemon-rice-png-image_11540901.png',
            'https://cf.shopee.com.br/file/dfa7c74f12d3ceef1e0230b19f1a353e',
            'https://m.media-amazon.com/images/I/71WeEVI1gZL.jpg',
            'https://img.freepik.com/premium-photo/delicious-indian-vegetable-biryani-bowl-white-background-generative-ai_804788-10024.jpg?w=2000',
            'https://img.freepik.com/premium-photo/chocolate-isolated-white-background_825385-1141.jpg?w=2000',
            'https://static.vecteezy.com/system/resources/previews/021/952/450/non_2x/southern-fried-chicken-fried-chicken-transparent-background-png.png',
            'https://hamara.com.au/wp-content/uploads/2024/01/basmati-rice-2000.jpg',
            'https://tse2.mm.bing.net/th/id/OIP.2y-gxk-lQRU10eTl2c4ZpAHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`scroll-img-${idx}`}
              style={{
                height: '200px',
                width: '200px',
                borderRadius: '90px',
                marginRight: '5px',
              }}
            />
          ))}
        </marquee>
      </div>

      {/* Category Highlights */}
     <div className="row mt-5">
  {[
    {
      img: 'https://media.istockphoto.com/id/642512760/photo/curd-rice-garnished-with-pomegranate.jpg?s=612x612&w=0&k=20&c=eeyAq_2fc7gvrfb-r7R4xgigaTYVbPcZn6oJktV4bnE=',
      alt: 'Vegetables',
      title: '🥗 VegItems Specials',
      desc: 'Explore a wide variety of farm-fresh veggies delivered straight to your doorstep.',
    },
    {
      img: 'https://static.vecteezy.com/system/resources/previews/021/952/450/non_2x/southern-fried-chicken-fried-chicken-transparent-background-png.png',
      alt: 'Non-Veg',
      title: '🍗 Non-Veg Specials',
      desc: 'From biryanis to curries, indulge in mouth-watering non-veg delights.',
      showTimer : true
    },
    {
      img: 'https://img.freepik.com/premium-photo/chocolate-isolated-white-background_825385-1141.jpg?w=2000',
      alt: 'Chocolates',
      title: '🍫 Chocolates & Treats',
      desc: 'Satisfy your sweet tooth with premium chocolates and snacks.',
    },
  ].map(({ img, alt, title, desc, showTimer = false }, i) => (
  <div key={i} className="col-md-4 mb-4 d-flex justify-content-center">
    <div className="card shadow" style={{ width: "20rem", borderRadius: "15px", overflow: "hidden" }}>
      <img
        src={img}
        alt={alt}
        className="card-img-top"
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title" style={{ color: '#2c6e49', fontWeight: '700' }}>
          {title}
        </h5>
        <p className="card-text" style={{ color: '#444' }}>
          {desc}
        </p>
        {showTimer && (
          <div className="mb-3">
            <OfferTimer endTime={new Date(Date.now() + 2 * 60 * 60 * 1000)} />
          </div>
        )}
      </div>
    </div>
  </div>
))}
       
</div>


      {/* Call to Action */}
      <div className="text-center mt-5">
        <p className="fw-bold" style={{ color: '#155724', fontSize: '1.1rem' }}>
          🛍 Start shopping now and enjoy seamless checkout, discounts, and fast delivery!
        </p>
      </div>

      {/* Offer Cards Section */}
     

      {/* Reviews Section */}
      <div className="container-fluid mt-5" style={{ backgroundColor: '#d3afcaff', borderRadius: '20px', padding: '30px', boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}>
        <h2 className="text-center" style={{ color: '#155724', fontWeight: '700' }}>
          Reviews
        </h2>

        <Carousel className="mt-4">
          {[
            { text: '“This place is a hidden gem! Always stocked with fresh items and the staff are super friendly.”', author: 'Radhika' },
            { text: '“Clean, organized, and everything I need is just a shelf away. The prices are fair and the quality is top-notch.”', author: 'Alice' },
            { text: '“Feels like a neighborhood store with a heart. They even remember my usual order!”', author: 'Bob' },
            { text: '“Best rice and pulses in town. Nothing compares to the freshness here.”', author: 'Charlie' },
            { text: '“The owner is incredibly helpful and even helped me carry my bags to the car!”', author: 'David' },
            { text: '“Great variety, especially in snacks and spices. I always find something new.”', author: 'George' },
            { text: '“Their homemade pickles and masalas are next level. My mom swears by them!”', author: 'Elon' },
            { text: '“Fast service, fair prices, and they even offer home delivery.”', author: 'Franlie' },
          ].map(({ text, author }, idx) => (
            <Carousel.Item key={idx}>
              <div className="text-center p-4" style={{ color: '#155724', fontStyle: 'italic' }}>
                <p>{text}</p>
                <h4 style={{ fontWeight: '700', marginTop: '15px' }}>— {author}</h4>
                <button onClick={() => setLikes(likes + 1)} className="btn btn-success me-2">👍</button>
                <button onClick={() => setDislikes(dislikes + 1)} className="btn btn-danger">👎</button>
                <h5 className="mt-3">Likes: {likes}</h5>
                <h5>Dislikes: {dislikes}</h5>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
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
    </div>
  );
}

export default Home;