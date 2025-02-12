import PropTypes from "prop-types";
import SignUpBtn from "../Buttons/SignUpBtn";

const SingleFeature = ({ feature }) => {
  // Split the title into parts, wrapping the highlighted word in a span
  const parts = feature.title.split(
    new RegExp(`(${feature.highlightWord})`, "gi")
  );

  // Reconstruct the title with the highlighted word wrapped in a span
  const highlightedTitle = parts
    .map((part) =>
      part.toLowerCase() === feature.highlightWord.toLowerCase()
        ? `<span class="text-pinkRed">${part}</span>`
        : part
    )
    .join("");

  return (
    <div className="py-[160px]">
      <p className="py-1.5 px-5 mb-4 rounded-[160px] backdrop-blur-[20px] bg-[rgba(22,22,19,0.04)] w-fit">
        {feature.category}
      </p>

      {/* title */}
      <h3
        className="text-5xl font-semibold leading-[64px] text-textBlack "
        dangerouslySetInnerHTML={{ __html: highlightedTitle }}
      />
      {/* title */}

      {/* subtitle */}
      <p className="py-8 text-[18px] leading-7 text-[rgba(22,22,19,0.75)] max-w-[535px] ">
        {feature.subtitle}
      </p>

      {/* button */}
      <SignUpBtn size="mx"/>
    </div>
  );
};

SingleFeature.propTypes = {
  feature: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    highlightWord: PropTypes.string,
  }),
};

export default SingleFeature;
