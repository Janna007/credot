import React, { useEffect, useState } from 'react'
import phone from '../assets/phone.png'
import api from '../api/api'
import { Link } from 'react-router-dom'


// const orderData = [
//     {
//       id: 1,
//       status: 'Shipped',
//       date: '2024-08-20',
//       product: {
//         name: 'Wireless Headphones',
//         image: phone,
//         description: 'High-quality wireless headphones with noise cancellation.',
//       },
//       quantity: 2,
//     },
//     {
//       id: 2,
//       status: 'Delivered',
//       date: '2024-08-18',
//       product: {
//         name: 'Smartphone',
//         image: phone,
//         description: 'Latest model smartphone with an excellent camera and battery life.',
//       },
//       quantity: 1,
//     },
//     {
//       id: 3,
//       status: 'Processing',
//       date: '2024-08-21',
//       product: {
//         name: 'Gaming Mouse',
//         image: phone,
//         description: 'Ergonomic gaming mouse with customizable buttons and RGB lighting.',
//       },
//       quantity: 3,
//     },
//   ];



function MyOrder() {
  const [orderData,setOrderData]=useState([])
  const[error,setError]=useState(null)

  const fetchOrders=async()=>{
    try {
     const response=await api.get("/order/userorder")
     console.log(response)
     if(response.data.statusCode===200){
      setOrderData(response.data.data)

     }
     
      setError("")
     
    } catch (error) {
      console.error('Error:', error);
      setError(error.response.data.message)
    }
 }
 
 useEffect(()=>{
   fetchOrders()
 },[])
   
 const handleUpdateOrderStatus = (orderId) => {
  // Logic to update order status, possibly opening a modal or directly updating via an API call
  console.log("Update order status for:", orderId);
};

  return (

    <>
    <div className=' 2xl:px-[100px] lg:px-[80px] px-[20px] pt-[20px] mt-[60px] font_poppins font-semibold text-[32px] leading-[48.96px]'>
      <h1>My Orders</h1>
    </div>

    <div className=' h-[1px] bg-[#EEEEEE] mt-[5px]  '>
    {/* horizontal line */}
   </div>


    {orderData.length===0 ? (
         <p className='text-center'>You have no orders yet!! <Link to={"/home"}>continue?</Link></p>
      ):(
        
      
   <div className="order-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6 lg:px-[80px] px-6 3xl:px-[100px]">
{orderData.map((order) => (
  <div key={order._id} className="order-card border p-4 border-[#B9B9B9] bg-white mb-4">
    <div className="order-header flex items-center justify-between mb-2">
      <span className="order-status font-bold text-lg font_poppins text-[#44961D]">
        {order.status}
      </span>
      <span className="order-date text-[#777777] font_poppins">
        {new Date(order.orderDate).toLocaleDateString()}
      </span>
    </div>
    {order.products.map((productItem, index) => (
      <div key={index} className="order-content flex flex-col md:flex-row mb-4">
        <img
          src={phone} // Replace `phone` with the correct image source from your product data if available
          alt={productItem.product.name}
          className="order-image w-full md:w-20 h-auto object-cover rounded-md mb-4 md:mb-0 md:mr-4"
        />
        <div>
          <h3 className="product-name text-md font-semibold mb-2 font_poppins">
            {productItem.product.name}
          </h3>
          
          <p className="product-description text-[#777777] mb-2 font_poppins">
            INR {productItem.product.price}
          </p>
          <p className="quantity text-gray-800 font-medium font_poppins">
            Quantity: {productItem.quantity}
          </p>
        </div>
      </div>
    ))}
   

    <p className="total-price font-bold text-lg font_poppins text-right mt-4">
      Total Price: INR {order.totalPrice}
    </p>
  </div>
))}
</div>

      )}
  </>
  )
}

export default MyOrder