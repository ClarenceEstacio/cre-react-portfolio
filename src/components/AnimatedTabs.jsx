// components/AnimatedTabs.jsx
import { motion } from "framer-motion";
import { Award, Briefcase, Code } from "lucide-react";

const AnimatedTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      id: "certificates",
      label: "Certificates",
      icon: Award,
    },
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
    },
    {
      id: "projects",
      label: "Projects",
      icon: Code,
    },
  ];

  return (
    <div className="relative flex items-center justify-center mb-8">
      <div className="relative flex bg-charcoal/20 backdrop-blur-sm rounded-2xl p-2 border border-cloud/20">
        {/* Animated background slider */}
        <motion.div
          className="absolute top-2 left-2 bottom-2 bg-gradient-to-r from-coral to-blush rounded-xl shadow-lg"
          animate={{
            x: tabs.findIndex((tab) => tab.id === activeTab) * 160,
            width: 150,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />

        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative z-10 flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 w-[150px] justify-center ${
                isActive
                  ? "text-white shadow-lg"
                  : "text-cloud hover:text-white"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{
                  rotate: isActive ? 360 : 0,
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon size={18} />
              </motion.div>
              <span className="font-medium">{tab.label}</span>

              {/* Hover glow effect */}
              {!isActive && (
                <motion.div
                  className="absolute inset-0 bg-coral/10 rounded-xl opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-coral/20 to-blush/20 rounded-2xl blur-xl -z-10 opacity-50" />
    </div>
  );
};

export default AnimatedTabs;
