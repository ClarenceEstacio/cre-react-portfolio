import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Calendar } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./ui/card";

const DEFAULT_EVENTS = [
  {
    year: "2023",
    title: "Major Achievement",
    subtitle: "Organization Name",
    description:
      "Description of the achievement or milestone reached during this time period.",
  },
  {
    year: "2022",
    title: "Important Milestone",
    subtitle: "Organization Name",
    description: "Details about this significant milestone and its impact.",
  },
  {
    year: "2021",
    title: "Key Event",
    subtitle: "Organization Name",
    description: "Information about this key event in the timeline.",
  },
];

export const ScrollTimeline = ({
  events = DEFAULT_EVENTS,
  title = "Timeline",
  subtitle = "Scroll to explore the journey",
  animationOrder = "sequential",
  cardAlignment = "alternating",
  lineColor = "bg-slate/30",
  activeColor = "bg-primary",
  progressIndicator = true,
  cardVariant = "default",
  cardEffect = "none",
  parallaxIntensity = 0.1, // Reduced for better performance
  progressLineWidth = 2,
  progressLineCap = "round",
  dateFormat = "badge",
  revealAnimation = "fade",
  className = "",
  connectorStyle = "line",
  perspective = false,
  darkMode = false,
  smoothScroll = true,
}) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRefs = useRef([]);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Optimized spring configuration for better performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Memoized active index calculation to prevent unnecessary updates
  const handleScrollProgress = useCallback(
    (v) => {
      const newIndex = Math.floor(v * events.length);
      setActiveIndex((prev) => {
        if (newIndex !== prev && newIndex >= 0 && newIndex < events.length) {
          return newIndex;
        }
        return prev;
      });
    },
    [events.length]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(handleScrollProgress);
    return () => unsubscribe();
  }, [scrollYProgress, handleScrollProgress]);

  // Memoized card variants for performance
  const getCardVariants = useMemo(
    () => (index) => {
      const baseDelay =
        animationOrder === "simultaneous"
          ? 0
          : animationOrder === "staggered"
          ? index * 0.15 // Reduced delay for smoother feel
          : index * 0.2;

      const initialStates = {
        fade: { opacity: 0, y: 30 },
        slide: {
          x:
            cardAlignment === "left"
              ? -50 // Reduced distance for smoother animation
              : cardAlignment === "right"
              ? 50
              : index % 2 === 0
              ? -50
              : 50,
          opacity: 0,
        },
        scale: { scale: 0.9, opacity: 0 }, // Less dramatic scale
        flip: { rotateY: 45, opacity: 0 }, // Reduced rotation
        none: { opacity: 1 },
      };

      return {
        initial: initialStates[revealAnimation],
        whileInView: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          rotateY: 0,
          transition: {
            duration: 0.6, // Slightly faster
            delay: baseDelay,
            ease: [0.25, 0.1, 0.25, 1.0],
          },
        },
        viewport: { once: false, margin: "-50px" }, // Reduced margin for earlier trigger
      };
    },
    [animationOrder, cardAlignment, revealAnimation]
  );

  // Memoized connector classes
  const connectorClasses = useMemo(() => {
    const baseClasses = cn(
      "absolute left-1/2 transform -translate-x-1/2",
      lineColor
    );
    switch (connectorStyle) {
      case "dots":
        return cn(baseClasses, "w-1 rounded-full");
      case "dashed":
        return cn(
          baseClasses,
          `w-[${progressLineWidth}px]`,
          "bg-repeat-y",
          "[background-image:linear-gradient(to_bottom,currentColor_33%,transparent_33%,transparent_66%,currentColor_66%)]",
          "[background-size:1px_12px]"
        );
      case "line":
      default:
        return cn(baseClasses, `w-[${progressLineWidth}px]`);
    }
  }, [connectorStyle, lineColor, progressLineWidth]);

  // Memoized card classes
  const getCardClasses = useMemo(
    () => (index) => {
      const baseClasses =
        "relative z-30 rounded-xl transition-all duration-300 group cursor-pointer will-change-transform"; // Added will-change for GPU acceleration

      const variantClasses = {
        default:
          "bg-charcoal/90 backdrop-blur-sm border border-slate/20 shadow-lg",
        elevated:
          "bg-charcoal/95 backdrop-blur-md border border-slate/40 shadow-xl",
        outlined: "bg-charcoal/70 backdrop-blur-lg border-2 border-coral/30",
        filled: "bg-charcoal/80 backdrop-blur border border-coral/30",
      };

      const effectClasses = {
        none: "",
        glow: "hover:shadow-[0_0_20px_rgba(245,143,124,0.2)] hover:border-coral/40",
        shadow: "hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]", // Reduced transform
        bounce: "hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]", // Less dramatic
      };

      const alignmentClassesDesktop =
        cardAlignment === "alternating"
          ? index % 2 === 0
            ? "md:mr-[calc(50%+1rem)] lg:mr-[calc(50%+2rem)]"
            : "md:ml-[calc(50%+1rem)] lg:ml-[calc(50%+2rem)]"
          : cardAlignment === "left"
          ? "md:mr-auto md:ml-0"
          : "md:ml-auto md:mr-0";

      return cn(
        baseClasses,
        variantClasses[cardVariant],
        effectClasses[cardEffect],
        alignmentClassesDesktop,
        "w-full sm:w-[90%] md:w-[calc(50%-1rem)] lg:w-[calc(50%-2rem)] xl:w-[calc(45%-2rem)]",
        "mx-auto md:mx-0"
      );
    },
    [cardVariant, cardEffect, cardAlignment]
  );

  return (
    <div
      ref={scrollRef}
      className={cn(
        "relative min-h-screen w-full",
        // Allow pointer events to reach background
        "pointer-events-none",
        className
      )}
      style={{
        // Optimize for GPU acceleration
        willChange: "transform",
        backfaceVisibility: "hidden",
        perspective: "1000px",
      }}
    >
      {/* Enhanced header section with pointer events */}
      <div className="relative z-10 text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-cloud font-poppins">
            <motion.span
              className="bg-gradient-to-r from-cloud via-blush to-coral bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {title}
            </motion.span>
          </h2>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-slate max-w-2xl mx-auto font-roboto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>

          {/* Enhanced decorative line */}
          <motion.div
            className="w-16 sm:w-20 lg:w-24 h-1 rounded-full mx-auto mt-6 sm:mt-8 relative overflow-hidden"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-coral to-blush" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24 pointer-events-none">
        <div className="relative mx-auto">
          {/* Optimized connector line */}
          <div
            className={cn(
              connectorClasses,
              "h-full absolute top-0 z-10",
              "shadow-[0_0_8px_rgba(79,79,81,0.2)]"
            )}
          ></div>

          {/* Optimized Progress Indicator */}
          {progressIndicator && (
            <>
              {/* Simplified background glow */}
              <motion.div
                className="absolute top-0 z-5 blur-sm opacity-40"
                style={{
                  height: progressHeight,
                  width: progressLineWidth + 2,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background:
                    "linear-gradient(to bottom, rgba(245,143,124,0.3), rgba(242,196,206,0.3))",
                }}
              />

              {/* Main progress line with optimized gradient */}
              <motion.div
                className="absolute top-0 z-10"
                style={{
                  height: progressHeight,
                  width: progressLineWidth,
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: progressLineCap === "round" ? "9999px" : "0px",
                  background:
                    "linear-gradient(to bottom, #f58f7c 0%, #f2c4ce 50%, #f58f7c 100%)",
                  boxShadow:
                    "0 0 15px rgba(245,143,124,0.4), 0 0 30px rgba(242,196,206,0.2)",
                }}
              />

              {/* Simplified traveling comet */}
              <motion.div
                className="absolute z-20"
                style={{
                  top: progressHeight,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Optimized comet with single glow */}
                <motion.div
                  className="w-4 h-4 rounded-full relative"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(242,196,206,0.7) 50%, transparent 100%)",
                    boxShadow:
                      "0 0 15px 3px rgba(242, 196, 206, 0.6), 0 0 25px 6px rgba(245, 143, 124, 0.3)",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </>
          )}

          <div className="relative z-20">
            {events.map((event, index) => {
              // Simplified parallax calculation
              const yOffset =
                parallaxIntensity > 0
                  ? useTransform(
                      smoothProgress,
                      [0, 1],
                      [parallaxIntensity * 50, -parallaxIntensity * 50]
                    )
                  : 0;

              return (
                <div
                  key={event.id || index}
                  ref={(el) => {
                    timelineRefs.current[index] = el;
                  }}
                  className={cn(
                    "relative flex items-center py-4",
                    "mb-12 sm:mb-16 lg:mb-20",
                    "flex-col md:flex-row",
                    cardAlignment === "alternating"
                      ? index % 2 === 0
                        ? "md:justify-start"
                        : "md:flex-row-reverse md:justify-start"
                      : cardAlignment === "left"
                      ? "md:justify-start"
                      : "md:flex-row-reverse md:justify-start"
                  )}
                >
                  {/* Optimized timeline dot */}
                  <div
                    className={cn(
                      "absolute top-1/2 transform -translate-y-1/2 z-30",
                      "left-1/2 -translate-x-1/2"
                    )}
                  >
                    {/* Simplified active ring */}
                    {index <= activeIndex && (
                      <motion.div
                        className="absolute inset-0 w-10 h-10 rounded-full border border-coral/20"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}

                    <motion.div
                      className={cn(
                        "w-6 h-6 sm:w-8 sm:h-8 rounded-full border-3 bg-charcoal flex items-center justify-center relative",
                        "shadow-lg transition-all duration-300",
                        index <= activeIndex
                          ? "border-coral shadow-coral/40"
                          : "border-slate bg-charcoal shadow-slate/20"
                      )}
                      animate={
                        index <= activeIndex
                          ? {
                              scale: [1, 1.05, 1],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Simplified inner dot */}
                      {index <= activeIndex && (
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-coral" />
                      )}
                    </motion.div>
                  </div>

                  {/* Optimized card with pointer events */}
                  <motion.div
                    className={cn(
                      getCardClasses(index),
                      "mt-16 sm:mt-20 md:mt-0 pointer-events-auto"
                    )}
                    variants={getCardVariants(index)}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: false, margin: "-50px" }}
                    style={yOffset ? { y: yOffset } : undefined}
                    whileHover={{
                      y: -4, // Reduced hover effect
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                  >
                    <Card className="bg-charcoal/90 backdrop-blur-sm border border-slate/20 overflow-hidden shadow-lg transition-all duration-300 group">
                      {/* Enhanced card highlight bar */}
                      <motion.div
                        className="h-1 bg-gradient-to-r from-coral to-blush relative overflow-hidden group-hover:h-1.5 transition-all duration-300"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        />
                        {/* Additional glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-coral to-blush opacity-0 group-hover:opacity-60 blur-sm transition-all duration-300" />
                      </motion.div>

                      <CardContent className="p-4 sm:p-6 lg:p-8">
                        {/* Optimized date badge with hover brightness */}
                        {dateFormat === "badge" ? (
                          <motion.div
                            className="flex items-center mb-3 sm:mb-4"
                            whileHover={{ scale: 1.02 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                            }}
                          >
                            <div className="flex items-center bg-coral/10 px-3 py-1.5 rounded-full border border-coral/20 backdrop-blur-sm group-hover:bg-coral/20 group-hover:border-coral/40 transition-all duration-300">
                              {event.icon || (
                                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-coral group-hover:text-coral group-hover:brightness-125 transition-all duration-300" />
                              )}
                              <span className="text-xs sm:text-sm font-bold text-coral font-poppins group-hover:text-coral group-hover:brightness-125 transition-all duration-300">
                                {event.year}
                              </span>
                            </div>
                          </motion.div>
                        ) : (
                          <p className="text-base sm:text-lg font-bold text-coral mb-3 font-poppins group-hover:brightness-125 transition-all duration-300">
                            {event.year}
                          </p>
                        )}

                        <motion.h3
                          className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-cloud font-poppins leading-tight group-hover:text-white group-hover:brightness-110 transition-all duration-300 relative"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {event.title}
                          {/* Text glow effect on hover */}
                          <div className="absolute inset-0 text-blush blur-sm opacity-0 group-hover:opacity-30 transition-all duration-300 pointer-events-none">
                            {event.title}
                          </div>
                        </motion.h3>

                        {event.subtitle && (
                          <motion.p
                            className="text-sm sm:text-base text-slate font-medium mb-3 sm:mb-4 font-roboto group-hover:text-cloud group-hover:brightness-110 transition-all duration-300"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            {event.subtitle}
                          </motion.p>
                        )}

                        <motion.p
                          className="text-sm sm:text-base text-slate font-roboto leading-relaxed group-hover:text-cloud group-hover:brightness-105 transition-all duration-300"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {event.description}
                        </motion.p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
