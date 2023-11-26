import user from '../../../assets/icons/PhUserLight.png';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import { useState } from 'react';
import { client } from '../../../supabase/client';

const Register = () => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await client.auth.signUp({
                email: email,
                password: password,
            });

            if (error) {
                console.error("Error al registrar:", error);
            } else {
                console.log("Registro exitoso:", data);
            }
        } catch (error) {
            console.error("Error inesperado:", error);
        }
    };

    return (
        <>
            <Header />
            <div className='flex flex-col gap-2 font-inter justify-center mt-20 items-center mx-auto'>
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
                        onChange={e => setEmail(e.target.value)}
                    />
                    <p className='font-semibold text-sm mb-1'>Username:</p>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        onChange={e => setUserName(e.target.value)}
                    />
                    <p className='font-semibold text-sm mb-1'>Password:</p>
                    <input
                        type="password"
                        className="input input-bordered w-full max-w-xs"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="btn btn-xs btn-outline btn-neutral mt-3">Register</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Register;
