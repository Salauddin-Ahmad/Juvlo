import PropTypes from "prop-types";

const SignUpBtn = ({ size = "sm", version = "sign-up", url = "#" }) => {
  return (
    <a
      className={`rounded-[160px] text-base font-medium leading-5 ${
        size === "mx" ? "px-7 py-3 text-[18px]" : "px-8 py-4"
      } ${
        version === "login"
          ? "bg-[rgba(255,41,25,0.20)] text-textBlack"
          : "bg-[linear-gradient(270deg,#BE0D00_0%,#FF2919_100%)] text-white"
      } `}
      href={url}
    >
      {" "}
      {version === "login" ? "Login" : "Sign Up"}
    </a>
  );
};

SignUpBtn.propTypes = {
  size: PropTypes.string,
  version: PropTypes.string,
  url: "string",
};

export default SignUpBtn;
