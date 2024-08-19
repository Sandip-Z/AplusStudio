import { motion } from "framer-motion";

interface SectionHeadingProps {
  text: string;
  paragraph?: string;
  id?: string;
}

const fadeInAnimationVariants = {
  initial: { x: -10, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, delay: 0.5 },
  },
};

const SectionHeading = ({ text, paragraph, id }: SectionHeadingProps) => {
  return (
    <div>
      <motion.h5
        className="font-bold text-2xl lg:text-[40px] relative z-10 leading-[50px]"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        {text}
      </motion.h5>
      {paragraph ? (
        <motion.p
          className="mt-8 text-[#565656] leading-6 relative z-10"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          {paragraph}
        </motion.p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SectionHeading;
