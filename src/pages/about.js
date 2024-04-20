import Foot2 from "../components/foot2";
import Footer from "../components/footer";
import Hero7 from "../components/hero7";
import AdainNavBar from "../components/navbar";
import Team from "../components/team";


function About(){
        return(
                <>
                <AdainNavBar/>

                
                
                <Hero7 ptag="Meet The Team." text="The most convenient way to book a cleaning for your home & office."/>

                <section className="container mx-auto px-16 lg:px-32 bg-white">
                <h1 className="text-3xl md:text-4xl text-black font-bold text-center lg:text-center mt-4">What do we do?</h1>
                <p className="m-4 tracking-tighter leading-normal">
                Lawrencegebäudereinigung. Home & Office Cleaning is a curated online marketplace for home & office cleaning services. We work with background-checked, experienced cleaners in major European cities, including Berlin, Munich, Frankfurt and Stuttgart in Germany. Our journey started in September 2016 in Berlin, and since then we helped thousands of people in 40+ cities to find a legally-registered cleaning person for their home and office.
                </p>
                </section>

                <section className="container mx-auto mt-10 px-16 lg:px-32 bg-white">
                <h1 className="text-3xl md:text-4xl text-black font-bold text-center lg:text-center mt-4">
                Our Mission
                </h1>
                <p className="m-4 tracking-tighter leading-normal">
                We continuously strive to provide you with the most convenient way to get a clean & comfortable environment for your home & office. We eliminate barriers in the access to cleaning services by working with English-speaking cleaners and offering an easy & secure way to book a cleaning appointment with a quick-to-submit booking form. Our "100% satisfaction guarantee" policy gives you peace of mind when scheduling a cleaning appointment.
                </p>
                </section>
                <Team/>
                <Footer/>
                <Foot2/>
                </>
        );
}

export default About;