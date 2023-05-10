import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  EarthCanvas,
} from "../components";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const location = useLocation();

  const { pathname, hash } = useLocation();

  useEffect(() => {
    const element = hash ? document.querySelector(hash) : null;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return (
    <div>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Feedbacks />
        <Works />

        <div className="relative z-0 relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <EarthCanvas />
          </div>
          <Contact />
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
