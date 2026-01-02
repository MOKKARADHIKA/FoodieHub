import React, { useEffect, useState } from "react";
import "./Veg.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchVegProducts } from "./Store";
import { addToCart } from "./Store";
import { toast } from "react-toastify";

function Veg() {
  const dispatch = useDispatch();
  const { vegProducts, loading, error } = useSelector((state) => state.veg);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    dispatch(fetchVegProducts()); // Call MongoDB API only
  }, [dispatch]);

  if (loading) return <h2>Loading veg products...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
  if (!vegProducts || vegProducts.length === 0)
    return <h2>No veg products found in MongoDB</h2>;

  // Pagination Logic
  const totalPages = Math.ceil(vegProducts.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = vegProducts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="veg-container">
      <h1 className="veg-heading">Welcome to Veg Section</h1>

      <div className="veg-grid">
        {currentItems.map((item) => (
          <div key={item._id} className="veg-card">
            <img src={item.img} alt={item.name} className="veg-card-img" />

            <div className="veg-card-body">
              <h2 className="veg-card-title">{item.name}</h2>
              <p className="veg-card-price">₹{item.price}</p>
              <p className="veg-card-desc">{item.description}</p>
            </div>

             <div className="veg-card-footer">
             
<button
  className="veg-btn"
onClick={() => {
  console.log("Adding to cart:", item);
  dispatch(addToCart(item));
  toast.success(`Product ${item.name} added successfully!`);
}}

>
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
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, pageIndex) => (
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
          onClick={() => setCurrentPage((prev) => prev + 1)}
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
export default Veg;
