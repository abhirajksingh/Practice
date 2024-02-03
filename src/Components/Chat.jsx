import React, {useState} from 'react';
import './Accordian.css';
import telegram from "./logo/telegram.svg"
import whatsapp from "./logo/whatsapp.svg"
import instagram from "./logo/instagram.svg"
import message from "./logo/message.svg"

function Accordian() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleAccordian = ()=>{
    setIsVisible(!isVisible);
  }
  return (
    <div className=" m-auto mb-16 mt-32 w-[70%] mobile screen-mobile" >
      <div className="item">
        <p className="img px-5">
          <img src={message} alt="message logo" className=' w-12' />
        </p>
        <div className=' one'>
          <p className=" font-semibold pb-3 text-gray-500 text-2xl">Chat</p>
          <p className=' text-gray-400 text-lg'>Lorem ipsum dolor sit amet</p>
        </div>
        <div onClick={toggleAccordian}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={` icon w-6 h-6 text-gray-600 rotate-0 transition-all duration-300 ease-in-out  cursor-pointer mr-6 ${isVisible ? " rotate-180 transition-all duration-300" : ""}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div className={`hidden-box  font-semibold ${isVisible ? "active-box " : ""}`}>
          <div className='flex img-div justify-between w-[70%] m-auto'>
            <div>
              <img src={telegram} alt="telegram logo" className='social-icon w-10 ml-2' />
              <p className='pt-2 text-sm'>Telegram</p>
            </div>
            <div>
              <img src={whatsapp} alt="whatsapp logo" className=' social-icon  w-10 ml-3' />
              <p className='pt-2 text-sm'>WhatsApp</p>
            </div>
            <div>
              <img src={instagram} alt="instagram logo" className='social-icon w-10 ml-2' />
              <p className='pt-2 text-sm'>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordian;
