import React, { useEffect, useState } from 'react'
import phone from '../../assets/phone.png'
import edit from '../../assets/edit.png'
import icondel from '../../assets/icondel.png'
import api from '../../api/api'
import EditModal from './EditModal'
import { useNavigate } from 'react-router-dom'



function ProductList() {
  const navigate=useNavigate()

    const[products,setProducts]=useState([])
  const [error,setError]=useState()

  const [selectedProduct, setSelectedProduct] = useState(null); // State to track selected product for editing
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility


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

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const removeProduct=async(id)=>{
      try {
        const response=await api.delete(`/products/delete/${id}`)
        console.log(response)

       if(response.data.statusCode===200){
          fetchProducts()
       }

       setError("")
      } catch (error) {
        console.error('Error:', error);
       setError(error.response.data.message)
      }
  }


  return (
    <>
    <div className='flex justify-end w-full px-6 mb-4 mt-4'>
        <button 
          className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
          onClick={()=>{navigate("/create-product")}}
        >
          Create Product
        </button>
      </div>
    <div className='flex justify-center 2xl:ml-[150px] xlg:mx-[80px]  xl:mx-[100px] mt-[40px]'>
      
<div className="flex flex-wrap">
        {products.map((product) => (

          // card
       
         <div key={product._id} className='bg-white p-4 w-[250px] h-[350px]  border-[#B9B9B9] border-[1px] flex justify-center items-center flex-col '>
           <div className=' flex justify-center items-center flex-col relative'>
            <img src={edit} alt='hot' className='absolute top-[-10px] left-[-4px]'  onClick={() => handleEditClick(product)}/>
            
               <img src={phone} className='h-[150px]' /> 
               <img src={icondel}  alt='add' className='absolute right-0 w-[20px] h-[20px]' onClick={()=>removeProduct(product._id)} />
            


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
            
        
         
        
         </div>

         
           

        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <EditModal 
          product={selectedProduct} 
          onClose={handleModalClose} 
          onSave={fetchProducts} // Refresh the product list after editing
        />
      )}
      
    </div>
    </>
  )
}

export default ProductList