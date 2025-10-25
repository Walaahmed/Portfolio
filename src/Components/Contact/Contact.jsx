import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-cyan-400 text-xl" />,
      title: "Email",
      value: "wlaa61462@gmail.com",
      href: "mailto:wlaa61462@gmail.com",
    },
    {
      icon: <FaPhone className="text-cyan-400 text-xl" />,
      title: "Phone",
      value: "+20 111 025 6517",
      href: "tel:+201110256517",
    },
    {
      icon: <FaMapMarkerAlt className="text-cyan-400 text-xl" />,
      title: "Location",
      value: "Minia, Egypt",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Walaahmed" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/walaa-ahmed-a73783262" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnnoalaq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("❌ Something went wrong, please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error(`⚠️ Network error, check your internet. ${error?.message || ""}`);
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 relative bg-gradient-to-b from-[#0a0a0a] via-[#101010] to-[#0a0a0a] text-gray-200 overflow-hidden"
    >
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.15),transparent_60%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let’s work together and make it amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact <span className="text-cyan-400">Information</span>
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I am always open to discussing new projects, ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-[#141414]/70 border border-cyan-400/20 p-5 rounded-2xl shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-cyan-400/10">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <a
                        href={info.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me On
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-cyan-400/30 hover:border-purple-400 hover:bg-cyan-400/10 text-cyan-400 text-xl transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-[#141414]/70 backdrop-blur-md border border-cyan-400/20 p-8 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:border-cyan-400/40 transition-all duration-500 animate-fade-in-right">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#0a0a0a]/60 border border-cyan-400/20 p-3 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 outline-none transition"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#0a0a0a]/60 border border-cyan-400/20 p-3 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 outline-none transition"
                />
              </div>

              <input
                name="subject"
                placeholder="Message Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full bg-[#0a0a0a]/60 border border-cyan-400/20 p-3 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 outline-none transition"
              />

              <textarea
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                className="w-full bg-[#0a0a0a]/60 border border-cyan-400/20 p-3 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 outline-none transition resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
