import { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/main-logo.png";
import SignUpBtn from "../Buttons/SignUpBtn";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const linkStyle = ` text-base xl:text-[18px] font-medium text-textBlack leading-6`;

  const [isNavOpen, setIsNavOpen] = useState(false);

  const navlistRef = useRef();
  const hamburgerRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (
        !navlistRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsNavOpen(false);
      }
    });
  }, []);

  return (
    <section className="container pt-6 xl:pt-12">
      <div className="flex items-center justify-between relative">
        {/* logo */}
        <div className=" w-[120px] h-[35px]  xl:w-[180px] xl:h-[40px]">
          <img src={logo} alt="" className="w-full h-full object-contain" />
        </div>

        {/* mobile hamburger */}
        <div
          ref={hamburgerRef}
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="bg-pinkRed text-white rounded-full  xl:hidden w-fit shadow-lg "
        >
          <Hamburger toggle={setIsNavOpen} toggled={isNavOpen} size={20} />
        </div>

        {/* menu links */}
        <div
          ref={navlistRef}
          className={`flex xl:items-center gap-4  items-start  xl:gap-12 flex-col xl:flex-row absolute w-full sm:w-[60%] top-16 left-0 sm:left-auto sm:right-0 xl:relative xl:w-fit xl:top-auto xl:left-auto bg-white xl:bg-transparent p-4 xl:p-0 rounded-3xl xl:rounded-none duration-500 ease-in-out shadow-2xl xl:shadow-none overflow-hidden z-50 ${
            isNavOpen ? `h-[200px]` : `h-0 py-0 xl:h-fit`
          } `}
        >
          <a className={linkStyle} href="#">
            Our Mission
          </a>
          <a className={linkStyle} href="#">
            Support
          </a>
          <a className={linkStyle} href="#">
            Login
          </a>
          <SignUpBtn size="mx" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
