import "./nav.css";
import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import GridViewIcon from '@mui/icons-material/GridView';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import pumaLogo from "../../../assets/pumalogo.png"
import navData from "../../../assets/navbar.js"
import { Link } from "react-router-dom";
import { MyDrawer } from "../../../drawer/MyDrawer.jsx";
import { globalState } from "../../context/Context.jsx";
import SearchIcon from '@mui/icons-material/Search';
import { ClickAwayListener } from "@mui/material";
import { v4 as uuid } from "uuid";
import SearchDialog from "../../searchDialog/SearchDialog.jsx";
import { Flash} from "../../Flash/Flash.jsx";

export const Nav = () => {
  const {cart,wishlist}= globalState()
  const [isOpen, setIsOpen] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const [isSearchOpen,setIsSearchOpen]= useState(false)

  
const [drawerData, setDrawerData] = useState(navData[0])
    
    function toggleDrawer() {
        setDrawer(!drawer)
    }

  function handleMenu(){
    setIsOpen(!isOpen)
    if (drawer) {
      setDrawer(false)
    }
  }

  function fullMenuCloser() {
    setIsOpen(false)
    setDrawer(false)
  }

  function SearchDialogToggler() {
    console.log('toogle workinh');
    setIsSearchOpen(prev=>!prev)
  }

  function CloseDropDown() {
    document.querySelectorAll('.navItems').forEach(e => {
      e.style.pointerEvents = 'none'
      setTimeout(() => {
        e.style.pointerEvents = 'all'
      }, 1500);
    })
   }

  return (<>
    <Flash/>
    <nav className="container-fluid ">
      <div className={`navWrapper d-flex justify-content-between ${isOpen?"menu_open":""} `}>
        <div className="left d-flex gap-4">
          <div className="navItems logo" >
            <Link to='/'>
            <img src={pumaLogo} alt="" /></Link>
          </div>
          {navData?.map((cat) => {
            return (
              <div className="navItems" key={uuid()}  > <div className="categories variety">{cat.heading}</div>
                <div className="nav_dropdown" > <div className="inner_dropdown">
                            {cat.categories.map(c => {
                                return (
                                    <div className="cat_sections" key={uuid()} >
                                    <h5>{c.title}</h5>
                                    {c.hasChild && <ul> {c.sub_cat.map(s => { return (<Link key={s.url} to={s.url} state={{"operation":"subCategeorySearch"}} onClick={CloseDropDown} > <li>{s.title}</li></Link>) })} </ul>}
                                    
                                  </div>
                       )
                   })}
                  </div> </div> </div>
            );
          })}

        </div>
        <div className="right d-flex pe-1">
          <div className="navItems searchBox">
            <div className="categories"> <SearchDialog isOpen={isSearchOpen} dialogToggler={SearchDialogToggler} closeModal={()=>SearchDialogToggler(false)} /> </div>
          </div>
          <div className="navItems px-3">
            <div className="categories">
            <Link to='/wishlist' state={{ name: 'uday' }} >
                <FavoriteBorderIcon /></Link>
                {wishlist?.length>0 && <span className="noti-badge">{wishlist?.length }</span> } 
            </div>
          </div>
          <div className="navItems px-3">
            <div className="categories position-relative">
              <Link to='/cart' state={{ name: 'uday' }} >
              <ShoppingCartOutlinedIcon /></Link>
             {cart?.length>0 && <span className="noti-badge">{cart?.length }</span> } 

            </div>
          </div>
          <div className="navItems px-3"> <div className="categories"><Link to="/account"> <Person2OutlinedIcon /></Link> </div> </div>
          <div className="navItems px-3 menuButton" onClick={handleMenu}> <div className="categories"> <MenuIcon />&nbsp;<span>MENU</span></div> </div>
        </div>
      </div>

      
      <div className={`menuDropdown ${isOpen ? "open" : ""}`}>
        <MyDrawer isOpen={drawer} toggleDrawer={toggleDrawer} data={ drawerData} fullMenuCloser={fullMenuCloser}></MyDrawer>
        <div className="menuWrapper">
          <ul>
            {navData?.map((cat,ind) => {
              return <li key={`${cat.heading}${ind}`} className="menuItems" onClick={() => { setDrawer(!drawer);setDrawerData(navData[ind])}}>{cat.heading}</li>
            })}
           
          </ul>
        </div>
        </div>
        
    </nav>
    
    </>
  );
}
