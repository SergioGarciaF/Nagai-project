
import { Link } from 'react-router-dom'

import cart from '../../assets/icons/PhShoppingCartLight.png'

const Header = () => {
    

    return (
        <>
            <header className="navbar bg-base-100">
                <div className="navbar-start">
                    <nav className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 list-none">
                            <Link to='/shop'><li><a className="cursor-default font-inter font-light">Shop</a></li></Link>
                            <Link to='/aboutus'><li><a className="cursor-default font-inter font-light">About us</a></li></Link>
                            <Link to='/sell'><li><a className="cursor-default font-inter font-light">Sell</a></li></Link>
                            <li><a className="cursor-default font-inter font-light">Contact</a></li>
                            <Link to='/login'><li><a className="cursor-default font-inter font-light">Login</a></li></Link>
                            <Link to='/register'><li><a className="cursor-default font-inter font-light">Sign up</a></li></Link>
                        </ul>
                    </nav>

                    <Link to='/'><a className="cursor-default font-inter font-bold text-xl ms-10">Nagai.</a></Link>

                </div>
                <nav className="navbar-center hidden lg:flex space-x-10 list-none">
                    <Link to='/shop'><li><a className="cursor-default font-inter font-light">Shop</a></li></Link>
                    <Link to='/aboutus'><li><a className="cursor-default font-inter font-light">About us</a></li></Link>
                    <Link to='/sell'><li><a className="cursor-default font-inter font-light">Sell</a></li></Link>
                    <a className="cursor-default font-inter font-light">Contact</a>
                </nav>
                <nav className="navbar-end space-x-6 me-6 list-none">
                    <Link to='/login'><li><a className="cursor-default font-inter font-light">Login</a></li></Link>
                    <Link to='/register'><li><a className="cursor-default font-inter font-light">Sign up</a></li></Link>
                    <Link to='/cart'><li><a className="cursor-default font-inter font-light"><img src={cart} alt="cart" width={30} /></a></li></Link>
                </nav>
            </header>
            <hr className="border-b-2 border-b-neutral" />   
        </>
    )
}

export default Header