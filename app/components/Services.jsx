import React from 'react'
import { serviceData } from './../../assets/assets';
import Image from 'next/image';


function Services() {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My Services</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum rerum illum ipsam quasi dolore? Facilis iure dicta in voluptatem tenetur eum voluptates, minima nostrum earum, autem nam soluta et?</p>
            <div className='grid grid-cols-auto gap-6 my-10'>
                {serviceData.map(({ icon, title, description }, index) => (
                    <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500'>
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className='text-lg my-4 text-gray'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
