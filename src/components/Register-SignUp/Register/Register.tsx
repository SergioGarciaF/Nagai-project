import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logoutSuccess } from '../../../store/Slices/authSlice';
import { RootState } from '../../../store/store';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { Toaster, toast } from 'sonner';

import video from '../../../assets/Videos/fondo-registro.mp4';

const Register = () => {
  const dispatch = useDispatch();
  const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showContent, setShowContent] = useState(false);

  const validatePassword = (password: string) => {
    if (password.length < 4) {
      return false;
    }
    return true;
  };

  const auth = getAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      toast.error('The password must be at least 4 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('The passwords do not match. Try again.');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registro exitoso:', userCredential);
      dispatch(loginSuccess({ user: userCredential.user }));
    } catch (error: any) {
      console.error('Error al registrar:', error);
    }
  };

  const handleLogoutClick = async (): Promise<void> => {
    try {
      await signOut(auth);
      dispatch(logoutSuccess());
      console.log('Usuario desconectado');
    } catch (error: any) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  useEffect(() => {
    const simulateLoading = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(simulateLoading);
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(loginSuccess({ user }));
      } else {
        dispatch(logoutSuccess());
      }
    });
  }, [dispatch, auth]);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <div className='flex min-h-screen'>
        <div className='w-1/2 relative'>
          <video autoPlay muted loop className='w-full h-full object-cover absolute top-0 left-0 z-[-1]'>
            <source src={video} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className='text-white text-4xl font-inter font-semibold mb-10'>
              Join us
            </h1>
            <p className='text-white text-2xl font-inter'>
              Embark on a journey of creativity with Nagai, our unique e-commerce platform for art. Register today to explore a diverse collection of illustrations. Find the ideal artwork to enhance your surroundings and transform your space into a vibrant masterpiece. Join Nagai to discover, appreciate, and acquire exceptional artworks that resonate with your style.
            </p>
          </div>
        </div>
        <div className='flex flex-col w-1/2 items-center justify-center bg-gray-100'>
          <div className='w-full max-w-xs p-8'>
            {isAuthenticated ? (
              <>
                <h1 className='text-2xl font-inter font-semibold mb-4'>Welcome to our family!</h1>
                <button
                  className='btn btn-primary w-full mt-4'
                  onClick={handleLogoutClick}
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <h1 className='text-2xl font-inter font-semibold mb-4'>Sign up</h1>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                      Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      placeholder='youremail@site.com'
                      className='border-b border-gray-500 focus:outline-none focus:border-black w-full py-2'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                      Password
                    </label>
                    <input
                      id='password'
                      type='password'
                      className='input input-bordered w-full'
                      onChange={(e) => {
                        setPassword(e.target.value);
                        validatePassword(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='confirmPassword'>
                      Repeat Password
                    </label>
                    <input
                      id='confirmPassword'
                      type='password'
                      className='input input-bordered w-full'
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button className='btn btn-primary w-full'>
                    Sign up
                  </button>
                </form>
              </>
            )}
          </div>
          <Toaster
            toastOptions={{
              style: {
                background: 'black',
                color: 'white',
              },
              className: 'my-toast',
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
