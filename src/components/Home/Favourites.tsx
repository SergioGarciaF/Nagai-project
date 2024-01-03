import orange from '../../assets/Art favourites/Orange.jpg'
import blue from '../../assets/Art favourites/Blue.jpg'
import flower from '../../assets/Art favourites/Flower.jpg'
import yogurt from '../../assets/Art favourites/Yogurt.jpg'

import { Link } from 'react-router-dom'

const Favourites = () => {
    return (
        <>
            <h1 className='font-inter font-bold text-4xl mt-20 mb-10'>OUR FAVOURITES</h1>
            <div className="flex flex-wrap justify-center gap-4 mb-20">
                <div className='transition-transform transform hover:scale-110'>
                    <Link to='/product-detail/3'><img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={orange} alt="" />
                    </Link>
                    <h3 className='text-start font-inter font-semibold text-lg mt-2'>Orange</h3>
                    <p className='text-start font-inter font-regular text-sm text-secondary'>By Jean Dupont</p>
                    <p className='text-start font-inter font-regular text-lg'>265,99€</p>

                </div>
                <div className='transition-transform transform hover:scale-110'>
                    <Link to='/product-detail/11'><img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={blue} alt="" /></Link>
                    <h3 className='text-start font-inter font-semibold text-lg mt-2'>Lady</h3>
                    <p className='text-start font-inter font-regular text-sm text-secondary'>By Mateo García</p>
                    <p className='text-start font-inter font-regular text-lg'>1500€</p>
                </div>
                <div className='transition-transform transform hover:scale-110'>
                    <Link to='/product-detail/13'><img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={flower} alt="" /></Link>
                    <h3 className='text-start font-inter font-semibold text-lg mt-2'>Flower</h3>
                    <p className='text-start font-inter font-regular text-sm text-secondary'>By Millie Harrison</p>
                    <p className='text-start font-inter font-regular text-lg'>1899€</p>
                </div>
                <div className='transition-transform transform hover:scale-110'>
                    <Link to='/product-detail/6'><img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={yogurt} alt="" /></Link>
                    <h3 className='text-start font-inter font-semibold text-lg mt-2'>Yogurt</h3>
                    <p className='text-start font-inter font-regular text-sm text-secondary'>By Jean Dupont</p>
                    <p className='text-start font-inter font-regular text-lg'>2000€</p>
                </div>
            </div>
        </>
    )
}

export default Favourites