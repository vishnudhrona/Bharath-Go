import React from 'react'
import { Link } from 'react-router-dom';

const Myorders = () => {
    const cart = JSON.parse(localStorage.getItem('checkoutHistory'))
    console.log(cart,'iiiiiiiii');
    
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>MyOrders</h1>
      <div>
      <Link>
      <div className='grid'>
        <span>01.02.23</span>
        <span>{3}</span>
      </div>
      </Link>
      </div>
    </div>
  )
}

export default Myorders
