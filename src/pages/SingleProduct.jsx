import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  productImage,
  productImageOne,
  productImageTwo,
  productImageThree,
  productImageFour,
} from "../constants/images";
import Navbar from "../components/navbar/Navbar";
import MainNavbar from "../components/navbar/MainNavbar";
import "./SingleProduct.css";
import { useLocation } from "react-router-dom";
import Carousel2 from "../components/Home/Carousel1.2";
import Footer from "../components/Home/Footer";

function SingleProduct() {
  const [prodImage, setProdImage] = useState(productImage);
  const { state } = useLocation();
  const item = state && state.item;

  return (
    <>
      <MainNavbar />
      <div>
        {item && (
          <div className="maincont">
            <div className="leftcont">
              <div className="columnimages">
                {[productImageOne, productImageTwo, productImageFour].map(
                  (image, index) => (
                    <img
                      key={index}
                      src={image}
                      onClick={() => setProdImage(image)}
                      alt={`Additional ${index + 1}`}
                      className="sideimages"
                      width={"120px"}
                      height={"130px"}
                    />
                  )
                )}
              </div>
              <img
                src={item.image_url? item.image_url : prodImage}
                // alt={IoTerminal.name}
                className="imagestyles"
                width={"420px"}
                height={"420px"}
              />
            </div>
            <div className="rightcont">
              <h1>{item.name}</h1>
              <p style={{ color: "gray" }}>SKU Number {item.sku}</p>
              <h3>
                <b>Additional Information</b>
              </h3>
              <p>
                Price: ${item.pricing?.customerPrice?.unitPrice?.value}/each
              </p>
              <p style={{ color: "gray" }}>
                Manufacture Name:
                {" " + item.manufacturer?.name}
              </p>
              <p style={{ color: "gray" }}>
                Vendor Name:
                {" " + item.manufacturer?.shortName}
              </p>
              <p>Days to Deliver: 5 days</p>
              <p>Country of Origin: New Zealand</p>
              <h4>
                Rating:
                {" " + item.customer_reviews?.average_rating_value}
              </h4>
              {/* Add to Cart Button */}
              <button className="buttonstyle">Add to Cart</button>
              <div className="desc">
                <h2>Long Description</h2>
                <p>
                  Introducing our versatile and stylish "Harmony Series Desk
                  Lamp." This modern lighting solution seamlessly blends
                  functionality with aesthetics, featuring an adjustable
                  gooseneck design for personalized illumination. Crafted with a
                  sleek matte finish and premium materials, this lamp
                  effortlessly complements any workspace or living area. The
                  built-in touch control panel allows for easy brightness
                  adjustment, while the integrated USB port ensures convenient
                  device charging. Illuminate your surroundings with the perfect
                  balance of form and function, as the Harmony Series Desk Lamp
                  redefines contemporary lighting for the discerning consumer.
                  Elevate your ambiance and productivity with this sophisticated
                  addition to your home or office.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Carousel2 />
      <Footer/>
    </>
  );
}

export default SingleProduct;
