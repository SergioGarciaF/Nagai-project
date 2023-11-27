
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Shop from '../components/Shop/Shop'
import AboutUs from '../components/About us/AboutUs'
import Signup from '../components/Register-SignUp/Signup/Signup'
import Register from '../components/Register-SignUp/Register/Register'
import ProductDetail from '../components/Shop/ProductDetail'
import Cart from '../components/Shop/Cart'
import Sell from '../components/Sell/Sell'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/aboutus' element={<AboutUs/>} />
            <Route path='/sell' element={<Sell/>} />
            <Route path='/login' element={<Signup/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/product-detail/:productId' element={<ProductDetail/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router