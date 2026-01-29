import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  

  const getdata = async () => {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  const { id } = useParams();
  const navigation = useNavigate();

  return (
    <>
    <div className="flex items-center gap-10 p-5 relative mt-10">
      <img src={product.image} alt="" className="w-150"/>
      <div className="flex flex-col gap-10 ">
        <p>{product.brand}</p>
        <h1 className="text-2xl">{product.name}</h1>
        <p className="text-lg">{product.description}</p>
        <p>Price Rs. {product.price}</p>
        <div className="flex gap-10">
            <button className="bg-orange-600 px-5 py-2 rounded-lg text-white cursor-pointer">Buy Now</button>
            <button className="bg-yellow-600 px-5 py-2 rounded-lg text-white cursor-pointer">Add to Cart</button>
            
        {/* <div className="absolute top-5 right-10">
            <button className="bg-blue-500  px-5 py-2 rounded-lg text-white cursor-pointer" onClick={()=>navigation(`/addItems`)} >Edit</button>
            <button className="bg-red-600 px-5 py-2 rounded-lg text-white cursor-pointer ml-5">Delete</button>
        </div> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleProduct;
