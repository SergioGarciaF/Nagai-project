import Footer from "../Footer/Footer"
import Header from "../Header/Header"

import about from '../../assets/Others/pexels-rosemary-ketchum-1518836.jpg'
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";

const AboutUs = () => {
    const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <div>
            <Header isAuthenticated={isAuthenticated} />
            <div className="flex flex-col bg-base-100 flex-grow">
                <div className="flex border border-black">
                    <img src={about} className="max-w-5xl" />
                    <div className="text-start flex flex-col justify-center font-inter px-5 mt-20">
                        <h1 className="text-5xl font-semibold">About Us</h1>
                        <p className="text-left text-2xl max-w-md font-inter py-8">Nagai, the illustration marketplace born in Barcelona in 2023, stands as a beacon for creative artists and art enthusiasts alike. Founded with the vision of nurturing local talent, Nagai has evolved into a vibrant marketplace that connects illustrators with enthusiasts worldwide. Its creation stemmed from the need for a space where artists could not only showcase but also directly sell their works.
                        </p>
                        <Link to="/shop" className="text-xl"><u>Shop now</u></Link>
                    </div>
                </div>
                <div className="flex font-inter">
                    <div className="border border-black bg-gray-200 px-10">
                        <h2 className="font-semibold text-3xl mb-3">Support</h2>
                        <p className="text-start text-lg font-inter">At Nagai, we stand as a robust pillar of support for budding artists, offering essential resources, increased visibility, and valuable opportunities to enhance their creative prowess and artistic growth. Our commitment is to nurture talent, ensuring that emerging artists receive the backing they need to flourish. Through a dedicated approach, we empower individuals to explore their artistic potential, fostering an environment where innovation and expression thrive. At Nagai, our unwavering dedication to emerging talent sets the stage for a vibrant and flourishing artistic community, where every artist finds the encouragement and resources necessary for their journey of creative evolution</p>
                    </div>
                    <div className="border border-black px-10">
                        <h2 className="font-semibold text-3xl mb-3">Quality</h2>
                        <p className="text-start text-lg font-inter">We are committed to caring for every detail to ensure the exceptional quality of our works. From conception to realization, we dedicate constant efforts to offer five-star products. Our meticulous approach covers every aspect of the creative process, ensuring that each piece reflects the excellence that defines us. We value perfection and strive to exceed expectations, providing our clients and followers with artistic experiences that endure over time. At Nagai, quality is not just a standard; it is our commitment and is reflected in every work we create.</p>
                    </div>
                    <div className="bg-gray-200 border border-black px-10">
                        <h2 className="font-semibold text-3xl mb-3">Connection</h2>
                        <p className="text-start text-lg font-inter">Through our international service, we catalyze the globalization of art, connecting creators with millions worldwide. We transcend borders, providing a platform where diverse artistic expressions resonate globally. By facilitating exposure to a vast audience, we empower artists to share their visions on a truly international scale, fostering cultural exchange and appreciation. At the intersection of technology and creativity, our service acts as a bridge, ensuring that the beauty and diversity of art transcend geographical boundaries, reaching and inspiring people across the globe.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs