import React from 'react'
import logo from '../assets/logo1.png'
import usericon from '../assets/usericon.png'
import carticon from '../assets/carticon.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Navbar() {
  const navigate=useNavigate()
  const userData = useSelector((state) => state.auth.userData);
  console.log(userData)

  const handleNavigation = () => {
    if (userData?.isAdmin) {
      navigate("/orders"); // Navigate to the admin orders page
    } else {
      navigate("/my-order"); // Navigate to the user's orders page
    }
  };
  return (
    <>
    <div className='min-h-[90px]  pt-[34px] flex 3xl:gap-[1300px] 2xl:gap-[1100px] xl:gap-[750px] lg:gap-[400px] md:gap-[200px] sm:gap-[150px] xsm:gap-[120px]  gap-[70px]  overflow-hidden'>
  
        <img src={logo} alt='logo'  className='w-[134px] h-[48px] md:ml-[180px] sm:ml-[60px] ml-[20px] ' onClick={()=>{navigate("/home")}}/>


        <div className='flex gap-[20px]  '>

            <div className='bg-gray-400 sm:h-[40px] sm:w-[40px] w-[35px] h-[35px] rounded-full flex justify-center items-center p-2 ' >
            <img src={usericon} alt='usericon'  className='w-[20px]' onClick={handleNavigation}/>
            </div>
            <div className="w-[1px] h-[40px] opacity-40 bg-gray-400">
                    {/* Vertical line */}
               </div>
           <div  className='bg-gray-400  sm:h-[40px] sm:w-[40px] w-[35px] h-[35px]  rounded-full flex justify-center items-center '>
           <img src={carticon} alt='carticon'  className='w-[20px]' onClick={()=>{navigate("/cart")}} />
           </div>
           
        </div>
      
     
    </div>
    </>
  )
}

export default Navbar