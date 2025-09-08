import { GraduationCap } from "lucide-react";
import PixelBlast from "../components/PixelBlast";
import { ScrollTimeline } from "../components/ScrollTimeline";

const About = () => {
  // Your personal timeline events - customize these with your own journey
  const timelineEvents = [
    {
      id: "1",
      year: "2021 - 2024",
      title: "BS Computer Engineering",
      subtitle: "Holy Cross College - Pampanga",
      description:
        "Graduated with a Bachelor's degree in Computer Engineering. Represented the school in programming competitions and research at regional, national, and international levels. Our thesis was awarded Best Thesis during graduation.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-coral" />,
      color: "coral",
    },
    {
      id: "2",
      year: "2018 - 2020",
      title: "STEM Strand (Senior High)",
      subtitle: "Holy Cross College - Pampanga",
      description:
        " Completed the STEM strand, strengthening my foundation in science and mathematics. Actively participated in IT-related extracurricular activities that enhanced my interest in technology.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-coral" />,
      color: "coral",
    },
    {
      id: "3",
      year: "2015 - 2018",
      title: "Junior High School",
      subtitle: "Pasig National High School",
      description:
        "Built strong academic habits and engaged in various school activities. Developed an early interest in computers and electronics, which inspired me to pursue the STEM strand in senior high school.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-coral" />,
      color: "coral",
    },
    {
      id: "4",
      year: "2009 - 2014",
      title: "Elementary School",
      subtitle: "Mandasig Elementary School",
      description:
        "Completed my elementary education with honors. Developed a passion for learning and actively participated in school events, laying the foundation of my academic journey.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-coral" />,
      color: "coral",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen relative overflow-hidden bg-charcoal"
      style={{
        // Optimize for smooth scrolling and GPU acceleration
        willChange: "scroll-position",
        backfaceVisibility: "hidden",
      }}
    >
      {/* PixelBlast Background Layer - Now fully interactive */}
      <div className="absolute inset-0 z-0">
        <PixelBlast
          enableRipples={true}
          rippleIntensityScale={1.5}
          rippleThickness={0.15}
          rippleSpeed={0.4}
          variant="circle"
          pixelSize={3}
          color="#f5d6f5"
          patternDensity={0.8}
          edgeFade={0.3}
        />
      </div>

      {/* Content Layer - ScrollTimeline with optimized performance and clickable background */}
      <div className="relative z-10">
        <ScrollTimeline
          events={timelineEvents}
          title="My Journey"
          subtitle="Discover the milestones that shaped my career in tech"
          animationOrder="staggered"
          cardAlignment="alternating"
          lineColor="bg-slate/20"
          activeColor="bg-coral"
          progressIndicator={true}
          cardVariant="elevated"
          cardEffect="shadow"
          parallaxIntensity={0.1} // Optimized for better performance
          progressLineWidth={4}
          progressLineCap="round"
          dateFormat="badge"
          revealAnimation="slide"
          connectorStyle="line"
          perspective={false}
          darkMode={false}
          smoothScroll={true}
          className="font-roboto bg-transparent"
        />
      </div>
    </section>
  );
};

export default About;
