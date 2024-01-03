import Footer from "../Footer/Footer"
import Header from "../Header/Header"

import about from '../../assets/Others/About us.jpg'
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const AboutUs = () => {
    const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <div>
            <Header isAuthenticated={isAuthenticated}/>
            <div className="hero mt-10 bg-base-100 h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={about} className="max-w-md rounded-lg shadow-2xl" />
                    <div className="text-start">
                        <h1 className="text-2xl font-inter font-bold">About Us</h1>
                        <p className="py-6">Nagai, the illustration marketplace born in Barcelona in 2023, stands as a beacon for creative artists and art enthusiasts alike. Founded with the vision of nurturing local talent, Nagai has evolved into a vibrant marketplace that connects illustrators with enthusiasts worldwide. Its creation stemmed from the need for a space where artists could not only showcase but also directly sell their works.
                            With an intuitive focus, Nagai has challenged traditional barriers in the art market, providing users with a unique and diverse experience. The platform offers artists a digital showcase to display their creativity, while buyers revel in the variety of styles and themes available. Nagai's user-friendly interface has created an inclusive space where artistic exploration merges seamlessly with transactional ease.
                            Since its inception, Nagai has fostered a vibrant community, encouraging collaboration and feedback between artists and customers. The platform has expanded its reach beyond Barcelona, becoming a global bridge for artistic expression. With a solid commitment to innovation and quality, Nagai has set a standard for illustration marketplaces, demonstrating that art can thrive anywhere in the world by connecting talent and admirers with a ease that transcends borders.</p>
                        <button className="btn btn-primary">Home</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs