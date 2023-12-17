import React, { useEffect, useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import "./navbar.css";
import debounce from "lodash.debounce";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Subnav() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const navigate = useNavigate();
  const [searchPhrase, setSearchPhrase] = useState("");
  const handleNavClick = (data) => {
    navigate("/search-results", { state: { data } });
  };
  //API Search
  const handleSearch = async () => {
    await searchProduct(searchPhrase);
  };
  const searchProduct = async (text = searchPhrase) => {
    console.log("searchPhrase:", text);
    try {
      const { data } = await axios.get(
        `https://wayfair.p.rapidapi.com/products/search?keyword=${searchPhrase}&sortby=0&curpage=1&itemsperpage=48`,
        {
          headers: {
            "X-RapidAPI-Key":
              "29f9cd7f28mshad11b63d1818f50p198aa1jsnbd18651f65d5",
            "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
          },
        }
      );
     if(data?.response?.product_collection?.length>0) {
      handleNavClick(data.response)
     }else {
      console.log("error fetch search prds")
     }
    } catch (error) {
      console.log("error fetching the products", error);
    }
  };



  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
  return (
    <div>
      <div className="main-subnav">
        <div className="mini-search-container">
          <input
            type="text"
            placeholder="Search products here.."
            className="search-input-subnav"
            value={searchPhrase}
            onChange={(e) => setSearchPhrase(e.target.value)}
          />
          

          <div className="search-icon-container-subnav" onClick={handleSearch}>
            <FiSearch color="white" />
          </div>
        </div>



        <button className="help-button">Upload</button>

        <div className="filters">
          <div>
            <select
              id="filterDropdown"
              value={selectedFilter}
              onChange={handleFilterChange}
            >
              <option value="all">Filter</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <div>
            <select
              id="filterDropdown"
              value={selectedFilter}
              onChange={handleFilterChange}
            >
              <option value="all">Sort by</option>
              <option value="option1">Title: From A to Z</option>
              <option value="option2">Title: From Z to A</option>
              <option value="option3">Price: High to Low</option>
              <option value="option4">Price: Low to High</option>
            </select>
          </div>
        </div>
      </div>
      <div className="sub-menu-cont">
        <div className="sub-menu-header-cont">
          <p>All Categories</p>
          <div className="sub-menu-icon">
            <FaAngleDown />
          </div>
        </div>
        <div className="sub-menu-header-cont">
          <p>Fruits</p>
          <div className="sub-menu-icon">
            <FaAngleDown />
          </div>
        </div>
        <div className="sub-menu-header-cont">
          <p>Vegetables</p>
          <div className="sub-menu-icon">
            <FaAngleDown />
          </div>
        </div>
        <div className="sub-menu-header-cont">
          <p>Dairy</p>
          <div className="sub-menu-icon">
            <FaAngleDown />
          </div>
        </div>
        <div className="sub-menu-header-cont">
          <p>Meat & Poultry</p>
          <div className="sub-menu-icon">
            <FaAngleDown />
          </div>
        </div>
        <div className="sub-menu-header-cont">
          <p>Sea food</p>
          <div className="sub-menu-icon">
            <FaAngleDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subnav;
