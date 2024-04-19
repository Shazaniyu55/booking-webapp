import React from "react";
import team7 from '../assets/team/team7.jpeg'
import team8 from '../assets/team/team8.jpeg'
import team9 from '../assets/team/team9.jpeg'
import team10 from '../assets/team/team10.jpeg'
import team11 from '../assets/team/team11.jpeg'
import team12 from '../assets/team/team12.jpeg'
import team13 from '../assets/team/team13.jpeg'
import team14 from '../assets/team/team14.jpeg'



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
  
      </div>
    );
  };
  
  const Team = () => {
    return (
      <section className="container mx-auto px-5 md:px-16 lg:px-24 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-center mt-4">
        OUR TEAM
        </h2>
  
        <div className="mx-auto md:grid grid-cols-2 lg:grid-cols-3 md:gap-y-8 sm:gap-10 mt-16">
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
            imgSrc={team11}
            name="Lina Jutila"
            title="Web Developer"
          />

          <TeamCard
            imgSrc={team13}
            name="Peter Paul"
            title="Manager"
          />

<TeamCard
            imgSrc={team14}
            name="Peter Paul"
            title="Manager"
          />
         
         
        </div>
      </section>
    );
  };
  
  export default Team;