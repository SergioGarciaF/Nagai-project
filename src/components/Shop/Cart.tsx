
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { RootState } from '../../store/store';
import { removeFromCart } from '../../store/Slices/sliceCart';

const Cart = () => {
    const cartItems = useSelector((state: RootState) => state.addToCart.cartArray);

    const calcTotal = cartItems.reduce((total, item) => total + item.price, 0);

    const dispatch = useDispatch();

    const handleDelete = (productId: string) => {
        dispatch(removeFromCart(productId));
    };

    console.log("Cart Items:", cartItems);

    return (
        <>
            <Header />
            <div className='flex justify-center items-center mb-20'>
                {cartItems.length === 0 ? (
                    <div>
                        <div className='font-inter mt-20 text-lg m-auto'>Your cart is empty.</div>
                    </div>
                ) : (
                    <div className='flex justify-center'>
                        <div className='flex flex-wrap w-1/2 gap-6 mt-20 font-inter'>
                            {cartItems.map((item: any, index) => (
                                <div key={index} className='flex flex-col flex-basis-1/2 gap-2'>
                                    <img src={item.img} width={200} alt="" />
                                    <div className="flex flex-col gap-2">
                                        <h3 className='font-inter font-semibold text-sm'>{item.name}</h3>
                                        <p className='font-inter font-regular text-sm'>{item.price}€</p>
                                        <button className="btn btn-xs btn-outline btn-neutral" onClick={() => handleDelete(item.id)}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <p className='font-inter text-sm'>Name:</p>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            <p className='font-inter text-sm'>Last name:</p>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            <p className='font-inter text-sm'>Address:</p>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            <p className='font-inter text-sm'>Postal code:</p>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            <p className='font-semibold text-lg mt-8'>Total: {calcTotal}€</p>
                            <button className="btn btn-xs btn-outline btn-neutral mt-3">Checkout</button>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default Cart;
