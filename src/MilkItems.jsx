import React, { useState } from "react";
import "./Veg.css"; // same styling used
import { addToCart } from "./Store";
import { useDispatch } from "react-redux";

function MilkItems() {
  const dispatch = useDispatch();

  const milkItems = [
    { id: 1, name: "Full Cream Milk", price: 32, img: "/fullcream.jpeg", description: "Thick and creamy full cream milk." },
    { id: 2, name: "Toned Milk", price: 25, img: "/tonedmilk.jpeg", description: "Healthy toned milk with low fat." },
    { id: 3, name: "Cow Milk", price: 35, img: "/cowmilk.jpeg", description: "Fresh cow milk, farm sourced." },
    { id: 4, name: "Buffalo Milk", price: 40, img: "/buffalomilk.jpeg", description: "Rich buffalo milk high in protein." },
    { id: 5, name: "Organic Milk", price: 55, img: "/organicmilk.jpeg", description: "100% natural organic milk." },
    { id: 6, name: "Chocolate Milk", price: 30, img: "/chocolatemilk.jpeg", description: "Sweet chocolate flavored milk." },
    { id: 7, name: "Strawberry Milk", price: 30, img: "/strawberrymilk.jpeg", description: "Tasty strawberry flavored milk." },
    { id: 8, name: "Badam Milk", price: 35, img: "/badammilk.jpeg", description: "Refreshing almond-flavored milk." },
    { id: 9, name: "Vanilla Milkshake", price: 45, img: "/vanillamilkshake.jpeg", description: "Smooth and creamy vanilla shake." },
    { id: 10, name: "Mango Milkshake", price: 50, img: "/mangomilkshake.jpeg", description: "Delicious mango flavored shake." },
    { id: 11, name: "Sweet Lassi", price: 30, img: "/lassi.jpeg", description: "Traditional Punjabi sweet lassi." },
    { id: 12, name: "Curd", price: 35, img: "/curd.jpeg", description: "Fresh and thick homemade-style curd." },
    { id: 13, name: "Buttermilk", price: 20, img: "/buttermilk.jpeg", description: "Light and refreshing buttermilk." },
    { id: 14, name: "Paneer", price: 80, img: "/paneer.jpeg", description: "Fresh paneer made from pure milk." }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(milkItems.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = milkItems.slice(indexOfFirst, indexOfLast);

  return (
    <div className="veg-container">
      <h1 className="veg-heading">Welcome to Milk Items Section...</h1>

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
          onClick={() => setCurrentPage((page) => page - 1)}
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
          onClick={() => setCurrentPage((page) => page + 1)}
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

export default MilkItems;
