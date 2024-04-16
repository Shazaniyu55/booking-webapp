import React, { useState } from 'react';



const Faq = () => {
  return (
    <section
    className="bg-white mt-20 md:w-4/5 md:px-10 md:pb-8 md:pt-10 rounded-lg md:flex justify-between flex-row"
  >
    
    <div className="w-full md:w-2/6">
      <p className="text-3xl md:text-4xl font-bold text-center lg:text-center mt-4">
      Frequently asked questions
      </p>
    </div>
    <div className="md:w-3/4">
      <details
        className="border border-white rounded md:pt-2 md:pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none md:open:bg-white md:duration-300"
      >
        <summary
          className="list-none font-semibold relative text-sm cursor-pointer pr-7"
          >Do I have to allow the use of cookies?
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
          Yes, in order to use My Page, you must allow the use of cookies in
          your browser.<br /><br />
          See also: What is a cookie and what does it do?
        </p>
      </details>
      <details
        className="border border-white rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
      >
        <summary
          className="list-none font-semibold relative text-sm cursor-pointer pr-7"
          >How do I change my My Page Password?
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
          Yes, in order to use My Page, you must allow the use of cookies in
          your browser.<br /><br />
          See also: What is a cookie and what does it do?
        </p>
      </details>
      
      
    </div>
  </section>
  );
};

export default Faq;
