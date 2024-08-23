import React from 'react'
import phone from '../assets/phone.png'


const orderData = [
    {
      id: 1,
      status: 'Shipped',
      date: '2024-08-20',
      product: {
        name: 'Wireless Headphones',
        image: phone,
        description: 'High-quality wireless headphones with noise cancellation.',
      },
      quantity: 2,
    },
    {
      id: 2,
      status: 'Delivered',
      date: '2024-08-18',
      product: {
        name: 'Smartphone',
        image: phone,
        description: 'Latest model smartphone with an excellent camera and battery life.',
      },
      quantity: 1,
    },
    {
      id: 3,
      status: 'Processing',
      date: '2024-08-21',
      product: {
        name: 'Gaming Mouse',
        image: phone,
        description: 'Ergonomic gaming mouse with customizable buttons and RGB lighting.',
      },
      quantity: 3,
    },
  ];
  

function MyOrder() {
  return (

    <>
    <div className=' px-[100px] pt-[20px] mt-[60px] font_poppins font-semibold text-[32px] leading-[48.96px]'>
      <h1>My Orders</h1>
    </div>

    <div className=' h-[1px] bg-[#EEEEEE] mt-[5px]  '>
      {/* horizontal line */}
     </div>
    <div className="order-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {orderData.map((order) => (
  
        <div className="order-card border p-4 border-[#B9B9B9] bg-white mb-4">
          <div className="order-header flex items-center justify-between mb-2">
            <span className="order-status font-bold text-lg font_poppins text-[#44961D]">{order.status}</span>
            <span className="order-date text-[#777777] font_poppins">{order.date}</span>
          </div>
          <div className="order-content flex flex-col md:flex-row">
            <img
              src={order.product.image}
              alt={order.product.name}
              className="order-image w-full md:w-20 h-auto object-cover rounded-md mb-4 md:mb-0 md:mr-4"
            />
            <div>
              <h3 className="product-name text-xl font-semibold mb-2 font_poppins">{order.product.name}</h3>
              <p className="product-description text-[#777777] mb-2 font_poppins">{order.product.description}</p>
              <p className="quantity text-gray-800 font-medium font_poppins">Quantity: {order.quantity}</p>
            </div>
          </div>
        </div>
    ))}
  </div>
  </>
  )
}

export default MyOrder