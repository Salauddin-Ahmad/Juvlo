import PropTypes from "prop-types";

const CommonSubTItle = ({ children = "Subtitle", color = "#333" }) => {
  return (
    <p
      style={{
        color: color,
      }}
      className=" text-[14px] xl:text-[18px] font-medium leading-6 xl:leading-7 max-w-[370px] "
    >
      {" "}
      {children}{" "}
    </p>
  );
};

CommonSubTItle.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
};

export default CommonSubTItle;
