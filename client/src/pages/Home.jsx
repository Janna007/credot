import React from 'react'
import Header from '../components/home/Header'
import Brands from '../components/home/brand/Brands'
import Products from '../components/home/Products'
import ProductPhone from '../components/home/ProductPhone'

function Home() {
  return (
    <div>
      <Header/>


    <div className="hidden xlg:block">
        <Products />
      </div>


      <div className="xlg:hidden">
        <ProductPhone/>
      </div>
     
   

      <Brands/>
    </div>
  )
}

export default Home