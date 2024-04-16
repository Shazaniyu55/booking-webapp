import React from "react";
import num from "../assets/svg/calendar.svg"



const Card = ({ imgSrc, title, text }) => {
    return (
      <div className="flex flex-col gap-4 md:gap-6 p-10">
        
        <img
          src={imgSrc}
          width={50}
          height={50}
          alt="community image"
          className="mx-auto"
        />
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="leading-loose text-white">
         {text}
        </p>

        <div className="relative sm:w-full">
            <input
              type="email"
              placeholder="postal code"
              className=" rounded-full bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none md:w-full font-[500] text-black"
            />
            <button
              variant="outlined"
              
              className="sm:w-fit w-full mt-2 sm:mt-0 capitalize sm:absolute sm:top-2 md:top-[.4rem] sm:right-2 md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-4 px-7 text-white bg-black sm:bg-green-600 hover:border-green-600 hover:bg-green-700 sm:hover:bg-green-600 hover:shadow-2xl hover:shadow-black-600 rounded-full"
            >
              Book now
            </button>
          </div>
      </div>
    );
  };
  
  const Foot2 = () => {
    return (
      <section className="border-t border-neutral-200 bg-black1 px-5 md:px-16 py-10 md:py-16">
        <div className="flex justify-center items-center text-center mx-auto ">
        <p className="leading-loose tracking-tighter line-clamp-3 leading-normal text-xs text-white">© 2024 Home&cleaning - All rights reserved</p>         
        </div>
      </section>
    );
  };
  
  export default Foot2;