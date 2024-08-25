import React, { useEffect, useState } from 'react'
import api from '../api/api'
import phone from '../assets/phone.png'

function AdminOrders() {
  const [orderData,setOrderData]=useState([])
  const[error,setError]=useState(null)
  const [openFormId, setOpenFormId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');


  const fetchOrders=async()=>{
    try {
     const response=await api.get("/order/all")
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



  // Toggle form visibility
  const toggleForm = (orderId) => {
    if (openFormId === orderId) {
      setOpenFormId(null); 
    } else {
      setOpenFormId(orderId);
    }
  };

  // Handle form submission (mock implementation)
  const handleStatusUpdate =async (orderId) => {
     try {
       const response=await api.post(`/order/update/${orderId}`,{status:selectedStatus})

       console.log(response) 
       if(response.data.success){
        setOpenFormId(null);
        fetchOrders()
        setError("")
       }
     } catch (error) {
      console.error('Error:', error);
      setError(error.response.data.message)
     }
  };



  return (
    <div>
       <div className=' px-[20px] pt-[20px] mt-[60px] font_poppins font-semibold text-[32px] leading-[48.96px]'>
      <h1>All Orders</h1>
    </div>

    <div className=' h-[1px] bg-[#EEEEEE] mt-[5px]  '>
      {/* horizontal line */}
     </div>


     <div className="order-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
            src={phone} 
            alt={productItem.product.name}
            className="order-image w-full md:w-20 h-auto object-cover rounded-md mb-4 md:mb-0 md:mr-4"
          />
          <div>
            <h3 className="product-name text-xl font-semibold mb-2 font_poppins">
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
       <p className='text-black'>{order?.user?.email}</p>

       <button 
            className="mt-4 py-2 px-4 bg-[#44961D] text-white font-bold rounded-md" 
            onClick={() => toggleForm(order._id)}
          >
            Update Order Status
          </button>

          {openFormId === order._id && (
            <div className="status-form mt-4">
              <p className="font-bold mb-2">Update Status:</p>
              <div>
                <label className="mr-4">
                  <input 
                    type="radio" 
                    name="status" 
                    value="Processing" 
                    checked={selectedStatus === 'Processing'}
                    onChange={() => setSelectedStatus('Processing')}
                  /> 
                  Processing
                </label>
                <label className="mr-4">
                  <input 
                    type="radio" 
                    name="status" 
                    value="Shipped" 
                    checked={selectedStatus === 'Shipped'}
                    onChange={() => setSelectedStatus('Shipped')}
                  /> 
                  Shipped
                </label>
                <label className="mr-4">
                  <input 
                    type="radio" 
                    name="status" 
                    value="Delivered" 
                    checked={selectedStatus === 'Delivered'}
                    onChange={() => setSelectedStatus('Delivered')}
                  /> 
                  Delivered
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="status" 
                    value="Cancelled" 
                    checked={selectedStatus === 'Cancelled'}
                    onChange={() => setSelectedStatus('Cancelled')}
                  /> 
                  Cancelled
                </label>
              </div>
              <button 
                className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded-md"
                onClick={() => handleStatusUpdate(order._id)}
              >
                Submit
              </button>
            </div>
          )}
      <p className="total-price font-bold text-lg font_poppins text-right mt-4">
        Total Price: INR {order.totalPrice}
      </p>
    </div>
  ))}
</div>
    </div>
  )
}

export default AdminOrders