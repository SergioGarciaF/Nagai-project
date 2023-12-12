import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { logoutSuccess } from '../../store/Slices/authSlice';
import cart from '../../assets/icons/PhShoppingCartLight.png';
import { getAuth, signOut } from 'firebase/auth';

interface HeaderProps {
  isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogoutClick = async (): Promise<void> => {
    const auth = getAuth();
    try {
      await signOut(auth);
      dispatch(logoutSuccess());
      console.log('Usuario desconectado');
    } catch (error: any) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  useEffect(() => {
    console.log('Estado de autenticación:', isAuthenticated);
  }, [isAuthenticated, user]);

  return (
    <>
      <header className="navbar bg-base-100">
        <div className="navbar-start">
          <nav className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 list-none">
              <Link to='/shop'><li><a className="cursor-default font-inter font-light">Shop</a></li></Link>
              <Link to='/aboutus'><li><a className="cursor-default font-inter font-light">About us</a></li></Link>
              <Link to='/contact'><li><a className="cursor-default font-inter font-light">Contact</a></li> </Link>
            </ul>
          </nav>

          <Link to='/'><a className="cursor-default font-inter font-bold text-xl ms-10">Nagai.</a></Link>
        </div>
        <nav className="navbar-center hidden lg:flex space-x-10 list-none">
          <Link to='/shop'><li><a className="cursor-default font-inter font-light">Shop</a></li></Link>
          <Link to='/aboutus'><li><a className="cursor-default font-inter font-light">About us</a></li></Link>
          <Link to='/contact'><li><a className="cursor-default font-inter font-light">Contact</a></li> </Link>
        </nav>
        {isAuthenticated ? (
          <nav className="navbar-end space-x-6 me-6 list-none">
            <Link to='/login'><li><a className="cursor-default font-inter font-light">{user.email}</a></li></Link>
            <Link to='/register'><li onClick={handleLogoutClick}><a className="cursor-default font-inter font-light">Logout</a></li></Link>
            <Link to='/cart'><li><a className="cursor-default font-inter font-light"><img src={cart} alt="cart" width={30} /></a></li></Link>
          </nav>
        ) : (
          <nav className="navbar-end space-x-6 me-6 list-none">
            <Link to='/login'><li><a className="cursor-default font-inter font-light">Login</a></li></Link>
            <Link to='/register'><li><a className="cursor-default font-inter font-light">Sign up</a></li></Link>
            <Link to='/cart'><li><a className="cursor-default font-inter font-light"><img src={cart} alt="cart" width={30} /></a></li></Link>
          </nav>
        )}
      </header>
      <hr className="border-b-2 border-b-neutral" />
    </>
  );
};

export default Header;
