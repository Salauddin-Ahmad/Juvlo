import { FaGithub, FaLinkedin, FaSlack, FaInstagram, FaTwitter, FaReddit, FaFacebook } from "react-icons/fa";
import logo from "/logo.png";
import Button from "../Button"; // Assuming Button component is already created


const Footer = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="container pt-14 relative flex items-center bg-gray-900 text-white mx-4 p-4 md:p-8 overflow-hidden h-[300px] md:h-[230px]  border rounded-xl my-5">
        <div className="flex-1 px-8">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Become Part of the Fastest Growing Community of Creators
          </h2>
        </div>
        <div className="flex-1 text-right relative">
          <img
            src="/mobile-mockup.png"
            alt="Community of Creators"
            className="w-[80%] md:max-w-lg absolute bottom[-40%] left-1/2 transform -translate-x-1/2 hidden md:block"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="container flex flex-col md:flex-row justify-between mx-4 items-center p-6 bg-gradient-to-r border-b border-black">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-4">
          {/* <Link to="/"> */}
            <img src={logo} alt="Logo" className="w-36" />
          {/* </Link> */}
          <div className="flex gap-4 my-2 text-red-600 text-2xl">
            <a href="#" className="hover:text-red-700">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-700">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-red-700">
              <FaSlack />
            </a>
           
            <a href="#" className="hover:text-red-700">
              <FaReddit />
            </a>
          
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p className="mb-3 text-gray-700">Ready to join the amazing Zuvlo community?</p>
          <div className="flex gap-4">
            <Button text="Sign Up" />
            <Button text="Login" />
          </div>
        </div>
      </footer>

      {/* Bottom Text Section */}
      <div className="flex flex-col md:flex-row justify-center items-center text-center gap-4 py-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} All rights</p>
        <p className="cursor-pointer hover:underline">Terms of Service</p>
        <p className="cursor-pointer hover:underline">Privacy & Cookies Policy</p>
      </div>
    </>
  );
};

export default Footer;
