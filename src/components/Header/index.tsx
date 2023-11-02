const menuItems = [
  { id: "home", label: "Home", link: "#" },
  { id: "what_we_do", label: "What We Do", link: "#" },
  { id: "service", label: "Service", link: "#" },
  { id: "project", label: "Project", link: "#" },
  { id: "blog", label: "Blog", link: "#" },
  { id: "contact", label: "Contact", link: "#" },
];

const Header = () => {
  return (
    <header className="flex justify-between px-16 mt-5">
      <div className="my-auto">
        <img src="/logo.svg" alt="A plus" />
      </div>
      <div>
        <ul className="flex">
          {menuItems.map(({ id, label }) => (
            <li key={id} className="mx-5 p-2">
              {label}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export { Header };
