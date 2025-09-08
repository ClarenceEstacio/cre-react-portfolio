// components/projects/ProjectCarousel.jsx
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const ProjectCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-slate/10 backdrop-blur-sm border border-cloud/20 rounded-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Container - Landscape */}
              <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-coral/10 to-blush/10 overflow-hidden">
                <img
                  src={items[currentIndex].imageUrl}
                  alt={items[currentIndex].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNjAwIiB5Mj0iNDAwIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y1OGY3YyIgc3RvcC1vcGFjaXR5PSIwLjIiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJjNGNlIiBzdG9wLW9wYWNpdHk9IjAuMiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZjU4ZjdjIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9IjYwMCI+UHJvamVjdDwvdGV4dD4KPC9zdmc+";
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-coral/90 text-charcoal rounded-full text-sm font-medium backdrop-blur-sm font-roboto">
                    {items[currentIndex].brand}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-poppins text-blush mb-4">
                    {items[currentIndex].title}
                  </h3>
                  <p className="text-cloud/90 mb-6 leading-relaxed font-roboto">
                    {items[currentIndex].description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {items[currentIndex].tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-coral/10 text-coral border border-coral/30 rounded-lg text-sm font-medium font-roboto"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={items[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-coral to-blush text-charcoal rounded-xl font-medium font-roboto hover:shadow-lg hover:shadow-coral/30 transition-all duration-300 self-start"
                >
                  <Github size={18} />
                  View on GitHub
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate/20 backdrop-blur-sm border border-cloud/20 rounded-full flex items-center justify-center text-cloud hover:bg-coral/20 hover:border-coral/50 hover:text-blush transition-all duration-300"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate/20 backdrop-blur-sm border border-cloud/20 rounded-full flex items-center justify-center text-cloud hover:bg-coral/20 hover:border-coral/50 hover:text-blush transition-all duration-300"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`
              h-2 rounded-full transition-all duration-300
              ${
                currentIndex === idx
                  ? "w-8 bg-coral"
                  : "w-2 bg-cloud/30 hover:bg-cloud/50"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
