import SectionHeading from "../../components/SectionHeading";

const clients = [
  { name: "google", imageSrc: "/googleLogo.svg" },
  { name: "airbnb", imageSrc: "/airbnbLogo.svg" },
  { name: "uber-eats", imageSrc: "/uberEatsLogo.svg" },
  { name: "amazon", imageSrc: "/amazonLogo.svg" },
];

const ClientSection = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between">
      <div className="text-center lg:text-left lg:w-[280px] lg:mb-0">
        <SectionHeading
          text="Our Client"
          paragraph={
            "Several selected clients, who already belive in our service"
          }
        />
      </div>
      <div className="mx-auto lg:ml-0 lg:mr-20 my-auto">
        <div className="flex gap-10 overflow-auto py-10">
          {clients.map(({ name, imageSrc }) => (
            <img
              key={name}
              src={imageSrc}
              alt={name}
              className="w-32 lg:w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ClientSection };
