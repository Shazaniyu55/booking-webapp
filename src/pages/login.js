import React from "react";
import mop from '../assets/svg/broom1.svg'
import Foot2 from "../components/foot2";
import AdainNavBar from "../components/navbar";
import Footer from "../components/footer";
import {Alert} from 'flowbite-react'

function Login(){
    return(
        <>
        <AdainNavBar/>
        <div className="relative  container px-5 md:px-16 mx-auto  p-8 p-10 mt-10">
       <div className="bg-yellow p-10 m-10 rounded-2xl">

        <div className="flex justify-center items-center">
            <img src={mop} alt="broom" width="60px" height="60px"/>

            

        </div>

        <Alert typeof="danger" className="bg-gray">
            If you previously booked cleaning services with us, you will receive a unique log-in link to your account. There are no passwords to set or remember.
            </Alert>
            
           
    <form className='mt-12 flex flex-col gap-8'>
        
          <label className='flex flex-col'>
            <input
              type='email'
              id='email'
             
              placeholder="Email address"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
         

           <button
            type='submit'
            className='bg-black py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary'
          >
            Get login link 
          </button>

            <p>
            What can you see in the dashboard?
            </p>

            <ul>
                <li>Upcoming cleanings</li>
                <li>Completed cleanings</li>
                <li>Subscriptions</li>
                <li>Payments</li>
                <li>Invoices</li>
                <li>Billing data</li>
                
            </ul>


        </form>

            </div>
        </div>
        <Footer/>
        <Foot2/>
        </>
    );
}

export default Login;