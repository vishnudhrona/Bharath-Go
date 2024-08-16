import React from 'react'
import Navbar from '../src/components/Navbar'
import Myorders from '../src/components/Myorders'
import Cart from '../src/components/Cart'

const Myorder = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <Myorders />
    </div>
  )
}

export default Myorder
