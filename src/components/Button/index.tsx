interface IButtonProps {
  label: string;
}

const Button = ({ label }: IButtonProps) => {
  return (
    <button className="bg-blue-800 text-white px-5 py-2 rounded-full">
      {label}
    </button>
  );
};

export { Button };
