interface IButtonProps {
  label: string;
  bgColor?: string;
  textColor?: string;
}

const Button = ({
  label,
  bgColor = "bg-blue-800",
  textColor = "text-white",
}: IButtonProps) => {
  return (
    <button
      className={`${bgColor} ${textColor} px-5 py-2 rounded-full shadow-lg`}
    >
      {label}
    </button>
  );
};

export { Button };
