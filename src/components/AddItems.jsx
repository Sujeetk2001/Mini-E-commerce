import axios from 'axios'
import React, { useState } from 'react'
import { UseMycontext } from './ContextApi';

const AddItems = () => {

  const {formData,setFormData} = UseMycontext();


const setdata = async (e)=>{
  e.preventDefault()
  const response = await axios({
    url: "http://localhost:3000/products",
    method: 'post',
    data: formData
  })
  setFormData({
    name: "",
    brand: "",
    image: "",
    description: "",
    price: ""
  })
}

const handleOnClick = (e)=>{
  const {name,value} = e.target;

  setFormData((prev)=>{
    return ({
      ...prev, [name]:value
    })
  })

}

  return (
    <div className='flex justify-center items-center bg-amber-300 h-165'>
      <form className='flex flex-col w-sm items-center gap-5 py-5 px-5 bg-blue-400 rounded-lg'>
        <h1 className='text-2xl font-bold text-white'>Add Items</h1>
        <input onChange={handleOnClick} value={formData.name} name='name' className='w-full bg-white py-2 px-5 rounded-md outline-none' type="text" placeholder='Enter Product Name' required/>
        <input onChange={handleOnClick} value={formData.brand} name='brand' className='w-full bg-white py-2 px-5 rounded-md outline-none' type="text" placeholder='Enter Brand Name' required/>
        <input onChange={handleOnClick} value={formData.image} name='image' className='w-full bg-white py-2 px-5 rounded-md outline-none' type="url" placeholder='Enter Product Image Url' required/>
        <input onChange={handleOnClick} value={formData.description} name='description' className='w-full bg-white py-2 px-5 rounded-md outline-none' type="text" placeholder='Enter Product Description'required/>
        <input onChange={handleOnClick} value={formData.price} name='price' className='w-full bg-white py-2 px-5 rounded-md outline-none' type="number" placeholder='Enter Price' required/>
        <button onClick={setdata} className='bg-green-500 text-white w-full py-2 rounded-md mb-4 cursor-pointer'>Add</button>
      </form>
    </div>
  )
}

export default AddItems
