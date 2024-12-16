import About from "./Sections/About";
import Banner from "./Sections/Banner";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import {SVGMaskEffectDemo} from "./Sections/Quote";
import Testimonials from "./Sections/Testimonials";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";


export default function Home() {
  return (
      <body className="min-h[100vh] max-w-screen my-0 mx-auto overflow-x-hidden bg-black">
    <div className="">


      <Banner />
      <Navbar />
      <Hero /> 
      <SVGMaskEffectDemo />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
     
    </div>
      </body>
  );
}
