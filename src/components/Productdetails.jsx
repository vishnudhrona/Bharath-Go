import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from "react-icons/io";
import { closingProductSlot, productId } from '../Redux/Reducers/productSlice';


const Productdetails = () => {

    const dispatch = useDispatch()

    const product = useSelector((state) => state.productData.productId)
    const openProductDetails = useSelector((state) => state.productData.closingProductSlot)
    const cartDisplay = useSelector((state) => state.productData.cartClose)    

        const closeProductDetails = () => {    
            dispatch(productId(null))        
            dispatch(closingProductSlot(false))
        }
    
    
  return (
    <>
    {openProductDetails && product && cartDisplay == false &&(
        <div className='fixed top-20 right-0 bg-white border border-black w-[360px] h-screen px-5 rounded-lg z-50'>
        <div className='flex justify-between mt-5'>
            <h1 className='font-semibold text-xl'>Detail</h1>
            <button onClick={closeProductDetails} className='text-2xl'><IoMdClose /></button>
        </div>
        <div>
            <img className='px-5 pt-5 rounded-b-[40px] rounded-t-[30px] pb-7' src={product.images[0]} alt="" />
            <div className='text-center'>
                <span className='text-2xl font-semibold'>${product.price}</span>
                <h1 className='mt-2 font-semibold'>{product.title}</h1>
            </div>
            <p className='text-sm font-light'>{product.description}</p>
        </div>
    </div>
    )}
    </>
  );
}

export default Productdetails;
