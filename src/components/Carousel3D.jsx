// components/Carousel3D.jsx
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { Card, CardContent } from "./ui/card";

const Carousel3D = ({
  items,
  autoRotate = true,
  rotateInterval = 4000,
  cardHeight = 500,
  title = "My Projects",
  subtitle = "Portfolio Showcase",
  tagline = "Explore my latest work and projects that demonstrate my skills and creativity.",
  isMobileSwipe = true,
}) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % items.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const getCardAnimationClass = (index) => {
    if (index === active) return "scale-100 opacity-100 z-20";
    if (index === (active + 1) % items.length)
      return "translate-x-[40%] scale-95 opacity-60 z-10";
    if (index === (active - 1 + items.length) % items.length)
      return "translate-x-[-40%] scale-95 opacity-60 z-10";
    return "scale-90 opacity-0";
  };

  const handleProjectClick = (link) => {
    if (link.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      // For internal routes, you can use React Router navigation here
      window.location.hash = link;
    }
  };

  return (
    <section
      id="carousel3d"
      className="bg-transparent w-full mx-auto flex items-center justify-center py-8"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 min-w-[350px] md:min-w-[1000px] max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cloud mb-4">
            {title}
          </h2>
          <p className="text-slate text-lg mb-2">{subtitle}</p>
          <p className="text-slate/80 text-sm max-w-2xl mx-auto">{tagline}</p>
        </div>

        <div
          className="relative overflow-hidden h-[550px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${getCardAnimationClass(
                  index
                )}`}
              >
                <Card
                  className={`overflow-hidden bg-charcoal/90 border-cloud/20 shadow-xl hover:shadow-2xl flex flex-col transition-all duration-300`}
                  style={{ height: `${cardHeight}px` }}
                >
                  <div
                    className="relative p-6 flex items-center justify-center h-48 overflow-hidden bg-gradient-to-br from-coral/20 to-blush/20"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-charcoal/60" />
                    <div className="relative z-10 text-center text-cloud">
                      <h3 className="text-2xl font-bold mb-2 text-cloud">
                        {item.brand?.toUpperCase() || item.title.toUpperCase()}
                      </h3>
                      <div className="w-12 h-1 bg-coral mx-auto mb-2" />
                      <p className="text-sm text-cloud/80">{item.title}</p>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col flex-grow bg-charcoal/90">
                    <h3 className="text-xl font-bold mb-1 text-cloud">
                      {item.title}
                    </h3>
                    {item.brand && (
                      <p className="text-slate text-sm font-medium mb-2">
                        {item.brand}
                      </p>
                    )}
                    <p className="text-slate/80 text-sm flex-grow mb-4">
                      {item.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags?.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-coral/20 text-coral rounded-full text-xs font-medium border border-coral/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handleProjectClick(item.link)}
                        className="text-coral flex items-center hover:text-blush relative group transition-colors duration-300"
                      >
                        <span className="relative z-10">View Project</span>
                        {item.link?.startsWith("http") ? (
                          <ExternalLink className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        ) : (
                          <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        )}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {!isMobile && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-charcoal/80 backdrop-blur-sm border border-coral/30 rounded-full flex items-center justify-center text-coral hover:bg-coral hover:text-white z-30 shadow-lg transition-all hover:scale-110"
                onClick={() =>
                  setActive((prev) => (prev - 1 + items.length) % items.length)
                }
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-charcoal/80 backdrop-blur-sm border border-coral/30 rounded-full flex items-center justify-center text-coral hover:bg-coral hover:text-white z-30 shadow-lg transition-all hover:scale-110"
                onClick={() => setActive((prev) => (prev + 1) % items.length)}
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === idx
                    ? "bg-coral w-8"
                    : "bg-slate/50 w-2 hover:bg-slate"
                }`}
                onClick={() => setActive(idx)}
                aria-label={`Go to item ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel3D;
