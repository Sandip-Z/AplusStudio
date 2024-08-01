import { BussinessBox } from "../../components/BussinessBox";
import SectionHeading from "../../components/SectionHeading";
import { RedCircle } from "../../assets/icons/RedCircle";
import {
  SearchBussinessIcon,
  FinnacialPlanningSystemIcon,
  MarketAnalysisIcon,
  WebsiteAndAppIcon,
} from "../../assets/icons";
import { Circles } from "../../components/Circles";

const SERVICES = [
  {
    title: "Bussiness Idea Planning",
    detail: "We present you a proposal and discuss niffty-gritty like",
    icon: SearchBussinessIcon,
    iconBackground: "bg-[#F1F7FF]",
  },
  {
    title: "Financial Planning System",
    detail: "Protocols apart from aengage models, pricing billing",
    icon: FinnacialPlanningSystemIcon,
    iconBackground: "bg-[#FFF7E3]",
  },
  {
    title: "Development Website and App",
    detail: "Communication protocols apart from engagement models",
    icon: WebsiteAndAppIcon,
    iconBackground: "bg-[#FFF2F8]",
  },
  {
    title: "Market Analysis Project",
    detail: "Protocols apart from aengage models, pricing billing",
    icon: MarketAnalysisIcon,
    iconBackground: "bg-[#DEFFEE]",
  },
];

const BussinessSection = () => {
  return (
    <section
      className="flex flex-col lg:flex-row px-5 sm:px-0 pt-20"
      id="what-we-do"
    >
      <div className="my-auto lg:w-[550px] relative text-center lg:text-left">
        <div className="service-custom-leaf hidden lg:block" />
        <SectionHeading
          text="How can we help your Bussiness?"
          paragraph="We build readymade websites, mobile applications, and elaborate online business services."
        />
        <div className="absolute mt-16 hidden sm:block">
          <Circles />
        </div>
      </div>
      <div className="w-full relative sm:mt-20 lg:mt-0 overflow-x-hidden lg:overflow-x-visible pb-5">
        <div className="service-custom-bg hidden sm:block overflow-hidden" />
        <div className="grid sm:grid-cols-2 lg:ml-auto lg:mr-10 gap-8 service-grid lg:w-[750px] p-10">
          {SERVICES.map(({ title, detail, icon, iconBackground }) => (
            <BussinessBox
              Icon={icon}
              heading={title}
              subheading={detail}
              iconBackground={iconBackground}
              key={title}
            />
          ))}
        </div>
        <div className="absolute bottom-[20px] right-[0px] sm:right-[25px]x sm:bottom-[100px] sm:right-[50px] overflow-hidden">
          <RedCircle />
        </div>
      </div>
    </section>
  );
};

export { BussinessSection };
