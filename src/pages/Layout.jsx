import React, { useEffect } from "react";
import { Outlet, useLocation,useNavigate } from "react-router-dom";
import { Nav } from "../components/header/nav/Nav";
import Footer from "../components/footer/Footer";
import { ToastContainer } from "react-toastify";


function Layout() {
  // console.log(useLocation().pathname)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[useLocation().pathname])
 
  return (
    <div className="main_wrapper position-relative">
   
      <ToastContainer theme="colored" position="top-center"  autoClose={3000}  hideProgressBar={false} closeOnClick  />
      <Nav />
        <Outlet/>
      <Footer />
    </div>
  );
}

export default Layout;
