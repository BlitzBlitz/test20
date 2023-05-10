import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToFragment() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const top = element.offsetTop;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
}

export default ScrollToFragment;
