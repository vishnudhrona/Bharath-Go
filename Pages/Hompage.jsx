import React, { useEffect } from 'react'
import Navbar from '../src/components/Navbar'
import Searchbar from '../src/components/Searchbar'
import Allproducts from '../src/components/Allproducts'
import Productdetails from '../src/components/Productdetails'
import { useSelector } from 'react-redux'
import Cart from '../src/components/Cart'

const Hompage = () => {  

  return (
    <div>
      <Navbar />
      <Productdetails />
      <Cart />
      <Searchbar />
      <Allproducts />
    </div>
  )
}

export default Hompage
