import React from 'react'
import './Accordian.css';
import FaqTravel from "./FaqTravel";
import usercircle from "./logo/usercircle.svg"
import line from "./logo/line.svg";
import help from "./logo/help.svg";
import flag from "./logo/flag.png";


function Header() {
  return (
    <div>
      <div className=' flex py-2 px-16  header-nav'>
        <div className=' flex-1 text-3xl font-bold text-pink-600'>LOGO</div>
        <div className=' help-section'>
          <ul  className=' flex gap-4  pr-4 pt-2'>
            <li className=' pl-4 font-semibold flex'><img src={help} alt="help logo" className='mb-1 w-8 pr-1 mr-2' /><span>Help</span></li>
            <li className=' px-4 flex'><img src={flag} alt="flag" className=' w-10 h-5 pr-1 pt-1 mr-2'/><span className=' font-semibold pr-2'>Deutsh</span> | <span className=' pl-2 font-semibold'>EUR</span></li>
          </ul>
        </div>
        <div className=' flex logo-section bg-gray-200 gap-2 rounded-full px-2 py-1'>
          <p className=' open-request'>Open Requests</p>
          <img src={usercircle} alt="user icon" className=' w-8' />
          <img src={line} alt="user icon" className=' w-8' />
        </div>
      </div>
      <div className=' relative header h-80 bg-teal-100 mb-16'>
        <div className=' text-center'>
          <h1 className=' pt-20 text-5xl font-semibold'>Hello, how can we help you</h1>
          <p className=' text-slate-600 text-2xl pt-4'>Find Travel guide, FAQ, chat,</p>
        </div>
        <div className=' faqtravel absolute w-full -bottom-14'>
          <FaqTravel />
        </div>
      </div>
    </div>
  )
}

export default Header;


