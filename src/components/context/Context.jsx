import { useState, createContext, useContext, useEffect } from "react";
import { getCartData, getWishlist } from "../../../utils";
import axios from "axios";
const MyContext = createContext()

const MyContextProvider = ({ children }) => {
   
   
    const [user, setUser] = useState({})
    const [token,setToken]= useState(localStorage.getItem('userToken'))
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [userLoading, setUserLoading]= useState(false)



    console.log("User Loading " + userLoading);
    console.log(token);
    console.log(import.meta.env.VITE_SERVER);

    useEffect(() => {
        if (token) {
            setUserLoading(true)
            axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;
            axios.post(`${import.meta.env.VITE_SERVER}/user/verifyToken`).
                then(res => { setUser(res.data); setUserLoading(false) })
                .catch(error => {
                    setToken(null)
                    localStorage.clear('userToken')
                    setUserLoading(false)
                })
            
    }
    }, [token])
    
    useEffect(()=>{
        if (token) {
            console.log("Getting cart data....");
            getCartData(token).then(dat => {
                setCart(dat)
            })
       }
    }, [token])
    
    useEffect(()=>{
        if (token) {
            console.log('Getting wishlist data...');
            getWishlist(token).then(res => {
                setWishlist(res)
            })
        }
    },[token])
    
    return (
        <MyContext.Provider value={{ cart,setCart,user,setUser,token,setToken,userLoading, setUserLoading,wishlist, setWishlist}}>
            {children}
        </MyContext.Provider>
    )
}

function globalState() {
    return (
        useContext(MyContext)
    )
}

export {MyContextProvider,globalState,MyContext}