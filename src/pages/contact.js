import React from 'react';
import AdainNavBar from '../components/navbar';


function Contact(){
    return(
        <>
        <AdainNavBar/>
        <section
        className="bg-black text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-20 sm:mt-20 md:mt-20"
        id="contact"
      >
        <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
          <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold">
            <p className="text-white mt-20">
            Contact Us
               </p>
            
          </h1>
          <p className="text-lg text-white leading-normal sm:leading-loose my-4 md:my-6">
          Contact Us
          </p>
  
          
  
          
        </div>
      
  
        
          
        
      </section>
        </>
        
    );
}


export default Contact;