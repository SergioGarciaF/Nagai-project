import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Header from "../Header/Header";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import inbox from '../../assets/icons/inbox.png'
import { Toaster, toast } from 'sonner'

interface Contact {
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const refForm = useRef<HTMLFormElement>(null);
    const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = 'service_nnyetkm';
        const templateId = 'template_1aukhrk';
        const apiKey = 'LahAhV5UOilx9NV9t';

        try {
            if (refForm.current) {
                const result = await emailjs.sendForm(serviceId, templateId, refForm.current, apiKey);
                console.log(result.text);
                toast.success('Email sent successfully', {
                    duration: 2000,
                })
            }
        } catch (error: any) {
            console.error(error.text);
            toast.error('Email not sent', {
                duration: 2000,
            })
        }
    };

    return (
        <>
            <Header isAuthenticated={isAuthenticated} />
            <h1 className="text-3xl font-inter mt-20">Contact us</h1>
            <img className="m-auto mt-10" src={inbox} alt="inbox" width={30} />
            <form className="flex flex-col justify-center items-center" ref={refForm} onSubmit={handleSubmit}>
                <fieldset className="flex-col mt-4">
                    <label htmlFor="email">Email</label>
                    <input type='email' name='from_name' placeholder="Ej: nagai@gmail.com" id="email" required className='input input-bordered w-full max-w-xs mt-3' />
                </fieldset>
                <fieldset className="flex-col mt-4">
                    <label htmlFor="message">Message</label>
                    <textarea maxLength={500} className='input input-bordered w-full max-w-xs h-36 mt-3' name="message" placeholder="Type your message" required />
                </fieldset>
                <button type="submit" className="btn btn-xs btn-outline btn-neutral mt-3">Enviar</button>
                <Toaster toastOptions={{
                    style: {
                        background: 'black',
                        color: "white"
                    },
                    className: 'my-toast',
                }} />
            </form>
            <Footer />
        </>
    );
};

export default Contact;
