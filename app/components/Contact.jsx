"use client"

import { assets } from '@/assets/assets'

import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import { useI18n } from '@/app/i18n/I18nProvider';

function Contact() {
    const { t } = useI18n()
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult(t("contact.sending"));
        const formData = new FormData(event.target);

        formData.append("access_key", "f70d3497-64ee-4b42-bbd4-689f61a25ffe");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult(t("contact.success"));
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className="text-center mb-2 text-lg font-Ovo">{t("contact.kicker")}</h4>
            <h2 className="text-center text-5xl font-Ovo">{t("contact.title")}</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>{t("contact.subtitle")}</p>
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <input type="text" name='name' placeholder={t("contact.namePlaceholder")} required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white ' />
                    <input type="email" name='email' placeholder={t("contact.emailPlaceholder")} required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white ' />

                </div>
                <textarea placeholder={t("contact.messagePlaceholder")} name='message' rows="6" required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
                <button type='submit' className='py-3 px-8 w-max flex items-center  justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>{t("contact.submit")} <Image src={assets.right_arrow_white} className='w-4' alt='' />   </button>

                <p className='mt-4'>{result}</p>
            </form>
        </div>
    )
}

export default Contact
