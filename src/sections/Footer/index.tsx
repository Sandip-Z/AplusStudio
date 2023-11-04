const FOOTER = [
  {
    title: "What We Do",
    links: [
      {
        label: "Web Design",
        link: "/",
      },
      {
        label: "App Design",
        link: "/",
      },
      {
        label: "Social Media Manage",
        link: "/",
      },
      {
        label: "Market Analysis Project",
        link: "/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About Us",
        link: "/",
      },
      {
        label: "Career",
        link: "/",
      },
      {
        label: "Become Investor",
        link: "/",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "FAQ",
        link: "/",
      },
      {
        label: "Policy",
        link: "/",
      },
      {
        label: "Bussiness",
        link: "/",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "WhatsApp",
        link: "/",
      },
      {
        label: "Support24",
        link: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-b-[1px] border-[#F1F1F1] mr-20 pt-16 pb-8 flex">
      <div className="w-[390px]">
        <img src="/logo.svg" alt="A+ Studio" />
        <p className="mt-6 text-sm text-gray-600">
          Leading digital agency with solid design and development expertise. We
          build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
        <div className="flex gap-3 mt-6">
          <img src="/facebook.svg" alt="A+ Studio facebook" />
          <img src="/twitter.svg" alt="A+ Studio Twitter" />
          <img src="/linkedin.svg" alt="A+ Studio Linkedin" />
        </div>
      </div>
      <div className="flex justify-between ml-48 w-full">
        {FOOTER.map(({ title, links }) => (
          <div className="mx-10x" key={title}>
            <h6 className="text-2xl mb-5">{title}</h6>
            <ul>
              {links?.map(({ label, link }) => (
                <a href={link} key={label}>
                  <li
                    key={label}
                    className="text-sm text-gray-600 mb-3 ml-1 hover:text-[#2639ED]"
                  >
                    {label}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export { Footer };
