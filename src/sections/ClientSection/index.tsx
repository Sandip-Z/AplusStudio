import SectionHeading from "../../components/SectionHeading";
import { motion } from "framer-motion";

const clients = [
  { name: "google", imageSrc: "/googleLogo.svg" },
  { name: "airbnb", imageSrc: "/airbnbLogo.svg" },
  { name: "uber-eats", imageSrc: "/uberEatsLogo.svg" },
  { name: "amazon", imageSrc: "/amazonLogo.svg" },
];

const clientAnimationVariants = {
  initial: {
    x: -10,
    opacity: 0,
  },
  animate: (index) => ({
    x: 0,
    opacity: 1,
    transition: { type: "spring", delay: index * 0.2 },
  }),
};

const ClientSection = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between px-5 sm:px-0 pt-10">
      <div className="text-center lg:text-left lg:w-[280px] lg:mb-0">
        <SectionHeading
          text="Our Client"
          paragraph={
            "Several selected clients, who already belive in our service"
          }
        />
      </div>
      <div className="mx-auto lg:ml-0 lg:mr-20 my-auto">
        <div className="flex gap-10 overflow-auto pt-10">
          {clients.map(({ name, imageSrc }, index) => (
            <motion.img
              key={name}
              src={imageSrc}
              alt={name}
              className="w-32 lg:w-auto"
              variants={clientAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              custom={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ClientSection };
