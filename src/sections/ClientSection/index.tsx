import SectionHeading from "../../components/SectionHeading";

const clients = [
  { name: "google", imageSrc: "/googleLogo.svg" },
  { name: "airbnb", imageSrc: "/airbnbLogo.svg" },
  { name: "uber-eats", imageSrc: "/uberEatsLogo.svg" },
  { name: "amazon", imageSrc: "/amazonLogo.svg" },
];

const ClientSection = () => {
  return (
    <section className="flex justify-between">
      <div>
        <SectionHeading
          text="Our Client"
          paragraph={
            "Several selected clients, who already belive in our service"
          }
        />
      </div>
      <div className="mr-20">
        <div className="flex">
          {clients.map(({ name, imageSrc }) => (
            <img key={name} src={imageSrc} className="mx-5" alt={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ClientSection };
