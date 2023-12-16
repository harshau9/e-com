import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Home.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/product/product.actions";
import { RESET_PRODUCTS } from "../../redux/product/product.types";
import ProductCard from "../card/ProductCard";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "teal",
};

function Carousel2() {
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.products);

  const getData = () => {
    dispatch(getProducts());
  };

  useEffect(() => {
    getData();
    return () => dispatch({ type: RESET_PRODUCTS });
  }, [refresh]);

  console.log("products data:", data);
  return (
    <>
      <div
        style={{
          padding: "10px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <h1 style={{ margin: "15px 0px" }}>Best Selling Items</h1>
        {loading ? (
          <ClipLoader
            color={"#fff"}
            loading={loading}
            cssOverride={override}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <Carousel
            additionalTransfrom={0}
            arrows
            centerMode={false}
            className=""
            containerClass="carousel-container"
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            // minimumTouchDrag={80}
            // pauseOnHover
            renderArrowsWhenDisabled={true}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 5,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item, index) => (
              <ProductCard index={index} item={item} />
            ))}
          </Carousel>
        )}
      </div>
    </>
  );
}

export default Carousel2;
