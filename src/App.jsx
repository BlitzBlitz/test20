import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  EarthCanvas,
} from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
