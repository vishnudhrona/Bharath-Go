import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartClose, closingProductSlot, productId, refresh } from '../Redux/Reducers/productSlice';

const Toysfilter = () => {

    const [products, setProducts] = useState([])
    const [shiverIndex, setShiverIndex] = useState(null);
    const [cartProduct, setCartProduct] = useState([])
    

    const dispatch = useDispatch()

    const refreshRed = useSelector((state) => state.productData.refresh)    


    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products').then((response) => {
            const filteredProducts = response.data.filter((product) => product.category.name.toLowerCase() === 'toys'.toLowerCase());            

            setProducts(filteredProducts)
        })
    }, [refreshRed])

    useEffect(() => {
        // Load cart products from localStorage
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setCartProduct(storedProducts.map(product => product.id));
    }, [refreshRed]);

    const findProduct = (product, index) => {
        setShiverIndex(index);
        dispatch(productId(product))
        dispatch(closingProductSlot(true))

        setTimeout(() => {
            setShiverIndex(null);
        }, 500);
    }

    const hadleCart = (e, product) => {
        e.stopPropagation();

        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        storedProducts.push(product);
        localStorage.setItem('products', JSON.stringify(storedProducts));

        setCartProduct(storedProducts.map(p => p.id));

        dispatch(refresh(false))
        dispatch(cartClose(true))
    }

    const isProductInCart = (productId) => cartProduct.includes(productId);

  return (
    <>
    <div className='grid items-center justify-center py-5 sm:grid-cols-2 sm:pl-14 sm:gap-16 mdProduct:grid-cols-3 mdProduct:px-32 lgProduct:grid-cols-4 lgProduct:px-44'>
        {products.length > 0 ? (
        <>
{products.map((value, index) => (
    <button onClick={() => findProduct(value, index)} key={index} className={`mb-4 sm:mb-0 ${shiverIndex === index ? 'animate-shiver' : ''}`}>
        <div className='relative md:w-52 md:h-48 w-56 h-52 lg:w-56 lg:h-52'>
            <img className='w-full h-full rounded-lg' src={value.images[0]} alt="" />
            <button
                onClick={(e) => hadleCart(e, value)}
                className='absolute top-2 right-2 bg-white rounded-full text-2xl'
            >
                {isProductInCart(value.id) ? (
                    <HiMiniCheckCircle />
                ) : (
                    <FiPlus />
                )}
            </button>
            <button className='absolute Category-overlay bottom-2 left-2 text-sm px-2 rounded-xl'>
                {value.category.name}
            </button>
        </div>
        <div className='flex mt-2'>
            <span className='text-sm font-light w-44'>{value.title}</span>
            <span className='text-lg font-semibold'>{value.price}$</span>
        </div>
    </button>
))}
        </>
        ) : (
            <div className='flex flex-col items-center justify-center w-full h-96'>
            <img className='w-32 h-32 mb-4' src="https://i.pinimg.com/originals/44/a1/08/44a10892c5cb8dd690137339ded39af3.jpg" alt="No results" />
            <h1 className='text-lg font-semibold text-gray-600'>Nothing related :(</h1>
        </div>
        )}
        
    </div>
</>
  )
}

export default Toysfilter
