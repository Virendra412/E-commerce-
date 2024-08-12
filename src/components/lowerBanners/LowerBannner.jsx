import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./lowerbanner.css";

import React from "react";

const LowerBannner = () => {
  return (
    <div className="container-fluid lower_banner d-grid gap-4">
      <div className="upper position-relative">
              <img src="https://cdn.sanity.io/images/qa41whrn/prod/ac3fc79415884460f1a7b3459b333ff091dee5a5-6000x2167.jpg?w=2160&q=80&auto=format" alt="" />
              <div className="info">
                  <h1 className="text-center" >FOR ALL THE <br /> SNEAKERHEADS</h1>
                  <p>YOUR ONE-STOP SNEAKER-SHOP</p>
          <div className="buttons d-flex gap-4">
          <Link to='/search?q=women'><div className="buttons d-flex gap-4"><Button  bg="black" color='white'>SHOP NOW</Button></div></Link>
          <Link to='/search?q=unisex'> <Button bg="black" color='white'>EXPLORE MORE</Button></Link>
          </div>
              </div>
      </div>

      <div className="lower position-relative">
              <img src="https://cdn.sanity.io/images/qa41whrn/prod/7b5747b392d279cc9bf9beeb81c839405627c05c-2000x694.png?w=2160&q=80&auto=format" alt="" />
              <div className="info">
                  <h1 className="text-center" >TRAVEL IN STYLE</h1>
                  <p>GEAR UP FOR YOUR NEXT ADVENTURE</p>
                  <Link to='/search?q=men'><div className="buttons d-flex gap-4"><Button  bg="black" color='white'>SHOP NOW</Button></div></Link>
              </div>
      </div>
    </div>
  );
};

export default LowerBannner;
