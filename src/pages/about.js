import Foot2 from "../components/foot2";
import Footer from "../components/footer";
import Hero7 from "../components/hero7";
import AdainNavBar from "../components/navbar";
import Team from "../components/team";
import {FaPhone, FaArrowRight, FaGlobe, FaVoicemail} from 'react-icons/fa'
import bg from "../assets/clean22.jpeg"


function About(){
        return(
                <>
                <AdainNavBar/>

                <div name='support' className='w-full mt-10'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={bg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h3 className='text-5xl font-bold py-6 text-center'>Meet The Team.</h3>
              <p className='py-4 text-3xl text-slate-300 text-center'>The most convenient way to book a cleaning for your home & office.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <FaPhone size={50} className='w-16 p-4 bg-black1 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Sales</h3>
                      <p className='text-gray-600 text-xl'>
                      Lawrencegebäudereinigung. Home & Office Cleaning is a curated online marketplace for home & office cleaning services. We work with background-checked, experienced cleaners in major European cities, including Berlin, Munich, Frankfurt and Stuttgart in Germany. Our journey started in September 2016 in Berlin, and since then we helped thousands of people in 40+ cities to find a legally-registered cleaning person for their home and office.

                        </p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <FaArrowRight size={50} className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <FaGlobe size={50} className='w-16 p-4 bg-black1 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                      <p className='text-gray-600 text-xl'>

                      We continuously strive to provide you with the most convenient way to get a clean & comfortable environment for your home & office. We eliminate barriers in the access to cleaning services by working with English-speaking cleaners and offering an easy & secure way to book a cleaning appointment with a quick-to-submit booking form. Our "100% satisfaction guarantee" policy gives you peace of mind when scheduling a cleaning appointment.
                      </p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <FaArrowRight size={50} className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <FaVoicemail size={50} className='w-16 p-4 bg-black1 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <FaArrowRight size={50} className='w-5 ml-2' /></p>
                  </div>
              </div>
          </div>
      </div>
  </div>


        
                <Team/>
                <Footer/>
                <Foot2/>
                </>
        );
}

export default About;