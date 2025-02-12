import banner1 from "../../assets/images/brands-logo1.png";
import banner2 from "../../assets/images/brands-logo2.png";
import banner3 from "../../assets/images/brands-logo3.png";
import banner4 from "../../assets/images/brands-logo4.png";

const FeaturedIn = () => {
  const brandLogos = [banner1, banner2, banner2, banner3, banner4];

  return (
    <div>
      <div className="w-fit mx-auto text-center text-[24px] font-bold leading-8 text-textBlack  ">
        <p>Featured</p>
        <p>In</p>
      </div>

      {/* wrapper */}
      <div className="flex items-center justify-center gap-6 xl:gap-0 xl:justify-between pt-5 flex-wrap relative z-50">
        {brandLogos.map((item, index) => (
          <img
            className=" w-[120px] h-[40px] xl:w-[140px]  xl:h-[55px] object-contain "
            key={index}
            src={item}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedIn;
