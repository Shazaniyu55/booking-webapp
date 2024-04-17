import React from "react";
import email from "../assets/svg/email.svg"
import phone from "../assets/svg/phone.svg"
import chat from "../assets/svg/chat.svg"
import clean from '../assets/clean6.jpg'


const Card = ({ imgSrc, title, desc }) => {
    return (
        <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
          

        <img
          src={imgSrc}
          width="60px"
          height="60px"
          alt="features"
          className="mx-auto"
        />

            <div>
          <h3 className="text-lg text-white font-semibold mb-2">{title}</h3>
          <p className="leading-loose tracking-tighter leading-normal text-white">{desc}</p>
        </div>
        
      </div>
    );
  };

function Hero3(){
        return(
            <section className="relative  container px-5 md:px-16 mx-auto bg-black1 mt-4">
            <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
            <div className="flex gap-5 md:gap-10 flex-col flex-1">
                <div className="flex flex-col gap-4">
      
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left">
                   English-speaking customer support 7 days/week
                  </h2>
                </div>
                <h2 className="text-3xl md:text-2xl font-bold text-white text-center lg:text-left">
                Always ready to help
                  </h2>
                <Card
                  imgSrc={phone}
                  title="VIA PHONE"
                  desc="Get in contact with us via phone by calling +49 30 588 494 40 where are always available by 8 am - 6 pm (Monday - Sunday)"
                />
                <Card
                  imgSrc={email}
                  title="VIA EMAIL"
                  desc="Get in contact with us via email by sending a mail to info@spicandspan.de where are always available 24/7 (every day)"
                />

                <Card
                  imgSrc={chat}
                  title="VIA CHAT"
                  desc="You can also reach us by Chat on our website 8 am - 6 pm (Monday - Sunday)"
                />
              </div>

              <div className="relative w-full flex-1">
                <img
                  src={clean}
                  width="300px"
                  height="300px"
                  alt="video banner"
                  className="object-cover  w-full"
                />
                
              </div>
             
            </div>
          </section>
        );
}

export default Hero3;