import React from "react";
import clean1 from '../assets/clean1.jpg'
import {FaFacebook, FaLinkedinIn} from 'react-icons/fa'
import { Link } from "react-router-dom";


const TeamCard = ({ imgSrc, name, title }) => {
    return (
      <div className=" relative flex flex-col gap-1 md:hover:shadow-lg rounded-xl md:py-10 team-card md:cursor-pointer">
        <img
          src={imgSrc}
          width={130}
          height={130}
          alt="team member"
          className="drop-shadow-2xl w-20 sm:w-32 md:mb-5 mb-3 rounded-full border-2 border-yellow mx-auto"
        />
        <h2 className="text-base sm:text-xl font-semibold text-center">{name}</h2>
        <p className="text-center sm:text-base text-sm">{title}</p>
        <div className="flex md:flex-col gap-3 md:absolute md:bottom-12 md:right-8 md:translate-y-10 icons md:transition-all md:duration-500 md:opacity-0 mx-auto md:mx-0 md:text-yellow">
          <Link
            target="_blank"
            to="#"
          >
           <FaFacebook scale={20} className="text-xl hover:text-yellow cursor-pointer md:hover:text-black"/>
          </Link>
          <Link target="_blank" to="#">
            <FaLinkedinIn scale={20} className="text-xl hover:text-yellow cursor-pointer md:hover:text-black"/>
          </Link>
         
        </div>
      </div>
    );
  };
  
  const Team = () => {
    return (
      <section className="container mx-auto px-5 md:px-16 lg:px-24 mt-20">
        <h2 className="title text-center md:w-1/2 mx-auto">
        OUR TEAM
        </h2>
  
        <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-8 mt-16">
          <TeamCard
            imgSrc={clean1}
            name="Saimon Harmer"
            title="CEO and Founder"
          />
          <TeamCard imgSrc={clean1} name="Aaron Nunez" title="Founder" />
          <TeamCard
            imgSrc={clean1}
            name="Abdulwahab Ekekhide"
            title="Web Designer"
          />
          <TeamCard
            imgSrc={clean1}
            name="Lina Jutila"
            title="Web Developer"
          />
         
         
        </div>
      </section>
    );
  };
  
  export default Team;