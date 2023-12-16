import React from "react";
import "./Footer.css";

function Footer() {
  const arr = [
    "Construction Helmet",
    "Saws",
    "Cider",
    "Apple Juice",
    "Construction Costume Blue",
    "Tapes",
    "Construction Suit",
    "Pullers",
    "Pickaxes and Crowbars",
    "Carrots",
    "Construction Hammer",
    "Wrenches",
    "Screwdrivers",
    "Construction Shovels",
    "Pullers",
    "Kinoa",
    "Banana",
  ];
  return (
    <>
      <div className="footercont">
        <h3>PEOPLE SEARCHING FOR</h3>
        <div className="footer-searchs">
          {arr.map((el, index) => (
            <div key={index} className="src-btn">
              {el}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Footer;
