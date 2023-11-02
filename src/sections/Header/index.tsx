import { Button } from "../../components/Button";
import { Circles } from "../../components/Circles";
import { HeaderCircle } from "../../components/HeaderCircle";
import SectionHeading from "../../components/SectionHeading";

const HEADING = "A Digital Product Agency";
const PARAGRPH =
  "Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.";

const Header = () => {
  return (
    <header className="flex relative space-between mb-40 mt-5">
      <div className="my-auto">
        <div className="w-[500px]">
          <SectionHeading text={HEADING} paragraph={PARAGRPH} />
        </div>
        <div className="mt-8">
          <Button label="Contact Now" />
        </div>
        <div className="absolute bottom-[35px] z-[-1] left-[-40px]">
          <Circles />
        </div>
      </div>
      <div className="ml-auto relative">
        <div className="absolute z-[-1] left-[-50px]">
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
        <div className="header-custom-leaf" />
      </div>
    </header>
  );
};

export { Header };
