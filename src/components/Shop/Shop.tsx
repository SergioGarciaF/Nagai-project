import Footer from "../Footer/Footer"
import Header from "../Header/Header"

import orange from '../../assets/Art favourites/Orange.jpg'

const Shop = () => {

    //Hacer un map para cuando hagas llamada a api o bd muestre todos los productos del artista
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center me-12 mt-20 mb-10 m-auto">
                <h2 className="font-inter font-semibold text-lg mb-5">Jean Dupont</h2>
                <select className="select select-neutral select-xs max-w-xs">
                    <option disabled selected>Select artist</option>
                    <option>Jean Dupont</option>
                    <option>Millie Harrison</option>
                    <option>Mateo García</option>
                </select>
            </div>
            <div className="flex flex-wrap justify-center gap-20 mt-3">
                <div>
                    <img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={orange} width={200} alt="" />
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className='text-start font-inter font-semibold text-sm mt-2'>Orange</h3>
                            <p className='text-start font-inter font-regular text-sm'>265,99€</p>
                        </div>
                        <button className="btn btn-xs btn-outline btn-neutral mt-3">Add to cart</button>
                    </div>
                </div>
                <div>
                    <img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={orange} width={200} alt="" />
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className='text-start font-inter font-semibold text-sm mt-2'>Orange</h3>
                            <p className='text-start font-inter font-regular text-sm'>265,99€</p>
                        </div>
                        <button className="btn btn-xs btn-outline btn-neutral mt-3">Add to cart</button>
                    </div>
                </div>
                <div>
                    <img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={orange} width={200} alt="" />
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className='text-start font-inter font-semibold text-sm mt-2'>Orange</h3>
                            <p className='text-start font-inter font-regular text-sm'>265,99€</p>
                        </div>
                        <button className="btn btn-xs btn-outline btn-neutral mt-3">Add to cart</button>
                    </div>
                </div>
                <div>
                    <img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={orange} width={200} alt="" />
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className='text-start font-inter font-semibold text-sm mt-2'>Orange</h3>
                            <p className='text-start font-inter font-regular text-sm'>265,99€</p>
                        </div>
                        <button className="btn btn-xs btn-outline btn-neutral mt-3">Add to cart</button>
                    </div>
                </div>
                <div>
                    <img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={orange} width={200} alt="" />
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className='text-start font-inter font-semibold text-sm mt-2'>Orange</h3>
                            <p className='text-start font-inter font-regular text-sm'>265,99€</p>
                        </div>
                        <button className="btn btn-xs btn-outline btn-neutral mt-3">Add to cart</button>
                    </div>
                </div>
                <div>
                    <img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={orange} width={200} alt="" />
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className='text-start font-inter font-semibold text-sm mt-2'>Orange</h3>
                            <p className='text-start font-inter font-regular text-sm'>265,99€</p>
                        </div>
                        <button className="btn btn-xs btn-outline btn-neutral mt-3">Add to cart</button>
                    </div>
                </div>
                <div>
                    <img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={orange} width={200} alt="" />
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className='text-start font-inter font-semibold text-sm mt-2'>Orange</h3>
                            <p className='text-start font-inter font-regular text-sm'>265,99€</p>
                        </div>
                        <button className="btn btn-xs btn-outline btn-neutral mt-3">Add to cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shop