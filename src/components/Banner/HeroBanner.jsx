import SignUpBtn from "../Buttons/SignUpBtn";

import lineThrough from "../../assets/images/avatar-line-through.png";
import charAvatar from "../../assets/images/content-creators-avatar-group.png";

import mockup1 from "../../assets/images/web-feature-img1.png";
import mockup2 from "../../assets/images/web-feature-img2.png";

import flower from "../../assets/images/flower-shadow-banner.png";
import FeaturedIn from "./FeaturedIn";

// import styles
import "./hero-banner.css";

const HeroBanner = () => {
  const handleMouseMove = (event) => {
    // storing the mouse event
    const xPosition = event.clientX;
    const yPosition = event.clientY;

    // controlling the rotation power
    const rotatePower = 8;

    // figuring out the middle points of the main hero banner
    const mainArea = document.querySelector("#hero--banner");

    const middleX = mainArea.clientWidth / 2;
    const middleY = mainArea.clientHeight / 2;

    // finding out the two elements that i want to rotate
    let mockup1 = document.querySelector("#hero--banner--mockup .mockup-one");
    let mockup2 = document.querySelector("#hero--banner--mockup .mockup-two");

    // first removing the smooth class from these elements
    mockup1.classList.remove("smooth");
    mockup2.classList.remove("smooth");

    // figuring out the roatating angle in percentage by mulitplying with rotatepower

    // increasing the rotate power on roatation
    const rotateX = ((xPosition - middleX) / middleX) * (rotatePower * 3);
    const rotateY = ((yPosition - middleY) / middleY) * (rotatePower * 3);

    // keeping it same in the translate3d effect
    const translateX = ((xPosition - middleX) / middleX) * rotatePower;
    const translateY = ((yPosition - middleY) / middleY) * rotatePower;

    // adding rotation to the elements
    mockup1.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) perspective(5000px) translate3d(${translateX}px, ${translateY}px,0px )`;
    mockup2.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) perspective(5000px) translate3d(${translateX}px, ${translateY}px,0px )`;
  };

  const handleMouseLeave = () => {
    // finding out the two elements that i want to rotate
    let mockup1 = document.querySelector("#hero--banner--mockup .mockup-one");
    let mockup2 = document.querySelector("#hero--banner--mockup .mockup-two");

    // adding rotation to the elements
    mockup1.style.transform = `rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px)`;
    mockup2.style.transform = `rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px)`;

    mockup1.classList.add("smooth");
    mockup2.classList.add("smooth");
  };

  return (
    <section
      id="hero--banner"
      className="container relative flex flex-col items-center pb-16 pt-12 xl:block xl:pb-[100px] xl:pt-12 xlg:pt-[160px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* text area starts */}
      <div className="pb-0 xl:max-w-[60%] xl:pb-[250px] xlg:max-w-[70%] xlg:pb-[300px]">
        <h3 className="text-[32px] font-bold leading-[48px] text-black xl:text-[56px] xl:leading-[76px] xlg:text-[80px] xlg:leading-[100px]">
          Join Forces, Innovate Freely, and Reap the Rewards
        </h3>

        {/* text content */}
        <div className="space-y-6 pt-4 xl:max-w-[450px] xl:space-y-9 xl:pt-16">
          <p className="text-base leading-7 text-[#4c4b49] xl:text-[20px] xl:leading-8">
            The creator subscription platform for the future. Sign up before the
            end of the month &{" "}
            <span className="text-textBlack">take home 85% for 3 months!</span>
          </p>

          {/* button wrapper */}
          <div className="flex gap-4">
            <SignUpBtn />
            <SignUpBtn version="login"  />
          </div>
        </div>
      </div>

      {/* mockup and graphics */}
      <div className="absolute bottom-14 right-0 hidden h-[800px] xl:block xl:w-[124px] xlg:bottom-32 xlg:w-[200px]">
        {/* first graphics */}
        <img
          className="h-full w-full object-contain"
          src={lineThrough}
          alt=""
        />

        {/* content creators graphics */}
        <div className="absolute -left-[100px] top-[50%] min-w-fit -translate-y-[50%]">
          <p className="font-semibold leading-6 text-[#475467] xl:text-[16px] xlg:text-nowrap xlg:text-[20px]">
            Trusted by 60,000+ Creators
          </p>

          <img
            className="h-10 w-[180px] object-contain"
            src={charAvatar}
            alt=""
          />
        </div>
      </div>

      {/* mobile mockup group */}
      <div
        id="hero--banner--mockup"
        className="relative left-[18%] right-auto top-0 z-50 -mt-[50px] mb-[600px] w-fit -translate-x-[18%] xl:absolute xl:left-auto xl:right-[300px] xl:top-[160px] xl:mb-0 xl:mt-0 xl:translate-x-0"
      >
        {/* first image */}
        <img
          className="mockup mockup-one absolute -right-12 -top-6 z-30 h-[660px] min-w-[300px] max-w-[300px] object-contain xl:-right-20 xl:-top-20 xl:h-[600px] xl:min-w-[450px] xl:max-w-[450px] xl:object-fill xlg:-top-6 xlg:right-5 xlg:h-[660px] xlg:min-w-[485px] xlg:max-w-[485px]"
          src={mockup1}
          alt=""
        />
        {/* second image */}
        <img
          className="mockup mockup-two absolute -left-[120px] top-20 z-20 h-[350px] min-w-[250px] max-w-[250px] object-contain xl:-left-[180px] xl:top-8 xl:min-w-[300px] xl:max-w-[300px] xl:object-fill xlg:-right-14 xlg:left-auto xlg:top-20 xlg:min-w-[350px] xlg:max-w-[350px]"
          src={mockup2}
          alt=""
        />
      </div>

      {/* flower shadow */}
      <div className="absolute bottom-28 left-1/2 z-10 hidden h-[440px] -translate-x-1/2 xl:block xl:w-[380px] xlg:w-[440px]">
        <img className="h-full w-full object-contain" src={flower} alt="" />
      </div>

      {/* featured In Area */}
      <FeaturedIn />
    </section>
  );
};

export default HeroBanner;
