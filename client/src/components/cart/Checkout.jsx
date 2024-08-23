import React from 'react'

function Checkout() {
  return (
    <div className='min-h-[400px] flex justify-center items-center '>
        <div className='grid md:grid-cols-12'>
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

            <div className='flex mt-[40px]'>
                 <div><input type='text' placeholder='coupon code' className='border border-1 h-[40px] p-2' /></div>
                 <div className='flex justify-center items-center w-[150px] h-[40px] bg-black rounded-[1px]'> <button className='text-white font_poppins font-bold text-[14px] leading-[34px]'>APPLY COUPON</button></div>
            </div>


            </div>

            </div>



            <div className='md:col-span-5 '>2</div>
        </div>

    </div>
  )
}

export default Checkout