import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { client } from '../../../supabase/client';
import { loginSuccess, logoutSuccess } from '../../../store/Slices/authSlice';
import { RootState } from '../../../store/store';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import user from '../../../assets/icons/PhUserLight.png';

const Register = () => {
  const dispatch = useDispatch();
  const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error }: { data: any; error: any } = await client.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        console.error('Error al registrar:', error);
      } else {
        console.log('Registro exitoso:', data);
        dispatch(loginSuccess({ user: data.user }));
      }
    } catch (error) {
      console.error('Error inesperado:', error);
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

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <div className='flex flex-col gap-2 font-inter justify-center mt-20 items-center mx-auto'>
        {isAuthenticated ? (
          <>
            <p className='font-inter'>¡Bienvenido! Has iniciado sesión.</p>
            <p className='font-inter'>Confirma tu inicio de sesión en tu correo eléctronico</p>
            <button onClick={handleLogoutClick} className='font-inter'>Cerrar sesión</button>
          </>
        ) : (
          <>
            <img src={user} width={30} alt="" />
            <div className='flex space-x-2'>
              <p className='text-xs'>Client</p>
              <input type="checkbox" className="toggle" checked />
              <p className='text-xs'>Artist</p>
            </div>
            <form onSubmit={handleSubmit}>
              <p className='font-semibold text-sm mb-1'>Email:</p>
              <input
                type="email"
                name='email'
                placeholder='youremail@site.com'
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className='font-semibold text-sm mb-1'>Password:</p>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn btn-xs btn-outline btn-neutral mt-3">Register</button>
            </form>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Register;
