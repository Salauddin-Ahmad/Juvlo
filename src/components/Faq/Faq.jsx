import { useState } from "react";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      title: "Is there a free trial available?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can I change my plan later?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "What is your cancellation policy?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can other info be added to an invoice?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How does billing work?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How do I change my account email?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  const handleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="container pb-[80px] xlg:pb-[250px] mx-auto">
      <div className="space-y-4 text-center xl:space-y-5">
        <h3 className="text-[32px] font-semibold leading-[48x] text-[#101828] xl:text-[44px] xl:leading-[56px] xlg:text-[64px] xlg:leading-[84px]">
          Frequently asked questions{" "}
        </h3>
        <p className="leading-7 text-[#667085] xl:text-[18px]">
          Everything you need to know about the product and billing.
        </p>
      </div>
      {/* faq wrapper */}
      <div className="flex flex-col gap-4 pt-14 xl:gap-5 xl:pt-[90px]">
        {faqList.map((item, index) => (
          <SingleFaq
            isOpen={openIndex === index}
            openFaq={() => handleFaq(index)}
            faq={item}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
