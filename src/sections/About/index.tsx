import { BluePlayButton } from "../../assets/icons/BluePlayButton";
import { HeaderCircle } from "../../components/HeaderCircle";
import SectionHeading from "../../components/SectionHeading";

const AboutSection = () => {
  return (
    <section className="flex mb-32">
      <div className="w-[830px] relative">
        <img
          src="/aboutImage.png"
          alt="Aplus members in board meeting."
          width={550}
          height={372}
          className="shadow-lg"
        />
        <div className="absolute top-[40%] left-[40%]">
          <BluePlayButton />
        </div>
        <div className="absolute bottom-[-60px] right-[-50px] z-[-1]">
          <HeaderCircle fill="#FFF5DB" />
        </div>
      </div>
      <div className="w-full my-auto">
        <div className="w-[480px] mx-auto relative">
          <SectionHeading
            text="Great Digital Product Agency since 2016"
            paragraph="Our Business Plan is a written document describing a company's core business activites, objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according to their reuirements."
          />
          <div className="about-custom-leaf " />
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
