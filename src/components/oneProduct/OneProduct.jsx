import { Link } from "react-router-dom";
import dat from "../../assets/puma";
import "./oneproduct.css";
import React from "react";

const OneProduct = ({ singleProduct }) => {
  //  console.log(singleProduct);
  return (
    <Link to={`/product/${singleProduct._id}`} state={singleProduct}>
      
      <div className="card position-relative" style={{ border: "none" }}>
        <img src={singleProduct.images[0]} className="card-img-top" alt="..." />
        <div className="card-body d-flex gap-2 justify-content-between">
          <p className="card-title ">{singleProduct.title}</p>
          <div>
            <p className="text-danger mb-0 fw-bold">
              ₹{singleProduct.price.toLocaleString("en-US")}
            </p>
            <p className="">
              <del>₹{singleProduct.original_price.toLocaleString("en-US")}</del>
            </p>
          </div>
        </div>
        <span className="discount position-absolute px-3 text-light fw-bold py-1" style={{background:'#AC1E1E',borderRadius:'2px',fontSize:'14px'}}>-{singleProduct.discount}%</span>
      </div>
    </Link>
  );
};

export default OneProduct;
