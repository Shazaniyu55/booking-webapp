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

function Home(){

 
    

    return(
        <div className="dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <NavBar/>
            <Hero />
           

            <Community/>
            
            <Hero3/>
            
            <Hero4/>
            <Services/>
            <Testimonials/>
            <Hero6/>
            <Faq/>
            <Hero5/> 
            <Footer/>
            <Foot2/>
        </div>

        

        
    );
}

export default Home;