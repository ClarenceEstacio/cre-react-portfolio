import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import { useState } from "react";
import Globe from "../components/Globe";
import PixelBlast from "../components/PixelBlast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_06m6pc9";
    const TEMPLATE_ID = "template_ft5pxzw";
    const PUBLIC_KEY = "19D2GfY21XurRtOnE";

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      console.log("Email sent successfully!", result.text);
      alert(
        "Thank you! Your message has been sent successfully! I will get back to you soon."
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert(
        "Sorry, something went wrong. Please try again or email me directly at clarence16estacio@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "clarence16estacio@gmail.com",
      link: "mailto:clarence16estacio@gmail.com",
      color: "#f58f7c",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 976 073 0710",
      link: "tel:+639760730710",
      color: "#f2c4ce",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Candaba, Pampanga, Philippines",
      link: "#",
      color: "#f5d6f5",
    },
  ];

  const pixelBlastConfig = {
    enableRipples: true,
    rippleIntensityScale: 1.2,
    rippleThickness: 0.12,
    rippleSpeed: 0.25,
    variant: "circle",
    pixelSize: 3,
    color: "#f5d6f5",
    patternDensity: 0.5,
    edgeFade: 0.4,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-charcoal overflow-hidden py-20"
    >
      {/* PixelBlast Background */}
      <div className="absolute inset-0 z-0">
        <PixelBlast {...pixelBlastConfig} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins mb-4"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #f5d6f5, #f58f7c, #f2c4ce, #f5d6f5)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let's Connect
          </motion.h1>
          <motion.p
            className="text-cloud/80 text-base sm:text-lg font-roboto max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Have a project in mind? Let's create something amazing together!
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Globe and Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Globe Container - Fixed shadow issue */}
            <motion.div
              className="flex justify-center lg:justify-start mb-8"
              {...floatingAnimation}
            >
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                {/* Globe Shadow - positioned behind */}
                <div
                  className="absolute inset-4 bg-coral/10 blur-2xl rounded-full"
                  style={{ zIndex: -1 }}
                />
                {/* Globe */}
                <div className="relative z-10">
                  <Globe
                    baseColor="#f58f7c"
                    markerColor="#f2c4ce"
                    glowColor="#f5d6f5"
                    dark={0.9}
                    scale={1.2}
                  />
                </div>
              </div>
            </motion.div>

            {/* Contact Information Cards */}
            <div className="space-y-4 px-4 sm:px-0">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-slate/10 backdrop-blur-sm border border-cloud/10 rounded-xl hover:border-coral/50 hover:bg-slate/20 transition-all duration-300 group"
                    whileHover={{ x: 5, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        backgroundColor: `${info.color}20`,
                        borderColor: info.color,
                        borderWidth: "2px",
                      }}
                    >
                      <Icon size={24} style={{ color: info.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-cloud/60 text-xs sm:text-sm font-roboto">
                        {info.label}
                      </p>
                      <p className="text-cloud font-medium font-poppins text-sm sm:text-base break-all">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div variants={itemVariants} className="px-4 sm:px-0">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-slate/10 backdrop-blur-md border border-cloud/10 rounded-2xl p-6 sm:p-8 space-y-6"
              whileHover={{ borderColor: "rgba(245, 143, 124, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Form Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold font-poppins text-blush">
                  Send Message
                </h3>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="text-coral" size={24} />
                </motion.div>
              </div>

              {/* Name Field */}
              <div className="relative">
                <label className="block text-cloud/80 text-sm font-roboto mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cloud/50"
                    size={18}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-10 pr-4 py-3 bg-slate/20 border border-cloud/20 rounded-lg text-cloud placeholder-cloud/50 focus:outline-none focus:border-coral/50 focus:bg-slate/30 transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label className="block text-cloud/80 text-sm font-roboto mb-2">
                  Your Email
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cloud/50"
                    size={18}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-10 pr-4 py-3 bg-slate/20 border border-cloud/20 rounded-lg text-cloud placeholder-cloud/50 focus:outline-none focus:border-coral/50 focus:bg-slate/30 transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-cloud/80 text-sm font-roboto mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-3 top-3 text-cloud/50"
                    size={18}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-10 pr-4 py-3 bg-slate/20 border border-cloud/20 rounded-lg text-cloud placeholder-cloud/50 focus:outline-none focus:border-coral/50 focus:bg-slate/30 transition-all duration-300 min-h-[120px] resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-coral to-blush text-charcoal font-bold font-poppins rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-coral/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Send size={20} />
                  </motion.div>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
