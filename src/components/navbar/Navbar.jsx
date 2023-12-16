import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Logo, ProfilePic } from "../../constants/images";
import "./navbar.css";
import { FiSearch, FiBell } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa6";
import {
  IoWalletOutline,
  IoHeartOutline,
  IoCartOutline,
} from "react-icons/io5";

function Navbar() {
  return (
    <div className="main_menu">
      <div className="menu_logo">
        <GiHamburgerMenu style={{ color: "gray" }} size={22} />
        <img src={Logo} width={"30px"} />
      </div>
      <div className="menu_items">
        <p>Catalog</p>
        <p>BuyDesk</p>
        <p>History</p>
        <p>Dashboard</p>
      </div>
      
      <div className="main_search">
        <div className="mini-search-container">
          <div className="dropdown-container">
            <button className="dropdown-button">
              <p>PO</p>
              <span className="down">
                <FaCaretDown />
              </span>
            </button>
          </div>

          {/* <!-- Search Input Box --> */}
          <div style={{}}>
            <input type="text" placeholder="Search" className="search-input" />

            <div className="search-icon-container">
              <FiSearch color="gray" />
            </div>
          </div>
        </div>

        <button className="help-button">Help</button>
      </div>

      <div className="nav_icons">
        <div>
          <IoWalletOutline size={24} />
        </div>
        <div>
          <IoHeartOutline size={24} />
        </div>
        <div>
          <IoCartOutline size={24} />
        </div>
        <div>
          <FiBell size={24} />
        </div>
      </div>

      <div className="profile">
        <div className="profile-container">
          <img src={ProfilePic} alt="harsha" width={30} height={30}/>
          <p>Harsha U</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
