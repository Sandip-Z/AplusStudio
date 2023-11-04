const HeaderCircle = ({ fill = "#DAE9FF", width = "129", height = "129" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 129 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="64.5" cy="64.5" r="64.5" fill={fill} />
    </svg>
  );
};

export { HeaderCircle };
