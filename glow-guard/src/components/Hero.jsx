import React from 'react'
import uv4 from '../assets/uv4.png'
import uv5 from '../assets/uv5.png'
import uv6 from '../assets/uv6.png'
import uv7 from '../assets/uv7.png'
import uv8 from '../assets/uv8.png'
import uv9 from '../assets/uv9.png'
import uv10 from '../assets/uv10.png'


const Hero = ({uvLevel = "high", uvIndex = 4 }) => {
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
        <div className='flex flex-row mt-20 '>
            <div className='relative shrink-0'>
                <div className="absolute left-0 top-[94px] z-0 w-[100px] h-[200px] bg-lavender rounded-r-full">
                </div>
                <img src={selectedImage} className='mt-16 
                w-[182px] h-[229px]  
                object-contain 
                z-20 
                relative 
                drop-shadow-[0_5px_2px_rgba(0,0,0,0.35)]
                -translate-x-6' alt="" />

                <div className='flex items-baseline gap-1 ml-10 -mt-8 z-30 relative'>
                    <span className='text-[72px] font-playfair font-semibold text-wisteria leading-none'>
                        {uvIndex}
                    </span>
                    <span className='text-sm text-wisteria font-playfair'>
                        UV Index
                    </span>
                </div>
            </div>
            
            <div className='flex flex-1 text-left justify-center items-center font-playfair font-medium text-[36px]  text-wisteria'>THE SUN ISN'T YOUR FRIEND RN </div>
        </div>
        
    )
}

export default Hero;