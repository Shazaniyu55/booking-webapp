import React, { useState } from 'react';
import plus from "../assets/svg/plus.svg"
import minus from "../assets/svg/minus.svg"
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="question" onClick={toggleOpen}>
        <h3>{question}</h3>
        <span>{isOpen ? <img src={minus} width="30"/> : <img src={plus} width="30"/>}</span>
      </div>
      {isOpen && 
      <div className="container w-full mx-auto px-16 lg:px-32">
        <h1 className='text-left'>{answer}</h1>
        </div>}
    </div>
  );
};

const Faq = () => {
  return (
    <section className="container mx-auto translate-y-20 bg-white">
      <div className="flex justify-center items-center text-center mx-auto m-10">
        <div className="flex flex-col gap-4 md:gap-6 p-10">
          <h2 className="title text-3xl md:text-4xl font-bold text-center lg:text-center">Frequently asked questions</h2>
          <FAQItem
            question="Do I have to be at home during the cleaning service?"
            answer="It is completely up to you. Some customers enjoy the opportunity to have some time for themselves out in the city while their apartment is being cleaned. Others like to be around to have a chance to give the cleaning lady directions when needed. The only thing you need to make sure is that your cleaner has a way to access your home."
          />
          <FAQItem
            question="Will the cleaning lady bring the cleaning solvents & equipment with her/him?"
            answer="If you would like your cleaner to bring cleaning solvents, mop, and vacuum cleaner with him/her, you need to specify that option in the booking form. If you forget to do it while booking, simply contact our customer support via email, phone, or chat, and we'll add it to your booking."
          />
          {/* Add more FAQ items here */}

          <FAQItem
            question="Will the cleaning lady bring the cleaning solvents & equipment with her/him?"
            answer="If you would like your cleaner to bring cleaning solvents, mop, and vacuum cleaner with him/her, you need to specify that option in the booking form. If you forget to do it while booking, simply contact our customer support via email, phone, or chat, and we'll add it to your booking."
          />

            <FAQItem
            question="Will the cleaning lady bring the cleaning solvents & equipment with her/him?"
            answer="If you would like your cleaner to bring cleaning solvents, mop, and vacuum cleaner with him/her, you need to specify that option in the booking form. If you forget to do it while booking, simply contact our customer support via email, phone, or chat, and we'll add it to your booking."
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
