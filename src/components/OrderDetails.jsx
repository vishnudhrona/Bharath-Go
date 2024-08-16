import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { IoChevronBackSharp } from "react-icons/io5";


const OrderDetails = () => {
    const { index } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('checkoutHistory')) || [];
        setOrder(storedOrders[index]);
    }, [index]);

    if (!order) return <p>No order details available.</p>;
  return (
    <div className='flex items-center justify-center pt-10'>
    <ul>
        <div className='flex justify-between'>
        <Link to={'/myorders'}>
        <IoChevronBackSharp />
        </Link>
        <span className='mb-5'>My Orders</span>
        <span></span>
        </div>
        {order.cartItems.map((item, index) => (
            <li key={index} className='border py-2 px-2'>
                <div className='flex'>
                    <img src={item.images[0]} alt={item.title} className='w-20 h-20 object-cover mr-4 rounded-lg' />
                    <div>
                        <h3 className='text-sm'>{item.title}</h3>
                        <p>${item.price}</p>
                        <span className='bg-gray-300 px-3 rounded-md'>{item.quantity || 1}</span>
                    </div>
                </div>
            </li>
        ))}
    </ul>
</div>
  )
}

export default OrderDetails
