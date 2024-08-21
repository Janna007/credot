import React from 'react'
import { useParams } from 'react-router-dom';
import phone from '../assets/phone.png'
import color1 from '../assets/colour1.png'
import color2 from '../assets/colour2.png'
import color3 from '../assets/colour3.png'
import color4 from '../assets/colour4.png'
import color5 from '../assets/colour5.png'

function ProductDetails() {
  const products = [
    {
      id:1,
      name: 'Smartphone X1',
      description: 'The latest smartphone with cutting-edge features and sleek design. Equipped with a high-resolution camera and fast processor.',
      price: 799.99,
      category: 'Electronics',
    },
    {
      id:2,
      name: 'Wireless Headphones',
      description: 'Comfortable wireless headphones with noise-canceling technology and long battery life. Perfect for music lovers on the go.',
      price: 149.99,
      category: 'Electronics',
    },
    {
      id:3,
      name: 'Leather Sofa',
      description: 'Elegant leather sofa with plush cushions and durable construction. A stylish addition to any living room.',
      price: 999.99,
      category: 'Furniture',
    },
    {
      id:4,
      name: 'Wooden Dining Table',
      description: 'Solid wooden dining table with a modern design. Seats up to six people comfortably and adds a touch of sophistication to your dining area.',
      price: 499.99,
      category: 'Furniture',
    },
    {
      id:5,
      name: 'Men\'s Running Shoes',
      description: 'High-performance running shoes designed for comfort and durability. Ideal for both casual and serious runners.',
      price: 89.99,
      category: 'Clothing',
    },
    {
      id:6,
      name: 'Women\'s Summer Dress',
      description: 'Light and breezy summer dress perfect for warm weather. Features a vibrant floral pattern and comfortable fit.',
      price: 59.99,
      category: 'Clothing',
    },
    {
      id:7,
      name: 'Organic Green Tea',
      description: 'Premium organic green tea leaves, rich in antioxidants and flavor. Ideal for a refreshing and healthy beverage.',
      price: 12.99,
      category: 'Grocery',
    },
    {
      id:8,
      name: 'Artisan Bread',
      description: 'Freshly baked artisan bread with a crispy crust and soft, flavorful interior. Perfect for sandwiches or as a side.',
      price: 4.99,
      category: 'Grocery',
    },
  ];

  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <p>Product not found</p>;
  }


  return (
   <>
      <div className='min-h-[800px]'>
          <div className='min-h-500px  px-[60px] py-[50px]'>
               <div className='flex gap-[40px]'>


                     <div >
                      <div className='bg-[#F9F9F9] w-[515px] h-[567px] flex justify-center items-center'>
                      <img src={phone} alt='phone' className='w-[224px]  h-[300px]' />
                      </div>
                      <div className='mt-[30px] flex gap-[30px]'>
                       <div className='bg-[#F9F9F9] w-[135px] h-[135px] flex justify-center items-center'>
                       <img src={phone} alt='phone' className='w-58px]  h-[79px]' />
                       </div>
                       <div className='bg-[#F9F9F9] w-[135px] h-[135px] flex justify-center items-center'>
                       <img src={phone} alt='phone' className='w-58px]  h-[79px]' />
                       </div>
                       <div className='bg-[#F9F9F9] w-[135px] h-[135px] flex justify-center items-center'>
                       <img src={phone} alt='phone' className='w-58px]  h-[79px]' />
                       </div>
                      </div>
                      

                     </div>


                     <div className='flex flex-col gap-[20px] '>
                      <h1 className='font_poppins font-medium text-[28px] leading-[33.43px] text-[#222529]'>iPhone 12 Pro max 256GB Deep Purple</h1>
                      <div className='flex gap-[20px]'>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p className='font_poppins font-normal text-[12px] leading-[26px] text-[#999999]' style={{letterSpacing:'-1%'}}>( There are no reviews yet )</p>
                    </div>

                      <div className='flex gap-[15px]'>
                        <p className='text-[#606060] font-bold text-[12px] leading-[15px]'>INR</p>
                        <p className='text-[#000000] font-extrabold text-[18px] leading-[15px]'>4999.00</p>
                        <p className='text-[#777777] font-semibold text-[16px] leading-[15px] line-through'>5000.00</p>
                      </div>

                      <p className='font_poppins font-normal text-[14px] leading-[26px] text-[#777777]'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. </p>

                      <p className='font_poppins font-bold text-[14px] leading-[22px] text-[#000000]'>clour:<spna className='font_poppins font-semibold text-[14px] leading-[22px] text-[#000000]'>silver</spna></p>

                      <div className='flex gap-[20px]'>
                            <img src={color1} alt="clr1"  />
                            <img src={color2} alt="clr2" />
                            <img src={color3} alt="clr3" />
                            <img src={color4} alt="clr4" />
                            <img src={color5} alt="clr5" />
                      </div>

                      <p className='font_poppins font-bold text-[14px] leading-[22px] text-[#000000]'>internal memory</p>

                      <div className='flex gap-[20px]'>
                        <div className='border border-1 border-[#DCDCDC] w-[84px] h-[41px] flex justify-center items-center'>
                          256GB
                        </div>
                        <div  className='border border-1 border-[#DCDCDC] w-[84px] h-[41px] flex justify-center items-center bg-black text-white'>
                          500GB
                        </div>
                        <div  className='border border-1 border-[#DCDCDC] w-[84px] h-[41px] flex justify-center items-center'>
                          1TB
                        </div>
                        <div  className='border border-1 border-[#DCDCDC] w-[84px] h-[41px] flex justify-center items-center'>
                          128GB
                        </div>
                      </div>


                      <div className='mt-[50px]'>

                      <div className=' h-[1px] bg-[#EEEEEE]   '>
                          {/* horizontal line */}
                        </div>

                        <div className='flex gap-[60px] mt-[20px]' >
                          <div className='flex  w-[102px] h-[52px]'>
                            <div className='w-[34px] h-[52px] flex justify-center items-center border border-1 border-[#E7E7E7]'>+</div>
                            <div className='w-[34px] h-[52px] flex justify-center items-center border border-1 border-[#E7E7E7]'>1</div>
                            <div className='w-[34px] h-[52px] flex justify-center items-center border border-1 border-[#E7E7E7]'>-</div>
                          </div>
                          <div className='flex justify-center items-center w-[210px] h-[52px] bg-black rounded-[1px]'>
                            <button className='text-white font_poppins font-bold text-[14px] leading-[34px]'>ADD TO CART</button>
                          </div>



                        </div>

                        <div className=' h-[1px] bg-[#EEEEEE] mt-[20px]  '>
                          {/* horizontal line */}
                        </div>

                      </div>
                     </div>
               </div>
          </div>
      </div>

   </>
  )
}

export default ProductDetails