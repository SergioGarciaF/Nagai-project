import Jean from '../../assets/Artists/Jean Dupont.png'
import Millie from '../../assets/Artists/Millie Harrison.png'
import Mateo from '../../assets/Artists/Mateo García.jpg'

import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <h1 className='font-inter font-bold text-2xl m-auto mt-8 mb-8'>MEET OUR ARTISTS</h1>
            <hr className="border-b-2 border-b-neutral w-full mb-4"/>
            <div className="hero bg-base-100 w-1/2 m-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Jean} className="max-w-sm shadow-2xl" />
                    <div className='text-start p-4'>
                        <h1 className="text-2xl font-inter font-bold">Jean Dupont</h1>
                        <p className='text-xs text-secondary'>Contemporary art</p>
                        <p className="py-6 text-sm">Jean Dupont, born in 1992, is a visionary artist blending nature and modern expression. A Paris School of Arts graduate, he uses organic products to create vibrant canvases. Exhibited globally, his work in Barcelona, London, Buenos Aires, and Tokyo reflects a commitment to sustainability, making him a prominent figure in the art scene.</p>
                        <Link to='/shop'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-primary">See more</button></Link>
                    </div>
                </div>
            </div>
            <hr className="border-b-2 border-b-secondary w-1/2 m-auto mt-4 mb-4" />
            <div className="hero bg-base-100 w-1/2 m-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={Millie} className="max-w-xs shadow-2xl" />
                    <div className='text-start p-4'>
                        <h1 className="text-2xl font-inter font-bold">Millie Harrison</h1>
                        <p className='text-xs text-secondary'>Contemporary art</p>
                        <p className="py-6 text-sm">Jean Dupont, born in Lyon in 1992, is a visionary contemporary artist. A graduate of the prestigious Paris School of Arts, he has revolutionized the art scene with his unique approach. Using organic products, he creates vibrant palettes on his canvases, merging nature with modern expression. His work has transcended borders, exhibited in renowned galleries worldwide in Barcelona, London, Buenos Aires, and Tokyo. The intersection of his creativity and commitment to sustainability has established Jean as a prominent figure in the global art scene.</p>
                        <Link to='/shop'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-primary">See more</button></Link>
                    </div>
                </div>
            </div>
            <hr className="border-b-2 border-b-secondary w-1/2 m-auto mt-4 mb-4" />
            <div className="hero bg-base-100 w-1/2 m-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Mateo} className="max-w-sm shadow-2xl" />
                    <div className='text-start p-4'>
                        <h1 className="text-2xl font-inter font-bold">Mateo García</h1>
                        <p className='text-xs text-secondary'>Collage art</p>
                        <p className="py-6 text-sm">Mateo García, born in 1985 in Medellín, hails from a family of artists. He embarked on his professional journey at the age of 16, specializing in collage. With an unpretentious and street-inspired style, he has captivated notable figures such as Obama and Lenny Kravitz, who acquire his works. His unique creativity and avant-garde approach position him as a prominent figure in the contemporary art world. Mateo's global acclaim is heightened by collaborations with major brands, cementing his status as an influential tastemaker.
                        </p>
                        <Link to='/shop'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-primary">See more</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero