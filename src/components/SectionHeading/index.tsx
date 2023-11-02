interface SectionHeadingProps {
  text: string;
  paragraph?: string;
}

const SectionHeading = ({ text, paragraph }: SectionHeadingProps) => {
  return (
    <>
      <h5 className="font-bold text-2xl">{text}</h5>
      {paragraph ? <p className="mt-2 leading-5">{paragraph}</p> : <></>}
    </>
  );
};

export default SectionHeading;
