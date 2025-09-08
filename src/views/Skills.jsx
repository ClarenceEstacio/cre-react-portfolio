import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import PixelBlast from "../components/PixelBlast";

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Track mouse position for 3D tilt effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    setIsLoaded(true);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Skills data with actual logo URLs
  const skillsData = [
    {
      id: 1,
      name: "HTML",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      proficiency: 95,
      description: "Semantic markup & accessibility",
      level: "Advanced",
      color: "#E34C26",
    },
    {
      id: 2,
      name: "CSS",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      proficiency: 90,
      description: "Responsive design & animations",
      level: "Advanced",
      color: "#1572B6",
    },
    {
      id: 3,
      name: "JavaScript",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      proficiency: 85,
      description: "ES6+ & async programming",
      level: "Advanced",
      color: "#F7DF1E",
    },
    {
      id: 4,
      name: "React",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      proficiency: 70,
      description: "Component-based UI",
      level: "Intermediate",
      color: "#61DAFB",
    },
    {
      id: 5,
      name: "Tailwind CSS",
      category: "frontend",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      proficiency: 85,
      description: "Utility-first CSS framework",
      level: "Advanced",
      color: "#06B6D4",
    },
    {
      id: 6,
      name: "Bootstrap",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      proficiency: 80,
      description: "Component library & grid",
      level: "Advanced",
      color: "#7952B3",
    },
    {
      id: 7,
      name: "Python",
      category: "backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      proficiency: 80,
      description: "Automation & data processing",
      level: "Advanced",
      color: "#3776AB",
    },
    {
      id: 8,
      name: "PHP",
      category: "backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      proficiency: 75,
      description: "Server-side scripting",
      level: "Intermediate",
      color: "#777BB4",
    },
    {
      id: 9,
      name: "Laravel",
      category: "backend",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      proficiency: 75,
      description: "MVC & API development",
      level: "Intermediate",
      color: "#FF2D20",
    },
    {
      id: 10,
      name: "Java",
      category: "backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      proficiency: 85,
      description: "OOP & algorithms",
      level: "Advanced",
      color: "#007396",
    },
    {
      id: 11,
      name: "Node.js",
      category: "backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      proficiency: 70,
      description: "Server-side JavaScript",
      level: "Intermediate",
      color: "#339933",
    },
    {
      id: 12,
      name: "Express",
      category: "backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      proficiency: 70,
      description: "RESTful API design",
      level: "Intermediate",
      color: "#000000",
    },
    {
      id: 13,
      name: "MongoDB",
      category: "database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      proficiency: 65,
      description: "NoSQL database design",
      level: "Intermediate",
      color: "#47A248",
    },
    {
      id: 14,
      name: "MySQL",
      category: "database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      proficiency: 80,
      description: "Relational database & queries",
      level: "Advanced",
      color: "#4479A1",
    },
    {
      id: 15,
      name: "GitHub",
      category: "tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      proficiency: 85,
      description: "Version control & collaboration",
      level: "Advanced",
      color: "#181717",
    },
    {
      id: 16,
      name: "Arduino",
      category: "tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
      proficiency: 70,
      description: "IoT & embedded systems",
      level: "Intermediate",
      color: "#00979D",
    },
    {
      id: 17,
      name: "Vite",
      category: "tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      proficiency: 75,
      description: "Fast build tool & dev server",
      level: "Intermediate",
      color: "#646CFF",
    },
    {
      id: 18,
      name: "Postman",
      category: "tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      proficiency: 80,
      description: "API testing & documentation",
      level: "Advanced",
      color: "#FF6C37",
    },
  ];

  // Categories with custom styling
  const categories = [
    { id: "all", name: "All", count: skillsData.length, emoji: "🎯" },
    {
      id: "frontend",
      name: "Frontend",
      count: skillsData.filter((s) => s.category === "frontend").length,
      emoji: "🎨",
    },
    {
      id: "backend",
      name: "Backend",
      count: skillsData.filter((s) => s.category === "backend").length,
      emoji: "⚙️",
    },
    {
      id: "database",
      name: "Database",
      count: skillsData.filter((s) => s.category === "database").length,
      emoji: "🗄️",
    },
    {
      id: "tools",
      name: "Tools",
      count: skillsData.filter((s) => s.category === "tools").length,
      emoji: "🛠️",
    },
  ];

  // Filter skills
  const filteredSkills =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  // PixelBlast configuration
  const pixelBlastConfig = {
    enableRipples: true,
    rippleIntensityScale: 1.1,
    rippleThickness: 0.16,
    rippleSpeed: 0.3,
    variant: "circle",
    pixelSize: 2.8,
    color: "#f5d6f5",
    patternDensity: 0.6,
    edgeFade: 0.35,
  };

  // Calculate tilt based on mouse position
  const calculateTilt = (index) => {
    if (hoveredSkill !== index) return { rotateX: 0, rotateY: 0 };

    const card = document.getElementById(`skill-card-${index}`);
    if (!card) return { rotateX: 0, rotateY: 0 };

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateY = ((mousePosition.x - centerX) / rect.width) * 20;
    const rotateX = -((mousePosition.y - centerY) / rect.height) * 20;

    return { rotateX, rotateY };
  };

  // Floating animation variants
  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-charcoal overflow-hidden py-20"
    >
      {/* PixelBlast Background */}
      <div className="absolute inset-0 z-0">
        <PixelBlast {...pixelBlastConfig} />
      </div>

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-coral/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-blush/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-poppins">
              <motion.span
                className="text-cloud inline-block"
                animate={{ rotate: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                My
              </motion.span>{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-coral via-blush to-coral bg-300% inline-block"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  rotate: { duration: 2, repeat: Infinity },
                }}
              >
                Tech Stack
              </motion.span>
            </h1>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-4xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ✨
          </motion.div>
        </motion.div>

        {/* Floating Category Pills with Liquid Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{
                y: -5,
                scale: 1.1,
                transition: { type: "spring", stiffness: 400 },
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                relative px-6 py-3 rounded-full font-medium font-roboto
                transition-all duration-500 overflow-hidden group
                ${
                  selectedCategory === category.id
                    ? "text-charcoal shadow-2xl shadow-coral/40"
                    : "bg-slate/30 backdrop-blur-sm text-cloud border border-cloud/20 hover:border-coral/50"
                }
              `}
            >
              {/* Liquid Background for Active */}
              {selectedCategory === category.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-coral via-blush to-coral bg-200%"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}

              {/* Hover Ripple Effect */}
              {selectedCategory !== category.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-coral/20 to-blush/20 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              )}

              <span className="relative z-10 flex items-center gap-2">
                <motion.span
                  animate={{
                    rotate: selectedCategory === category.id ? [0, 360] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {category.emoji}
                </motion.span>
                {category.name}
                <motion.span
                  className={`
                    px-2 py-0.5 rounded-full text-xs
                    ${
                      selectedCategory === category.id
                        ? "bg-charcoal/20"
                        : "bg-cloud/10"
                    }
                  `}
                  animate={{
                    scale: selectedCategory === category.id ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {category.count}
                </motion.span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Bento Grid with Enhanced Effects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
          >
            {filteredSkills.map((skill, index) => {
              const tilt = calculateTilt(index);
              return (
                <motion.div
                  key={skill.id}
                  id={`skill-card-${index}`}
                  initial={{ opacity: 0, y: 50, rotateX: -30 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  whileHover={{ z: 50 }}
                  onHoverStart={() => setHoveredSkill(index)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                  className="relative group"
                >
                  <motion.div
                    animate={{
                      rotateX: tilt.rotateX,
                      rotateY: tilt.rotateY,
                      scale: hoveredSkill === index ? 1.05 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className={`
                      relative bg-slate/10 backdrop-blur-md border border-cloud/10
                      rounded-2xl p-6 h-full overflow-hidden
                      transition-all duration-300
                      ${
                        hoveredSkill === index
                          ? "shadow-2xl shadow-coral/30 border-coral/50"
                          : "hover:border-coral/30"
                      }
                    `}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Dynamic Gradient Background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                      animate={{
                        background:
                          hoveredSkill === index
                            ? `radial-gradient(circle at 50% 50%, ${skill.color}20 0%, transparent 70%)`
                            : "transparent",
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Floating Particles */}
                    {hoveredSkill === index && (
                      <>
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-coral rounded-full"
                            initial={{
                              x: Math.random() * 100 - 50,
                              y: 100,
                              opacity: 0,
                            }}
                            animate={{
                              y: -20,
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.2,
                              repeat: Infinity,
                              ease: "easeOut",
                            }}
                          />
                        ))}
                      </>
                    )}

                    {/* Logo Container with Levitation */}
                    <div className="relative mb-4">
                      <motion.div
                        className="w-16 h-16 mx-auto relative"
                        animate={
                          hoveredSkill === index ? floatAnimation.animate : {}
                        }
                        initial={floatAnimation.initial}
                      >
                        <motion.img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-full h-full object-contain filter drop-shadow-lg"
                          animate={{
                            scale: hoveredSkill === index ? 1.2 : 1,
                            rotate:
                              hoveredSkill === index ? [0, -10, 10, 0] : 0,
                            filter:
                              hoveredSkill === index
                                ? "drop-shadow(0 10px 20px rgba(245, 143, 124, 0.4))"
                                : "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                          }}
                          transition={{
                            duration: 0.5,
                            rotate: { duration: 0.6, ease: "easeInOut" },
                          }}
                          style={{
                            transform: "translateZ(20px)",
                          }}
                        />
                        {hoveredSkill === index && (
                          <motion.div
                            className="absolute inset-0 blur-xl -z-10"
                            animate={{
                              backgroundColor: [
                                `${skill.color}30`,
                                `${skill.color}50`,
                                `${skill.color}30`,
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* Skill Name with Glow */}
                    <motion.h3
                      className="text-lg font-bold font-poppins text-center text-blush mb-2"
                      animate={{
                        textShadow:
                          hoveredSkill === index
                            ? "0 0 20px rgba(245, 143, 124, 0.5)"
                            : "none",
                      }}
                    >
                      {skill.name}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-xs text-cloud/70 text-center mb-4 font-roboto">
                      {skill.description}
                    </p>

                    {/* Animated Proficiency Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-cloud/60 font-roboto">
                          {skill.level}
                        </span>
                        <motion.span
                          className="text-xs font-bold text-coral"
                          animate={{
                            scale: hoveredSkill === index ? [1, 1.2, 1] : 1,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {skill.proficiency}%
                        </motion.span>
                      </div>
                      <div className="relative h-2 bg-slate/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{
                            duration: 1.5,
                            delay: 0.3 + index * 0.05,
                            ease: "easeOut",
                          }}
                          className="absolute h-full bg-coral rounded-full"
                        />
                        {/* Pulse Effect */}
                        {hoveredSkill === index && (
                          <motion.div
                            className="absolute h-full bg-coral/50 rounded-full"
                            initial={{ width: `${skill.proficiency}%` }}
                            animate={{
                              opacity: [0.5, 0],
                              scaleX: [1, 1.5],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex justify-center gap-12"
        >
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.p
              className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-coral to-blush"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {skillsData.length}
            </motion.p>
            <p className="text-cloud/60 text-sm font-roboto mt-1">
              Technologies
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.p
              className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blush to-coral"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              ∞
            </motion.p>
            <p className="text-cloud/60 text-sm font-roboto mt-1">Learning</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
