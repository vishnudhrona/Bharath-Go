import React from 'react'
import Navbar from '../src/components/Navbar'
import Electronicsfilter from '../src/components/Electronicsfilter'
import Searchbar from '../src/components/Searchbar'
import Productdetails from '../src/components/Productdetails'
import Cart from '../src/components/Cart'

const Electronicspage = () => {
  return (
    <div>
      <Navbar />
      <Productdetails />
      <Cart />
      <Searchbar />
      <Electronicsfilter />
    </div>
  )
}

export default Electronicspage
