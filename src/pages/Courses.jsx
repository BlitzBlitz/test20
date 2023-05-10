import { Hero, Navbar } from "../components";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function Courses() {
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
          <Hero isContact={true} />
          <Hero isContact={true} />
          <Hero isContact={true} />
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}
