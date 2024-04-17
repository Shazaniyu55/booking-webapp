import React from "react";
import bg from "../assets/clean1.jpg"


const Hero = () => {

  const styles = {
    backgroundImage: `url('${bg}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    
    
  };


  return (
    <section
      className="text-center  flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-20 sm:mt-20 md:mt-20"
      id="home"
      style={styles}
    >
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold">
          <p className="text-white mt-20">
          English-Speaking Cleaning Services in Germany
             </p>
          
        </h1>
        <p className="text-lg text-white leading-normal sm:leading-loose my-4 md:my-6">
        Book a verified cleaning person for your home or office in Germany.
        </p>

        

        
      </div>
    

      <div className="container mx-auto px-5 md:px-16 p-10  sm:w-[800px] ">
      <div className="bg-blue rounded-lg text-white py-16 sm:py-24 ">
      <div className="flex flex-col items-center gap-4 sm:gap-6  md:w-4/5 lg:w-1/2 text-center mx-auto">
      <p className="leading-loose font-[500]">
          Enter your postal code to get started:
          </p>

          <div className="relative sm:w-full">
            <input
              type="email"
              placeholder="Enter your postal code"
              className=" rounded-full bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none md:w-full font-[500] text-black"
            />
            <button
              variant="outlined"
              
              className="md:w-fit w-full mt-2 md:mt-0 capitalize sm:absolute sm:top-2 md:top-[.4rem] sm:right-2 md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-4 px-7 text-white bg-yellow hover:border-green-600 hover:bg-green-700 sm:hover:bg-green-600 hover:shadow-2xl hover:shadow-black-600 rounded-full"
            >
              Book now
            </button>
          </div>
      </div>
        
        </div>
      
      </div>
        
      
    </section>
  );
};

export default Hero;