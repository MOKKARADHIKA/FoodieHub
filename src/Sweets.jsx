
import React, { useState } from "react";
import "./Veg.css";
import { addToCart } from "./Store";
import { useDispatch } from "react-redux";

function Sweets() {
  const dispatch = useDispatch();

  const sweetItems = [
    { id: 1, name: "Gulab Jamun", price: 120, img: "/gulabjamun.jpeg", description: "Soft fried dumplings soaked in sugar syrup" },
    { id: 2, name: "Rasgulla", price: 110, img: "/rasgulla.jpeg", description: "Spongy and juicy Bengali sweet delight" },
    { id: 3, name: "Kaju Katli", price: 220, img: "/kajukatli.jpeg", description: "Premium cashew sweet with rich taste" },
    { id: 4, name: "Jalebi", price: 90, img: "/jalebi.jpeg", description: "Crispy deep-fried spiral sweet dipped in syrup" },
    { id: 5, name: "Mysore Pak", price: 150, img: "/mysorepak.jpeg", description: "Traditional Karnataka sweet made with ghee" },
    { id: 6, name: "Boondi Laddu", price: 100, img: "/boondiladdu.jpeg", description: "Delicious sweet balls made with boondi and ghee" },
    { id: 7, name: "Milk Barfi", price: 130, img: "/milkbarfi.jpeg", description: "Milk-based sweet with creamy texture" },
    { id: 8, name: "Rabri", price: 160, img: "/rabri.jpeg", description: "Thickened milk sweet topped with nuts" },
    { id: 9, name: "Basundi", price: 150, img: "/basundi.jpeg", description: "Sweet condensed milk flavored with cardamom" },
    { id: 10, name: "Kheer", price: 140, img: "/kheer.jpeg", description: "Rice pudding cooked with milk and dry fruits" },
    { id: 11, name: "Gajar Halwa", price: 160, img: "/gajarhalwa.jpeg", description: "Carrot-based dessert rich in nuts and ghee" },
    { id: 12, name: "Semiya Payasam", price: 130, img: "/semiya.jpeg", description: "Vermicelli pudding cooked in milk with cashews" },
    { id: 13, name: "Dry Fruit Laddu", price: 200, img: "/dryfruitladdu.jpeg", description: "Laddu made with almonds, dates and cashews" },
    { id: 14, name: "Peda", price: 120, img: "/peda.jpeg", description: "Soft and rich milk sweet from Mathura" },
    { id: 15, name: "Malpua", price: 140, img: "/malpua.jpeg", description: "Sweet pancake dipped in sugar syrup" }
  ];

  // pagination
  const itemsPerPage = 3;
  const totalPages = Math.ceil(sweetItems.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = sweetItems.slice(indexOfFirst, indexOfLast);

  return (
    <div className="veg-container">
      <h1 className="veg-heading">Welcome to Sweets section...</h1>

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

      {/* Pagination */}
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

export default Sweets;
