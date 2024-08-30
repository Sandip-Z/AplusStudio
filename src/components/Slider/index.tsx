import { useEffect, useState } from "react";

const DATA = [
  {
    id: 0,
    image: "/5.jpg",
    name: "NetWave Solutions",
    review:
      "Redefining Online Company, As an online company for Online Products. As a knowledgeable consumer in the digital era, you strive to stay informed about the latest and greatest online products.",
  },
  {
    id: 1,
    image: "/9.jpg",
    name: "Sophia Bennett",
    review:
      "Look no further – A+ Studio is here to revolutionize your online shopping experience. Paving its way into the hearts of Gen-Z audiences, this online company offers a diverse range of cutting-edge products that cater to your every need.",
  },
  {
    id: 2,
    image: "/6.jpg",
    name: "Ethan Carter",
    review:
      "One of the standout features of A+ Studio is their commitment to quality. Uniting with renowned brands and trusted suppliers, they ensure that only top-notch products make it to your virtual doorstep.",
  },
  {
    id: 3,
    image: "/8.jpg",
    name: "Liam Hayes",
    review:
      " A+ Studio brings reliability and longevity to the forefront. What truly sets A+ Studio apart from the competition is the level of authenticity embedded in every product. As a gen-z consumer, you prioritize uniqueness and individuality.",
  },
  {
    id: 4,
    image: "/10.jpg",
    name: "Sampson Khánh",
    review:
      "Their product lineup boasts a wide array of exclusive items, designed to make a statement. Stand out from the crowd with fashion-forward apparel, avant-garde accessories, and quirky home",
  },
];

const SliderDOT = ({ fill = "#E7F0FC" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill={fill} />
  </svg>
);

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let NEXT = undefined;
      if (currentIndex === DATA.length - 1) {
        NEXT = 0;
      } else {
        NEXT = currentIndex + 1;
      }
      setCurrentIndex(NEXT);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="custom-clip-path-for-slider mb-10 lg:mb-0 sm:mx-auto lg:mx-0">
        <img src={DATA[currentIndex]?.image} alt="" />
      </div>
      <div className="lg:w-[500px] my-auto px-5 sm:px-10 lg:px-0">
        <h6 className="text-2xl pb-4 font-bold sm:text-center lg:text-left">
          {DATA[currentIndex].name}
        </h6>
        <p className="text-base text-gray-600 min-h-[150px] sm:min-h-[100px] lg:min-h-[120px]">
          {DATA[currentIndex].review}
        </p>
        <div className="flex justify-center lg:justify-start gap-4 mt-8">
          {DATA?.map((_, index) => (
            <div
              onClick={() => setCurrentIndex(index)}
              className="hover:cursor-pointer"
            >
              <SliderDOT
                fill={index === currentIndex ? "#2639ED" : "#E7F0FC"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Slider };
