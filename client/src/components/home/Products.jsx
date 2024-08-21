import React from 'react'
import { Link } from 'react-router-dom';

function Products() {
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
    </div>




    </div>




    </>
  )
}

export default Products