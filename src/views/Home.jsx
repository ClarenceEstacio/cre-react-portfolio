import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import PixelBlast from "../components/PixelBlast";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import TextType from "../components/TextType";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden pt-20 pb-8"
    >
      {/* PixelBlast Background - Fixed z-index and pointer events */}
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

      {/* Foreground Content - Fixed pointer events */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 px-4 sm:px-6 max-w-7xl w-full pointer-events-none">
        {/* Left Content: ProfileCard */}
        <div className="flex-1 flex justify-center order-1 lg:order-none pointer-events-auto">
          <div className="max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] w-full">
            <ProfileCard />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-none pointer-events-auto">
          {/* Small greeting */}
          <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-cloud font-roboto">
            Hi, I'm
          </h2>

          {/* Large Name - Made responsive */}
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-wide text-blush leading-tight whitespace-nowrap">
            <TextType
              text={["Clarence R. Estacio"]}
              typingSpeed={75} // milliseconds per character
              pauseDuration={1500} // wait time after finishing
              deletingSpeed={50}
              loop={true}
              showCursor={true} // show the blinking cursor
              cursorCharacter="|" // cursor character
              className="text-blush" // optional, inherits styling
            />
          </h1>

          {/* Medium title */}
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-cloud font-semibold font-roboto leading-relaxed">
            Computer Engineer & Aspiring Web Developer
          </p>

          {/* Professional summary with elegant styling */}
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-cloud leading-relaxed max-w-lg font-roboto mx-auto lg:mx-0 text-justify">
            I am an{" "}
            <span className="text-blush font-semibold italic">
              aspiring Web Developer
            </span>{" "}
            hoping to find a role where I can continue{" "}
            <span className="text-coral underline decoration-coral/50 underline-offset-2">
              learning
            </span>
            , enhance my skills, and grow professionally. I am open to new
            experiences and eager to take on{" "}
            <span className="text-blush font-medium">challenges</span> that will
            help me{" "}
            <span className="bg-gradient-to-r from-coral to-blush bg-clip-text text-transparent font-semibold">
              improve
            </span>
            , while contributing positively to the team in any way I can.
          </p>

          {/* Social Links + CV Button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-6 justify-center lg:justify-start">
            {/* Social Icons */}
            <div className="flex gap-4 sm:gap-6 text-lg sm:text-xl lg:text-2xl text-cloud justify-center lg:justify-start">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>

            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download
              className="px-4 sm:px-6 py-2 sm:py-3 bg-coral text-charcoal font-semibold rounded-md hover:bg-blush transition-colors duration-200 text-center text-sm sm:text-base whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
