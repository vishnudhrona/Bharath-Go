import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { HiMiniChevronRight } from "react-icons/hi2";
import { MdDateRange } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi2";



const Myorders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('checkoutHistory')) || [];
        setOrders(storedOrders);
    }, []);
    
  return (
    <div className='flex flex-col items-center justify-center'>
            <h1 className='py-2 text-2xl font-semibold'>My Orders</h1>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map((order, index) => (
                    <div key={index} className='border rounded-lg w-80 mb-4'>
                        <Link to={`/orderdetails/${index}`} className='flex justify-between items-center p-4 hover:bg-gray-100 transition'>
                            <div>
                                <p className='flex items-center'>
                                    <MdDateRange className='mr-2 text-gray-600' />
                                    <span className='font-medium'>{new Date(order.date).toLocaleDateString()}</span>
                                </p>
                                <p className='flex items-center'>
                                    <HiShoppingBag className='mr-2 text-gray-600' />
                                    <span>{order.cartItems.length} Items</span>
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-lg font-semibold'>${order.totalPrice}</span>
                                <HiMiniChevronRight className='ml-2 text-gray-500' />
                            </div>
                        </Link>
                    </div>
                ))
            )}
        </div>
  )
}

export default Myorders
