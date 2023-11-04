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
    iconBackground: "bg-[#00DA71]",
  },
];

const BussinessSection = () => {
  return (
    <section className="flex my-20">
      <div className="my-auto w-[375px] relative">
        <div className="service-custom-leaf" />
        <SectionHeading
          text="How can we help your Bussiness?"
          paragraph="We build readymade websites, mobile applications, and elaborate online business services."
        />
        <div className="absolute mt-32">
          <Circles />
        </div>
      </div>
      <div className="w-full relative">
        <div className="service-custom-bg" />
        <div className="grid grid-cols-2 ml-auto mr-10 gap-8 service-grid w-[750px]">
          {SERVICES.map(({ title, detail, icon, iconBackground }) => (
            <BussinessBox
              Icon={icon}
              heading={title}
              subheading={detail}
              iconBackground={iconBackground}
            />
          ))}
        </div>
        <div className="absolute bottom-[40px] right-[50px]">
          <RedCircle />
        </div>
      </div>
    </section>
  );
};

export { BussinessSection };
