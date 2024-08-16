import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { search } from '../Redux/Reducers/productSlice';

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(search(e.target.value))
  };

  return (
    <div className='flex flex-col items-center justify-center pt-2'>
      <h1 className='mb-5'>Home</h1>
      <input 
      className='w-80 rounded-lg h-14'
      type="text"
      name='products'
      placeholder='Search a product'
      value={searchQuery}
      onChange={handleInputChange}
       />
    </div>
  )
}

export default Searchbar
