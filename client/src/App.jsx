
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register'

function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
