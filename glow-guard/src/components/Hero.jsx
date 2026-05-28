import React from 'react'
import uv4 from '../assets/uv4.png'
import uv5 from '../assets/uv5.png'
import uv6 from '../assets/uv6.png'
import uv7 from '../assets/uv7.png'
import uv8 from '../assets/uv8.png'
import uv9 from '../assets/uv9.png'
import uv10 from '../assets/uv10.png'


const Hero = ({uvLevel = "high", uvIndex = 7 }) => {
    const gradients = {
        low: "from-[#F7F4EA] to-[#C0B9DD]",
        moderate: "from-[#FFF4D6] to-[#DED9E2]",
        high: "from-[#FFE7C2] to-[#80A1D4]",
        extreme: "from-[#FFDFC8] to-[#75C9C8]"
    };

    const images = {
        low: [uv4, uv5],
        moderate: [uv6, uv7],
        high: [uv9],
        extreme: [uv10]
    }

    const selectedImage = images[uvLevel][Math.floor(Math.random() * images[uvLevel].length)];

    return (
        <div className='flex flex-col'>
            <div className='relative shrink-0 flex mt-30 '>
                <div className="absolute left-0 top-6 z-0 w-[100px] h-[200px] bg-lavender rounded-r-full">
                </div>
                <img src={selectedImage} className='
                w-[182px] h-[229px]  
                object-contain 
                z-20 
                relative 
                drop-shadow-[0_5px_2px_rgba(0,0,0,0.35)]
                -translate-x-6' alt="uv illustration" />

                <div className='text-left flex items-center mt-4 mr-2 font-playfair font-medium text-[36px]  text-wisteria'>THE SUN ISN'T YOUR FRIEND RN </div>
            </div>

            

            <div className='ml-13 -mt-16 z-30 relative'>

                <div className='flex items-end'>

                    <span className='
                        text-[72px]
                        font-playfair
                        font-semibold
                        text-wisteria
                        leading-none
                    '>
                        {uvIndex}
                    </span>

                    <span className='
                        font-playfair
                        text-xs
                        uppercase
                        text-wisteria/80
                    '>
                        UV INDEX
                    </span>
                </div>
            </div>
        </div>
        
    )
}

export default Hero;