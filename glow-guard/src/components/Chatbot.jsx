import React from 'react';
import chatboticon from '../assets/chatboticon.png';

const Chatbot = () => {
  return (
    <div className='relative flex mt-[66px] flex-col items-end mr-18'>


        <img src={chatboticon} alt="chatbot-icon" 
        className='relative z-10'/>
        
        <div className='
        absolute
        bottom-2
        right-18
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