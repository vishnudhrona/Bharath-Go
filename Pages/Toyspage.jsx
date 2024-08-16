import React from 'react'
import Navbar from '../src/components/Navbar'
import Productdetails from '../src/components/Productdetails'
import Cart from '../src/components/Cart'
import Toysfilter from '../src/components/Toysfilter'
import Searchbar from '../src/components/Searchbar'

const Toyspage = () => {
  return (
    <div>
      <Navbar />
      <Productdetails />
      <Cart />
      <Searchbar />
      <Toysfilter />
    </div>
  )
}

export default Toyspage
