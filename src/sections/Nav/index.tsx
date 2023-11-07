import { useState } from "react";

const menuItems = [
  { id: "home", label: "Home", link: "#" },
  { id: "what_we_do", label: "What We Do", link: "#" },
  { id: "service", label: "Service", link: "#" },
  { id: "project", label: "Project", link: "#" },
  { id: "blog", label: "Blog", link: "#" },
  { id: "contact", label: "Contact", link: "#" },
];

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav className="justify-between mt-5 mr-20 hidden lg:flex">
        <div className="my-auto">
          <img src="/logo.svg" alt="A plus" />
        </div>
        <div>
          <ul className="flex">
            {menuItems.map(({ id, label }) => (
              <a key={id} href="#">
                <li className="mx-5 p-2">{label}</li>
              </a>
            ))}
          </ul>
        </div>
      </nav>

      <nav className="flex justify-between lg:hidden bg-blue-800 py-5x px-10x fixed w-[100vw] h-[70px] z-[9999] px-10">
        <div className="my-auto">
          <img src="/logo.svg" alt="A plus" />
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
        <ul className="fixed h-[100vh] w-[100vw] z-[100] bg-white flex flex-col text-right">
          {menuItems.map(({ id, label }) => (
            <a key={id} href="#">
              <li className="p-5 px-10 hover:bg-gray-200">{label}</li>
            </a>
          ))}
        </ul>
      </aside>
    </>
  );
};

export { Nav };
