import React, { useState } from "react";
import "./Veg.css";  // using same CSS as Veg component
import { addToCart } from "./Store";
import { useDispatch } from "react-redux";

function Fruits() {
  const dispatch = useDispatch();

  const fruitItems = [
    { id: 1, name: "Apple", price: 120, img: "/apple.jpeg", description: "Fresh and juicy red apples" },
    { id: 2, name: "Banana", price: 50, img: "/banana.jpeg", description: "Rich in potassium and energy" },
    { id: 3, name: "Orange", price: 80, img: "/orange.jpeg", description: "Citrus fruit rich in Vitamin C" },
    { id: 4, name: "Grapes", price: 90, img: "/grapes.jpeg", description: "Sweet and seedless green grapes" },
    { id: 5, name: "Mango", price: 150, img: "/mango.jpeg", description: "The king of fruits, sweet and juicy" },
    { id: 6, name: "Pineapple", price: 130, img: "/pineapple.jpeg", description: "Tropical fruit with refreshing taste" },
    { id: 7, name: "Papaya", price: 100, img: "/papaya.jpeg", description: "Soft, sweet fruit rich in fiber" },
    { id: 8, name: "Watermelon", price: 90, img: "/watermelon.jpeg", description: "Large juicy fruit perfect for summer" },
    { id: 9, name: "Strawberry", price: 180, img: "/strawberry.jpeg", description: "Bright red berries with sweet flavor" },
    { id: 10, name: "Kiwi", price: 140, img: "/kiwi.jpeg", description: "Tangy and sweet exotic fruit" },
    { id: 11, name: "Pomegranate", price: 160, img: "/pomegranate.jpeg", description: "Antioxidant-rich red fruit" },
    { id: 12, name: "Guava", price: 70, img: "/guava.jpeg", description: "Healthy fruit rich in Vitamin C" },
    { id: 13, name: "Blueberry", price: 220, img: "/blueberry.jpeg", description: "Small berries packed with nutrients" },
    { id: 14, name: "Dragon Fruit", price: 250, img: "/dragonfruit.jpeg", description: "Exotic fruit with a unique taste" }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(fruitItems.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = fruitItems.slice(indexOfFirst, indexOfLast);

  return (
    <div className="veg-container">
      <h1 className="veg-heading">Welcome to Fruits section...</h1>

      <div className="veg-grid">
        {currentItems.map((item, index) => (
          <div key={index} className="veg-card">

            <img src={item.img} alt={item.name} className="veg-card-img" />

            <div className="veg-card-body">
              <h2 className="veg-card-title">{item.name}</h2>
              <p className="veg-card-price">₹{item.price}</p>
              <p className="veg-card-desc">{item.description}</p>
            </div>

            <div className="veg-card-footer">
              <button className="veg-btn" onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(page => page - 1)}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            className={currentPage === pageIndex + 1 ? "active" : ""}
            onClick={() => setCurrentPage(pageIndex + 1)}
          >
            {pageIndex + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(page => page + 1)}
        >
          Next
        </button>
      </div>
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

export default Fruits;
