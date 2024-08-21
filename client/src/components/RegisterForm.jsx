import React from 'react'
import {useNavigate} from 'react-router-dom'

function RegisterForm() {
  const navigate=useNavigate()
  
  return (
    <div className='min-h-[600px] bg-[#F4F4F4] flex justify-center items-center flex-col  overflow-hidden p-[20px]'>
       <h1 className='text-[#222529] font_poppins font-semibold md:text-[26px]  text-[15px] leading-[52.33px] '>Register to your account</h1>

       <p className='font_poppins text-[#777777] font-normal md:text-[13px] text-[10px] mnd:leading-[13px]  mt-[30px] text-center'>orem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia egestas placerat ut sagittionec</p>

       <div className='flex flex-col gap-[10px] mt-[20px] justify-center items-center'>
        <input className='md:w-[538px] w-[300px] h-[60px] border border-1 border-[#CDCDCD] bg-white focus:ring-0 focus:border-white p-[5px] '  type='email' placeholder='Email ID'  />
        <input  className='md:w-[538px] w-[300px] h-[60px] border border-1 border-[#CDCDCD] bg-white p-[5px]'  type='password' placeholder='Password' />
       </div>

       <div className='mt-[30px]'>
        <button className='bg-[#1AA5C3]  w-[176px] h-[52px] text-white'>Create Account</button>
       </div>

       <p className='mt-[20px] '>Already have account ?<span className='font-semibold' onClick={()=>{navigate("/")}}>Login</span> </p>
    </div>
  )
}

export default RegisterForm
