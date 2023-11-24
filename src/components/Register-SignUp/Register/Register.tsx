

import user from '../../../assets/icons/PhUserLight.png'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const Register = () => {
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
                <p className='font-semibold text-sm'>Email:</p>
                <input type="email" className="input input-bordered w-full max-w-xs" />
                <p className='font-semibold text-sm'>Username:</p>
                <input type="text" className="input input-bordered w-full max-w-xs" />
                <p className='font-semibold text-sm'>Password:</p>
                <input type="password" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-xs btn-outline btn-neutral mt-3">Register</button>
            </div>
            <Footer />
        </>
    )
}

export default Register