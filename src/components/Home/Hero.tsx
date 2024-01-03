import Jean from '../../assets/Artists/Jean Dupont.png'
import Millie from '../../assets/Artists/Millie Harrison.png'
import Mateo from '../../assets/Artists/Mateo García.jpg'

const Hero = () => {
    return (
        <>
            <div className='h-full'>
                <h1 className='font-inter font-bold text-4xl m-auto mt-8 mb-8'>MEET OUR ARTISTS</h1>
                <hr className="border-b-2 border-b-neutral w-full mb-4" />
                <div className="hero bg-base-100 w-full m-auto">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={Jean} className="max-w-m shadow-2xl" />
                        <div className='text-start p-4'>
                            <h1 className="text-5xl font-inter font-bold">Jean Dupont</h1>
                            <p className='text-m text-secondary'>Contemporary art</p>
                            <p className="py-6 text-xl">Jean Dupont, born in Lyon in 1992, is a visionary contemporary artist. A graduate of the prestigious Paris School of Arts, he has revolutionized the art scene with his unique approach. Using organic products, he creates vibrant palettes on his canvases, merging nature with modern expression. His work has transcended borders, exhibited in renowned galleries worldwide in Barcelona, London, Buenos Aires, and Tokyo. The intersection of his creativity and commitment to sustainability has established Jean as a prominent figure in the global art scene.</p>
                        </div>
                    </div>
                </div>
                <hr className="border-b-2 border-b-secondary w-2/3 m-auto mt-4 mb-4" />
                <div className="hero bg-base-100 w-full m-auto">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={Millie} className="max-w-m shadow-2xl" />
                        <div className='text-end p-4'>
                            <h1 className="text-5xl font-inter font-bold">Millie Harrison</h1>
                            <p className='text-m text-secondary'>Contemporary art</p>
                            <p className="py-6 text-xl">
                                Millie Harrison, formerly a member of the British Navy, underwent a remarkable transformation, redirecting her trajectory from military service to the realm of art. Her decision to embrace a career in the arts was marked by a profound shift from maritime duty to the boundless world of creativity. Millie is distinguished for her captivating minimalist art, a genre where subtlety speaks volumes. Her pieces exhibit an exquisite understanding of space and an ability to convey emotions with elegant simplicity.
                                As one of the rising stars in the United Kingdom's art scene, Millie's journey from the disciplined environment of the Navy to the boundless realms of artistic expression is both inspiring and admirable. Her work not only reflects technical prowess but also encapsulates the fusion of strength and delicacy. Millie Harrison stands as a testament to the transformative power of artistic passion, showcasing that one's trajectory can evolve from the structured discipline of military life to the unrestrained beauty of the art world.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="border-b-2 border-b-secondary w-2/3 m-auto mt-4 mb-4" />
                <div className="hero bg-base-100 w-full m-auto items-start">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={Mateo} className="max-w- shadow-2xl" />
                        <div className='text-start p-4'>
                            <h1 className="text-5xl font-inter font-bold">Mateo García</h1>
                            <p className='text-m text-secondary'>Collage art</p>
                            <p className="py-6 text-xl font-thin">Mateo García, born in 1985 in Medellín, hails from a family of artists. He embarked on his professional journey at the age of 16, specializing in collage. With an unpretentious and street-inspired style, he has captivated notable figures such as Obama and Lenny Kravitz, who acquire his works. His unique creativity and avant-garde approach position him as a prominent figure in the contemporary art world. Mateo's global acclaim is heightened by collaborations with major brands, cementing his status as an influential tastemaker.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero