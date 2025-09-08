import { motion } from "framer-motion";
import { ArrowUp, Facebook, Github, Heart, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  // Check if footer is visible
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Social links
  const socialLinks = [
    { icon: Github, link: "https://github.com/yourusername" },
    { icon: Linkedin, link: "https://linkedin.com/in/yourusername" },
    { icon: Facebook, link: "https://facebook.com/yourusername" },
    { icon: Mail, link: "mailto:clarence16estacio@gmail.com" },
  ];

  return (
    <footer
      id="footer"
      className="relative bg-charcoal border-t border-cloud/10 py-8"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate/20 border border-cloud/10 rounded-lg flex items-center justify-center text-cloud hover:text-coral hover:border-coral/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-cloud/60 text-sm font-roboto">
            <span>© {currentYear} Clarence Estacio</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-coral"
            >
              <Heart size={14} fill="currentColor" />
            </motion.span>
            <span>All rights reserved</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 bg-coral/20 border border-coral/30 rounded-lg flex items-center justify-center text-coral hover:bg-coral/30 transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
