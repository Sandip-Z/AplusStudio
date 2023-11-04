interface IBussinessProps {
  Icon: any;
  heading: string;
  subheading: string;
  iconBackground: string;
}

const BussinessBox = ({
  Icon,
  heading,
  subheading,
  iconBackground,
}: IBussinessProps) => {
  return (
    <div className="rounded-[40px] shadow-lg w-[308px] h-[379px] p-8 bg-white z-10">
      <div
        className={`${iconBackground} w-[121px] h-[121px] flex justify-center m-auto items-center rounded-[20px]`}
      >
        <Icon />
      </div>
      <div className="mt-8">
        <h6 className="text-center text-2xl">{heading}</h6>
        <p className="mt-8 text-center text-base text-gray-500">{subheading}</p>
      </div>
    </div>
  );
};

export { BussinessBox };
