import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Filter,
  Search,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import PixelBlast from "../components/PixelBlast";
import AnimatedTabs from "../components/projects/AnimatedTabs";
import CertificateCard from "../components/projects/CertificateCard";
import ExperienceCard from "../components/projects/ExperienceCard";
import ProjectCarousel from "../components/projects/ProjectCarousel";

function Projects() {
  const [activeTab, setActiveTab] = useState("certificates");
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Items per page for pagination
  const itemsPerPageMobile = 4;
  const itemsPerPageDesktop = 8;

  // Monitor scroll position and check if mobile
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const certificatesData = [
    {
      id: 1,
      title: "2024 Outstanding Student Member - Finalist",
      issuer: "Mechatronics and Robotics Society of the Philippines",
      date: "2024",
      image: "/images/certificates/2024-outstanding-student-member.jpeg",
      description:
        "Recognized as an Outstanding Student Member Finalist during MRSP National and Regional ICAMEROB 2024.",
      credentialId: "MRSPOSM2024",
    },
    {
      id: 2,
      title: "Best Thesis Awardee – Holy Cross College",
      issuer: "Holy Cross College, Sta. Ana, Pampanga",
      date: "2024",
      image: "/images/certificates/BestinThesis.jpeg",
      description:
        "Awarded Best Thesis during undergraduate graduation at Holy Cross College.",
      credentialId: "BESTTHESIS2020",
    },
    {
      id: 3,
      title: "Recognition – Engr. Clarence R. Estacio",
      issuer: "Holy Cross College / Professional Achievement",
      date: "2024",
      image: "/images/certificates/ClarenceR.Estacio.png",
      description:
        "Recognition for academic and professional contributions as Engr. Clarence R. Estacio.",
      credentialId: "CLARENCE2024",
    },
    {
      id: 4,
      title: "Certificate of Presentation – ICAMEROB 2024",
      issuer:
        "Mechatronics and Robotics Society of the Philippines / Cebu Technological University – Danao Campus",
      date: "2024",
      image: "/images/certificates/cop-international.jpg",
      description:
        "Presented the paper 'MusHouse: An Automated Greenhouse for Pleurotus Ostreatus Growing Optimization System with Touchscreen-Controlled and Image Monitoring' at the International Conference on Automation, Mechatronics, and Robotics (ICAMEROB 2024).",
      credentialId: "ICAMEROBPRESENT2024",
    },
    {
      id: 5,
      title: "2nd Best Presenter – ICAMEROB 2024",
      issuer:
        "Mechatronics and Robotics Society of the Philippines / Cebu Technological University – Danao Campus",
      date: "2024",
      image: "/images/certificates/2ndbestpresenterinternationalrnd.JPG",
      description:
        "Awarded 2nd Best Presenter in Track 2: Automation Engineering and Technology at the International Conference on Automation, Mechatronics, and Robotics (ICAMEROB 2024).",
      credentialId: "ICAMEROBPRESENTER2024",
    },
    {
      id: 6,
      title: "Best Paper Award – ICAMEROB 2024",
      issuer:
        "Mechatronics and Robotics Society of the Philippines / Cebu Technological University – Danao Campus",
      date: "2024",
      image: "/images/certificates/bestpresenterinternationalrnd.JPG",
      description:
        "Received Best Paper Award for 'MusHouse: An Automated Greenhouse for Pleurotus Ostreatus Growing Optimization System with Touchscreen-Controlled and Image Monitoring' at the International Conference on Automation, Mechatronics, and Robotics (ICAMEROB 2024).",
      credentialId: "ICAMEROBBESTPAPER2024",
    },
    {
      id: 7,
      title: "Innovative Solution for Industry 5.0 – 4th Place Regional",
      issuer: "Mechatronics and Robotics Society of the Philippines",
      date: "2024",
      image: "/images/certificates/industry5-regional.jpg",
      description:
        "Achieved 4th place in regional competition with an innovative solution for Industry 5.0.",
      credentialId: "INDUSTRY52024",
    },
    {
      id: 8,
      title:
        "Certificate of Participation – MRSP Annual General Membership Meeting and Election 2024",
      issuer:
        "Mechatronics and Robotics Society of the Philippines / DOST-MIRDC, Taguig City",
      date: "2024",
      image: "/images/certificates/mrsp-agmm2024.jpeg",
      description:
        "Awarded for active participation during the MRSP Annual General Membership Meeting and Election 2024 with the theme 'Pinoy Innovation for a Sustainable Future in Mechatronics and Robotics,' held at DOST-MIRDC, Gen. Santos Ave., Bicutan, Taguig City.",
      credentialId: "MRSPAGMM2024PARTICIPANT",
    },
    {
      id: 9,
      title:
        "Certificate of Appreciation – Resource Speaker (MRSP Pampanga Webinar)",
      issuer:
        "Mechatronics and Robotics Society of the Philippines – Pampanga Chapter",
      date: "2024",
      image: "/images/certificates/mrsp-pamp-2024-webinar.png",
      description:
        "Recognized for invaluable contribution as a resource speaker in the seminar series 'Leveraging AI to Transform Education and Modern Workflows' with the topic 'Enhancing Presentations and Visuals with AI.'",
      credentialId: "MRSPPAMP2024SPEAKER",
    },
    {
      id: 10,
      title: "MRSP and Me – Professional Membership Recognition",
      issuer: "Mechatronics and Robotics Society of the Philippines",
      date: "2024",
      image: "/images/certificates/mrspandme.png",
      description:
        "Recognition of engagement and professional membership with MRSP.",
      credentialId: "MRSPME2024",
    },
    {
      id: 11,
      title: "President's List – Second Semester A.Y. 2023–2024",
      issuer: "Holy Cross College, Sta. Ana, Pampanga",
      date: "2024",
      image: "/images/certificates/pl-ay-2023-2024-sem2.jpg",
      description:
        "Academic recognition for outstanding performance during the second semester of A.Y. 2023–2024.",
      credentialId: "DEANSLIST2024",
    },
    {
      id: 12,
      title: "Smart Farming System – Robotics in Aquaculture and Agriculture",
      issuer:
        "Mechatronics and Robotics Society of the Philippines – Pampanga Chapter",
      date: "2022",
      image: "/images/certificates/smartfarming.png",
      description:
        "Webinar on robotics applications in aquaculture and agriculture industry.",
      credentialId: "SMARTFARM2022",
    },
    {
      id: 13,
      title: "STEM Senior High School Research Panelist",
      issuer:
        "Holy Cross College – Senior High School Department, Sta. Ana, Pampanga",
      date: "2025",
      image: "/images/certificates/STEM-SHS-Research-Panelist.jpeg",
      description:
        "Served as a panelist for Senior High School research under the STEM strand.",
      credentialId: "STEMPANEL2025",
    },
    {
      id: 14,
      title: "Unlocking Technology Certification for Computer Engineers",
      issuer:
        "Institute of Computer Engineers of the Philippines – Region 3 / University of the Assumption, San Fernando, Pampanga",
      date: "2024",
      image: "/images/certificates/unlockingtechnologycertificationforcpe.jpg",
      description:
        "Certification seminar focused on technology innovations for computer engineers.",
      credentialId: "UTC2024",
    },
  ];

  const experienceData = [
    {
      id: 1,
      company: "Holy Cross College Pampanga",
      position: "College Instructor",
      duration: "2024 - Present",
      location: "Sta. Ana, Pampanga",
      logo: "/src/assets/images/experience/tech-solutions.jpg",
      description:
        "Teaching full-time in the School of Engineering, Computing, and Library Science (SECLS) Department. Handling programming courses such as Java, Python, Web Development, IoT, and Data Structures & Algorithms.",
      technologies: ["Java", "Python", "HTML & CSS", "JavaScript", "Arduino"],
    },
    {
      id: 2,
      company: "Holy Cross College Pampanga",
      position: "HR Intern",
      duration: "2023",
      location: "Sta. Ana, Pampanga",
      logo: "/src/assets/images/experience/startup-xyz.jpg",
      description:
        "Completed internship in the Human Resources department. Assisted in recruitment, employee engagement activities, and organizational tasks, gaining exposure to professional work culture.",
      technologies: ["Recruitment", "Employee Engagement", "Documentation"],
    },
  ];

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      brand: "ShopSmart",
      description:
        "A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "/src/assets/images/projects/ecommerce.jpg",
      link: "https://github.com/yourusername/ecommerce-platform",
    },
    {
      id: 2,
      title: "Task Management App",
      brand: "TaskFlow",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      tags: ["React", "Socket.io", "Express", "PostgreSQL"],
      imageUrl: "/src/assets/images/projects/taskflow.jpg",
      link: "https://github.com/yourusername/task-manager",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      brand: "WeatherPro",
      description:
        "A responsive weather dashboard with location-based forecasts and interactive maps.",
      tags: ["JavaScript", "API Integration", "Chart.js", "CSS Grid"],
      imageUrl: "/src/assets/images/projects/weather.jpg",
      link: "https://github.com/yourusername/weather-dashboard",
    },
  ];

  // Get unique years for filter
  const availableYears = useMemo(() => {
    const years = [...new Set(certificatesData.map((cert) => cert.date))];
    return years.sort((a, b) => b.localeCompare(a));
  }, []);

  // Filter certificates based on search and year
  const filteredCertificates = useMemo(() => {
    return certificatesData.filter((cert) => {
      const matchesSearch =
        searchQuery === "" ||
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesYear = selectedYear === "all" || cert.date === selectedYear;

      return matchesSearch && matchesYear;
    });
  }, [searchQuery, selectedYear]);

  // Get visible certificates (using pagination for all screen sizes)
  const displayedCertificates = useMemo(() => {
    const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCertificates.slice(startIndex, endIndex);
  }, [
    filteredCertificates,
    currentPage,
    isMobile,
    itemsPerPageMobile,
    itemsPerPageDesktop,
  ]);

  // Calculate total pages based on screen size
  const totalPages = Math.ceil(
    filteredCertificates.length /
      (isMobile ? itemsPerPageMobile : itemsPerPageDesktop)
  );

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(page);
    // Smooth scroll to top of content
    const contentElement = document.getElementById("certificate-grid");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Touch handling for swipe gestures on mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (activeTab === "certificates") {
      if (isLeftSwipe && currentPage < totalPages) {
        goToNextPage();
      }
      if (isRightSwipe && currentPage > 1) {
        goToPrevPage();
      }
    }
  };

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedYear]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  // PixelBlast configuration based on active tab
  const getPixelBlastConfig = () => {
    switch (activeTab) {
      case "certificates":
        return {
          enableRipples: true,
          rippleIntensityScale: 1.2,
          rippleThickness: 0.12,
          rippleSpeed: 0.3,
          variant: "circle",
          pixelSize: 3,
          color: "#f5d6f5",
          patternDensity: 0.7,
          edgeFade: 0.3,
        };
      case "experience":
        return {
          enableRipples: true,
          rippleIntensityScale: 1.0,
          rippleThickness: 0.15,
          rippleSpeed: 0.35,
          variant: "circle",
          pixelSize: 2.5,
          color: "#f5d6f5",
          patternDensity: 0.8,
          edgeFade: 0.25,
        };
      case "projects":
        return {
          enableRipples: true,
          rippleIntensityScale: 1.4,
          rippleThickness: 0.18,
          rippleSpeed: 0.4,
          variant: "circle",
          pixelSize: 3.5,
          color: "#f5d6f5",
          patternDensity: 0.9,
          edgeFade: 0.2,
        };
      default:
        return {
          enableRipples: true,
          rippleIntensityScale: 1.5,
          rippleThickness: 0.15,
          rippleSpeed: 0.4,
          variant: "circle",
          pixelSize: 3,
          color: "#f5d6f5",
          patternDensity: 0.8,
          edgeFade: 0.3,
        };
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-charcoal overflow-hidden"
    >
      {/* PixelBlast Background */}
      <div className="absolute inset-0 z-0">
        <PixelBlast {...getPixelBlastConfig()} />
      </div>

      {/* Sticky Navigation Bar */}
      <div className="sticky top-0 z-30 bg-charcoal/95 backdrop-blur-lg border-b border-cloud/10">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          {/* Tabs */}
          <AnimatedTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Search and Filter Bar (Only for Certificates) */}
          {activeTab === "certificates" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex flex-col sm:flex-row gap-3"
            >
              {/* Search Input */}
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cloud/50"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search certificates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate/20 border border-cloud/20 rounded-lg text-cloud placeholder-cloud/50 focus:outline-none focus:border-coral/50 transition-colors"
                />
              </div>

              {/* Year Filter */}
              <div className="relative">
                <Filter
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cloud/50"
                  size={18}
                />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="pl-10 pr-8 py-2 bg-slate/20 border border-cloud/20 rounded-lg text-cloud focus:outline-none focus:border-coral/50 transition-colors appearance-none cursor-pointer
                    [&>option]:bg-charcoal [&>option]:text-cloud [&>option:checked]:bg-coral/30 [&>option:hover]:bg-coral/20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23f5d6f5' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  <option value="all">All Years</option>
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-center px-4 py-2 bg-coral/10 border border-coral/30 rounded-lg">
                <span className="text-coral font-medium text-sm">
                  {filteredCertificates.length}{" "}
                  {filteredCertificates.length === 1
                    ? "Certificate"
                    : "Certificates"}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {activeTab === "certificates" && (
                <>
                  {/* 4 columns on desktop, 2 on mobile */}
                  <div
                    id="certificate-grid"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                    {displayedCertificates.map((cert) => (
                      <CertificateCard
                        key={cert.id}
                        cert={cert}
                        onImageClick={setSelectedImage}
                      />
                    ))}
                  </div>

                  {/* Pagination for all screen sizes */}
                  {filteredCertificates.length > 0 && totalPages > 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-center items-center gap-2 mt-8"
                    >
                      {/* Previous Button */}
                      <button
                        onClick={goToPrevPage}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          currentPage === 1
                            ? "bg-slate/10 text-cloud/30 cursor-not-allowed"
                            : "bg-coral/20 text-coral hover:bg-coral/30 active:scale-95"
                        }`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M12.5 15L7.5 10L12.5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {/* Page Numbers */}
                      <div className="flex gap-1">
                        {/* Show first page */}
                        {currentPage > 3 && (
                          <>
                            <button
                              onClick={() => goToPage(1)}
                              className="w-10 h-10 rounded-lg bg-slate/20 text-cloud hover:bg-coral/20 hover:text-coral transition-all duration-300"
                            >
                              1
                            </button>
                            {currentPage > 4 && (
                              <span className="w-10 h-10 flex items-center justify-center text-cloud/50">
                                ...
                              </span>
                            )}
                          </>
                        )}

                        {/* Show pages around current page */}
                        {Array.from(
                          { length: Math.min(5, totalPages) },
                          (_, i) => {
                            let pageNum;
                            if (totalPages <= 5) {
                              pageNum = i + 1;
                            } else if (currentPage <= 3) {
                              pageNum = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                              pageNum = totalPages - 4 + i;
                            } else {
                              pageNum = currentPage - 2 + i;
                            }

                            if (
                              pageNum > 0 &&
                              pageNum <= totalPages &&
                              !(currentPage > 3 && pageNum === 1) &&
                              !(
                                currentPage < totalPages - 2 &&
                                pageNum === totalPages
                              )
                            ) {
                              return (
                                <button
                                  key={pageNum}
                                  onClick={() => goToPage(pageNum)}
                                  className={`w-10 h-10 rounded-lg transition-all duration-300 ${
                                    currentPage === pageNum
                                      ? "bg-coral text-charcoal font-bold"
                                      : "bg-slate/20 text-cloud hover:bg-coral/20 hover:text-coral"
                                  }`}
                                >
                                  {pageNum}
                                </button>
                              );
                            }
                            return null;
                          }
                        ).filter(Boolean)}

                        {/* Show last page */}
                        {currentPage < totalPages - 2 && totalPages > 5 && (
                          <>
                            {currentPage < totalPages - 3 && (
                              <span className="w-10 h-10 flex items-center justify-center text-cloud/50">
                                ...
                              </span>
                            )}
                            <button
                              onClick={() => goToPage(totalPages)}
                              className="w-10 h-10 rounded-lg bg-slate/20 text-cloud hover:bg-coral/20 hover:text-coral transition-all duration-300"
                            >
                              {totalPages}
                            </button>
                          </>
                        )}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          currentPage === totalPages
                            ? "bg-slate/10 text-cloud/30 cursor-not-allowed"
                            : "bg-coral/20 text-coral hover:bg-coral/30 active:scale-95"
                        }`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.5 15L12.5 10L7.5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </motion.div>
                  )}

                  {/* Page Info */}
                  {filteredCertificates.length > 0 && (
                    <div className="text-center mt-4">
                      <p className="text-cloud/60 text-sm">
                        Showing{" "}
                        {(currentPage - 1) *
                          (isMobile
                            ? itemsPerPageMobile
                            : itemsPerPageDesktop) +
                          1}
                        -
                        {Math.min(
                          currentPage *
                            (isMobile
                              ? itemsPerPageMobile
                              : itemsPerPageDesktop),
                          filteredCertificates.length
                        )}{" "}
                        of {filteredCertificates.length} certificates
                      </p>
                      {isMobile && totalPages > 1 && (
                        <p className="text-coral/60 text-xs mt-1 flex items-center justify-center gap-2">
                          <ChevronLeft size={14} />
                          Swipe to navigate
                          <ChevronRight size={14} />
                        </p>
                      )}
                    </div>
                  )}

                  {/* No Results Message */}
                  {filteredCertificates.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-cloud/70 text-lg">
                        No certificates found matching your criteria.
                      </p>
                    </div>
                  )}
                </>
              )}

              {activeTab === "experience" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {experienceData.map((exp) => (
                    <ExperienceCard key={exp.id} exp={exp} />
                  ))}
                </div>
              )}

              {activeTab === "projects" && (
                <ProjectCarousel items={projectsData} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-12 h-12 bg-coral/90 hover:bg-coral rounded-full flex items-center justify-center text-charcoal shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ marginBottom: isMobile ? "60px" : "0" }}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-slate/20 backdrop-blur-sm border border-coral/30 rounded-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-coral/20 hover:bg-coral rounded-full flex items-center justify-center text-cloud hover:text-charcoal transition-all duration-300"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-coral/10 to-blush/10">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZjU4ZjdjIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMjUiIHI9IjQwIiBmaWxsPSIjZjU4ZjdjIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8dGV4dCB4PSIyMDAiIHk9IjEzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2Y1OGY3YyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSI2MDAiPkNlcnRpZmljYXRlPC90ZXh0Pgo8L3N2Zz4=";
                    }}
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold font-poppins text-blush mb-3">
                    {selectedImage.title}
                  </h2>
                  <p className="text-coral text-lg font-medium mb-1 font-roboto">
                    {selectedImage.issuer}
                  </p>
                  <p className="text-cloud mb-4 font-roboto">
                    {selectedImage.date}
                  </p>
                  <p className="text-cloud/80 leading-relaxed mb-4 font-roboto">
                    {selectedImage.description}
                  </p>
                  <div className="pt-4 border-t border-slate/20">
                    <p className="text-cloud/70 text-sm font-roboto">
                      Credential ID:{" "}
                      <span className="text-coral font-mono">
                        {selectedImage.credentialId}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
