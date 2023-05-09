import { Link } from "react-router-dom";
import { logo } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="px-16 py-5 bg-black-100 flex flex-col items-center lg:flex-row justify-between bg-tertiary">
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        <p className="text-white text-[18px] font-bold cursor-pointer flex ">
          PakaShum`
        </p>
      </Link>
      <h1 className="text-center my-3">
        &copy; 2023 PakaShum` Academy. All Rights Reserved
      </h1>
      <div className="social ">
        <FontAwesomeIcon
          icon={faFacebook}
          className="mx-3 hover:text-green"
          size="2x"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="mx-3 hover:text-green"
          size="2x"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="mx-3 hover:text-green"
          size="2x"
        />
      </div>
    </div>
  );
};
export default Footer;
