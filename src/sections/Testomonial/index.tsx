import { RedCircle } from "../../assets/icons/RedCircle";
import { Circles } from "../../components/Circles";
import { HeaderCircle } from "../../components/HeaderCircle";
import SectionHeading from "../../components/SectionHeading";
import { Slider } from "../../components/Slider";

const Testomonial = () => {
  return (
    <section>
      <div className="text-center">
        <SectionHeading
          text="What our happy client say"
          paragraph="Several selected clients, who already believe in our service."
        />
      </div>
      <div className="flex">
        <div className="relative">
          <Slider />
          <div className="absolute bottom-0 left-[20px] z-[-1]">
            <RedCircle />
          </div>
          <div className="absolute top-[-15px] left-[300px] z-[-1] w-[175px] overflow-hidden">
            <Circles />
          </div>
        </div>
        <div className="ml-auto mr-20 relative">
          <img
            src="/clientsGroup.png"
            width={300}
            height={355}
            alt="A+ Studios clients"
          />
          <div className="absolute top-20 z-[-1]">
            <HeaderCircle fill="#FFF5DB" width="184" height="184" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testomonial };
