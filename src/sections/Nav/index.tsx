const menuItems = [
  { id: "home", label: "Home", link: "#" },
  { id: "what_we_do", label: "What We Do", link: "#" },
  { id: "service", label: "Service", link: "#" },
  { id: "project", label: "Project", link: "#" },
  { id: "blog", label: "Blog", link: "#" },
  { id: "contact", label: "Contact", link: "#" },
];

const Nav = () => {
  return (
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
  );
};

export { Nav };
