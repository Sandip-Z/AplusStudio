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
        <h5 className="font-bold text-2xl">Our Client</h5>
        <p>Several selected clients, who already belive in our service</p>
      </div>
      <div>
        <div className="flex">
          {clients.map(({ name, imageSrc }) => (
            <img key={name} src={imageSrc} alt={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ClientSection };
