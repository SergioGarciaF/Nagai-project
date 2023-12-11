import { useSelector } from "react-redux"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Accordion from "./Accordion"
import Favourites from "./Favourites"
import Hero from "./Hero"
import { RootState } from "../../store/store"


const Landing = () => {
    const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <>
            <Header isAuthenticated={isAuthenticated}/>
            <Accordion />
            <Hero />
            <Favourites />
            <Footer />
        </>
    )
}

export default Landing