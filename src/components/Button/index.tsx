interface IButtonProps {
  label: string;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
}

const Button = ({
  label,
  bgColor = "bg-blue-800",
  hoverBgColor = "bg-blue-500",
  textColor = "text-white",
}: IButtonProps) => {
  return (
    <button
      className={`${bgColor} hover:${hoverBgColor} transition-all ${textColor} px-5 py-2 rounded-full shadow-lg`}
    >
      {label}
    </button>
  );
};

export { Button };
