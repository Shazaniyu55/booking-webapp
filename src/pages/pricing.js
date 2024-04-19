import Foot2 from "../components/foot2";
import Footer from "../components/footer";
import AdainNavBar from "../components/navbar";
import NiyuPrice from "../components/price";


function Price(){
        return(
                <>
                <AdainNavBar/>

                <section className="container mx-auto mt-28 px-16 lg:px-32 bg-white">
                <h1 className="text-3xl md:text-4xl text-black font-bold text-center lg:text-center mt-4">How much is the home cleaning service?</h1>
                <p className="m-4 tracking-tighter leading-normal">
                You can book a regular home cleaning service starting at €26.90/h. This price is reserved for customers deciding to have their apartment cleaned on at least monthly basis. If you''re interested in a one-time cleaning service, compare the options below, and see which one is the best fit for you.
                </p>
                </section>

               
                <NiyuPrice/>
                
                
                
                
                <Footer/>
                <Foot2/>
                </>
        );
}

export default Price;