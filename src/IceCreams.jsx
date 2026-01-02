import React, { useState } from "react";
import "./Veg.css"; // same CSS as Veg section
import { addToCart } from "./Store";
import { useDispatch } from "react-redux";

function IceCreams() {
  const dispatch = useDispatch();

  const iceCreamItems = [
    { id: 1, name: "Vanilla Ice Cream", price: 60, img: "/vanilla.jpeg", description: "Classic creamy vanilla flavor" },
    { id: 2, name: "Chocolate Ice Cream", price: 70, img: "/chocolateicecream.jpeg", description: "Rich and delicious chocolate scoop" },
    { id: 3, name: "Strawberry Ice Cream", price: 80, img: "/strawberryicecream.jpeg", description: "Sweet strawberry flavored ice cream" },
    { id: 4, name: "Butterscotch Ice Cream", price: 90, img: "/butterscotch.jpeg", description: "Caramel-flavored ice cream with crunchy nuts" },
    { id: 5, name: "Black Currant Ice Cream", price: 100, img: "/blackcurrant.jpeg", description: "Premium black currant scoop with fruity flavor" },
    { id: 6, name: "Mango Ice Cream", price: 70, img: "/mangoicecream.jpeg", description: "Refreshing juicy mango flavor" },
    { id: 7, name: "Choco Chip Ice Cream", price: 110, img: "/chocochip.jpeg", description: "Chocolate ice cream with crunchy choco chips" },
    { id: 8, name: "Blueberry Ice Cream", price: 120, img: "/blueberryicecream.jpeg", description: "Creamy ice cream with blueberry swirl" },
    { id: 9, name: "Pista Ice Cream", price: 90, img: "/pista.jpeg", description: "Delicious pistachio flavored ice cream" },
    { id: 10, name: "Kulfi", price: 80, img: "/kulfi.jpeg", description: "Traditional Indian creamy kulfi" },
    { id: 11, name: "Oreo Ice Cream", price: 110, img: "/oreoicecream.jpeg", description: "Ice cream loaded with crushed Oreo cookies" },
    { id: 12, name: "Tender Coconut Ice Cream", price: 100, img: "/tendercoconut.jpeg", description: "Light refreshing coconut flavored ice cream" },
    { id: 13, name: "Caramel Ice Cream", price: 120, img: "/caramelicecream.jpeg", description: "Smooth creamy scoop with caramel flavor" },
    { id: 14, name: "Red Velvet Ice Cream", price: 130, img: "/redvelvet.jpeg", description: "Premium red velvet flavored ice cream" }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(iceCreamItems.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = iceCreamItems.slice(indexOfFirst, indexOfLast);

  return (
    <div className="veg-container">
      <h1 className="veg-heading">Welcome to Ice-Creams section...</h1>

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

    </div>
  );
}

export default IceCreams;
