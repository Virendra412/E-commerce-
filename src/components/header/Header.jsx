import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";

import Logo from '../../assets/colors.png'
import { Nav } from "./nav/Nav";
import Button from "../Button/Button";
import ProductSlider from "../productSlider/ProductSlider";
import { Collections,Collections2 } from "../collectionPage/Collections";
import LowerBannner from "../lowerBanners/LowerBannner";
import Footer from "../footer/Footer.jsx";
import { Link } from "react-router-dom";

console.log(Logo);

export const Header = () => {
  return (<>
    <div className="headerWrapper">
     {/* <Nav /> */}
      <div className="banner container-fluid position-relative">
        <img src="https://cdn.sanity.io/images/qa41whrn/prod/09646d25a041fa5bb063844eaad9fdae3af30fde-2880x1040.jpg?w=2160&q=80&auto=format" alt="" />
        <div className="banner_text">
          <h1>END OF SEASON SALE</h1>
          <h3>DEALS,STEALS AND ALL THE FEELS</h3>
          <p>+ EXTRA 5% OFF ON ONLINE PAYMENTS</p>
          <div className="ban_buttons d-flex gap-3">
          <Link to='/search?q=men'> <Button color={"black"} bg="rgb(240,240,240)" >FOR HIM</Button></Link>
          <Link to='/search?q=women'> <Button color={"black"} bg="rgb(240,240,240)">FOR HER</Button></Link>
            
            {/* <Button color={"black"} bg="rgb(240,240,240)">FOR KIDS</Button> */}
          </div>
        </div>
      </div>
      
    </div>
    
    </>
  );
};
