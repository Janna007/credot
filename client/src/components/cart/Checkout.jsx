import React from 'react'

function Checkout() {
  return (
    <div className='min-h-[400px] flex justify-center items-center overflow-hidden '>
        <div className='grid md:grid-cols-12'>

             {/* 1st div */}

            <div className='md:col-span-7 '>

            <div className="p-4 ">

          {/* table */}

            <table className="min-w-full bg-white">
                <thead className='border-b border-[#E2E2E2]'>
                <tr>
                    <th className="py-2 px-4 text-left w-[350px] text-[#000000] font_poppins font-bold text-[12px] leading-[48px]">PRODUCT</th>
                    <th className="py-2 px-4 text-left  text-[#000000] font_poppins font-bold text-[12px] leading-[48px]  w-[20%]">PRICE</th>
                    <th className="py-2 px-4 text-left  text-[#000000] font_poppins font-bold text-[12px] leading-[48px] w-[20%]">QUANTITY</th>
                    <th className="py-2 px-4 text-left  text-[#000000] font_poppins font-bold text-[12px] leading-[48px]  w-[20%]">SUBTOTAL</th>
                </tr>
                </thead>

        
                <tbody className='border-b border-[#E2E2E2]'>
                {/* Example Row */}
                <tr className='h-[100px]' >
                    <td className="py-2 px-4  text-[#000000] font_poppins font-bold text-[12px] leading-[48px] ">iPhone 14 Pro Max</td>
                    <td className="py-2 px-4  text-[#000000] font_poppins font-bold text-[12px] leading-[48px] ">INR 999.00</td>
                    <td className="py-2 px-4 ">
                    <div className='flex  w-[102px] h-[52px]'>
                            <div className='w-[34px] h-[52px] flex justify-center items-center border border-1 border-[#E7E7E7]'>+</div>
                            <div className='w-[34px] h-[52px] flex justify-center items-center border border-1 border-[#E7E7E7]'>1</div>
                            <div className='w-[34px] h-[52px] flex justify-center items-center border border-1 border-[#E7E7E7]'>-</div>
                          </div>

                    </td>
                    <td className="py-2 px-4   text-[#000000] font_poppins font-bold text-[12px] leading-[48px]">INR 999.00</td>
                </tr>
                {/* Add more rows as needed */}
                </tbody>
            </table>

            {/* coupon */}
            <div className='flex gap-[200px] mt-[40px]'>
              
            <div className='flex '>
                 <div><input type='text' placeholder='coupon code' className='border border-1 h-[40px] p-2' /></div>
                 <div className='flex justify-center items-center w-[150px] h-[40px] bg-black rounded-[1px]'> <button className='text-white font_poppins font-bold text-[14px] leading-[34px]'>APPLY COUPON</button></div>
            </div>

            <div  className='flex justify-center items-center w-[150px] h-[40px] border-[#000000] border-2  rounded-[1px]'>
            <button className='text-black font_poppins font-bold text-[14px] leading-[34px]'>UPDATE CART</button>
            </div>
            </div>

            </div>

            </div>

             
              {/* 2nd div */}
            <div className='md:col-span-5 '>
              <div className='w-[432px] h-[350px] border-[1px] border-[#E2E2E2] ml-[20px] flex flex-col p-6 '>
                <div>
                  <h1 className='text-[#000000] font_poppins font-semibold text-[20px] leading-[48.96px]'>Cart Totals</h1>
                </div>
                <div className=' flex gap-[200px] mt-[30px]'>
                  <p  className='text-[#000000] font_poppins font-semibold text-[14px] leading-[48.96px]'>Subtotal</p>
                  <p  className='text-[#000000] font_poppins font-normal text-[14px] leading-[48.96px]'>INR 1000.00</p>
                </div>

                  <div className=' h-[1px] bg-[#EEEEEE] mt-[4px]  '>
                          {/* horizontal line */}
                        </div>

                        <div className=' flex gap-[200px] mt-[30px]'>
                  <p  className='text-[#000000] font_poppins font-semibold text-[14px] leading-[48.96px]'>Total</p>
                  <p  className='text-[#000000] font_poppins font-bold text-[22px] leading-[48.96px]'>INR 1000.00</p>
                </div>

                <div className='flex justify-center items-center mt-[30px] w-[371px] h-[52px] bg-[#1AA5C3] rounded-[1px]'>
                            <button className='text-white font_poppins font-bold text-[14px] leading-[34px]'>PROCEED TO CHECKOUT</button>
                          </div>

             

              </div>
            </div>



        </div>
    </div>
  )
}

export default Checkout