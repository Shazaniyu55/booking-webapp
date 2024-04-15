import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Community from "../components/hero2";
import Services from "../components/service";
import Testimonials from "../components/testimonials";
import Pricing from "../components/pricing";
import ChatRobot from "../components/chatbot";
import Hero3 from "../components/hero3";
import Hero4 from "../components/hero4";

function Home(){

 
    

    return(
        <div className="dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <NavBar/>
            <div className="w-full text-white">
            <Hero />
            </div>

            <Community/>
            <Services/>
            <Hero3/>
            <Hero4/>
            <Pricing/>
            

           
          
            <Testimonials/>


            
            
            <Footer/>
        </div>

        

        
    );
}

export default Home;