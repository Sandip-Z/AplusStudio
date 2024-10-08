import { useState } from "react";
import { AboutSectionType } from "../../sections/About";

const BluePlayButton = ({ setPlay }: AboutSectionType) => {
  const [hover, setHover] = useState(false);

  return (
    <svg
      width="78"
      height="78"
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:cursor-pointer"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => setPlay(true)}
    >
      <g clipPath="url(#clip0_2_593)">
        <rect
          x="20.6939"
          y="17.5102"
          width="42.9796"
          height="42.9796"
          fill="white"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        />
        <path
          d="M39 0C17.55 0 0 17.55 0 39C0 60.45 17.55 78 39 78C60.45 78 78 60.45 78 39C78 17.55 60.45 0 39 0ZM31.2 56.55V21.45L54.6 39L31.2 56.55Z"
          fill="#2639ED"
          className={`${
            hover ? "fill-[#CD201F]" : "fill-[#2639ED]"
          } ease-in-out duration-300`}
        />
      </g>
      <defs>
        <clipPath id="clip0_2_593">
          <rect width="78" height="78" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { BluePlayButton };
