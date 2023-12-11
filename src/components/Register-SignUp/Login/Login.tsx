import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logoutSuccess } from '../../../store/Slices/authSlice'
import { RootState } from '../../../store/store';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
      <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <div className='w-full max-w-xs p-8 bg-white rounded-lg shadow-md'>
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
              <h1 className='text-2xl font-inter font-semibold mb-4'>Log in</h1>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  className='input input-bordered w-full'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-6'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                  Password
                </label>
                <input
                  id='password'
                  type='password'
                  className='input input-bordered w-full'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
              </div>
              <button
                className='btn btn-primary w-full'
                onClick={handleSubmit}
              >
                Log in
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
