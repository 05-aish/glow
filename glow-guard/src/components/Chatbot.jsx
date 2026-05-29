import React from 'react';
import chatboticon from '../assets/chatboticon.png';

const Chatbot = () => {
  return (
    <div className='relative flex mt-[50px] flex-col items-end mr-4 mb-10'>


        <img src={chatboticon} alt="chatbot-icon" 
        className='relative z-10 drop-shadow-[0_5px_2px_rgba(0,0,0,0.35)]'/>
        
        <div className='
        absolute
        bottom-2
        right-14
        bg-lavender/30 
        backdrop-blur-md
        text-frost
        text-[12px] 
        w-[148px] h-[30px] 
        rounded-lg
        px-[5px] py-[6px]
        '>adipiscing elit, sed do?</div>

        
    </div>
  );
};

export default Chatbot;