import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

const Productdetails = () => {
    // const [product, setProduct] = useState([])
    // const [singleProduct, setSingleProduct] = useState(null)

    // const productId = useSelector((state) => state.productData.productId)

    // console.log(singleProduct,'uuuuuuuuuuu1111111111');
    
    // useEffect(() => {
    //     axios.get('https://api.escuelajs.co/api/v1/products').then((response) => {
    //         setProduct(response.data)
    //     })
    // }, [singleProduct])
   
    // const singleProductDetails = useMemo(() => {
    //     product.filter((value) => {
    //         if(productId === value.id) {
    //             console.log(value,'fffffffffffffffff');
                
    //         }
            
    //     })
    // },[product])

    // console.log(singleProductDetails,'aaaaaaaaaazzzzzz');

        const openProductDetails = useSelector((state) => state.productData.closingProductSlot)
        console.log(openProductDetails,'7777777777777777');
    
    
  return (
    <>
    {openProductDetails && (
        <div className='fixed top-20 right-0 bg-white border border-black w-[360px] px-5 rounded-lg z-50'>
        <div className='flex justify-between mt-5'>
            <h1 className='font-semibold text-xl'>Detail</h1>
            <button className='text-xl'>X</button>
        </div>
        <div>
            <img className='px-5 pt-5 rounded-b-[40px] rounded-t-[30px] pb-7' src="https://i.imgur.com/ZANVnHE.jpeg" alt="" />
            <div className='text-center'>
                <span className='text-2xl font-semibold'>${90}</span>
                <h1 className='mt-2 font-semibold'>Classic Grey Hooded Sweatshirt</h1>
            </div>
            <p className='text-sm font-light'>
                Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs well with anything.
            </p>
        </div>
    </div>
    )}
    </>
  );
}

export default Productdetails;
