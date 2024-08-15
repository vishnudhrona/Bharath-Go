import React from 'react'
import { HiShoppingCart } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { HiMiniUser } from "react-icons/hi2";
import { HiArchive } from "react-icons/hi";
import { HiMiniInbox } from "react-icons/hi2";




const Fake = () => {
  return (
          <div className="border border-gray-300 rounded-lg px-2 py-3 w-[200px]">
            <ul>
            <li>
                <Link
                  className="block py-1 text-sm font-light"
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
                  className="block py-1 text-sm font-light"
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
                  className="block py-1 text-sm font-light"
                >
                    <div className='flex gap-2'>
                    <span className='text-2xl'><HiMiniUser /></span>
                  <span>My Account</span>
                    </div>
                </Link>
              </li>
              <li>
                <Link
                  className="block py-1  font-light"
                >
                    <div className='flex gap-2'>

                  <span className='text-2xl'><HiShoppingCart /></span><span className='text-sm'>{1}</span>
                    </div>
                </Link>
              </li>
            </ul>
          </div>
  )
}
export default Fake