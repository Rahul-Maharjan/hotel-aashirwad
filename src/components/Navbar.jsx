import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#/about" },
    {
      label: "Accomodation",
      submenu: [
        { label: "Twin Room", href: "/#/twin-room" },
        { label: "Family Room", href: "/#/family-room" },
        { label: "Suite Room", href: "/#/rooms/suite" },
      ],
    },
    {
      label: "Updates",
      submenu: [
        { label: "Blogs", href: "/#/blogs" },
        { label: "Gallery", href: "/#/gallery" },
      ],
    },
    { label: "Reviews", href: "/#/reviews" },
    { label: "Contact", href: "/#/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos < 10 || currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        visible
          ? "bg-white shadow-md"
          : prevScrollPos <= 10
          ? "bg-transparent"
          : "-translate-y-full"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center font-sans">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <a href="/">
            <img src={Logo} alt="Hotel Aashirwad Logo" className="h-12 md:h-16 object-contain" />
          </a>
          <div className="text-xl md:text-2xl font-bold tracking-wide text-[#1e2a54]">
            Hotel <span className="text-black">Aashirwad</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium text-[#1e2a54] uppercase relative">
          {menuItems.map((item) =>
            item.submenu ? (
              <li
                key={item.label}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredMenu(item.label)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <span
                  className={`hover:text-[#F59E0B] transition ${
                    activeMenu === item.label ||
                    item.submenu?.some((sub) => sub.label === activeMenu)
                      ? "border-b-2 border-[#F59E0B]"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveMenu(item.label);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {item.label}
                </span>
                {hoveredMenu === item.label && (
                  <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-md border rounded-md z-20">
                    {item.submenu.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-[#1e2a54] hover:bg-gray-100"
                          onClick={() => {
                            setActiveMenu(sub.label);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`hover:text-[#F59E0B] transition ${
                    activeMenu === item.label ? "border-b-2 border-[#F59E0B]" : ""
                  }`}
                  onClick={() => {
                    setActiveMenu(item.label);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {item.label}
                </a>
              </li>
            )
          )}
          {/* Reservation Button */}
          <li>
            <a
              href="/#/reservation"
              className="ml-4 bg-[#1e2a54] text-white px-4 py-2 rounded hover:bg-[#F59E0B] transition"
              onClick={() => {
                setActiveMenu("Reservation");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Reservation
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden text-[#1e2a54] text-xl">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col space-y-3 px-6 py-4 text-sm text-[#1e2a54] font-medium">
            {menuItems.map((item) =>
              item.submenu ? (
                <div key={item.label} className="w-full">
                  <p className="text-[#1e2a54] font-semibold">{item.label}</p>
                  <ul className="ml-4 mt-1 space-y-1">
                    {item.submenu.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          className="block py-1 text-gray-600 hover:text-[#F59E0B]"
                          onClick={() => {
                            setIsOpen(false);
                            setActiveMenu(sub.label);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#F59E0B]"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveMenu(item.label);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
            <li>
              <a
                href="/#/reservation"
                className="mt-3 inline-block bg-[#1e2a54] text-white px-4 py-2 rounded hover:bg-[#F59E0B] transition"
                onClick={() => {
                  setIsOpen(false);
                  setActiveMenu("Reservation");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Reservation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
