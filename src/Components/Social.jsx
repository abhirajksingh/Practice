import React, {useState} from 'react';
import './Accordian.css';
import instagram from "./logo/instagram.svg"
import users from "./logo/users.svg"
import facebook from "./logo/facebook.svg"
import twitter from "./logo/twitter.svg"
import linkedin from "./logo/linkedin.svg"

function Social() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleAccordian = ()=>{
    setIsVisible(!isVisible);
  }
  return (
    <div className=" m-auto mb-16 w-[70%] screen-mobile" >
      <div className="item">
        <p className="img px-5">
          <img src={users} alt="social-icon" className=' w-12' />
        </p>
        <div className=' one'>
          <p className=" font-semibold pb-3 text-gray-500 text-2xl">Social</p>
          <p className=' text-gray-400 text-lg'>Lorem ipsum dolor sit amet</p>
        </div>
        <div onClick={toggleAccordian}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`icon w-6 h-6 text-gray-600 rotate-0 transition-all duration-300 ease-in-out  cursor-pointer mr-6 ${isVisible ? " rotate-180 transition-all duration-300" : ""}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div className={`hidden-box font-semibold ${isVisible ? "active-box " : ""}`}>
          <div className=' w-[70%] m-auto flex justify-between'>
            <div>
              <img src={facebook} alt="facebook logo" className='social-icon w-10 ml-2' />
              <p className='pt-2 text-sm'>Facebook</p>
            </div>
            <div>
              <img src={instagram} alt="instagram logo" className='social-icon w-10 ml-3' />
              <p className='pt-2 text-sm'>Instagram</p>
            </div>
            <div>
              <img src={twitter} alt="instagram logo" className='social-icon twitter w-10 ml-1' />
              <p className='pt-2 text-sm'>Twitter</p>
            </div>
            <div>
              <img src={linkedin} alt="facebook logo" className='social-icon twitter w-10 ml-2' />
              <p className='pt-2 text-sm'>Linkedin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social;
