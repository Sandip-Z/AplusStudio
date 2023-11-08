import { motion } from "framer-motion";

const bussinessCardAnimationVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", delay: 0.2 },
  },
};

interface IBussinessProps {
  Icon: any;
  heading: string;
  subheading: string;
  iconBackground: string;
}

const BussinessBox = ({
  Icon,
  heading,
  subheading,
  iconBackground,
}: IBussinessProps) => {
  return (
    <motion.div
      className="rounded-[40px] shadow-lg w-[auto] sm:w-[308px] sm:h-[379px] p-8 bg-white z-10 border lg:border-0"
      variants={bussinessCardAnimationVariants}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
    >
      <div
        className={`${iconBackground} w-[121px] h-[121px] flex justify-center m-auto items-center rounded-[20px]`}
      >
        <Icon />
      </div>
      <div className="mt-4 lg:mt-8">
        <h6 className="text-center text-lg sm:text-2xl">{heading}</h6>
        <p className="mt-4 lg:mt-8 text-center text-sm sm:text-base text-gray-500">
          {subheading}
        </p>
      </div>
    </motion.div>
  );
};

export { BussinessBox };
