import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
} from "../components";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const location = useLocation();

  const { pathname, hash } = useLocation();
  const [homeComponent, setHomeComponent] = useState(null);
  useEffect(() => {
    const loadHomeComponent = async () => {
      // Dynamically import the module
      const module = await import("../components/Hero");

      // Access the default export of the module
      const DynamicComponent = module.default;

      // Set the dynamically loaded component
      setHomeComponent(<Hero />);
    };

    loadHomeComponent();
  }, []);

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
          {homeComponent}
        </div>
        <About />
        <Experience />
        <Feedbacks />
        <Works />

        <div className="relative z-0 relative">
          <Contact />
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
