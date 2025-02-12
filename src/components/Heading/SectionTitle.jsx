import PropTypes from "prop-types";

const SectionTitle = ({ children = "Section Title", color }) => {
  return (
    <h3
      style={{
        color: color ? `${color}` : "",
      }}
      className={`text-center text-[32px] leading-[42px] xl:text-[52px] xl:leading-[64px] xlg:text-[64px] font-bold  xlg:leading-[84px] ${
        color ? `text-[${color}]` : `text-textBlack`
      }  `}
    >
      {children}
    </h3>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
};

export default SectionTitle;
