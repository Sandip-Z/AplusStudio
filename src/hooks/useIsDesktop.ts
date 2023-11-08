import { useEffect, useState } from "react";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth > 820) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [isDesktop];
};

export { useIsDesktop };
