import React, { useState } from "react";
import table from "../assets/svg/table.svg"
import house from "../assets/svg/house.svg"



const Card = ({  title, text }) => {
    const [selectedOption, setSelectedOption] = useState("regular");

    const handleOptionChange = (option) => {
      setSelectedOption(option);
    };
    return (
      <div className="flex flex-col gap-4 md:gap-6 p-10">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-center mt-4">{title}</h2>
        <p className="leading-loose tracking-tighter leading-normal text-left w-full text-black1">
         {text}
        </p>

        <div className="flex justify-center items-center">
        <input
              type="radio"
              id="regular"
              name="cleaningOption"
              value="regular"
              checked={selectedOption === "regular"}
              onChange={() => handleOptionChange("regular")}
             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-black1 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="regular" className="ml-2 mr-8">
              Regular Cleaning
            </label>

            <input
              type="radio"
              id="one-time"
              name="cleaningOption"
              value="one-time"
              checked={selectedOption === "one-time"}
              onChange={() => handleOptionChange("one-time")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-black1 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
             
            />
            <label htmlFor="one-time" className="ml-2">
              One-Time Cleaning
            </label>
        </div>

        {selectedOption === "regular" ? (
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 gap-8 md:gap-2 lg:gap-16 text-center mx-auto m-10 p-4">
            {/* first grid */}
        <div className="relative container md:w-[400px] mx-auto px-5 md:px-16 flex flex-col gap-5 mt-10 p-8 bg-white">

        <img
          src={table}
          width="50px"
          height="50px"
          alt="community image"
          className="mx-auto"
        />

        <h1>BASIC CLEANING</h1>

        <button className="bg-yellow hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Learn More</button>

        </div>

            {/* second grid */}
            <div className="relative container md:w-[400px] mx-auto px-5 md:px-16 flex flex-col gap-5 mt-10 bg-white p-8">

        <img
          src={house}
          width="50px"
          height="50px"
          alt="community image"
          className="mx-auto"
        />

        <h1>DEEP CLEANING</h1>

        <button className="bg-yellow hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Learn More</button>

            </div>
            </div>
          ) : (
           
        <div className="relative container md:w-[400px] mx-auto px-5 md:px-16 flex flex-col gap-5 mt-10 bg-white p-8">

         <img
          src={table}
          width={50}
          height={50}
          alt="community image"
          className="mx-auto"
        />

        <h1>REGULAR BASIC CLEANING</h1>

        <button className="bg-yellow hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Learn More</button>

        </div>
              
           
          )}

      </div>
    );
  };
  
  const Hero6 = () => {




    return (
      <section className="container mx-auto translate-y-20 bg-yellow">
        <div className="flex justify-center items-center text-center mx-auto m-10">
          <Card imgSrc={table} title="Cleaning services for homes & offices" text="
          You can book a regular cleaning service starting at only €26.90/h. This low price is reserved only for customers ordering cleanings on a regular schedule. How can you benefit from lower prices? Simply select in the booking form how often you want your home cleaning service: once per week, two, three, or four weeks. We can even arrange cleaning multiple times per week if this is what you need. There's no need to sign any long-term contracts or pre-pay for a number of appointments. To cancel your cleaning plan, pause it for a few weeks, or skip some dates, you just need to send us a simple email 48 hours before the next cleaning appointment. If you need the cleaning service just once, or prefer more flexibility, choose one of the one-time cleaning services..
          "/>

         
        </div>
      </section>
    );
  };
  
  export default Hero6;