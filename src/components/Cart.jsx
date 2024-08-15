import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { cartClose, refresh } from '../Redux/Reducers/productSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cartDisplay = useSelector((state) => state.productData.cartClose)
    const refreshRed = useSelector((state) => state.productData.refresh)    
   
    useEffect(() => {
        setCartProducts(JSON.parse(localStorage.getItem('products')) || []);
        dispatch(refresh(true))
    }, [refreshRed])

    const closeCart = () => {
        dispatch(cartClose(false))
        navigate('/myorders')
    }

    const deleteCartItem = (cartItemIndex) => {
        const updatedCart = cartProducts.filter((_, index) => index !== cartItemIndex);
        
        // Update localStorage with the new array
        localStorage.setItem('products', JSON.stringify(updatedCart));

        // Update state to re-render the component
        setCartProducts(updatedCart);
    }

    const incrementQuantity = (cartItemIndex) => {
        const updatedCart = cartProducts.map((product, index) => {
            if (index === cartItemIndex) {
                return { ...product, quantity: (product.quantity || 1) + 1 };
            }
            return product;
        });

        // Update localStorage with the new array
        localStorage.setItem('products', JSON.stringify(updatedCart));

        // Update state to re-render the component
        setCartProducts(updatedCart);
    };

    const decrementQuantity = (cartItemIndex) => {
        const updatedCart = cartProducts.map((product, index) => {
            if (index === cartItemIndex) {
                const newQuantity = (product.quantity || 1) - 1;
                if (newQuantity > 0) {
                    return { ...product, quantity: newQuantity };
                }
                return null; // Remove item if quantity becomes 0
            }
            return product;
        }).filter(Boolean);

        // Update localStorage with the new array
        localStorage.setItem('products', JSON.stringify(updatedCart));

        // Update state to re-render the component
        setCartProducts(updatedCart);
    };

    const handleCheckout = () => {
        // Save the current cart items to a separate variable
        localStorage.setItem('checkoutHistory', JSON.stringify({ cartItems: cartProducts, totalPrice }));

        // Clear the cart
        localStorage.removeItem('products');
        setCartProducts([]);

        // Optionally: Close the cart after checkout
        closeCart();
    };

    const totalPrice = cartProducts.reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0).toFixed(2);
    
    return (
        <>
        {cartDisplay && (
            <div className='fixed top-20 right-0 bg-white border border-black w-[360px] h-screen px-5 rounded-lg z-20'>
            <div className='overflow-auto h-[450px] custom-scrollbar w-[340px] pr-2'>
            <div className='flex justify-between my-5'>
                <h1 className='font-semibold text-xl'>My Order</h1>
                <button 
                onClick={closeCart} 
                className='text-2xl'><IoMdClose />
                </button>
            </div>
            <>
            {cartProducts.map((value, index) => (

            <div key={index} className='relative flex justify-between'>
                <div className='w-full h-px bg-gray-300 absolute top-0 left-0'></div>
                <img className='w-20 my-4 rounded-lg' src={value.images[0]} alt="" />
                <div className='flex flex-col mt-4 ml-1'>
                <span className='text-xs'>{value.title}</span>
                <span>${value.price}</span>
                <div className='flex items-center'>
                    <button onClick={() => decrementQuantity(index)} className='bg-pink-300 rounded-lg text-gray-500 text-xl px-0.5 py-0.5 mr-2'>
                        <FaMinus />
                        </button>
                    <button className='bg-gray-200 rounded-lg text-gray-500 text-lg px-2 mr-2'>{value.quantity || 1}</button>
                    <button onClick={() => incrementQuantity(index)} className='bg-green-200 rounded-lg text-gray-500 text-xl px-0.5 py-0.5'>
                        <FiPlus />
                    </button>
                </div>
                </div>
                <button onClick={() => deleteCartItem(index)} className='text-2xl'><IoMdClose /></button>
                <div className='w-full h-px bg-gray-300 absolute bottom-0 left-0'></div>
            </div>
            ))}
            </>    
            </div>
            <div className='bg-gray-100 border-t border-gray-300 p-4'>
                    <div className='flex justify-between font-semibold text-lg mb-2'>
                        <span>Total:</span>
                        <span>${totalPrice}</span>
                    </div>
                    <button 
                    onClick={handleCheckout}
                        className='w-full bg-black text-white py-1 rounded-lg hover:bg-gray-800 transition duration-300'>
                        Checkout
                    </button>
                </div>
        </div>
        )}
        </>
    )
}

export default Cart
