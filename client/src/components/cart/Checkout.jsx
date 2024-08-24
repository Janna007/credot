import React, { useEffect, useState } from 'react'
import phone from '../../assets/phone.png'
import remove from '../../assets/remove.png'
import api from '../../api/api';

function Checkout() {


  // const [cartItems, setCartItems] = useState([
  //   {
  //     id: 1,
  //     name: 'iPhone 14 Pro Max',
  //     price: 999.0,
  //     quantity: 1,
  //     image: phone,
  //   },
  //   {
  //     id: 2,
  //     name: 'Samsung Galaxy S21',
  //     price: 799.0,
  //     quantity: 2,
  //     image: phone,
  //   },
  //   // Add more items as needed
  // ]);


  const [cartItems,setCartItems]=useState([])
  const [error,setError]=useState(null)


  const fetchCartItems=async()=>{
    try {
      const response=await api.get("/cart/getcartitems")
      console.log(response)

      if(response.data.success){
        setCartItems(response.data.data)
      }
      setError("")
      
    } catch (error) {
      console.error('Error:', error);
      setError(error.response.data.message)
    }
  }


  useEffect(()=>{
 fetchCartItems()
  },[])


   // Calculate the subtotal
   const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

   // Function to increase quantity
   const increaseQuantity = (id) => {
     setCartItems(cartItems.map(item =>
       item.product._id === id ? { ...item, quantity: item.quantity + 1 } : item
     ));
   };
 
   // Function to decrease quantity
   const decreaseQuantity = (id) => {
     setCartItems(cartItems.map(item =>
       item.product._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
     ));
   };


   const updateCart=async()=>{
      try {
        const response=await api.put("/cart/update",{products:cartItems})
        console.log(response)
        setError("")
      } catch (error) {
        console.error('Error:', error);
        setError(error.response.data.message)
      }
   }

   const removeFromCart=async(id)=>{
     try {
      console.log(id)
      const response=await api.delete(`/cart/delete/${id}`)
      console.log(response)
      if(response.data.success){
        fetchCartItems()
      }
     } catch (error) {
      console.error('Error:', error);
        setError(error.response.data.message)
     }
   }

  return (
    <div className='min-h-[400px] flex justify-center items-center overflow-hidden p-2 '>
        <div className='grid lg:grid-cols-12'>

             {/* 1st div */}

            <div className='lg:col-span-7 '>

            <div className="p-4 ">

          {/* table */}

            <table className="min-w-full bg-white">
              {/* head */}
                <thead className='border-b border-[#E2E2E2] '>
                <tr>
                    <th className="py-2 sm:px-4 px-2 sm:text-left sm:w-[350px] w-[150px] text-[#000000] font_poppins font-bold sm:text-[12px] text-[8px] sm:leading-[48px]">PRODUCT</th>
                    <th className="py-2  sm:px-4 px-2 sm:text-left  text-[#000000] font_poppins font-bold  sm:text-[12px] text-[8px] leading-[48px]  sm:w-[20%] w-[10%]">PRICE</th>
                    <th className="py-2  sm:px-4 px-2 sm:text-left  text-[#000000] font_poppins font-bold  sm:text-[12px] text-[8px] leading-[48px]  sm:w-[20%] w-[10%]">QUANTITY</th>
                    <th className="py-2  sm:px-4 px-2 text-left  text-[#000000] font_poppins font-bold  sm:text-[12px] text-[8px] leading-[48px]  sm:w-[20%] w-[10%]">SUBTOTAL</th>
                </tr>
                </thead>

              {/* body */}
              <tbody className='border-b border-[#E2E2E2]'>
                {cartItems.map(item => (
                  <tr key={item.product._id} className='h-[100px]'>
                    <td className='py-2 px-4'>
                      <div className='flex sm:flex-row flex-col gap-[6px] relative items-center'>
                        <img onClick={()=>{removeFromCart(item.product._id)}} src={remove} alt='remove' className='absolute left-0 sm:left-[60px] sm:top-[-10px]' />
                        <div className='bg-[#F9F9F9] sm:w-[80px] sm:h-[80px] w-[40px] h-[30px] flex justify-center items-center'>
                          <img src={phone} alt='phone' className='w-[40px] h-[60px]' />
                        </div>
                        <p className='text-[#000000] font_poppins font-bold sm:text-[12px] text-[8px] '>{item.product.name}</p>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-[#000000] font_poppins font-bold sm:text-[12px] text-[6px] leading-[48px]">
                      INR {item.product.price.toFixed(2)}
                    </td>
                    <td className="py-2 px-4">
                      <div className='flex sm:w-[102px] w-[60px] h-[52px]'>
                        <div
                          className='sm:w-[34px] w-[20px] h-[52px] flex justify-center items-center border border-1 border-[#E7E7E7] cursor-pointer'
                          onClick={() => increaseQuantity(item.product._id)}
                        >
                          +
                        </div>
                        <div className='sm:w-[34px] w-[20px] h-[52px] flex justify-center items-center border border-1 border-[#E7E7E7]'>
                          {item.quantity}
                        </div>
                        <div
                          className='sm:w-[34px] w-[20px] h-[52px] flex justify-center items-center border border-1 border-[#E7E7E7] cursor-pointer'
                          onClick={() => decreaseQuantity(item.product._id)}
                        >
                          -
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-[#000000] font_poppins font-bold sm:text-[12px] text-[6px] leading-[48px]">
                      INR {(item.product.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
               </tbody>

            </table>

            {/* coupon */}
            <div className='flex xl:gap-[200px] sm:gap-[80px] gap-[20px] mt-[40px] sm:px-0 px-[40px]'>
              
            <div className='flex'>
                 <div><input type='text' placeholder='coupon code' className='border border-1 h-[40px] p-2 sm:block hidden ' /></div>
                 <div className='flex justify-center items-center w-[150px] h-[40px] bg-black rounded-[1px]'> <button className='text-white font_poppins font-bold text-[14px] leading-[34px]'>APPLY COUPON</button></div>
            </div>

            <div  className='flex justify-center items-center w-[150px] h-[40px] border-[#000000] border-2  rounded-[1px]'>
            <button className='text-black font_poppins font-bold text-[14px] leading-[34px]' onClick={()=>{updateCart()}}>UPDATE CART</button>
            </div>
            </div>

            </div>

            </div>

             
              {/* 2nd div */}
            <div className='lg:col-span-5  lg:mt-0 mt-[100px] flex justify-center items-center'>
              <div className=' w-[350px] md:w-[432px] h-[350px] border-[1px] border-[#E2E2E2] md:ml-[20px] flex flex-col p-6 '>
                <div>
                  <h1 className='text-[#000000] font_poppins font-semibold text-[20px] leading-[48.96px]'>Cart Totals</h1>
                </div>
                <div className=' flex gap-[100px] md:gap-[200px] mt-[30px]'>
                  <p  className='text-[#000000] font_poppins font-semibold text-[14px] leading-[48.96px]'>Subtotal</p>
                  <p  className='text-[#000000] font_poppins font-normal text-[14px] leading-[48.96px]'>INR {subtotal}</p>
                </div>

                  <div className=' h-[1px] bg-[#EEEEEE] mt-[4px]  '>
                          {/* horizontal line */}
                        </div>

                        <div className=' flex gap-[100px] md:gap-[200px] mt-[30px]'>
                  <p  className='text-[#000000] font_poppins font-semibold text-[14px] leading-[48.96px]'>Total</p>
                  <p  className='text-[#000000] font_poppins font-bold text-[22px] leading-[48.96px]'>INR {subtotal}</p>
                </div>

                <div className='flex justify-center items-center mt-[30px] w-[300px] md:w-[371px] h-[52px] bg-[#1AA5C3] rounded-[1px]'>
                            <button className='text-white font_poppins font-bold text-[14px] leading-[34px]'>PROCEED TO CHECKOUT</button>
                          </div>

             

              </div>
            </div>



        </div>
    </div>
  )
}

export default Checkout