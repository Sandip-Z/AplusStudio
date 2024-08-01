import { BluePlayButton } from "../../assets/icons/BluePlayButton";
import { HeaderCircle } from "../../components/HeaderCircle";
import SectionHeading from "../../components/SectionHeading";
import { motion } from "framer-motion";

const AboutSectionAnimationVariation = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.4,
    },
  },
};

const AboutSection = () => {
  return (
    <section
      className="flex flex-col lg:flex-row  px-5 sm:px-10 pt-20"
      id="service"
    >
      <div className="mx-auto lg:w-[830px] relative">
        <motion.img
          src="/aboutImage.png"
          alt="Aplus members in board meeting."
          width={550}
          height={372}
          className="shadow-lg lg:w-[550px] lg:h-[372px]"
          viewport={{ once: true }}
          variants={AboutSectionAnimationVariation}
          initial={"initial"}
          whileInView={"animate"}
        />
        <div className="absolute top-[40%] left-[40%] sm:left-[42%]">
          <BluePlayButton />
        </div>
        <div className="absolute bottom-[-60px] right-[-50px] z-[-1] hidden lg:block">
          <HeaderCircle fill="#FFF5DB" />
        </div>
      </div>
      <div className="w-full my-auto">
        <div className="lg:w-[480px] ml-auto lg:mr-20 relative pt-10 lg:pt-0">
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
