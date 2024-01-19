import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Header from "../Header/Header";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import { Toaster, toast } from 'sonner'

import videoContact from '../../assets/Videos/videoContact.mp4'

interface Contact {
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const refForm = useRef<HTMLFormElement>(null);
    const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const simulateLoading = setTimeout(() => {
            setShowContent(true);
        }, 1000);

        return () => clearTimeout(simulateLoading);
    }, []);

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
            <div className="h-screen flex">
                <div className='relative w-1/2 h-screen hidden lg:block'>
                    <video autoPlay muted loop className='w-full h-full object-cover absolute top-0 left-0 z-[-1]'>
                        <source src={videoContact} type="video/mp4" />
                        Your browser does not support the video element.
                    </video>
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                        <h1 className='text-white text-4xl font-inter font-semibold mb-10'>
                            Contact us
                        </h1>
                        <p className='text-white text-2xl font-inter'>
                            Reach out to us effortlessly via email. Use our contact form below to send us your inquiries and feedback. We're here to assist you.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-screen w-full lg:w-1/2 mx-auto lg:bg-gray-100">
                    <form className="flex flex-col justify-center items-center" ref={refForm} onSubmit={handleSubmit}>
                        <fieldset className="flex-col mt-4 text-2xl">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-8 text-6xl lg:text-4xl">Email</label>
                            <input type='email' name='from_name' placeholder="nagai@gmail.com" id="email" required className='border-b border-gray-500 lg:bg-gray-100 focus:outline-none focus:border-black w-full py-2 mb-4' />
                        </fieldset>
                        <fieldset className="flex-col mt-4 text-2xl">
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-5 text-6xl lg:text-4xl">Message</label>
                            <textarea maxLength={500} className='input input-bordered w-96 resize-y h-48 mt-5 mb-5 bg-gray-100' name="message" placeholder="Type your message" required />
                        </fieldset>
                        <button type="submit" className="btn text-3xl font-bold btn-primary w-full mt-4">Send</button>
                        <Toaster toastOptions={{
                            style: {
                                background: 'black',
                                color: "white"
                            },
                            className: 'my-toast',
                        }} />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
