import React from 'react'
import uv7 from '../assets/7.png';


const HeroText = () => {
    return (
        <div className='flex flex-row mt-20'>
            <div className='relative shrink-0'>
                <div className="absolute left-0 top-[94px] z-0 w-[100px] h-[200px] bg-lavender rounded-r-full">
                </div>
                <img src={uv7} className='-ml-22 max-w-[295px] object contain  z-20 relative' alt="" />
                <span className='absolute
                    left-12
                    bottom-0
                    text-[72px]
                    font-playfair
                    font-semibold
                    text-wisteria
                    z-10'>7
                </span>
                <div className="
                        absolute
                        left-18
                        text-sm
                        bottom-3.5
                        text-wisteria
                        font-playfair
                        ">
                        UV Index
                </div>
            </div>
            
            <div className='flex text-left justify-center items-center font-playfair font-medium text-[36px]  text-wisteria'>THE SUN ISN'T YOUR FRIEND RN </div>
        </div>
        
    )
}

export default HeroText