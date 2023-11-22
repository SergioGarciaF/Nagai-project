

const Header = () => {
    return (
        <>
            <header className="navbar bg-base-100">
                <div className="navbar-start">
                    <nav className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a className="cursor-default font-inter font-light">Shop</a></li>
                            <li><a className="cursor-default font-inter font-light">About us</a></li>
                            <li><a className="cursor-default font-inter font-light">Sell</a></li>
                            <li><a className="cursor-default font-inter font-light">Contact</a></li>
                            <li><a className="cursor-default font-inter font-light">Login</a></li>
                            <li><a className="cursor-default font-inter font-light">Sign up</a></li>
                        </ul>
                    </nav>
                    <a className="cursor-default font-inter font-bold text-xl ms-10">Nagai.</a>
                </div>
                <nav className="navbar-center hidden lg:flex space-x-10">
                    <a className="cursor-default font-inter font-light">Shop</a>
                    <a className="cursor-default font-inter font-light">About us</a>
                    <a className="cursor-default font-inter font-light">Sell</a>
                    <a className="cursor-default font-inter font-light">Contact</a>
                </nav>
                <nav className="navbar-end space-x-6 me-6">
                    <a className="btn btn-ghost cursor-default font-inter font-light">Login</a>
                    <a className="btn btn-ghost cursor-default font-inter font-light">Sign Up</a>
                </nav>
            </header>
            <hr className="border-b-2 border-b-neutral"/>
        </>
    )
}

export default Header