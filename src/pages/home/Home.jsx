import React, { useContext } from 'react'
import { Header } from '../../components/header/Header'
import ProductSlider from '../../components/productSlider/ProductSlider'
import { Collections, Collections2 } from '../../components/collectionPage/Collections'
import Footer from '../../components/footer/Footer'
import LowerBannner from '../../components/lowerBanners/LowerBannner'
import { MyContext, MyContextProvider, globalState } from '../../components/context/Context'

export const Home = () => {
  const u = globalState()
  
  return (
      <div className='container-fluid'>
      <Header />
      <main>
      <ProductSlider />
      <Collections/>
    </main>
    <LowerBannner />
    <main>
      
      <Collections2 />
      <ProductSlider />
    </main>
   
    </div>
  )
}
