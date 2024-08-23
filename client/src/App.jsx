
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Success from './components/Success'

function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path='/success' element={<Success/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
