import React from 'react'
import Navbar from '../src/components/Navbar'
import Searchbar from '../src/components/Searchbar'
import Furniturefilter from '../src/components/Furniturefilter'
import Productdetails from '../src/components/Productdetails'
import Cart from '../src/components/Cart'

const Furniturepage = () => {
  return (
    <div>
      <Navbar />
      <Productdetails />
      <Cart />
      <Searchbar />
      <Furniturefilter />
    </div>
  )
}

export default Furniturepage
