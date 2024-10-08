import React from "react";
import Image from "next/image";

const footer = () => {
  return (
    <div>
      <footer className="text-gray-600 bg-slate-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-6">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/tshirt" className="cursor-pointer text-gray-600 hover:text-purple-800">Tent</a>
                </li>
                <li>
                  <a href="/shoes" className="cursor-pointer text-gray-600 hover:text-purple-800">Furniture</a>
                </li>
                <li>
                  <a href="/menStyle" className="cursor-pointer text-gray-600 hover:text-purple-800">
                    Lights
                  </a>
                </li>
                <li>
                  <a href="/menStyle" className="cursor-pointer text-gray-600 hover:text-purple-800">
                   Generators
                  </a>
                </li>
                <li>
                  <a href="/menStyle" className="cursor-pointer text-gray-600 hover:text-purple-800">
                    Speakers
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                My Account
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/login" className="cursor-pointer text-gray-600 hover:text-purple-800">Login</a>
                </li>
                <li>
                  <a href="/signup" className="cursor-pointer text-gray-600 hover:text-purple-800">Sign-Up</a>
                </li>
                <li>
                  <a href="/dashboard" className="cursor-pointer text-gray-600 hover:text-purple-800">Dashboard</a>
                </li>
                <li>
                  <a href="/orders" className="cursor-pointer text-gray-600 hover:text-purple-800">Track your Orders</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                About Us
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/contact" className="cursor-pointer text-gray-600 font-normal hover:text-purple-800">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 font-normal cursor-pointer hover:text-purple-800">
                    Customer Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="cursor-pointer text-gray-600 font-normal hover:text-purple-800">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="cursor-pointer text-gray-600 font-normal hover:text-purple-800">
                    Term & Conditions
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm  text-gray-600"
                  >
                    Enter your Email Address
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:text-purple-800 text-base  hover:font-bold ">
                  Button
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Subscribe Our News letter to get the most recent updates about Products
              </p>
            </div>
          </div>
        </div>
        <div className="bg-purple-200">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className=" cursor-pointer drop-shadow-lg  flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image src="/rentalhub.png" height={70} width={250} />
            </a>

            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2023 Rental HUB
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @ABDUL HAADI
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-purple-800">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-purple-800">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-purple-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-purple-800">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
