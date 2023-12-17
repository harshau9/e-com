import React from "react";
import MainNavbar from "../components/navbar/MainNavbar";
import ClipLoader from "react-spinners/ClipLoader";
import ProductCard from "../components/card/ProductCard";
import "../components/Home/AllProducts.css";
import { useLocation } from "react-router-dom";
import Footer from "../components/Home/Footer";

function SearchPage() {
  const { state } = useLocation();
  const phrase = state && state.data.keyword
  const item = state && state.data.product_collection || [];
  console.log("prds",item)
  return (
    <>
      <MainNavbar />
      <h3 style={{color:"gray", margin:"20px"}}>Results for:"{phrase}"</h3>
      <div className="main-container-all-products">
        {item.map((item, index) => (
          <ProductCard index={index} item={item} />
        ))}
      </div>
      <Footer/>
    </>
  );
}

export default SearchPage;
