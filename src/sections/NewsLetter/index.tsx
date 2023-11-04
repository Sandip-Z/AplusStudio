import { Button } from "../../components/Button";
import { Circles } from "../../components/Circles";
import SectionHeading from "../../components/SectionHeading";

const NewsLetter = () => {
  return (
    <div className="relative my-40 mr-20">
      <section className="bg-[#F4F9FF] rounded-[75px] flex justify-between">
        <div className="py-20 px-20">
          <SectionHeading
            text="Subscribe Newsletter"
            paragraph="I will update good news and promotion service not spam"
          />
        </div>
        <div className="bg-[#2639ED] w-[550px] relative rounded-[75px] py-20[x] custom-rectangle">
          <form className="bg-white py-1 pl-5 rounded-full w-[400px] absolute left-[-80px] top-[38%] shadow z-100">
            <input
              placeholder="Enter your email address"
              className="w-[238px]"
            />
            <Button label="Contact Now" />
          </form>
        </div>
      </section>
      <div className="bg-red-200 absolute w-[178px] h-[178px] newsletter-custom-leaf" />
      <div className="absolute top-[-60px] right-[-40px] z-[-1] w-[175px] overflow-hidden">
        <Circles />
      </div>
    </div>
  );
};

export { NewsLetter };
