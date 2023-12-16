import React, { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import "./navbar.css";

function Subnav() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
  return (
    <div>
      <div className="main-subnav">
        <div className="mini-search-container">
          <input
            type="text"
            placeholder="Search"
            className="search-input-subnav"
          />

          <div className="search-icon-container-subnav">
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
