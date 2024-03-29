import Footer from "../Footer/Footer"
import Header from "../Header/Header"

import about from '../../assets/Others/pexels-rosemary-ketchum-1518836.jpg'
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AboutUs = () => {
    const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 300);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div>
                <Header isAuthenticated={isAuthenticated} />
                <div className="hidden lg:block flex-col bg-base-100 lg:flex-grow lg:min-h-screen">
                    <div className="flex flex-col lg:flex-row border border-black lg:h-1/2">
                        <img
                            src={about}
                            className={`hidden lg:block lg:max-w-7xl transition-all ${animate ? 'opacity-100 transform -translate-x-0' : 'opacity-0 transform -translate-x-full'}`}
                            alt="About Image"
                        />
                        <div className={`lg:text-start flex flex-col justify-center font-inter px-5 mt-20 transition-all lg:delay-700 ${animate ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-full'
                            }`}>
                            <h1 className="text-5xl font-semibold">About Us</h1>
                            <p className="lg:text-left text-4xl lg:text-3xl lg:max-w-md font-inter py-8">Nagai, the illustration marketplace born in Barcelona in 2023, stands as a beacon for creative artists and art enthusiasts alike. Founded with the vision of nurturing local talent, Nagai has evolved into a vibrant marketplace that connects illustrators with enthusiasts worldwide. Its creation stemmed from the need for a space where artists could not only showcase but also directly sell their works.
                            </p>
                            <Link to="/shop" className="text-3xl mb-8"><u>Shop now</u></Link>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row font-inter flex-grow">
                        <div className={`border border-black px-10  transition-all delay-200 ${animate ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-full'
                            }`}>
                            <h2 className="font-semibold text-5xl mt-5 mb-3">Support</h2>
                            <p className="lg:text-start text-4xl lg:text-2xl font-inter mt-10 mb-10 scale-100 ease-in duration-500 hover:scale-105">At Nagai, we stand as a robust pillar of support for budding artists, offering essential resources, increased visibility, and valuable opportunities to enhance their creative prowess and artistic growth. Our commitment is to nurture talent, ensuring that emerging artists receive the backing they need to flourish. Through a dedicated approach, we empower individuals to explore their artistic potential, fostering an environment where innovation and expression thrive. At Nagai, our unwavering dedication to emerging talent sets the stage for a vibrant and flourishing artistic community, where every artist finds the encouragement and resources necessary for their journey of creative evolution</p>
                        </div>
                        <div className={`border border-black px-10  transition-all delay-500 ${animate ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-full'
                            }`}>
                            <h2 className="font-semibold text-5xl mt-5 mb-3">Quality</h2>
                            <p className="text-start text-4xl lg:text-2xl font-inter mt-10 mb-10 scale-100 ease-in duration-500 hover:scale-105">We are committed to caring for every detail to ensure the exceptional quality of our works. From conception to realization, we dedicate constant efforts to offer five-star products. Our meticulous approach covers every aspect of the creative process, ensuring that each piece reflects the excellence that defines us. We value perfection and strive to exceed expectations, providing our clients and followers with artistic experiences that endure over time. At Nagai, quality is not just a standard; it is our commitment and is reflected in every work we create.</p>
                        </div>
                        <div className={`border border-black px-10  transition-all delay-1000 ${animate ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-full'
                            }`}>
                            <h2 className="font-semibold text-5xl mt-5 mb-3">Connection</h2>
                            <p className="text-start text-4xl lg:text-2xl font-inter mt-10 mb-10 scale-100 ease-in duration-500 hover:scale-105">Through our international service, we catalyze the globalization of art, connecting creators with millions worldwide. We transcend borders, providing a platform where diverse artistic expressions resonate globally. By facilitating exposure to a vast audience, we empower artists to share their visions on a truly international scale, fostering cultural exchange and appreciation. At the intersection of technology and creativity, our service acts as a bridge, ensuring that the beauty and diversity of art transcend geographical boundaries, reaching and inspiring people across the globe.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <div className="join join-vertical w-full lg:hidden">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-5xl font-semibold">
                        About us
                    </div>
                    <div className="collapse-content">
                        <p className="lg:text-left text-4xl lg:text-3xl lg:max-w-md font-inter py-8">Nagai, the illustration marketplace born in Barcelona in 2023, stands as a beacon for creative artists and art enthusiasts alike. Founded with the vision of nurturing local talent, Nagai has evolved into a vibrant marketplace that connects illustrators with enthusiasts worldwide. Its creation stemmed from the need for a space where artists could not only showcase but also directly sell their works.
                        </p>
                        <Link to="/shop" className="text-3xl mb-8"><u>Shop now</u></Link>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold text-5xl">
                        Support
                    </div>
                    <div className="collapse-content">
                    <p className="lg:text-start text-4xl lg:text-2xl font-inter mt-10 mb-10 scale-100 ease-in duration-500 hover:scale-105">At Nagai, we stand as a robust pillar of support for budding artists, offering essential resources, increased visibility, and valuable opportunities to enhance their creative prowess and artistic growth. Our commitment is to nurture talent, ensuring that emerging artists receive the backing they need to flourish. Through a dedicated approach, we empower individuals to explore their artistic potential, fostering an environment where innovation and expression thrive. At Nagai, our unwavering dedication to emerging talent sets the stage for a vibrant and flourishing artistic community, where every artist finds the encouragement and resources necessary for their journey of creative evolution</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold text-5xl">
                        Quality
                    </div>
                    <div className="collapse-content">
                    <p className="text-start text-4xl lg:text-2xl font-inter mt-10 mb-10 scale-100 ease-in duration-500 hover:scale-105">We are committed to caring for every detail to ensure the exceptional quality of our works. From conception to realization, we dedicate constant efforts to offer five-star products. Our meticulous approach covers every aspect of the creative process, ensuring that each piece reflects the excellence that defines us. We value perfection and strive to exceed expectations, providing our clients and followers with artistic experiences that endure over time. At Nagai, quality is not just a standard; it is our commitment and is reflected in every work we create.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold text-5xl">
                        Connection
                    </div>
                    <div className="collapse-content">
                    <p className="text-start text-4xl lg:text-2xl font-inter mt-10 mb-10 scale-100 ease-in duration-500 hover:scale-105">Through our international service, we catalyze the globalization of art, connecting creators with millions worldwide. We transcend borders, providing a platform where diverse artistic expressions resonate globally. By facilitating exposure to a vast audience, we empower artists to share their visions on a truly international scale, fostering cultural exchange and appreciation. At the intersection of technology and creativity, our service acts as a bridge, ensuring that the beauty and diversity of art transcend geographical boundaries, reaching and inspiring people across the globe.</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutUs