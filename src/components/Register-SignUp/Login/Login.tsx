import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logoutSuccess } from '../../../store/Slices/authSlice'
import { RootState } from '../../../store/store';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import user from '../../../assets/icons/PhUserLight.png';
import { client } from '../../../supabase/client';

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    const fetchSession = async (): Promise<void> => {
      try {
        const { data: { session } } = await client.auth.getSession();
        dispatch(session ? loginSuccess({ user: session.user }) : logoutSuccess());
      } catch (error: any) {
        console.error('Error al obtener la sesión:', error.message);
      }
    };

    const onAuthStateChange = (_event: any, session: any): void => {
      dispatch(session ? loginSuccess({ user: session.user }) : logoutSuccess());
    };

    fetchSession();

    const { data: { subscription } } = client.auth.onAuthStateChange(onAuthStateChange);

    return () => {
      subscription.unsubscribe();
    };
  }, [dispatch]);

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    try {
      const { data, error } = await client.auth.signInWithPassword({
        email,
        password,
      });
  
      if (error) {
        console.error('Error al iniciar sesión:', error.message);
        alert('No se ha podido iniciar sesión. Registrate o confirma tu cuenta en tu email.')
      } else if (data) {
        const { user } = data;
        console.log('Inicio de sesión exitoso:', user);
        dispatch(loginSuccess({ user }));
      }
    } catch (error: any) {
      console.error('Error inesperado:', error.message);
    }
  };


  const handleLogoutClick = async (): Promise<void> => {
    try {
      await client.auth.signOut();
      dispatch(logoutSuccess());
      console.log('Usuario desconectado');
    } catch (error: any) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <div className='flex flex-col gap-2 font-inter justify-center mt-20 items-center mx-auto'>
        {isAuthenticated ? (
          <>
            <p>Bienvenido. Has iniciado sesión.</p>
            <button onClick={handleLogoutClick}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <img src={user} width={30} alt='' />
            <p className='font-semibold text-sm'>Email:</p>
            <input
              type='email'
              className='input input-bordered w-full max-w-xs'
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <p className='font-semibold text-sm'>Password:</p>
            <input
              type='password'
              className='input input-bordered w-full max-w-xs'
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <button
              className='btn btn-xs btn-outline btn-neutral mt-3'
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Signup;
