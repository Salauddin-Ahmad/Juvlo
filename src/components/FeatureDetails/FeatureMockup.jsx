import { useRef } from "react";
import PropTypes from "prop-types";
import mockup1 from "../../assets/images/web-feature-img3.png";
import mockup2 from "../../assets/images/web-feature-img4.png";
import mockup3 from "../../assets/images/web-feature-img5.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import "./animation.css";

const FeatureMockup = ({ elements }) => {
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();

  const imgHolder = useRef();

  const container = useRef();

  // image animation
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to(img2.current, {
        scrollTrigger: {
          trigger: elements[1].current,
          start: "5% 40%",
          end: "30% 50%",
          toggleActions: "play complete reverse reverse",
          // markers: {
          //   startColor: "lightBlue",
          //   endColor: "lightBlue",
          // },
        },
        top: "0%",
        duration: 1,
        ease: "Power1.easeInOut",
      }).to(img3.current, {
        scrollTrigger: {
          trigger: elements[2].current,
          start: "5% 40%",
          end: "30% 50%",
          toggleActions: "play complete reverse reverse",
          // markers: {
          //   startColor: "blue",
          //   endColor: "blue",
          // },
        },
        top: "0%",
        duration: 1,
        ease: "Power1.easeInOut",
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="sticky top-5 sm:pt-8 xl:pt-20 xlg:pt-28">
      {/* image holder */}
      <div
        ref={imgHolder}
        className="ft-animation-holder relative overflow-hidden rounded-[30px] sm:h-[480px] sm:w-[220px] xl:h-[580px] xl:w-[280px] xlg:h-[680px] xlg:w-[320px]"
      >
        <img
          ref={img1}
          src={mockup1}
          className="active h-full w-full object-cover"
          alt=""
        />
        <img
          ref={img2}
          src={mockup2}
          className="h-full w-full object-cover"
          alt=""
        />
        <img
          ref={img3}
          src={mockup3}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeatureMockup;

FeatureMockup.propTypes = {
  sectionContainer: PropTypes.node,
  elements: PropTypes.array,
};
