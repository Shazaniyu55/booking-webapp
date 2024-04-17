import React from "react";
import bg from "../assets/clean1.jpg"


const Hero7 = ({ptag, text}) => {

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
          {ptag}
             </p>
          
        </h1>
        <p className="text-lg text-white leading-normal sm:leading-loose my-4 md:my-6">
        {text}
        </p>

        

        
      </div>
    

     
        
      
    </section>
  );
};

export default Hero7;