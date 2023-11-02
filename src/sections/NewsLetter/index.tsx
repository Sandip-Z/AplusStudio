import { Button } from "../../components/Button";
import SectionHeading from "../../components/SectionHeading";

const NewsLetter = () => {
  return (
    <section className="bg-[#F4F9FF] rounded-[75px] flex justify-between">
      <div className="py-20 px-20">
        <SectionHeading
          text="Subscribe Newsletter"
          paragraph="I will update good news and promotion service not spam"
        />
      </div>
      <div className="bg-[#2639ED] w-[550px] relative rounded-[75px] py-20 custom-rectangle[x]">
        <form className="bg-white py-1 pl-5 rounded-full w-[400px] absolute left-[-80px] shadow z-100">
          <input placeholder="Enter your email address" className="w-[238px]" />
          <Button label="Contact Now" />
        </form>
      </div>
    </section>
  );
};

export { NewsLetter };
