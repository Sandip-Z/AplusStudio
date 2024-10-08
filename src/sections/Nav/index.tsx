import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { id: "home", label: "Home", link: "#home" },
  { id: "what-we-do", label: "What We Do", link: "#what-we-do" },
  { id: "service", label: "Service", link: "#service" },
  { id: "project", label: "Project", link: "#project" },
  { id: "blog", label: "Blog", link: "blog.aplusstudio.com" },
  { id: "contact", label: "Contact", link: "#contact" },
];

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const [position, setPosition] = useState({
    left: undefined,
    width: undefined,
    opacity: 0,
  });

  useEffect(() => {
    if (showNav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showNav]);

  return (
    <>
      <nav className="fixed py-3 px-7 mt-[-20px] w-[100vw] justify-between hidden lg:flex bg-white z-[9999] shadow-lg">
        <div className="my-auto">
          <img src="/logo.svg" alt="A plus" />
        </div>
        <div>
          <ul className="flex">
            {menuItems.map(({ id, label, link }) => (
              <a
                key={id}
                href={link}
                target={id === "blog" ? "_blank" : "_self"}
                rel="noreferrer"
              >
                <Tab label={label} setPosition={setPosition} key={label} />
              </a>
            ))}
            <motion.li
              animate={position}
              className="absolute hidden z-0 h-[40px] w-24 rounded-full bg-black"
            />
          </ul>
        </div>
      </nav>

      <nav className="flex justify-between lg:hidden bg-[#2639ED] py-5x px-10x fixed w-[100vw] h-[70px] z-[9999] px-10">
        <div className="my-auto">
          <img src="/logo.svg" alt="A plus" className="invert" />
        </div>
        <div className="my-auto">
          <button onClick={() => setShowNav(!showNav)}>
            {showNav ? (
              <span className="block text-2xl text-white">&#10005;</span>
            ) : (
              <span className="block text-2xl text-white">&#9776;</span>
            )}
          </button>
        </div>
      </nav>
      <aside className={`${showNav ? "block mobile-navigation" : "hidden"}`}>
        <ul className="fixed h-[100vh] w-[100vw] z-[100] bg-white flex flex-col text-right mt-16">
          {menuItems.map(({ id, label, link }) => (
            <a
              key={id}
              href={link}
              onClick={() => setShowNav(false)}
              target={id === "blog" ? "_blank" : "_self"}
              rel="noreferrer"
            >
              <li className="p-5 px-10 hover:bg-gray-200">{label}</li>
            </a>
          ))}
        </ul>
      </aside>
    </>
  );
};

const Tab = ({ label, setPosition }) => {
  const tabRef = useRef<any>(null);
  return (
    <li
      ref={tabRef}
      className="relative z-10 block cursor-pointer px-5 py-2 uppercase text-white mix-blend-difference"
      onMouseEnter={() => {
        if (!tabRef.current) return;
        const { width } = tabRef.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: tabRef.current.offsetLeft,
        });
      }}
      onMouseLeave={() => {
        setPosition((pv) => ({ ...pv, opacity: 0 }));
      }}
    >
      {label}
    </li>
  );
};

export { Nav };
