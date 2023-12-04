import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

interface Contact {
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const refForm = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = 'service_nnyetkm';
        const templateId = 'template_1aukhrk';
        const apiKey = 'LahAhV5UOilx9NV9t';

        if (refForm.current) {
            emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
                .then((result) => {
                    console.log(result.text);
                },
                    (error) => {
                        console.log(error.text);
                    });
        }
    };

    return (
        <>
            <form className="flex flex-col justify-center items-center" ref={refForm} onSubmit={handleSubmit}>
                <fieldset className="flex-col">
                    <label htmlFor="">Email</label>
                    <input name='from_name' className="border-black"  type="email" placeholder="Ej: nagai@gmail.com" id="email" required/>
                </fieldset>
                <fieldset className="flex-col">
                    <label htmlFor="">Message</label>
                    <textarea maxLength={500} className="border-black" name="message" placeholder="Type your message" required/>
                </fieldset>
                <button>Enviar</button>
            </form>
        </>
    );
};

export default Contact;
