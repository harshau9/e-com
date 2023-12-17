import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { productImage } from "../../constants/images";
import styles from "./Product.module.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ index, item }) {
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleProductClick = () => {
    navigate("/product", { state: { item } });
  };
  return (
    <div key={index} className={styles.productCard}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleProductClick}
      >
        <img
          height={"120px"}
          width={"180px"}
          src={item.image_url ? item.image_url : productImage }
          alt={item.name}
        />
      </div>
      <div style={{ height: "40px" }} onClick={handleProductClick}>
        <h5>{item.name}</h5>
      </div>
      <div>
        {" "}
        <h6 style={{ color: "gray" }}>{item.sku}</h6>
      </div>

      <div className={styles.price}>
        <h4>{item.pricing?.customerPrice?.unitPrice?.value}</h4>
        <p>/each</p>
      </div>
      <div className={styles.details}>
        <p style={{ color: "teal" }}>Saving % 4.60</p>
        <p>Supplier : Wayfair</p>
        <p>Delivery By: 09-12-2023</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.counter}>
          <button
            onClick={handleDecreaseQuantity}
            className={styles.inputStyles}
          >
            -
          </button>
          <input
            type="text"
            disabled
            // style={inputStyles}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className={styles.inputStyles}
          />
          <button
            onClick={handleIncreaseQuantity}
            className={styles.inputStyles}
          >
            +
          </button>
        </div>
        <div>
          <button onClick={handleLikeToggle} className={styles.likeButton}>
            {liked ? (
              <FaHeart size={20} color="teal" />
            ) : (
              <FaRegHeart size={20} color="teal" />
            )}
          </button>
        </div>
      </div>
      <div>
        <button className={styles.add}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
