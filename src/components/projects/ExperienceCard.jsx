// components/projects/ExperienceCard.jsx
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const ExperienceCard = ({ exp }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate/10 backdrop-blur-sm border border-cloud/20 rounded-xl p-6 hover:border-coral/50 transition-all duration-300"
    >
      <div className="flex gap-4 mb-4">
        <div className="w-14 h-14 bg-gradient-to-br from-coral/20 to-blush/20 rounded-xl flex-shrink-0 overflow-hidden">
          <img
            src={exp.logo}
            alt={exp.company}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjZjU4ZjdjIiBmaWxsLW9wYWNpdHk9IjAuMiIgcng9IjEyIi8+CjxjaXJjbGUgY3g9IjI4IiBjeT0iMjgiIHI9IjEyIiBmaWxsPSIjZjU4ZjdjIiBmaWxsLW9wYWNpdHk9IjAuNCIvPgo8L3N2Zz4=";
            }}
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold font-poppins text-blush">
            {exp.position}
          </h3>
          <p className="text-coral font-medium font-roboto">{exp.company}</p>
          <div className="flex items-center gap-4 mt-1 text-sm text-cloud/70 font-roboto">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {exp.duration}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {exp.location}
            </span>
          </div>
        </div>
      </div>

      <p className="text-cloud/80 text-sm mb-4 leading-relaxed font-roboto">
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-coral/10 text-coral rounded-lg text-xs font-medium border border-coral/30 font-roboto"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
