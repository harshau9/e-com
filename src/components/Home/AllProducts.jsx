import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/product/product.actions";
import { RESET_PRODUCTS } from "../../redux/product/product.types";
import ProductCard from "../card/ProductCard";
import ClipLoader from "react-spinners/ClipLoader";
import "./AllProducts.css"



const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "teal",
};

function AllProducts() {
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
      <div className="main-container"
      >
        <h1 style={{ margin: "15px 0px" }}>All Products</h1>
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
          <div className="main-container-all-products">
            {data.map((item, index)=>(
              <ProductCard index={index} item={item}/>
            ))
            }
          </div>
        )
}

    </div>
    </>
  )
}

export default AllProducts