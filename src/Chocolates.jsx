import React, { useState } from "react";
import "./Veg.css";   // using same styling file
import { addToCart } from "./Store";
import { useDispatch } from "react-redux";

function Chocolates() {
  const dispatch = useDispatch();

  const chocolateItems = [
    { id: 1, name: "Dairy Milk", price: 40, img: "/dairymilk.jpeg", description: "Creamy and smooth milk chocolate" },
    { id: 2, name: "KitKat", price: 30, img: "/kitkat.jpeg", description: "Crispy wafer covered with chocolate" },
    { id: 3, name: "Five Star", price: 20, img: "/fivestar.jpeg", description: "Caramel and nougat filled chocolate bar" },
    { id: 4, name: "Snickers", price: 50, img: "/snickers.jpeg", description: "Chocolate bar with peanuts, caramel, and nougat" },
    { id: 5, name: "Perk", price: 10, img: "/perk.jpeg", description: "Light and crispy wafer chocolate" },
    { id: 6, name: "Ferrero Rocher", price: 200, img: "/ferrerorocher.jpeg", description: "Premium hazelnut-filled chocolate balls" },
    { id: 7, name: "Bounty", price: 60, img: "/bounty.jpeg", description: "Sweet coconut covered with rich chocolate" },
    { id: 8, name: "Toblerone", price: 180, img: "/toblerone.jpeg", description: "Swiss triangular milk chocolate with honey and almonds" },
    { id: 9, name: "Milky Bar", price: 25, img: "/milkybar.jpeg", description: "Delicious white chocolate bar" },
    { id: 10, name: "bubbleDairy", price: 120, img: "/bubbleDairy.jpeg", description: "Rich almond and raisin flavored chocolate" },
    { id: 11, name: "Munch", price: 10, img: "/munch.jpeg", description: "Crispy crunchy wafer chocolate bar" },
    { id: 12, name: "Lindt Dark", price: 250, img: "/lindt.jpeg", description: "Premium dark chocolate with rich cocoa flavor" },
    { id: 13, name: "Galaxy", price: 90, img: "/galaxy.jpeg", description: "Smooth and creamy chocolate bar" },
    { id: 14, name: "Bar One", price: 20, img: "/barone.jpeg", description: "Thick chocolate bar with caramel" }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(chocolateItems.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = chocolateItems.slice(indexOfFirst, indexOfLast);

  return (
    <div className="veg-container">
      <h1 className="veg-heading">Welcome to Chocolates section...</h1>

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

export default Chocolates;
