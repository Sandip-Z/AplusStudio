import { Button } from "../../components/Button";
import { Circles } from "../../components/Circles";
import SectionHeading from "../../components/SectionHeading";
import { motion } from "framer-motion";
import { useIsDesktop } from "../../hooks/useIsDesktop";

const newsletterAnimationVariants = {
  initial: { x: 0, opacity: 0 },
  animate: (isDesktop) => ({
    x: isDesktop ? -80 : 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.2 },
  }),
};

const NewsLetter = () => {
  const [isDesktop] = useIsDesktop();

  return (
    <div className="relative my-32 lg:my-40 lg:mr-20 px-5 lg:px-0">
      <section className="bg-[#F4F9FF] rounded-[75px] flex flex-col lg:flex-row lg:justify-between">
        <div className="lg:py-20 px-5 py-10 lg:px-20 text-center">
          <SectionHeading
            text="Subscribe Newsletter"
            paragraph="I will update good news and promotion service not spam"
          />
        </div>
        <div className="bg-[#2639ED] lg:w-[550px] lg:relative rounded-[75px] py-20 lg:custom-rectangle">
          <motion.form
            className="lg:bg-white py-1 px-5 lg:px-0 lg:pl-5 rounded-full lg:w-[400px] flex flex-col lg:flex-row lg:absolute lg:left-[-80px] lg:top-[38%] lg:shadow z-100"
            variants={newsletterAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            custom={isDesktop}
          >
            <input
              placeholder="Enter your email address"
              className="lg:w-[238px] rounded-full p-3 lg:p-0"
              type="email"
            />
            <div className="mr-2 lg:mr-0 mt-10 lg:mt-0 text-center">
              <Button label="Contact Now" />
            </div>
          </motion.form>
        </div>
      </section>
      <motion.div
        className="bg-red-200 absolute w-[178px] h-[178px] newsletter-custom-leaf"
        variants={{
          initial: { scale: 0 },
          animate: { scale: 1, transition: { type: "just", delay: 0.4 } },
        }}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
      />
      <div className="absolute top-[-60px] right-[0px] lg:right-[-40px] z-[-1] w-[175px] overflow-hidden">
        <Circles />
      </div>
    </div>
  );
};

export { NewsLetter };
