import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets';


function Footer() {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                < Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />
                <div className='w-max flex items-center gap-2 mx-auto'>
                    < Image src={assets.mail_icon} alt='' className='w-6' />
                    kojocode6@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center  justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>&copy; 2025 Kojo Code. All rights reserved .</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/kodjozecodeur/README?tab=readme-ov-file">Github</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/kojo-samuel-maglodji-2a1081319/">LinkedIn</a></li>
                    <li><a target='_blank' href="https://x.com/kojo_code">Twitter</a></li>

                </ul>
            </div>
        </div>
    )
}

export default Footer
