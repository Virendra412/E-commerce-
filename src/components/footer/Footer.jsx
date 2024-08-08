import "./footer.css";
import VisaLogo from "../../assets/visalogo.png";
import MasterCard from "../../assets/mastercardLogo.png";
import React, { useEffect, useRef, useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const [showDropdown, setShowDropdown] = useState([false, false, false]);
  const footerContainer = useRef();

  function handleDropdown(index) {
    let arr = showDropdown.map((e, ind) => {
      if (index == ind) return !e;
      return false;
    });

    setShowDropdown(arr);
  }
  const handleOutsideClick = (event) => {
    if (footerContainer && !footerContainer.current.contains(event.target)) {
      setShowDropdown([false, false, false]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <footer>
      <div className="footerWraper" ref={footerContainer}>
        <div className="footerList support ">
          <h4 onClick={() => { handleDropdown(0); }}>SUPPORT</h4>
          <div className={`footer_dropdown ${showDropdown[0] ? "active" : ""}`}>
            <ul>
              <li role="none" className="flex">
                <a
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                  href="https://in.puma.com/in/en/help"
                >
                  Contact us
                </a>
              </li>
              <li role="none" className="flex">
                <a
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                  href="https://in.puma.com/in/en/help/how-to-place-an-order-faq"
                >
                  FAQs
                </a>
              </li>
              <li role="none" className="flex">
                <a
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                  href="https://in.puma.com/in/en/help/promotions_and_sale"
                >
                  Promotions &amp; Sale
                </a>
              </li>
              <li role="none" className="flex">
                <a
                  href="https://in.puma.com/in/en/help/my-account"
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                >
                  My Account
                </a>
              </li>
              <li role="none" className="flex">
                <a
                  href="https://puma.clickpost.in/"
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                >
                  Track Order
                </a>
              </li>
              <li role="none" className="flex">
                <a href="https://in.puma.com/in/en/help/app-return-policy">
                  Exchange &amp; Return Policy
                </a>
              </li>
              <li role="none" className="flex">
                <a
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                  href="https://in.puma.com/in/en/puma-shoe-care"
                >
                  Shoe Care
                </a>
              </li>
              <li role="none" className="flex">
                <a
                  href="https://in.puma.com/in/en/help/privacy-policy"
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                >
                  Privacy Policy
                </a>
              </li>
              <li role="none" className="flex">
                <a
                  href="https://in.puma.com/in/en/help/glossary"
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                >
                  Tech Glossary
                </a>
              </li>
              <li role="none" className="flex">
                <a
                  href="https://in.puma.com/in/en/help/terms-and-conditions"
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li role="none" className="flex">
                <a
                  href="https://in.puma.com/in/en/account/login"
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                >
                  Initiate Return / Exchange
                </a>
              </li>
              <li role="none" className="flex">
                <a
                  aria-disabled="false"
                  data-test-id="cookie-settings-link"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white text-base"
                  role="menuitem"
                  href="https://in.puma.com/in/en#"
                >
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footerList">
          <h4
            onClick={() => {
              handleDropdown(1);
            }}
          >
            ABOUT
          </h4>
          <div className={`footer_dropdown ${showDropdown[1] ? "active" : ""}`}>
            <ul role="menu" className="grid grid-cols-1 gap-x-6 gap-y-1">
              <li role="none" className="flex">
                {" "}
                <a
                  href="https://about.puma.com/en/this-is-puma"
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                >
                  {" "}
                  Company{" "}
                </a>{" "}
              </li>
              <li role="none" className="flex">
                {" "}
                <a
                  href="https://about.puma.com/en/newsroom#newsroom/{search}/9515f0e8-f331-4587-84a5-60a98d1497c5/{tags}/all-years/8"
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                >
                  {" "}
                  Corporate News{" "}
                </a>{" "}
              </li>
              <li role="none" className="flex">
                {" "}
                <a
                  href="https://about.puma.com/en/newsroom#newsroom/{search}/9515f0e8-f331-4587-84a5-60a98d1497c5/{tags}/all-years/8"
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                >
                  {" "}
                  Press Center{" "}
                </a>{" "}
              </li>
              <li role="none" className="flex">
                {" "}
                <a
                  href="https://about.puma.com/en/investor-relations"
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                >
                  {" "}
                  Investors{" "}
                </a>{" "}
              </li>
              <li role="none" className="flex">
                {" "}
                <a
                  href="https://about.puma.com/en/forever-better"
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                >
                  {" "}
                  Sustainability{" "}
                </a>{" "}
              </li>
              <li role="none" className="flex">
                {" "}
                <a
                  href="https://about.puma.com/en/careers"
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                >
                  {" "}
                  Careers{" "}
                </a>{" "}
              </li>
              <li role="none" className="flex">
                {" "}
                <a
                  href="https://store-in.puma.com/"
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                >
                  {" "}
                  Store Locator{" "}
                </a>{" "}
              </li>
              <li role="none" className="flex">
                {" "}
                <a
                  href="https://in.puma.com/in/en/articles"
                  aria-disabled="false"
                  className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                  role="menuitem"
                >
                  {" "}
                  PUMA Articles{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="footerList">
          <h4
            onClick={() => {
              handleDropdown(2);
            }}
          >
            STAY UP TO DATE
          </h4>
          <div className={`footer_dropdown ${showDropdown[2] ? "active" : ""}`}>
            <p>Sign Up for Email</p>
            <ul className="socialIcons d-flex gap-4">
              <YouTubeIcon />
              <PinterestIcon />
              <TwitterIcon />
              <InstagramIcon />
              <FacebookIcon />
            </ul>
          </div>
        </div>
      </div>

      <div className="footer_lower d-flex justify-content-between">
        <div className="payments d-flex gap-2">
          <div className="payment_items">
            <img src={VisaLogo} alt="" />
          </div>
          <div className="payment_items">
            <img src={MasterCard} alt="" />
          </div>
        </div>

        <div className="country">
          <div className="flag">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png"
              alt=""
            />
          </div>
          <h4>INDIA</h4>
        </div>
        <div className="copyright ">
          <p>
            &copy;PUMA INDIA LTD,2024. ALL RIGHT RESERVED. <br />
            DESIGNED BY VIRENDRA PRATAP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
