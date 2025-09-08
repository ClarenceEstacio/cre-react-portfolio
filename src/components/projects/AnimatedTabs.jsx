// components/projects/AnimatedTabs.jsx
import { motion } from "framer-motion";
import { Award, Briefcase, FolderOpen } from "lucide-react";

const AnimatedTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
  ];

  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex bg-slate/20 backdrop-blur-md rounded-2xl p-2 border border-cloud/20">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative px-6 py-3 rounded-xl font-medium font-roboto transition-all duration-300
                flex items-center gap-2 min-w-[140px] justify-center
                ${
                  activeTab === tab.id
                    ? "text-charcoal"
                    : "text-cloud hover:text-blush"
                }
              `}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-coral to-blush rounded-xl"
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={18} />
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedTabs;
