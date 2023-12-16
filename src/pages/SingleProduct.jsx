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
import "./SingleProduct.css"

function SingleProduct() {
  const [prodImage, setProdImage] = useState(productImage);

  return (
    <>
      <MainNavbar />
      <div>
        <div className="maincont">
          <div className="leftcont">
            
            <div className="columnimages">
              {[
                productImageOne,
                productImageTwo,
                productImageFour,
              ].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  onClick={() => setProdImage(image)}
                  alt={`Additional ${index + 1}`}
                  className="sideimages"
                  width={"120px"}
                  height={"130px"}
                />
              ))}
            </div>
            <img
              src={prodImage}
              // alt={IoTerminal.name}
              className="imagestyles"
              width={"420px"}
              height={"420px"}
            />
          </div>

          {/* Product Info */}
          <div className="rightcont">
            <h2>name</h2>
            <p style={{color:"gray"}}>
              {/* SKU Number {params.productId} */}
            </p>
            <h4>
              Price:
              {/* ${singleProduct.price}/each */}
            </h4>
            <p style={{color:"gray"}}>
              Manufacture Name:
              {/* {singleProduct.manufactureName} */}
            </p>

            {/* Add to Cart Button */}
            <button className="buttonstyle">
              Add to Cart
            </button>
            <div className="desc">
              <h2>
                Long Description
              </h2>
              Introducing our versatile and stylish "Harmony Series Desk Lamp." This modern lighting solution seamlessly blends functionality with aesthetics, featuring an adjustable gooseneck design for personalized illumination. Crafted with a sleek matte finish and premium materials, this lamp effortlessly complements any workspace or living area. The built-in touch control panel allows for easy brightness adjustment, while the integrated USB port ensures convenient device charging. Illuminate your surroundings with the perfect balance of form and function, as the Harmony Series Desk Lamp redefines contemporary lighting for the discerning consumer. Elevate your ambiance and productivity with this sophisticated addition to your home or office.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
