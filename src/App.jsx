import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLoaderData, useLocation } from 'react-router-dom';
import './App.css'
import Layout from './pages/Layout';
import { Home } from './pages/home/Home';
import Auth from './pages/account/auth/Auth';
import Cart from './pages/cart/Cart';
import ShowProduct from './components/productShow/ShowProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResultsPage from './pages/result/ResultsPage';
import ProtectedRoute from './components/ProtectRoute/ProtectedRoute';
import { Account } from './pages/account/Account';
import Wishlist from './pages/wishlist/Wishlist';
import SearchPage from './pages/search/SearchPage';




function App() {
 

  return (<>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path='/wishlist' element={<ProtectedRoute><Wishlist/></ProtectedRoute>} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/product/:productId' element={<ShowProduct />} />
          <Route path='/:gender/:cat/:subcat' element={<ResultsPage />} />
          
        </Route>
      </Routes>
    </Router>
    
    </>
  )
}

export default App


{/* <div className='main_wrapper position-relative'>
  <Nav/>
      {/* <Home/> */}
       
     
        {/* <ShowProduct productData={p} /> */}
        {/* <Cart/> */}
        {/* <Auth/> */}
        {/* <Home/> */}
        // <Footer />
      
        
        {/* <ResultsPage data={p}/> */}
        // </div> */}