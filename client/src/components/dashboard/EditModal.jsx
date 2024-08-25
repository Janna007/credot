import React, { useState } from 'react';
import api from '../../api/api';

function EditModal({ product, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: product.name,
    category: product.category,
    description: product.description,
    price: product.price,
  });

  const [error,setError]=useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      const response=await api.put(`/products/update/${product._id}`, formData);
      console.log(response)
      onSave();
      onClose();
      setError("")
    } catch (error) {
      console.error('Error:', error);
      setError(error.response.data.message)
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-md w-[400px]'>
        <h2 className='text-lg font-semibold mb-4'>Edit Product</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='border p-2 rounded-md'
            placeholder='Product Name'
          />
          <input
            type='text'
            name='category'
            value={formData.category}
            onChange={handleChange}
            className='border p-2 rounded-md'
            placeholder='Category'
          />
          <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
            className='border p-2 rounded-md'
            placeholder='Description'
          />
          <input
            type='number'
            name='price'
            value={formData.price}
            onChange={handleChange}
            className='border p-2 rounded-md'
            placeholder='Price'
          />
          <div className='flex justify-between mt-4'>
            <button 
              type='button' 
              onClick={onClose} 
              className='bg-gray-300 text-gray-700 px-4 py-2 rounded-md'
            >
              Cancel
            </button>
            <button 
              type='submit' 
              className='bg-blue-500 text-white px-4 py-2 rounded-md'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
