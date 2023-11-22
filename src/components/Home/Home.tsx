import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Accordion from "./Accordion"
import Favourites from "./Favourites"
import Hero from "./Hero"


const Landing = () => {
    return (
        <>
            <Header />
            <Accordion />
            <Hero />
            <Favourites />
            <Footer />
        </>
    )
}

export default Landing