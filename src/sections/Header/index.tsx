import { Button } from "../../components/Button";
import { Circles } from "../../components/Circles";
import { HeaderCircle } from "../../components/HeaderCircle";
import SectionHeading from "../../components/SectionHeading";

const HEADING = "A Digital Product Agency";
const PARAGRPH =
  "Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.";

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row relative space-between mb-20 sm:mb-40 mt-5">
      <div className="my-auto">
        <div className="lg:w-[500px] text-center lg:text-left px-5 sm:px-0">
          <SectionHeading text={HEADING} paragraph={PARAGRPH} />
        </div>
        <div className="mt-8 text-center lg:text-left mb-8 lg:mb-0">
          <Button label="Contact Now" />
        </div>
        <div className="hidden lg:block absolute lg:bottom-[35px] z-[-1] lg:left-[-40px]">
          <Circles />
        </div>
      </div>
      <div className="ml-auto relative pl-5 sm:pl-0">
        <div className="absolute z-[-1] lg:left-[-50px] left-[-70px] top-[-40px] lg:top-[0px]">
          <HeaderCircle />
        </div>
        <div>
          <img
            src="/headerImage.png"
            alt="A+ Studio members on board meeting."
            width="754px"
            height="512px"
          />
        </div>
        <div className="header-custom-leaf hidden sm:block" />
      </div>
    </header>
  );
};

export { Header };
