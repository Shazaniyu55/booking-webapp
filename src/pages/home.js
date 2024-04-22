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
import Postal from "../components/postal";
import ChatRobot from "../components/chatbot";

function Home(){

 
    

    return(
        <div>
            <NavBar/>
            <Hero />
            <Postal/>
           <ChatRobot/>

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