import React, { useEffect, useState } from 'react'
import phone from '../../assets/phone.png'
import hot from '../../assets/hot.png'
import add from '../../assets/add.png'
import { Link } from 'react-router-dom';
import api from '../../api/api';



// const ProductCard=({product,isFirst})=>{
//   const cardStyles = isFirst
//   ? "bg-white p-4 w-[300px] h-[850px] border border-[#B9B9B9] border-[1px] "
//   : "bg-white p-4 w-[250px] h-[425px] border border-[#B9B9B9] border-[1px] ";


// const additionalClasses = "flex justify-center items-center flex-col";


// const combinedClasses = `${cardStyles} ${additionalClasses}`;


//   const textStyles = isFirst
//     ? "text-[26px] font-medium p-2"
//     : "text-base font-medium";
 
//     const imageDiv=isFirst
//     ?" w-full h-1/2  flex justify-center items-center flex-col"
//     :" w-[150px] h-1/3   flex justify-center items-center flex-col"
//       return(
//        <>

//       <div className={combinedClasses}>
//         <div className={imageDiv}>
//           <div className=''>
//             <img src={phone} /> 
//           </div>
//           <div className='bg-pink-600'>
//             <p>AUDIO AMPLIFIER, HDMI PROJECTORS</p>
//             <h1>iPhone 14 Pro max 256GB - Deep Purple</h1>
//             <div className='flex gap-[15px]'>
//                         <p className='text-[#606060] font-bold text-[12px] leading-[15px]'>INR</p>
//                         <p className='text-[#000000] font-extrabold text-[18px] leading-[15px]'>4999.00</p>
//                         <p className='text-[#777777] font-semibold text-[16px] leading-[15px] line-through'>5000.00</p>
//                       </div>

//             <div className='flex justify-center items-center w-[210px] h-[52px] bg-black rounded-[1px]'>
//                   <button className='text-white font_poppins font-bold text-[14px] leading-[34px]'>ADD TO CART</button>
//                 </div>
           
//           </div>
          
//         </div>
         
     
      
     
//       </div>

//        </>
      
  
//       )

// }


function Products() {
  
  const[products,setProducts]=useState([])
  const [error,setError]=useState()

  const fetchProducts=async()=>{
  try {
      const response=await api.get("/products/getproducts")
      console.log(response.data.data)

      setProducts(response.data.data)

      setError("")

  } catch (error) {
    console.error('Error:', error);
    setError(error.response.data.message)
  }
  }

  useEffect(()=>{
    fetchProducts()
  },[])
  
  const [firstProduct, ...otherProducts] = products;

  return (
    <>
    <div className='min-h-[800px]'>
       {/* heading */}

    <div className=' px-[100px] pt-[20px] mt-[60px] font_poppins font-semibold text-[32px] leading-[48.96px]'>
      <h1>Products</h1>
    </div>

    <div className=' h-[1px] bg-[#EEEEEE] mt-[5px]  mx-[100px]'>
      {/* horizontal line */}
     </div>



   <div className="flex justify-center 2xl:ml-[150px] xlg:mx-[2px]  xl:mx-[100px] mt-[40px]">

      {/* First card */}

      {firstProduct && (
        <div className="flex">

          {/* card */}
          <Link  to={`/product/${firstProduct._id}`}>
          <div className='bg-white p-4 xl:w-[300px]  xlg:w-[450px] xl:h-[700px]  xlg:h-[1050px] border-[#B9B9B9] border-[1px] flex justify-center items-center flex-col'>
        <div className='w-full h-1/2  flex justify-center items-center flex-col'>
          
            <img src={phone}  /> 
        
          <div className=' flex justify-center items-center flex-col gap-[30px] mt-[40px] '>
            <p className='font_PlusJakartaSans text-[#1AA5C3] font-bold text-[12px] leading-[15px] text-center uppercase ' style={{letterSpacing:"1px"}}>{firstProduct.category}</p>
            <h1 className='text-[#000000] font_poppins font-medium text-[18px] leading-[29px] text-center'>{firstProduct.name}</h1>
            <div className='flex gap-[15px]'>
                        <p className='text-[#606060] font-bold text-[12px] leading-[15px]'>INR</p>
                        <p className='text-[#000000] font-extrabold text-[18px] leading-[15px]'>{firstProduct.price}</p>
                        <p className='text-[#777777] font-semibold text-[16px] leading-[15px] line-through'>5000.00</p>
                      </div>
            <div className='flex justify-center items-center w-[210px] h-[52px] bg-[#1AA5C3] rounded-[1px]'>
                  <button className='text-white font_poppins font-bold text-[14px] leading-[34px]'>ADD TO CART</button>
                </div>
          </div>
        </div>   
      </div>
          </Link>
          
        </div>
      )}



      {/* Remaining cards  */}
      <div className="flex flex-wrap">
        {otherProducts.map((product) => (

          // card
         <Link to={`/product/${product._id}`}>
         <div className='bg-white p-4 w-[250px] h-[350px]  border-[#B9B9B9] border-[1px] flex justify-center items-center flex-col '>
           <div className=' flex justify-center items-center flex-col relative'>
            <img src={hot} alt='hot' className='absolute top-[-10px] left-[-4px]'/>
            
               <img src={phone} className='h-[150px]' /> 
               <img src={add}  alt='add' className='absolute right-0 w-[20px] h-[20px]'  />
            


             <div className='flex flex-col gap-[25px] mt-[30px]'>
               <p className='font_PlusJakartaSans text-[#1AA5C3] font-bold text-[10px] leading-[15px] uppercase' style={{letterSpacing:"1px"}}> {product.category}</p>
               <h1 className='text-[#000000] font_poppins font-medium text-[14px] leading-[23px] '>{product.name}</h1>
               <div className='flex gap-[15px]'>
                           <p className='text-[#606060] font-bold text-[12px] leading-[15px]'>INR</p>
                           <p className='text-[#000000] font-extrabold text-[18px] leading-[15px]'>{product.price}</p>
                           <p className='text-[#777777] font-semibold text-[16px] leading-[15px] line-through'>5000.00</p>
                         </div>
              
             </div>
             
           </div>
            
        
         
        
         </div></Link>
           

        ))}
      </div>
      
    </div>

    </div>

    </>
  )
}

export default Products