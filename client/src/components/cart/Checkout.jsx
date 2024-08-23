import React from 'react'
import phone from '../../assets/phone.png'
import remove from '../../assets/remove.png'

function Checkout() {
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

                {/*Row */}
                <tr className='h-[100px]' >
                    
                    <td className='py-2 px-4 '>
                      <div className='flex sm:flex-row flex-col gap-[6px] relative  items-center'>
                        <img src={remove} alt='remove' className='absolute left-0 sm:left-[60px] sm:top-[-10px]'/>
                        <div className='bg-[#F9F9F9] sm:w-[80px] sm:h-[80px] w-[40px] h-[30px] flex justify-center items-center'>
                        <img src={phone} alt='phone' className='w-[40px] h-[60px]' />
                        </div>
                      
                        <p className=' text-[#000000] font_poppins font-bold sm:text-[12px] text-[8px] leading-[48px] '>iPhone 14 Pro Max</p>
                      </div>
                    </td>



                    <td className="py-2 px-4  text-[#000000] font_poppins font-bold sm:text-[12px] text-[6px] leading-[48px] ">INR 999.00</td>
                    <td className="py-2 px-4 ">
                    <div className='flex  sm:w-[102px] w-[60px] h-[52px]'>
                            <div className='sm:w-[34px] w-[20px] h-[52px] flex justify-center items-center border border-1 border-[#E7E7E7]'>+</div>
                            <div className='sm:w-[34px] w-[20px] h-[52px] flex justify-center items-center border border-1 border-[#E7E7E7]'>1</div>
                            <div className='sm:w-[34px] w-[20px] h-[52px] flex justify-center items-center border border-1 border-[#E7E7E7]'>-</div>
                          </div>

                    </td>
                    <td className="py-2 px-4  text-[#000000] font_poppins font-bold sm:text-[12px] text-[6px] leading-[48px] ">INR 999.00</td>
                </tr>
                
                </tbody>


            </table>

            {/* coupon */}
            <div className='flex xl:gap-[200px] sm:gap-[80px] gap-[20px] mt-[40px] sm:px-0 px-[40px]'>
              
            <div className='flex'>
                 <div><input type='text' placeholder='coupon code' className='border border-1 h-[40px] p-2 sm:block hidden ' /></div>
                 <div className='flex justify-center items-center w-[150px] h-[40px] bg-black rounded-[1px]'> <button className='text-white font_poppins font-bold text-[14px] leading-[34px]'>APPLY COUPON</button></div>
            </div>

            <div  className='flex justify-center items-center w-[150px] h-[40px] border-[#000000] border-2  rounded-[1px]'>
            <button className='text-black font_poppins font-bold text-[14px] leading-[34px]'>UPDATE CART</button>
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
                  <p  className='text-[#000000] font_poppins font-normal text-[14px] leading-[48.96px]'>INR 1000.00</p>
                </div>

                  <div className=' h-[1px] bg-[#EEEEEE] mt-[4px]  '>
                          {/* horizontal line */}
                        </div>

                        <div className=' flex gap-[100px] md:gap-[200px] mt-[30px]'>
                  <p  className='text-[#000000] font_poppins font-semibold text-[14px] leading-[48.96px]'>Total</p>
                  <p  className='text-[#000000] font_poppins font-bold text-[22px] leading-[48.96px]'>INR 1000.00</p>
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