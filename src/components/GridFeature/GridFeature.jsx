import CommonTitle from "./CommonTitle";
import "./grid-feature.css";

import figure1 from "../../assets/images/grid-feature-group1.png";
import figure2 from "../../assets/images/grid-feature3.png";
import figure3 from "../../assets/images/grid-feature4.png";
import figure4 from "../../assets/images/grid-feature5.png";
import figure5 from "../../assets/images/grid-feature-group-2.png";
import figure6 from "../../assets/images/grid-feature6.png";
import CommonSubTItle from "./CommonSubTItle";
const GridFeature = () => {
  return (
    <section className="container pt-[54px]">
      {/* title */}
      <h3 className="text-center text-[32px] font-bold leading-[42px] text-[#333] xl:text-[46px] xl:leading-[56px] xlg:text-[64px] xlg:leading-[84px]">
        Everything You Need to Succeed, All in One Place
      </h3>

      {/* grid area wrapper */}
      <div className="grid-feature space-y-8 py-[60px] xlg:py-[120px]">
        {/* top grid */}
        <div className="flex flex-col gap-4 xl:grid xl:grid-cols-12 xlg:gap-8">
          {/* first */}
          <div className="single-content bg-[#F9BDB5] p-4 xl:col-span-4 xl:p-9">
            <CommonTitle color="#292929">AI Features</CommonTitle>

            {/* img wrapper */}
            <div className="my-2 xl:my-6">
              <div className="h-[250px] w-[300px] xl:h-[388px] xl:w-[420px]">
                <img
                  className="h-full w-full object-contain"
                  src={figure1}
                  alt=""
                />
              </div>
            </div>

            {/* subtitle */}
            <CommonSubTItle color="#52225E">
              Use a pre-designed template or personalize with video, stickers,
              fonts, and more
            </CommonSubTItle>
          </div>

          {/* second */}
          <div className="flex flex-col gap-4 xl:col-span-8 xlg:gap-8">
            {/* top one */}
            <div className="single-content flex w-full flex-col items-center justify-between gap-4 bg-[#F94F64] px-8 py-4 xl:flex-row xl:gap-0 xl:px-[46px] xl:py-1.5">
              <div className="space-y-4">
                <CommonTitle color=" #131313">24/7 Support</CommonTitle>

                <CommonSubTItle color=" #131313">
                  Schedule all your cards and gifts now and we’ll send them
                  later
                </CommonSubTItle>
              </div>

              <div className="h-[250px] w-[300px] xl:h-[295px] xl:w-[375px]">
                <img
                  className="h-full w-full object-contain xl:object-cover"
                  src={figure2}
                  alt=""
                />
              </div>
            </div>

            {/* lower one */}
            <div className="flex flex-col gap-4 xl:flex-row xlg:gap-8">
              <div className="single-content flex-1 bg-[#C00E01] px-8 py-5">
                {/* image */}
                <div className="mx-auto mb-6 h-[135px] w-[180px] xl:h-[145px] xl:w-[220px]">
                  <img
                    src={figure3}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <CommonTitle color="#FFF">Subscriptions</CommonTitle>

                  <CommonSubTItle color="#FFF">
                    Access all your gifts and save up your Givingli Cash
                  </CommonSubTItle>
                </div>
              </div>
              <div className="single-content relative flex-1 bg-[#FF2919] px-8 pt-6">
                <div className="mb-24 space-y-4 xl:mb-0">
                  <CommonTitle color="#FFF">Smart Messaging</CommonTitle>

                  <CommonSubTItle color="#FFF">
                    Track your gifts, group chats, and sent cards
                  </CommonSubTItle>
                </div>

                {/* image */}
                <div className="absolute -bottom-[260px] left-1/2 h-[395px] w-[370px] -translate-x-1/2 scale-[.7] overflow-hidden rounded-3xl xl:-bottom-[240px] xl:scale-100">
                  <img
                    src={figure4}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom grid */}
        <div className="flex flex-col gap-4 xl:grid xl:grid-cols-12 xlg:gap-8">
          <div className="single-content relative bg-[#DB0A15] py-0 pb-36 pl-[46px] pt-5 xl:col-span-8 xl:py-[145px]">
            <div className="relative z-30 space-y-4">
              <CommonTitle color="#FFFFFF">Pay-to-View</CommonTitle>

              <CommonSubTItle color="#FFFFFF">
                Send as a group with friends or individually
              </CommonSubTItle>
            </div>
            {/* images */}
            <div className="absolute -right-[250px] -top-3 z-10 h-[465px] w-[790px] xl:-right-8 xl:-top-4 xl:scale-100">
              <img
                className="h-full w-full scale-50 object-cover xl:scale-100"
                src={figure5}
                alt=""
              />
            </div>
          </div>
          <div className="single-content relative bg-[#F94F64] p-5 xl:col-span-4 xl:p-10">
            <div className="mb-24 space-y-4 xl:mb-0">
              <CommonTitle color="#000000">Advanced Insights</CommonTitle>

              <CommonSubTItle color="#000000">
                Never miss a birthday or special occasion again
              </CommonSubTItle>
            </div>

            {/* images */}
            <div className="absolute -bottom-[140px] -right-5 h-[250px] w-[285px] xl:-bottom-[150px] xl:right-0 xl:h-[375px] xl:w-[375px]">
              <img
                src={figure6}
                alt=""
                className="h-full w-full object-contain xl:object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridFeature;
