// import React, { useEffect, useState } from 'react'
import 'flowbite'
import { Link } from 'react-router-dom'
import { HiMiniInbox, HiMiniUser, HiShoppingCart } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import { HiArchive } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartClose } from '../Redux/Reducers/productSlice';


const Navbar = () => {
    const [dropDown, setDropdown] = useState(false)
    const [productCount, setProductCount] = useState(0);

    const dispatch = useDispatch()

    const updateProductCount = () => {
      const products = JSON.parse(localStorage.getItem('products')) || [];
      setProductCount(products.length);
  };
    
  useEffect(() => {
    // Initial update on mount
    updateProductCount();

    // Set up an interval to periodically check localStorage
    const intervalId = setInterval(updateProductCount, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
}, []);

    const handleCart = () => {      
      dispatch(cartClose(true))
    }

    return (
        <>
        <nav className="border-b-2 border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:py-6 md:px-3">

          <ul className="flex font-medium rounded-lg bg-gray-50 space-x-4 md:space-x-5 rtl:space-x-reverse flex-row mt-0 border-0 bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link
                  href="#"
                  className="hidden md:block md:font-semibold md:text-lg"
                  aria-current="page"
                >
                  Shopi
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className="block py-1 text-sm font-light"
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-1 text-sm font-light"
                >
                  Clothes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-1 text-sm font-light"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-1 text-sm font-light"
                >
                  Furnitures
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-1 text-sm font-light"
                >
                  Toys
                </Link>
              </li>
            </ul>
<div className='relative inline-block'>
          <button
            onClick={() => setDropdown(!dropDown)}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-xl md:hidden"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <FaCircleUser />
          </button>

          {/* hidden icon */}
          {dropDown && (
             <div className="absolute top-6 right-2 mt-2 bg-white border border-gray-400 rounded-lg px-2 py-3 w-[250px] shadow-lg z-10 md:hidden">
             <ul>
             <li>
                 <Link
                   className="block py-2 text-sm font-light"
                   aria-current="page"
                 >
                     <div className='flex gap-2'>
                     <span className='text-2xl'><HiMiniInbox /></span>
                   <span>userintheapp@test.com</span>
                     </div>
                 </Link>
               </li>
               <li>
                 <Link
                 to={'/myorders'}
                   className="block py-2 text-sm font-light"
                 >
                     <div className='flex gap-2'>
                     <span className='text-2xl'><HiArchive />
                     </span>
                  <span>My Orders</span> 
                     </div>
                 </Link>
               </li>
               <li>
                 <Link
                   className="block py-2 text-sm font-light"
                 >
                     <div className='flex gap-2'>
                     <span className='text-2xl'><HiMiniUser /></span>
                   <span>My Account</span>
                     </div>
                 </Link>
               </li>
               <li>
                 <Link
                 onClick={() => handleCart()}
                   className="block pt-2  font-light"
                 >
                     <div className='flex gap-2'>
 
                   <span className='text-2xl'><HiShoppingCart /></span><span className='text-sm'>{productCount}</span>
                     </div>
                 </Link>
               </li>
             </ul>
           </div>
          )}
          {/* hidden icon end */}

          </div>

          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link
                  className="block py-1 text-sm font-light"
                  aria-current="page"
                >
                  userintheapp@test.com
                </Link>
              </li>
              <li>
                <Link
                to={'/myorders'}
                  className="block py-1 text-sm font-light"
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Link
                  className="block py-1 text-sm font-light"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleCart()}
                  className="block py-1 text-2xl font-light"
                >
                    <div className='flex gap-2'>

                  <span><HiShoppingCart /></span><span className='text-sm'>{productCount}</span>
                    </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
      
    )
}

export default Navbar
