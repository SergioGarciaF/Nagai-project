import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logoutSuccess } from '../../../store/Slices/authSlice'
import { RootState } from '../../../store/store';
import Header from '../../Header/Header';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

import videoLogin from '../../../assets/Videos/videoLogin1.mp4'

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showContent, setShowContent] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => { 
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(loginSuccess({ user }));
      } else {
        localStorage.removeItem('user');
        dispatch(logoutSuccess());
      }
    });
  }, [dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 700); 
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const simulateLoading = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(simulateLoading);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginSuccess({ user: userCredential.user }));
    } catch (error: any) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };

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
    // Verificar si existe un identificador de usuario en el almacenamiento local
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(loginSuccess({ user }));
    }
  }, [dispatch]);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <div className='min-h-screen flex'>
        <div className='relative w-1/2 h-screen hidden lg:block'>
          <video autoPlay muted loop className='w-full h-full object-cover absolute top-0 left-0 z-[-1]'>
            <source src={videoLogin} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className='text-white text-4xl font-inter font-semibold mb-10'>
              Log in
            </h1>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center min-h-screen mx-auto w-full lg:w-1/2 lg:bg-gray-100'>
          <div className='w-full max-w-xs p-8 rounded-lg '>
            {isAuthenticated ? (
              <>
                <h1 className='text-2xl font-inter font-semibold mb-4'>Welcome</h1>
                <button
                  className='btn btn-primary w-full mt-4'
                  onClick={handleLogoutClick}
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <div className={`transition-all ${animate ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-full'
                  }`}>
                  <div className='mb-4 text-4xl'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>
                      Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      className='border-b border-gray-500 lg:bg-gray-100 focus:outline-none focus:border-black w-full py-2'
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='mb-6 text-4xl'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='password'>
                      Password
                    </label>
                    <input
                      id='password'
                      type='password'
                      className='border-b border-gray-500 lg:bg-gray-100 focus:outline-none focus:border-black w-full py-2'
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    className='btn btn-primary w-full text-4xl lg:text-2xl'
                    onClick={handleSubmit}
                  >
                    Log in
                  </button>
                </div>
                

              </>
            )}
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Signup;
