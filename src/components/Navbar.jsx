import { useState, useEffect } from "react";
import { TfiMenu, TfiClose } from "react-icons/tfi";

export default function Navbar({ navArray }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleNavClick = (item) => {
    setActiveLink(item.href.substring(1));
    setIsNavOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "py-2 bg-slate-900/90 backdrop-blur-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold flex items-center group" onClick={() => setActiveLink("home")}>
          <div className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
            S
          </div>
          <span className="text-white group-hover:text-cyan-400 transition-colors">Shafin</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navArray.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`relative px-1 py-2 text-lg font-medium transition-all duration-300 ${
                    activeLink === item.href.substring(1) ? "text-cyan-400" : "text-slate-300 hover:text-white"
                  }`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.text}
                  {activeLink === item.href.substring(1) && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact button - desktop */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          onClick={() => setActiveLink("contact")}
        >
          Contact Me
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
        >
          {isNavOpen ? <TfiClose size={24} /> : <TfiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-40 md:hidden transition-all duration-500 ${
          isNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {navArray.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-3xl font-bold transition-all duration-300 ${
                activeLink === item.href.substring(1) ? "text-cyan-400" : "text-slate-300 hover:text-white"
              }`}
              onClick={() => handleNavClick(item)}
            >
              {item.text}
            </a>
          ))}
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white rounded-full text-xl font-medium mt-8"
            onClick={() => {
              setActiveLink("contact");
              setIsNavOpen(false);
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}

// Mock motion component for demonstration
const motion = {
  span: ({ className, initial, animate, transition, children }) => <span className={className}>{children}</span>,
};
