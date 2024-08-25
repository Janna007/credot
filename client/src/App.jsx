
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
import MyOrder from './pages/MyOrder'
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './pages/Dashboard'
import AdminOrders from './pages/AdminOrders'
import CreateProduct from './components/dashboard/CreateProduct'

function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<ProtectedRoute element={<Home />} />} />
        <Route path='/cart' element={<ProtectedRoute element={<Cart />} />} />
        <Route path='/product/:id' element={<ProtectedRoute element={<ProductDetails />} />} />
        <Route path='/success' element={<ProtectedRoute element={<Success />} />} />
        <Route path='/my-order' element={<ProtectedRoute element={<MyOrder />} />} />
        <Route path='/dashboard' element={<ProtectedRoute element={<Dashboard />} adminOnly={true} />} />
        <Route path='/orders' element={<ProtectedRoute element={<AdminOrders />}  />} />
        <Route path='/create-product' element={<ProtectedRoute element={<CreateProduct />}  />} />
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
