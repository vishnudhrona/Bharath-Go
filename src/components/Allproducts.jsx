import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { closingProductSlot, productId } from '../Redux/Reducers/productSlice';

const Allproducts = () => {
    const [products, setProducts] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products').then((response) => {
                setProducts(response.data)            
        })
    }, [])

    const findProduct = (productId) => {        
        console.log(productId,'kkkkkkkkkk');
        dispatch(closingProductSlot(true))
    }
    
  return (
    <>
    <div className='grid md:grid-cols-4 md:px-40 md:py-5'>
        {products.map((value, index) => (
            <button onClick={() => findProduct(value.id)} key={index} className='mb-4'>
                 <div className='relative w-56 h-52'>
                        <img className='w-full h-full rounded-lg' src={value.images[0]} alt="" />
                        <button className='absolute top-2 right-2 bg-white rounded-full text-2xl'>
                        <FiPlus />
                        </button>
                        <button className='absolute Category-overlay bottom-2 left-2 text-sm px-2 rounded-xl'>
                            {value.category.name}
                        </button>
                    </div>
                <div className='flex mt-2'>
                <span className='text-sm font-light w-44'>{value.title}</span>
                <span className='text-lg font-semibold'>{value.price}$</span>
                </div>
            </button>
        ))}
    </div>
    </>
  )
}

export default Allproducts
