import React from "react";
import team1 from '../assets/team/1.png'
import team2 from '../assets/team/2.png'
import team3 from '../assets/team/3.png'
import team4 from '../assets/team/5.png'
import team7 from '../assets/team/team7.jpeg'
import team8 from '../assets/team/team8.jpeg'
import team9 from '../assets/team/team9.jpeg'
import team10 from '../assets/team/team10.jpeg'
import team11 from '../assets/team/team11.jpeg'
import team12 from '../assets/team/team12.jpeg'
import team13 from '../assets/team/team13.jpeg'


import {FaFacebook, FaLinkedinIn} from 'react-icons/fa'
import { Link } from "react-router-dom";


const TeamCard = ({ imgSrc, name, title }) => {
    return (
      <div className=" relative flex flex-col gap-1 md:hover:shadow-lg rounded-xl md:py-10 team-card md:cursor-pointer">
        <img
          src={imgSrc}
        
          style={{width: '150px', height: '150px'}}
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
        <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-center mt-4">
        OUR TEAM
        </h2>
  
        <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-8 mt-16">
          <TeamCard
            imgSrc={team7}
            name="Fabian Lawrence"
            title="CEO and Founder"
          />
          <TeamCard imgSrc={team10} name="Ruth Fabian" title="MD" />
          <TeamCard
            imgSrc={team12}
            name="Queeneeth ibeabuchi"
            title="Secretary"
          />
          <TeamCard
            imgSrc={team8}
            name="Lina Jutila"
            title="Web Developer"
          />

        <TeamCard
            imgSrc={team9}
            name="Lina Jutila"
            title="Web Developer"
          />

          <TeamCard
            imgSrc={team11}
            name="Lina Jutila"
            title="Web Developer"
          />

          <TeamCard
            imgSrc={team13}
            name="Peter Paul"
            title="Manager"
          />
         
         
        </div>
      </section>
    );
  };
  
  export default Team;