import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Community from "../components/hero2";
import Services from "../components/service";
import Testimonials from "../components/testimonials";
import Hero3 from "../components/hero3";
import Hero4 from "../components/hero4";
import Hero5 from "../components/hero5";
import Faq from "../components/faq";
import Foot2 from "../components/foot2";
import Hero6 from "../components/hero6";
import HomeTeam from "../components/homeTeam";

function Home(){

 
    

    return(
        <div className="duration-200 overflow-hidden">
            <NavBar/>
            <Hero />
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
           

            <Community/>
            
            <Hero3/>
            
            <Hero4/>
            <Services/>
            <Testimonials/>

            <HomeTeam/>
            <Hero6/>
            <Faq/>
            <Hero5/> 
            <Footer/>
            <Foot2/>
        </div>

        

        
    );
}

export default Home;