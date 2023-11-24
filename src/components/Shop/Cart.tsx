

import orange from '../../assets/Art favourites/Orange.jpg'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Cart = () => {
    return (
        <>
            <Header />
            <div className='flex w-1/2 justify-around items-center mt-20 font-inter mx-auto'>
                <div className='flex flex-col justify-center gap-10 mt-3'>
                    <div>
                        <img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={orange} width={100} alt="" />
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className='text-start font-inter font-semibold text-sm mt-2'>Orange</h3>
                                <p className='text-start font-inter font-regular text-sm'>265,99€</p>
                            </div>
                            <button className="btn btn-xs btn-outline btn-neutral mt-3">Delete</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center gap-2 mt-3'>
                    <p className='text-start text-sm'>Name:</p>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <p className='text-start text-sm'>Last name:</p>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <p className='text-start text-sm'>Address:</p>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <p className='text-start text-sm'>Postal code:</p>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <button className="btn btn-xs btn-outline btn-neutral mt-3">Checkout</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart