import React from 'react';
import AdainNavBar from '../components/navbar';
import Hero7 from '../components/hero7';
import team11 from '../assets/team/team11.jpeg'
import team12 from '../assets/team/team12.jpeg'
import team13 from '../assets/team/team13.jpeg'




const Faq = ({question1, answer1, question2, answer2, question3, answer3}) => {
  return (
    <section
    className="bg-yellow p-10 mt-20 "
  >
    
    
    <div className="md:w-3/4">
    
    <h1 className='line-clamp-2 text-2xl md:text-2xl font-bold text-center lg:text-center mt-4'>Frequently asked questions</h1>

    <p className='text-center mt-10 text-2xl font-bold'>General Info</p>

    
      <details
        className="border mt-10 border-white rounded pt-2 pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
      >
        <summary
          className="list-none font-semibold md:relative text-sm cursor-pointer pr-7"
          >{question1}
          <div
            className="absolute top-0 right-0 bg-blue rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
          >
            <svg
              class="h-5 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </summary>
        <p className="text-xs pt-3">
          {answer1}
         
        </p>
      </details>


      <details
        className="border border-white rounded pt-2 pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
      >
        <summary
          className="list-none font-semibold md:relative text-sm cursor-pointer pr-7"
          >{question2}
          <div
            className="absolute top-0 right-0 bg-blue rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
          >
            <svg
              class="h-5 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </summary>
        <p className="text-xs pt-3">
          {answer2}
          
        </p>
      </details>


      <details
        className="border border-white rounded pt-2 pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
      >
        <summary
          className="list-none font-semibold md:relative text-sm cursor-pointer pr-7"
          >{question3}
          <div
            className="absolute top-0 right-0 bg-blue rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
          >
            <svg
              class="h-5 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </summary>
        <p className="text-xs pt-3">
          {answer3}
        
        </p>
      </details>
      
      
    </div>
  </section>
  );
};




const Card = ({ imgSrc, name, }) => {
    return (
      <div className=" relative flex flex-col gap-1 md:hover:shadow-lg rounded-xl md:py-10 team-card md:cursor-pointer">
        <img
          src={imgSrc}
        
          style={{width: '150px', height: '150px'}}
          alt="team member"
          className="drop-shadow-2xl w-20 sm:w-32 md:mb-5 mb-3 rounded-full border-2 border-yellow mx-auto"
        />
        <h2 className="text-base sm:text-xl font-semibold text-center">{name}</h2>
  
      </div>
    );
  };



function Contact(){
    return(
        <>
        <AdainNavBar/>
        <Hero7 ptag="Contact Us" text="Our team is available from 8 am to 6 pm, Monday-Sunday."/>


        <section className="container mx-auto px-16 lg:px-32 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-center mt-4">We usually reply within 3 hours</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2 lg:gap-16 text-center mx-auto m-10">
          <Card imgSrc={team11} name="Fill out the booking form"/>
          <Card imgSrc={team12} name="Pay for the first hour"/>
          <Card imgSrc={team13} name="Have your place clean"/>

         
        </div>

        
      </section>

      <div className='flex justify-center items-center'>
      <form className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md">

      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
       
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="position" className="block text-sm font-medium text-gray-600">
          Position
        </label>
        <input
          type="text"
          id="position"
          name="position"
          
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="resume" className="block text-sm font-medium text-gray-600">
          Resume (PDF only)
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          className="mt-1 p-2 w-full border rounded-md"
          accept=".pdf"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-600">
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          
          rows="4"
          className="mt-1 p-2 w-full border rounded-md"
          required
        ></textarea>
      </div>

      <div className="flex items-center justify-end">
        <button
          type="submit"
          
          className="bg-adainblack text-adainwhite p-2 rounded-md hover:bg-adainyellow"
        >
          Submit
        </button>
      </div>
    </form>

      </div>

    

    

      <Faq 
      question1="How does the 100% satisfaction guarantee work?" 
      answer1="After the cleaning service, you have 24 hours to check whether you like the results. If you're not satisfied, please contact our customer support via email or phone, and tell us about what went wrong. You may request a free 'correction cleaning' (with the same, or different cleaning lady depending on your preference). You may also be eligible for a discount on future cleanings, as well as a partial or 100% refund."
      question2="Is every cleaner a female?"
      answer2="No! Cleaning lady is a term people commonly use when searching for a cleaning person online. Both male and female cleaners use our marketplace to deliver high-quality cleaning services. We're not trying to promote outdated gender stereotypes."

      question3="What if I need to cancel the cleaning?"
      answer3="To cancel your booking, simply contact our customer support via email or phone specifying the appointment details (appointment date and your name/email address are enough). We'll confirm your cancellation via email. If your cancellation is made no later than 48 hours before the original cleaning date, you'll receive 100% of your deposit back."
      />

    



    </>
        
    );
}


export default Contact;