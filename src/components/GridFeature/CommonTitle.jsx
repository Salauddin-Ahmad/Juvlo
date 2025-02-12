import PropTypes from "prop-types";

const CommonTitle = ({ children = "Common Title", color = "#141414" }) => {
  return (
    <h4
      style={{
        color: color,
      }}
      className=" text-[22px] leading-7  xl:text-[32px] font-semibold xl:leading-[42px]   "
    >
      {children}
    </h4>
  );
};

CommonTitle.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
};

export default CommonTitle;
