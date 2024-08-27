import React, { useEffect, useState } from 'react'
import phone from '../../assets/phone.png'
import hot from '../../assets/hot.png'
import add from '../../assets/add.png'
import { Link } from 'react-router-dom'
import api from '../../api/api'


// const products = [
//     {
//       id: 1,
//       name: 'Smartphone X1',
//       description: 'The latest smartphone with cutting-edge features and sleek design. Equipped with a high-resolution camera and fast processor.',
//       price: 799.99,
//       category: 'Electronics',
//       image: phone
//     },
//     {
//       id: 2,
//       name: 'Wireless Headphones',
//       description: 'Comfortable wireless headphones with noise-canceling technology and long battery life. Perfect for music lovers on the go.',
//       price: 149.99,
//       category: 'Electronics',
//       image:phone
//     },
//     {
//       id: 3,
//       name: 'Leather Sofa',
//       description: 'Elegant leather sofa with plush cushions and durable construction. A stylish addition to any living room.',
//       price: 999.99,
//       category: 'Furniture',
//       image: phone
//     },
//     {
//       id: 4,
//       name: 'Wooden Dining Table',
//       description: 'Solid wooden dining table with a modern design. Seats up to six people comfortably and adds a touch of sophistication to your dining area.',
//       price: 499.99,
//       category: 'Furniture',
//       image: phone
//     },
//     {
//       id: 5,
//       name: 'Men\'s Running Shoes',
//       description: 'High-performance running shoes designed for comfort and durability. Ideal for both casual and serious runners.',
//       price: 89.99,
//       category: 'Clothing',
//       image: 'https://via.placeholder.com/300x200?text=Men%27s+Running+Shoes'
//     },
//     {
//       id: 6,
//       name: 'Women\'s Summer Dress',
//       description: 'Light and breezy summer dress perfect for warm weather. Features a vibrant floral pattern and comfortable fit.',
//       price: 59.99,
//       category: 'Clothing',
//       image: 'https://via.placeholder.com/300x200?text=Women%27s+Summer+Dress'
//     },
//     {
//       id: 7,
//       name: 'Organic Green Tea',
//       description: 'Premium organic green tea leaves, rich in antioxidants and flavor. Ideal for a refreshing and healthy beverage.',
//       price: 12.99,
//       category: 'Grocery',
//       image: 'https://via.placeholder.com/300x200?text=Organic+Green+Tea'
//     },
    
//   ];
  

function ProductPhone() {

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



  return (
    <div className='min-h-[300px] '>
        <div className=' px-[100px]  font_poppins font-semibold text-[32px] leading-[48.96px]'>
    <h1>Products</h1>
    </div>

    <div className=' h-[1px] bg-[#EEEEEE] mt-[5px]  mx-[100px]'>
      {/* horizontal line */}
     </div>

     {/* //cards */}
   

     <div className="flex flex-wrap justify-center mt-[30px] gap-4 px-4 md:px-6 lg:px-8">
  {products.map((product) => (
    <Link to={`/product/${product._id}`} key={product._id} className='w-full sm:w-[250px] md:w-[300px] lg:w-[380px]'>
      <div className='bg-white p-4 h-full sm:h-[400px] md:h-[450px] lg:h-[500px] border-[#B9B9B9] border-[1px] flex flex-col justify-center items-center'>
        <div className='relative flex flex-col items-center'>
          <img src={hot} alt='hot' className='absolute top-[-10px] left-[-10px] w-[30px] h-[30px]' />
          <img src={phone} className='h-[100px] md:h-[150px] lg:h-[200px] w-auto' alt='product' />
          <img src={add} alt='add' className='absolute right-2 top-2 w-[20px] h-[20px]' />
          <div className='flex flex-col gap-[10px] mt-[20px] md:mt-[30px] text-center'>
            <p className='font_PlusJakartaSans text-[#1AA5C3] font-bold text-[10px] md:text-[12px] lg:text-[14px] leading-[15px] md:leading-[18px] uppercase' style={{ letterSpacing: "1px" }}>{product.category}</p>
            <h1 className='text-[#000000] font_poppins font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[23px]'>{product.name}</h1>
            <div className='flex flex-col md:flex-row gap-[10px] md:gap-[15px] items-center'>
              <p className='text-[#606060] font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-[15px]'>INR</p>
              <p className='text-[#000000] font-extrabold text-[18px] md:text-[20px] lg:text-[22px] leading-[15px]'>{product.price}</p>
              <p className='text-[#777777] font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[15px] line-through'>5000.00</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ))}
    </div>




    </div>
  )
}

export default ProductPhone