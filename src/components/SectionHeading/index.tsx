interface SectionHeadingProps {
  text: string;
  paragraph?: string;
}

const SectionHeading = ({ text, paragraph }: SectionHeadingProps) => {
  return (
    <>
      <h5 className="font-bold text-[40px] relative z-10">{text}</h5>
      {paragraph ? (
        <p className="mt-8 leading-5 text-[#565656] leading-6 relative z-10">
          {paragraph}
        </p>
      ) : (
        <></>
      )}
    </>
  );
};

export default SectionHeading;
