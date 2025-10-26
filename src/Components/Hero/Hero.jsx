import  { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Frontend Developer", "React Specialist", "UI/UX Enthusiast"];

  useEffect(() => {
    const currentTitle = titles[currentIndex % titles.length];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setDisplayText("");
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Walaahmed", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/walaa-ahmed-a73783262", label: "LinkedIn" },
    { icon: <FaEnvelope />, href: "mailto:wlaa61462@gmail.com", label: "Email" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
       id="home"
  className="min-h-screen flex items-center justify-center px-6 
  bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#000000]
  pt-24 sm:pt-32 md:pt-40"
    >
      {/* خلفية متحركة خفيفة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,234,255,0.1)_0%,transparent_70%)] animate-pulse"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl text-gray-400">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,234,255,0.6)]">
              Walaa Ahmed
            </h1>
            <div className="h-8 md:h-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#00eaff]">
                {displayText}
                <span className="animate-pulse">|</span>
              </h3>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Passionate frontend developer creating powerful and scalable web applications.
            Experienced in modern frontend technologies like React and TypeScript.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-[#00eaff] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#00bcd4] transition-all duration-300 shadow-[0_0_15px_rgba(0,234,255,0.5)] hover:shadow-[0_0_25px_rgba(0,234,255,0.8)] hover:scale-105"
            >
              Contact Me
            </button>

            <a
              href="https://drive.google.com/drive/folders/1630UdOahFdNnq0_aA-0M_75Uxcs_L68s"
              download
              className="border-2 border-[#00eaff] text-[#00eaff] px-6 py-3 rounded-lg font-medium hover:bg-[#00eaff] hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {socialLinks.map((social, index) => (
              <button
                key={index}
                onClick={() =>
                  social.href.startsWith("#")
                    ? scrollToSection(social.href)
                    : window.open(social.href, "_blank")
                }
                className="p-3 rounded-full border border-gray-700 hover:border-[#00eaff] hover:bg-[#0c1a1a] transition-all duration-300 hover:scale-110"
              >
                <span className="text-[#00eaff] text-xl">{social.icon}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-[#00eaff]/30 overflow-hidden shadow-[0_0_25px_rgba(0,234,255,0.3)] hover:scale-105 transition-transform duration-500">
              <img
                src="/projects/hero.jpg"
                alt="Walaa Ahmed"
                className="w-80 h-70 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[#00eaff]/30 rounded-full animate-ping"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-[#00eaff]/20 rounded-full animate-ping"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
