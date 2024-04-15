import React from "react";
import num from "../assets/svg/fire.svg"
import num2 from "../assets/svg/chat2.svg"
import num3 from "../assets/svg/wallet.svg"

const Card = ({ imgSrc, title, text }) => {
    return (
      <div className="flex flex-col gap-4 md:gap-6">
        

        <img
          src={imgSrc}
          width={50}
          height={50}
          alt="community image"
          className="mx-auto"
        />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="leading-loose">
         {text}
        </p>
      </div>
    );
  };
  
  const Hero4 = () => {
    return (
      <section className="container mx-auto px-16 lg:px-32 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-center mt-4">Find your dedicated home cleaner</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2 lg:gap-16 text-center mx-auto m-10">
          <Card imgSrc={num} title="Easy Online Booking" text="
          You can book a home cleaning service in Germany in just 60 seconds using our simple booking form.
          "/>
          <Card imgSrc={num2} title="Background-Checked"  text="
          To confirm your booking a deposit for the first hour is required.The 
          amount paid is deducted from the final bill.
          "/>
          <Card imgSrc={num3} title="English Speaking" text="
          You can choose an English-speaking cleaner at no extra cost.
          "/>
        </div>
      </section>
    );
  };
  
  export default Hero4;