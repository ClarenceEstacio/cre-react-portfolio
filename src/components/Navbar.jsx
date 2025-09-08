import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import navbarlogo from "../assets/zetsukylogo.png";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#skills", label: "Skills" },
    { to: "#projects", label: "Projects" },
    { to: "#contact", label: "Contact" },
  ];

  // Close mobile menu when clicking on a link
  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg shadow-blush/20"
          : "bg-charcoal/80 backdrop-blur-sm"
      }`}
    >
      {/* Glowing top border */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blush to-transparent opacity-60"></div>

      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <HashLink
          smooth
          to="#home"
          className="group flex items-center space-x-3"
        >
          {/* Circular logo slot - made bigger */}
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blush/20 to-coral/20 border border-blush/30 flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:shadow-blush/40 transition-all duration-300 animate-spin [animation-duration:5s] origin-center">
            {/* Replace this img with your logo */}
            <img
              src={navbarlogo}
              alt="Logo"
              className="w-10 h-10 object-cover rounded-full"
              onError={(e) => {
                // Fallback if logo doesn't exist - shows initials
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Fallback initials if no logo */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blush to-coral flex items-center justify-center text-charcoal font-bold text-sm hidden">
              CE
            </div>
            {/* Enhanced glow ring - all around */}
            <div className="absolute inset-0 rounded-full border-2 border-blush/40 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blush/20 to-coral/20 opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
          </div>

          {/* Text logo */}
          <h1 className="text-xl font-bold font-poppins relative flex items-center">
            <span className="relative z-10">
              {/* Opening bracket - more subdued on hover */}
              <span className="text-coral font-extrabold tracking-wider relative opacity-80 group-hover:opacity-50 transition-opacity duration-300">
                &lt;
                {/* Reduced glow effect for opening bracket */}
                <div className="absolute inset-0 text-coral blur-sm opacity-40 group-hover:opacity-30 transition-opacity duration-300">
                  &lt;
                </div>
              </span>
              {/* CRE with reduced prominence on hover */}
              <span className="text-coral font-extrabold tracking-wider relative group-hover:opacity-60 transition-opacity duration-300">
                CRE
                {/* Reduced glow effect for CRE */}
                <div className="absolute inset-0 text-coral blur-sm opacity-50 group-hover:opacity-30 transition-opacity duration-300">
                  CRE
                </div>
              </span>
              {/* Closing bracket - more subdued on hover */}
              <span className="text-coral font-extrabold tracking-wider relative opacity-80 group-hover:opacity-50 transition-opacity duration-300">
                &gt;
                {/* Reduced glow effect for closing bracket */}
                <div className="absolute inset-0 text-coral blur-sm opacity-40 group-hover:opacity-30 transition-opacity duration-300">
                  &gt;
                </div>
              </span>
              {/* Space */}
              <span className="mx-2"></span>
              {/* Profile with enhanced prominence on hover */}
              <span className="text-blush font-medium relative group-hover:text-blush group-hover:font-semibold transition-all duration-300">
                Profile
                {/* Enhanced glow for Profile on hover */}
                <div className="absolute inset-0 text-pink-300 blur-sm opacity-40 group-hover:opacity-90 group-hover:text-blush transition-all duration-300">
                  Profile
                </div>
                {/* Added underline for Profile on hover */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blush to-pink-400 group-hover:w-full transition-all duration-300"></div>
              </span>
              {/* Space */}
              <span className="mx-1"></span>
              {/* Closing tag brackets - more subdued on hover */}
              <span className="text-coral font-extrabold tracking-wider relative opacity-80 group-hover:opacity-50 transition-opacity duration-300">
                &lt;/
                {/* Reduced glow effect for closing tag */}
                <div className="absolute inset-0 text-coral blur-sm opacity-40 group-hover:opacity-30 transition-opacity duration-300">
                  &lt;/
                </div>
              </span>
              {/* CRE closing - more subdued */}
              <span className="text-coral font-extrabold tracking-wider relative opacity-60 group-hover:opacity-40 transition-opacity duration-300">
                CRE
                {/* Subtle glow for closing CRE */}
                <div className="absolute inset-0 text-coral blur-sm opacity-30 group-hover:opacity-20 transition-opacity duration-300">
                  CRE
                </div>
              </span>
              {/* Final closing bracket - more subdued on hover */}
              <span className="text-coral font-extrabold tracking-wider relative opacity-80 group-hover:opacity-50 transition-opacity duration-300">
                &gt;
                {/* Reduced glow effect for final bracket */}
                <div className="absolute inset-0 text-coral blur-sm opacity-40 group-hover:opacity-30 transition-opacity duration-300">
                  &gt;
                </div>
              </span>
            </span>

            {/* Enhanced Profile-focused background glow */}
            <div className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300">
              <span className="text-blush font-semibold">Profile</span>
            </div>
          </h1>
        </HashLink>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => {
            const sectionName = item.to.substring(1); // Remove # from "#home"
            const isActive = activeSection === sectionName;

            return (
              <HashLink
                key={item.to}
                smooth
                to={item.to}
                className={`relative px-4 py-2 font-medium font-roboto transition-all duration-300 rounded-lg group ${
                  isActive ? "text-blush" : "text-cloud hover:text-blush"
                }`}
              >
                {/* Background glow for active/hover */}
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-blush/10 shadow-lg shadow-blush/30"
                      : "bg-transparent group-hover:bg-blush/5 group-hover:shadow-md group-hover:shadow-blush/20"
                  }`}
                ></div>

                {/* Text with glow effect */}
                <span className="relative z-10">{item.label}</span>

                {/* Text glow */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "text-blush blur-sm opacity-40"
                      : "text-blush blur-sm opacity-0 group-hover:opacity-30"
                  }`}
                >
                  {item.label}
                </div>

                {/* Bottom indicator */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blush transition-all duration-300 ${
                    isActive
                      ? "w-3/4 opacity-100"
                      : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-60"
                  }`}
                ></div>
              </HashLink>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-blush hover:text-coral transition-colors duration-200 group relative z-50 mobile-menu-container"
          aria-label="Toggle mobile menu"
        >
          <div className="space-y-1 relative">
            <div
              className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-1.5"
                  : "group-hover:scale-110"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "group-hover:scale-110"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-1.5"
                  : "group-hover:scale-110"
              }`}
            ></div>
          </div>
          {/* Glow effect for mobile button */}
          <div
            className={`absolute inset-0 blur-sm transition-opacity duration-200 ${
              isMobileMenuOpen
                ? "opacity-40"
                : "opacity-0 group-hover:opacity-30"
            }`}
          >
            <div className="space-y-1 mt-1">
              <div className="w-6 h-0.5 bg-blush"></div>
              <div className="w-6 h-0.5 bg-blush"></div>
              <div className="w-6 h-0.5 bg-blush"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blush/30 to-transparent"></div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden">
          <div
            className="absolute inset-0"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        </div>
      )}

      {/* Mobile Menu Popup */}
      <div
        className={`fixed top-20 right-4 left-4 bg-charcoal/95 backdrop-blur-md rounded-2xl border border-blush/20 shadow-2xl shadow-blush/20 z-50 md:hidden mobile-menu-container transition-all duration-300 transform ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        {/* Glowing top border */}
        <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-blush to-transparent opacity-60 rounded-full"></div>

        {/* Menu Items */}
        <div className="p-6 space-y-1">
          {navItems.map((item, index) => {
            const sectionName = item.to.substring(1);
            const isActive = activeSection === sectionName;

            return (
              <HashLink
                key={item.to}
                smooth
                to={item.to}
                onClick={handleMobileMenuClick}
                className={`block px-6 py-4 font-medium font-roboto transition-all duration-300 rounded-xl group relative overflow-hidden ${
                  isActive ? "text-blush" : "text-cloud hover:text-blush"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Background glow for active/hover */}
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-blush/10 shadow-lg shadow-blush/20"
                      : "bg-transparent group-hover:bg-blush/5 group-hover:shadow-md group-hover:shadow-blush/10"
                  }`}
                ></div>

                {/* Text with glow effect */}
                <span className="relative z-10 text-lg">{item.label}</span>

                {/* Text glow */}
                <div
                  className={`absolute inset-0 flex items-center px-6 transition-all duration-300 ${
                    isActive
                      ? "text-blush blur-sm opacity-30"
                      : "text-blush blur-sm opacity-0 group-hover:opacity-20"
                  }`}
                >
                  {item.label}
                </div>

                {/* Side indicator */}
                <div
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 bg-blush rounded-r-full transition-all duration-300 ${
                    isActive
                      ? "h-8 opacity-100"
                      : "h-0 opacity-0 group-hover:h-4 group-hover:opacity-60"
                  }`}
                ></div>

                {/* Ripple effect on click */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-blush/20 scale-0 group-active:scale-100 transition-transform duration-200 rounded-xl"></div>
                </div>
              </HashLink>
            );
          })}
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-coral/30 to-transparent opacity-40 rounded-full"></div>
      </div>
    </nav>
  );
}

export default Navbar;
