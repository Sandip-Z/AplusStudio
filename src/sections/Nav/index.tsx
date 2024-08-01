import { useState } from "react";

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
  return (
    <>
      <nav className="fixed py-3 px-7 mt-[-20px] w-[100vw] justify-between hidden lg:flex bg-white z-[9999]">
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
                <li className="mx-5 p-2">{label}</li>
              </a>
            ))}
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
              <span className="text-2xl text-white">&#10005;</span>
            ) : (
              <span className="text-2xl text-white">&#9776;</span>
            )}
          </button>
        </div>
      </nav>
      <aside className={`${showNav ? "block mobile-navigation" : "hidden"}`}>
        <ul className="fixed h-[100vh] w-[100vw] z-[100] bg-white flex flex-col text-right mt-20">
          {menuItems.map(({ id, label, link }) => (
            <a
              key={id}
              href={link}
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

export { Nav };
