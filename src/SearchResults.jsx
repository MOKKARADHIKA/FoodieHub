import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const navigate = useNavigate();
  const searchTerm = query.get("q")?.toLowerCase();

  useEffect(() => {
    if (!searchTerm) return;

    if (searchTerm.includes("veg")) {
      navigate("/veg");
    } 
    else if (searchTerm.includes("non")) {
      navigate("/nonVeg");
    }
    else if (searchTerm.includes("fruit")) {
      navigate("/fruits");
    }
    else if (searchTerm.includes("sweet")) {
      navigate("/sweets");
    }
    else if (searchTerm.includes("milk")) {
      navigate("/milkitems");
    }
    else if (searchTerm.includes("ice")) {
      navigate("/icecreams");
    }
    else if (searchTerm.includes("choco") || searchTerm.includes("chocolate")) {
      navigate("/chocolates");
    } 
    else {
      navigate("/"); // default if no match
    }
  }, [searchTerm, navigate]);

  return (
    <div style={{ paddingTop: "200px", textAlign: "center" }}>
      <h2>Redirecting...</h2>
    </div>
  );
}

export default SearchResults;
