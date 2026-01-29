import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseMycontext } from './ContextApi'

const Products = () => {

  const {itemdata,setItemdata}=UseMycontext()

  const getdata = async ()=>{
      const response = await axios.get('http://localhost:3000/products');
      setItemdata(response.data)
  }

  useEffect(()=>{
    getdata()
  },[])

  
  return (
    <div className='flex gap-20 flex-wrap p-10'>
        {itemdata.map((item)=>{
          return (
            <ProductCard  item={item} key={item.id}/>
          )
        })}
    </div>
  )
}

const ProductCard = ({item})=>{
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/product/${item.id}`)} className='border-2 border-gray-400 w-70 h-110 rounded-md p-5'>
              <p className='text-center mb-5'>{item.brand}</p>
              <img src={item.image} alt="" className='w-full h-50'/>
              <h1 className='line-clamp-2 my-5'>{item.name}</h1>
              <p className='font-bold mb-3'>Price : {item.price}</p>
              <button className='bg-orange-600 px-5 py-1 rounded-lg text-white cursor-pointer'>Buy Now</button>
            </div>
  )
}

export default Products
