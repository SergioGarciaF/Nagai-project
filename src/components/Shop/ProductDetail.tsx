import orange from '../../assets/Art favourites/Orange.jpg'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const ProductDetail = () => {
    return (
        <>
            <Header />
            <div>
                <div className="hero mt-20 bg-base-100 font-inter w-1/2 m-auto">
                    <div className="hero-content flex-col lg:flex-row space-x-6">
                        <img src={orange} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='flex flex-col items-start'>
                            <h1 className="text-2xl font-bold">Orange</h1>
                            <p className='font-regular text-md text-secondary'>By Jean Dupont</p>
                            <p className='text-start'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <p className="py-6 text-start">265,99€</p>
                            <button className="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default ProductDetail