import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaPhone, FaChevronRight } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const menuItems = [
    { label: "Our Hotel", href: "/about" },
    {
      label: "Rooms & Suites",
      submenu: [
        { label: "Twin Room", href: "/twin-room" },
        { label: "Family Room", href: "/family-room" },
        { label: "Suite Room", href: "/rooms/suite" },
      ],
    },
    { label: "Offers & Gifts", href: "/offers" },
    { label: "Experiences", href: "/experiences" },
    {
      label: "Dining & Drinks",
      submenu: [
        { label: "Restaurant", href: "/restaurant" },
        { label: "Bar & Lounge", href: "/bar" },
      ],
    },
    { label: "Location", href: "/location" },
    {
      label: "Wedding & Events",
      submenu: [
        { label: "Weddings", href: "/weddings" },
        { label: "Corporate Events", href: "/events" },
      ],
    },
    { label: "Wellness", href: "/wellness" },
    { label: "Journal", href: "/blogs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Treat menu open same as scrolled
  const isScrolledOrOpen = scrolled || isOpen;
  const textColor = isScrolledOrOpen ? "text-[#1f1f1f]" : "text-white";
  const hoverColor = "hover:text-[#d4af37]";

  const toggleSubmenu = (label) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
          isScrolledOrOpen
            ? "bg-white/95 color-[#1e2a54] backdrop-blur-sm"
            : "bg-transparent backdrop-blur-lg"
        }`}
      >
        <nav className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 py-8 ">
          <div className="flex justify-between items-center">
            {/* Left Section - Menu, Language, Search */}
            <div className="flex items-center gap-6">
              {/* Animated Hamburger/Cross Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-6 h-5 flex flex-col justify-between ${isOpen ? "z-[100]" : ""}`}
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-[2px] w-full transition-all duration-300 ease-in-out origin-center ${
                    isOpen
                      ? "bg-[#1e2a54] rotate-45 translate-y-[9px]"
                      : isScrolledOrOpen
                        ? "bg-[#1f1f1f]"
                        : "bg-white"
                  }`}
                />
                <span
                  className={`block h-[2px] w-full transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "opacity-0 scale-0"
                      : isScrolledOrOpen
                        ? "bg-[#1f1f1f]"
                        : "bg-white"
                  }`}
                />
                <span
                  className={`block h-[2px] w-full transition-all duration-300 ease-in-out origin-center ${
                    isOpen
                      ? "bg-[#1e2a54] -rotate-45 -translate-y-[9px]"
                      : isScrolledOrOpen
                        ? "bg-[#1f1f1f]"
                        : "bg-white"
                  }`}
                />
              </button>

              {/* <span
                className={`hidden sm:block text-sm font-medium tracking-wider ${textColor} ${hoverColor} cursor-pointer transition-colors duration-300`}
              >
                HOME
              </span> */}
              <Link to="/" className="hidden sm:block">
                <img
                  className={`w-12 transition-all duration-300 ${isScrolledOrOpen ? "" : "brightness-0 invert"}`}
                  src={logo}
                  alt="Hotel Aashirwad Logo"
                />
              </Link>
            </div>

            {/* Center - Logo */}
            <Link
              to="/"
              className="absolute left-1/2 transform -translate-x-1/2"
            >
              <div className="text-center flex flex-col items-center gap-0">
                <img
                  className={`w-8 sm:hidden block transition-all duration-300 ${isScrolledOrOpen ? "" : "brightness-0 invert"}`}
                  src={logo}
                  alt="Hotel Aashirwad Logo"
                />
                <h1
                  className={`text-2xl md:text-3xl lg:text-4xl tracking-wide transition-colors duration-300 font-heading italic ${textColor}`}
                >
                  <span className="font-light">Hotel</span>{" "}
                  <span className="font-normal">Aashirwad</span>
                </h1>
                <p
                  className={`text-[10px] md:text-xs tracking-[0.3em] uppercase mt-1 opacity-80 transition-colors duration-300 font-body ${textColor}`}
                >
                  Nepal
                </p>
              </div>
            </Link>

            {/* Right Section - Contact, Gift Vouchers, Book */}
            <div className="flex items-center gap-4 md:gap-6">
              <a
                href="tel:+977-1234567890"
                className={`hidden lg:block transition-colors duration-300 ${textColor} ${hoverColor}`}
              >
                <FaPhone size={16} />
              </a>

              <Link
                to="/contact"
                className={`hidden md:block text-sm font-medium tracking-wider transition-colors duration-300 ${textColor} ${hoverColor}`}
              >
                CONTACT
              </Link>

              <Link
                to="/reservation"
                className={`px-5 py-2 text-sm font-medium tracking-wider border transition-all duration-300 ${
                  isScrolledOrOpen
                    ? "border-[#1f1f1f] text-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-[#1e2a54]"
                }`}
              >
                BOOK
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-in Menu from Left */}
      <div
        className={`fixed top-0 left-0 h-full w-[360px] bg-white z-50 transform transition-transform duration-500 ease-in-out shadow-2xl mt-24 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-8 px-8 pb-8 h-full overflow-y-auto">
          <ul className="flex flex-col space-y-1">
            {menuItems.map((item) => (
              <li key={item.label} className="border-b border-gray-100">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="w-full flex items-center justify-between py-4 text-[#1e2a54] hover:text-[#d4af37] transition-colors font-body"
                    >
                      <span className="text-base font-normal tracking-wide">
                        {item.label}
                      </span>
                      <FaChevronRight
                        size={12}
                        className={`transition-transform duration-300 ${
                          expandedMenu === item.label ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedMenu === item.label
                          ? "max-h-48 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="pl-4 pb-3 space-y-2">
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              to={sub.href}
                              className="block py-2 text-sm text-gray-500 hover:text-[#d4af37] transition-colors font-body"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center justify-between py-4 text-[#1e2a54] hover:text-[#d4af37] transition-colors font-body"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-base font-normal tracking-wide">
                      {item.label}
                    </span>
                    <FaChevronRight size={12} />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
