// components/InteractiveCard.jsx
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "../lib/utils";

export const InteractiveCard = ({
  children,
  className,
  interactiveColor = "#f58f7c",
  borderRadius = "24px",
  rotationFactor = 0.4,
  transitionDuration = 0.3,
  transitionEasing = "easeInOut",
  tailwindBgClass = "bg-charcoal/80 backdrop-blur-md",
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateXTrans = useTransform(
    y,
    [0, 1],
    [rotationFactor * 15, -rotationFactor * 15]
  );
  const rotateYTrans = useTransform(
    x,
    [0, 1],
    [-rotationFactor * 15, rotationFactor * 15]
  );

  const handlePointerMove = (e) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const px = (e.clientX - bounds.left) / bounds.width;
    const py = (e.clientY - bounds.top) / bounds.height;
    x.set(px);
    y.set(py);
  };

  const xPercentage = useTransform(x, (val) => `${val * 100}%`);
  const yPercentage = useTransform(y, (val) => `${val * 100}%`);
  const interactiveBackground = useMotionTemplate`radial-gradient(circle at ${xPercentage} ${yPercentage}, ${interactiveColor} 0%, transparent 80%)`;

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      style={{
        perspective: 1000,
        borderRadius,
      }}
      className="relative w-full max-w-sm aspect-[4/5] isolate group cursor-pointer"
      animate={{
        rotateX: isHovered ? rotateXTrans : 0,
        rotateY: isHovered ? rotateYTrans : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        duration: transitionDuration,
        ease: transitionEasing,
      }}
    >
      {/* Background Interactive Layer */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: interactiveBackground,
          borderRadius,
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0,
        }}
        transition={{
          duration: transitionDuration,
          ease: transitionEasing,
        }}
      />

      {/* Main Card */}
      <motion.div
        className={cn(
          "relative w-full h-full border border-cloud/20 shadow-xl",
          tailwindBgClass,
          className
        )}
        style={{ borderRadius }}
        animate={{
          boxShadow: isHovered
            ? `0 25px 50px -12px rgba(245, 143, 124, 0.25)`
            : `0 10px 25px -5px rgba(0, 0, 0, 0.1)`,
        }}
        transition={{
          duration: transitionDuration,
          ease: transitionEasing,
        }}
      >
        {/* Content */}
        <div className="relative z-10 w-full h-full p-6 flex flex-col">
          {children}
        </div>

        {/* Gradient border effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${interactiveColor}40, transparent, ${interactiveColor}40)`,
            borderRadius,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: transitionDuration,
            ease: transitionEasing,
          }}
        />
      </motion.div>
    </motion.div>
  );
};
