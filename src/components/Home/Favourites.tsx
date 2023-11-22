import orange from '../../assets/Art favourites/Orange.jpg'
import blue from '../../assets/Art favourites/Blue.jpg'
import flower from '../../assets/Art favourites/Flower.jpg'
import yogurt from '../../assets/Art favourites/Yogurt.jpg'

const Favourites = () => {
    return (
        <>
        <h1 className='font-inter font-bold text-2xl mt-10 mb-10'>OUR FAVOURITES</h1>
            <div className="flex flex-wrap justify-center gap-4">
                <div>
                    <img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={orange} alt="" />
                    <h3 className='text-start font-inter font-semibold text-lg mt-2'>Orange</h3>
                    <p className='text-start font-inter font-regular text-sm text-secondary'>By Jean Dupont</p>
                    <p className='text-start font-inter font-regular text-lg'>265,99€</p>
                </div>
                <div>
                    <img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={blue} alt="" />
                    <h3 className='text-start font-inter font-semibold text-lg mt-2'>Blue</h3>
                    <p className='text-start font-inter font-regular text-sm text-secondary'>By Mateo García</p>
                    <p className='text-start font-inter font-regular text-lg'>300€</p>
                </div>
                <div>
                    <img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={flower} alt="" />
                    <h3 className='text-start font-inter font-semibold text-lg mt-2'>Flower</h3>
                    <p className='text-start font-inter font-regular text-sm text-secondary'>By Millie Harrison</p>
                    <p className='text-start font-inter font-regular text-lg'>455,99€</p>
                </div>
                <div>
                    <img className='shadow-xl transition-opacity duration-300 hover:opacity-70' src={yogurt} alt="" />
                    <h3 className='text-start font-inter font-semibold text-lg mt-2'>Yogurt</h3>
                    <p className='text-start font-inter font-regular text-sm text-secondary'>By Jean Dupont</p>
                    <p className='text-start font-inter font-regular text-lg'>325,98€</p>
                </div>
            </div>
        </>
    )
}

export default Favourites