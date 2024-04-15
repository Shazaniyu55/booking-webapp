import React from "react";
import num from "../assets/svg/num1.svg"
import num2 from "../assets/svg/num2.svg"
import num3 from "../assets/svg/num3.svg"

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
  
  const Community = () => {
    return (
      <section className="container mx-auto px-16 lg:px-32 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-center mt-4">How does it work?</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2 lg:gap-16 text-center mx-auto m-10">
          <Card imgSrc={num} title="Fill out the booking form" text="
          Select the type of cleaning, specify the date and time, and
          give us the address of your property.you can also select from a range of special requests.
          "/>
          <Card imgSrc={num2} title="Pay for the first hour"  text="
          To confirm your booking a deposit for the first hour is required.The 
          amount paid is deducted from the final bill.
          "/>
          <Card imgSrc={num3} title="Have your place clean" text="
          we`ll match you with a verified cleaning person,who`ll clean your apartment.
          After the cleaning.You`ll receive a cleaning summary.
          "/>
        </div>
      </section>
    );
  };
  
  export default Community;