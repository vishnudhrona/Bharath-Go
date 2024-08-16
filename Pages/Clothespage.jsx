import React from 'react'
import Navbar from '../src/components/Navbar'
import Searchbar from '../src/components/Searchbar'
import Clothfilter from '../src/components/Clothfilter'
import Productdetails from '../src/components/Productdetails'
import Cart from '../src/components/Cart'

const Clothespage = () => {
  return (
    <div>
      <Navbar />
      <Productdetails />
      <Cart />
      <Searchbar />
      <Clothfilter />
    </div>
  )
}

export default Clothespage
