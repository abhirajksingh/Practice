import React from 'react';
import './Accordian.css';
import question from "./logo/question.svg"
import notebook from "./logo/notebook.svg"
import arrowUp from "./logo/arrow-up-right.svg"

function FaqTravel() {
  return (
    <div className=" m-auto grid grid-cols-2 gap-5 screen-mobile faw-data  w-[70%]" >
      <div className="item-faq-travel  bg-white">
        <p className="img px-5">
          <img src={question} alt="message logo" className='  w-12' />
        </p>
        <div className=' one'>
          <p className=" font-semibold pb-3 text-gray-500 text-2xl">FAQ</p>
          <p className=' text-gray-400 text-lg'>Lorem ipsum dolor sit amet</p>
        </div>
        <img src={arrowUp} alt="arrow" className=' arrow w-12 hidden' />
      </div>

      <div className="item-faq-travel  bg-white">
        <p className="img px-5">
          <img src={notebook} alt="message logo" className='  w-12' />
        </p>
        <div className=' one'>
          <p className=" font-semibold pb-3 text-gray-500 text-2xl">Travel Guide</p>
          <p className=' text-gray-400 text-lg'>Lorem ipsum dolor sit amet</p>
        </div>
        <img src={arrowUp} alt="arrow" className='arrow w-12 hidden' />
      </div>
    </div>
  )
}

export default FaqTravel;
