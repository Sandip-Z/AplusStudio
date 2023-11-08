import { RedCircle } from "../../assets/icons/RedCircle";
import { Circles } from "../../components/Circles";
import { HeaderCircle } from "../../components/HeaderCircle";
import SectionHeading from "../../components/SectionHeading";
import { Slider } from "../../components/Slider";
import { motion } from "framer-motion";

const ImagesAnimationVariant = {
  initial: {
    opacity: 0,
    x: -90,
    rotate: 90,
  },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      delay: 0.5,
      type: "spring",
    },
  },
};

const flatImageAnimationVariant = {
  initial: {
    opacity: 0,
    x: -90,
    rotate: 90,
  },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      delay: 0.8,
      type: "keyframe",
    },
  },
};

const redCircleAnimationVariant = {
  initial: {
    y: -100,
    x: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      type: "spring",
    },
  },
};

const Testimonial = () => {
  return (
    <section className="mb-10">
      <div className="text-center px-5 lg:px-0">
        <SectionHeading
          text="What our happy client say"
          paragraph="Several selected clients, who already believe in our service."
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="relative">
          <Slider />
          <motion.div
            className="absolute lg:bottom-0 lg:left-[20px] sm:bottom-[40%] sm:left-[25%] z-[-1] hidden sm:block"
            variants={redCircleAnimationVariant}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            <RedCircle />
          </motion.div>
          <div className="absolute top-[-15px] left-[300px] sm:top-[-15px] sm:left-[517px] lg:top-[-15px] lg:left-[300px] z-[-1] w-[175px] overflow-hidden hidden sm:block">
            <Circles />
          </div>
        </div>
        <div className="ml-auto mr-20 relative hidden lg:block">
          <motion.img
            src="/clientsGroup.png"
            width={300}
            height={355}
            alt="A+ Studios clients"
            variants={ImagesAnimationVariant}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute top-20 z-[-1] hidden sm:block"
            variants={flatImageAnimationVariant}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            <HeaderCircle fill="#FFF5DB" width="184" height="184" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial };
