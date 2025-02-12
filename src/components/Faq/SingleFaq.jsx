import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import PropTypes from "prop-types";
import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";

import "./faq.css";

const SingleFaq = ({ faq, isOpen, openFaq }) => {
  const [contentOpen, setContentOpen] = useState(false);

  useEffect(() => {
    setContentOpen(isOpen);
  }, [isOpen]);

  return (
    <div className="single-faq">
      <div className="space-y-2 p-4 xl:p-6 rounded-lg bg-[#fff]">
        <div
          onClick={() => openFaq()}
          className="flex items-center justify-between cursor-pointer"
        >
          <h4 className=" text-lg xl:text-2xl text-[#101828] font-semibold ">
            {faq.title}
          </h4>

          {/* icon */}
          <div className=" text-lg xl:text-2xl">
            {contentOpen ? <FiMinusCircle /> : <GoPlusCircle />}
          </div>
        </div>

        <Collapse isOpened={contentOpen}>
          <p className="max-w-[1285px] text-[14=5px] xl:text-[18px] leading-7 text-[#667085]  ">
            {" "}
            {faq.description}{" "}
          </p>
        </Collapse>

        {/* shadow */}
      </div>
      <div className={`shadow ${contentOpen ? "" : "hide"} `}></div>
    </div>
  );
};

SingleFaq.propTypes = {
  faq: PropTypes.object,
  isOpen: PropTypes.bool,
  openFaq: PropTypes.func,
};

export default SingleFaq;
