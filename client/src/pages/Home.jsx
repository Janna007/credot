import React from 'react'
import Header from '../components/home/Header'
import Brands from '../components/home/brand/Brands'
import Products from '../components/home/Products'

function Home() {
  return (
    <div>
      <Header/>
      <Products/>
      <Brands/>
    </div>
  )
}

export default Home