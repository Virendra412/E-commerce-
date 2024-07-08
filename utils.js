import axios from "axios";
const SERVER = import.meta.env.VITE_SERVER
console.log(SERVER);


function getInteger(price) {
    const int = parseInt(price.split("").filter(e => Number.isInteger(parseInt(e))).join(''))
    // console.log(int);
    return int;
}




async function getProducts() {
    
    const res = await axios.get(`${SERVER}/products`)
    return res.data
}
async function getProductbyID(id) {
    
    const res = await axios.get(`${SERVER}/product/${id}`)
    return res.data
}
async function addToCart(token, productId, size, quantity) {
    const data={id:productId,size,quantity}
    const res = await axios.post(`${SERVER}/cart/addCart`,data,{headers:{Authorization:`Bearer ${token}`}})
    return res.data
}
async function getCartData(token) {
    const res = await axios.get(`${SERVER}/cart/getcart`,{headers:{Authorization:`Bearer ${token}`}})
    return res.data
}
async function updateCartQuantity(id,quantity) {
    const res = await axios.get(`${SERVER}/cart/updateq/${id}/${quantity}`)
    console.log(res.data);
    return res.data
}

// updateCartQuantity()
async function deleteFromCart(cartID) {
    const res = await axios.delete(`${SERVER}/cart/${cartID}`)
    return res.data
}


async function getSearchResult(url,operation="subCategeorySearch") {
    const data = {
        operation,url
    }
    const res = await axios.post(`${SERVER}/result`,data)
    // console.log(res.data);
    return res.data
}
async function cartCheckOut(token) {
    const res = await axios.delete(`${SERVER}/cart/checkout`, { headers: { Authorization: `Bearer ${token}` } })
    return res.data
}



async function addToWishlist(token, productId, size, quantity) {
    const data={id:productId,size,quantity}
    const res = await axios.post(`${SERVER}/wishlist/add`,data,{headers:{Authorization:`Bearer ${token}`}})
    return res.data
}
async function getWishlist(token) {
   
    const res = await axios.get(`${SERVER}/wishlist/get`,{headers:{Authorization:`Bearer ${token}`}})
    return res.data
}
async function deleteFromWishlist(token,itemId) {
    const res = await axios.delete(`${SERVER}/wishlist/remove`, { data: { itemId }, headers: { Authorization: `Bearer ${token}` } })
    return res.data
}




function pathspilter(url) {
    const newPath = url.split("/")
    return newPath[newPath.length-1].toUpperCase().split('-')
}

function queryParamsExtractor(query) {
    const searchParams = new URLSearchParams(query).entries()
    var result={}
    for (const [key, value] of searchParams) {
        result[key]=value
    }
    return result;
}

export { getInteger,getProducts,getProductbyID,addToCart,getCartData,updateCartQuantity,deleteFromCart,getSearchResult,pathspilter,cartCheckOut,addToWishlist,getWishlist,deleteFromWishlist,queryParamsExtractor }