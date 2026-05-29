import React from 'react'
import uv4 from '../assets/uv4.png'
import uv5 from '../assets/uv5.png'
import uv6 from '../assets/uv6.png'
import uv7 from '../assets/uv7.png'
import uv8 from '../assets/uv8.png'
import uv9 from '../assets/uv9.png'
import uv10 from '../assets/uv10.png'


const Hero = ({uvLevel, uvIndex }) => {

    const gradients = {
            // soft cream → dreamy lavender
            // calm cloudy/safe UV mood
            low: "from-[#F7F4EA] to-[#C0B9DD]",

            // warm sunlight → muted lilac
            // gentle sunny-day atmosphere
            moderate: "from-[#FFF4D6] to-[#DED9E2]",

            // peach sunlight → cool blue
            // strong UV / heated afternoon feel
            high: "from-[#FFE7C2] to-[#80A1D4]",

            // warm coral glow → aqua tension
            // dangerous UV but still elegant
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
        <div className={`flex flex-col bg-gradient-to-b from-curious-blue/60 to bg-lavender rounded-b-xl`}>
            <div className='relative shrink-0 flex mt-10 '>
                <div className="
                        absolute
                        left-[-40px]
                        top-[90px]
                        z-0
                        w-[180px]
                        h-[180px]
                        bg-[#FFD65A]/40
                        blur-3xl
                        rounded-full
                        ">
                </div>
                <div className="
                        absolute
                        left-[10px]
                        top-[135px]
                        z-0
                        w-[90px]
                        h-[90px]
                        bg-[#FFC83D]/90
                        blur-xl
                        rounded-full
                        ">
                </div>
                <img src={selectedImage} className='
                w-[182px] h-[229px]  
                object-contain 
                z-20 
                relative 
                drop-shadow-[0_5px_2px_rgba(0,0,0,0.35)]
                -translate-x-6' alt="uv illustration" />

                <div className='text-left flex items-center mt-4 mr-2 font-playfair font-medium text-[32px]  text-floral-white drop-shadow '>IT'S BETTER TO STAY INDOORS </div>
            </div>

            

            <div className='ml-13 -mt-16 z-30 mb-4 relative'>

                <div className='flex items-end'>

                    <span className='
                        drop-shadow-lg
                        text-[72px]
                        font-playfair
                        font-semibold
                        text-floral-white
                        leading-none
                    '>
                        {uvIndex}
                    </span>

                    <span className='
                        drop-shadow-lg
                        font-playfair
                        text-xs
                        uppercase
                        text-floral-white
                    '>
                        UV INDEX
                    </span>
                </div>
            </div>
        </div>
        
    )
}

export default Hero;