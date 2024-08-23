import React from 'react'
import { Link } from 'react-router-dom';

import phone from '../../assets/phone.png'
import hot from '../../assets/hot.png'
import add from '../../assets/add.png'



const ProductCard=({product,isFirst})=>{
  const cardStyles = isFirst
  ? "bg-white p-4 w-[300px] h-[850px] border border-[#B9B9B9] border-[1px] "
  : "bg-white p-4 w-[250px] h-[425px] border border-[#B9B9B9] border-[1px] ";


const additionalClasses = "flex justify-center items-center flex-col";


const combinedClasses = `${cardStyles} ${additionalClasses}`;


  const textStyles = isFirst
    ? "text-[26px] font-medium p-2"
    : "text-base font-medium";
 
    const imageDiv=isFirst
    ?" w-full h-1/2  flex justify-center items-center flex-col"
    :" w-[150px] h-1/3   flex justify-center items-center flex-col"
      return(
       <>

      <div className={combinedClasses}>
        <div className={imageDiv}>
          <div className=''>
            <img src={phone} /> 
          </div>
          <div className='bg-pink-600'>
            <p>AUDIO AMPLIFIER, HDMI PROJECTORS</p>
            <h1>iPhone 14 Pro max 256GB - Deep Purple</h1>
            <div className='flex gap-[15px]'>
                        <p className='text-[#606060] font-bold text-[12px] leading-[15px]'>INR</p>
                        <p className='text-[#000000] font-extrabold text-[18px] leading-[15px]'>4999.00</p>
                        <p className='text-[#777777] font-semibold text-[16px] leading-[15px] line-through'>5000.00</p>
                      </div>

            <div className='flex justify-center items-center w-[210px] h-[52px] bg-black rounded-[1px]'>
                  <button className='text-white font_poppins font-bold text-[14px] leading-[34px]'>ADD TO CART</button>
                </div>
           
          </div>
          
        </div>
         
     
      
     
      </div>

       </>
      
  
      )

}


function Products() {
  const products = [
    {
      id: 1,
      name: 'Smartphone X1',
      description: 'The latest smartphone with cutting-edge features and sleek design. Equipped with a high-resolution camera and fast processor.',
      price: 799.99,
      category: 'Electronics',
      image: phone
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      description: 'Comfortable wireless headphones with noise-canceling technology and long battery life. Perfect for music lovers on the go.',
      price: 149.99,
      category: 'Electronics',
      image:phone
    },
    {
      id: 3,
      name: 'Leather Sofa',
      description: 'Elegant leather sofa with plush cushions and durable construction. A stylish addition to any living room.',
      price: 999.99,
      category: 'Furniture',
      image: phone
    },
    {
      id: 4,
      name: 'Wooden Dining Table',
      description: 'Solid wooden dining table with a modern design. Seats up to six people comfortably and adds a touch of sophistication to your dining area.',
      price: 499.99,
      category: 'Furniture',
      image: phone
    },
    {
      id: 5,
      name: 'Men\'s Running Shoes',
      description: 'High-performance running shoes designed for comfort and durability. Ideal for both casual and serious runners.',
      price: 89.99,
      category: 'Clothing',
      image: 'https://via.placeholder.com/300x200?text=Men%27s+Running+Shoes'
    },
    {
      id: 6,
      name: 'Women\'s Summer Dress',
      description: 'Light and breezy summer dress perfect for warm weather. Features a vibrant floral pattern and comfortable fit.',
      price: 59.99,
      category: 'Clothing',
      image: 'https://via.placeholder.com/300x200?text=Women%27s+Summer+Dress'
    },
    {
      id: 7,
      name: 'Organic Green Tea',
      description: 'Premium organic green tea leaves, rich in antioxidants and flavor. Ideal for a refreshing and healthy beverage.',
      price: 12.99,
      category: 'Grocery',
      image: 'https://via.placeholder.com/300x200?text=Organic+Green+Tea'
    },
    
  ];
  
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



{/* 
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((product, index) => (
        <Link
        key={product.id}
        to={`/product/${product.id}`}
        className="border p-4 rounded-lg hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mt-2">{product.category}</p>
          <button>add to cart</button>
       </Link>
        
      ))}
    </div> */}

   <div className="flex justify-center 2xl:ml-[150px]   mx-[100px] mt-[40px]">

      {/* First card */}


      {firstProduct && (
        <div className="flex">

          {/* card */}
           <div className='bg-white p-4 w-[300px] h-[700px]  border-[#B9B9B9] border-[1px] flex justify-center items-center flex-col'>
        <div className='w-full h-1/2  flex justify-center items-center flex-col'>
          <div className=''>
            <img src={phone} /> 
          </div>
          <div className=' flex justify-center items-center flex-col gap-[30px] mt-[40px] '>
            <p className='font_PlusJakartaSans text-[#1AA5C3] font-bold text-[12px] leading-[15px] text-center ' style={{letterSpacing:"1px"}}>AUDIO AMPLIFIER, HDMI PROJECTORS</p>
            <h1 className='text-[#000000] font_poppins font-medium text-[18px] leading-[29px] text-center'>iPhone 14 Pro max 256GB - Deep Purple</h1>
            <div className='flex gap-[15px]'>
                        <p className='text-[#606060] font-bold text-[12px] leading-[15px]'>INR</p>
                        <p className='text-[#000000] font-extrabold text-[18px] leading-[15px]'>4999.00</p>
                        <p className='text-[#777777] font-semibold text-[16px] leading-[15px] line-through'>5000.00</p>
                      </div>
            <div className='flex justify-center items-center w-[210px] h-[52px] bg-[#1AA5C3] rounded-[1px]'>
                  <button className='text-white font_poppins font-bold text-[14px] leading-[34px]'>ADD TO CART</button>
                </div>
          </div>
        </div>   
      </div>
        </div>
      )}





      {/* Remaining cards  */}
      <div className="flex flex-wrap">
        {otherProducts.map((product) => (

          // card

           <div className='bg-white p-4 w-[250px] h-[350px]  border-[#B9B9B9] border-[1px] flex justify-center items-center flex-col '>
           <div className=' flex justify-center items-center flex-col relative'>
            <img src={hot} alt='hot' className='absolute top-[-10px] left-[-4px]'/>
            
               <img src={phone} className='h-[150px]' /> 
               <img src={add}  alt='add' className='absolute right-0 w-[20px] h-[20px]'  />
            


             <div className='flex flex-col gap-[25px] mt-[30px]'>
               <p className='font_PlusJakartaSans text-[#1AA5C3] font-bold text-[10px] leading-[15px]' style={{letterSpacing:"1px"}}>SMART PHONE</p>
               <h1 className='text-[#000000] font_poppins font-medium text-[14px] leading-[23px] '>iPhone 14 Pro max 256GB - Deep Purple</h1>
               <div className='flex gap-[15px]'>
                           <p className='text-[#606060] font-bold text-[12px] leading-[15px]'>INR</p>
                           <p className='text-[#000000] font-extrabold text-[18px] leading-[15px]'>4999.00</p>
                           <p className='text-[#777777] font-semibold text-[16px] leading-[15px] line-through'>5000.00</p>
                         </div>
              
             </div>
             
           </div>
            
        
         
        
         </div>
        ))}
      </div>
    </div>


    </div>

    </>
  )
}

export default Products