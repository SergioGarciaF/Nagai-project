
import Slide1 from '../../assets/Carousel/slide-1.jpg'
import Slide2 from '../../assets/Carousel/slide-2.jpg'
import Slide3 from '../../assets/Carousel/slide-3.jpg'

const Accordion = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={Slide1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle mt-9">❮</a>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='text-3xl text-base-100 font-inter font-bold'>Buy & Sell Art</h1>
                        <p className='text-base-100 font-inter font-bold'>Explore unique art: Buy and sell captivating illustrations on our creative platform, celebrating individual expression</p>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">About us</button>
                    </div>
                    <a href="#slide2" className="btn btn-circle mt-9">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={Slide2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle mt-9">❮</a>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='text-3xl text-base-100 font-inter font-bold'>Elevate with Art</h1>
                        <p className='text-base-100 font-inter font-bold'>Transform space with unique art! Curated collection for buying/selling captivating pieces. Join the art revolution!</p>
                        <button className="font-inter btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Shop</button>
                    </div>
                    <a href="#slide3" className="btn btn-circle mt-9">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={Slide3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle mt-9">❮</a>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='text-3xl text-base-100 font-inter font-bold'>Sell Art Globally</h1>
                        <p className='text-base-100 font-inter font-bold'>Unlock illustration potential, sell effortlessly, connect globally. Join our creative community; every stroke tells your unique story.</p>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Sell</button>
                    </div>
                    <a href="#slide1" className="btn btn-circle mt-9">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Accordion