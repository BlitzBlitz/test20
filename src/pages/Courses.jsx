import { Hero, Navbar } from "../components";
import Footer from "../components/Footer";
export default function Courses() {
  return (
    <div>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}
