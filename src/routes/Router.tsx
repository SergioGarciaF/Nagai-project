
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Shop from '../components/Shop/Shop'
import AboutUs from '../components/About us/AboutUs'
import Login from '../components/Register-SignUp/Login/Login'
import Register from '../components/Register-SignUp/Register/Register'
import ProductDetail from '../components/Shop/ProductDetail'
import Cart from '../components/Shop/Cart'
import Contact from '../components/Contact/Contact'
import Sucess from '../components/Shop/Sucess'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/aboutus' element={<AboutUs/>} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/product-detail/:productId' element={<ProductDetail/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/success' element={<Sucess/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router