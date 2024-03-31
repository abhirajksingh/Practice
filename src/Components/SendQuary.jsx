import React, { useState } from "react";
import "./Accordian.css";
import post from "./logo/post.svg";
// import arrowUp from "./logo/arrowUp.svg"

function SendQuary() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleAccordian = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className=" m-auto mb-16 w-[70%] screen-mobile">
      <div className="item">
        <p className="img px-5">
          <img src={post} alt="message logo" className=" w-12" />
        </p>
        <div className=" one">
          <p className=" font-semibold pb-3 text-gray-500 text-2xl">
            Send Query
          </p>
          <p className=" text-gray-400 text-lg">Lorem ipsum dolor sit amet</p>
        </div>
        <div onClick={toggleAccordian}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`icon w-6 h-6 text-gray-600 rotate-0 transition-all duration-300 ease-in-out  cursor-pointer mr-6 ${
              isVisible ? " rotate-180 transition-all duration-300" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div
          className={`hidden-box font-semibold ${
            isVisible ? "active-box-send " : ""
          }`}
        >
          <div className=" w-[90%] m-auto">
            <form>
              <div className="grid form-input gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-blue-500  block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="order-no"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Order no.
                  </label>
                  <input
                    type="text"
                    id="order-no"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-blue-500 block w-full p-2.5 "
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
              </div>
              <div className="form-after-div mb-6">
                <label
                  htmlFor="query"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your Query
                </label>
                <textarea
                  type="text"
                  id="query"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
              <div className="form-after-div justify-center flex">
                <button
                  type="submit"
                  className="text-white bg-pink-600 hover:bg-pink-800 focus:ring-4  font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendQuary;
