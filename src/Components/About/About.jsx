import { FaCode, FaLightbulb, FaUsers, FaAward } from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: <FaCode className="h-8 w-8 text-cyan-400 mx-auto mb-2" />,
      title: "Technical Expertise",
      description: "1+ years of frontend development experience",
    },
    {
      icon: <FaLightbulb className="h-8 w-8 text-cyan-400 mx-auto mb-2" />,
      title: "Innovative Solutions",
      description: "Creative problem-solving for complex technical challenges",
    },
    {
      icon: <FaUsers className="h-8 w-8 text-cyan-400 mx-auto mb-2" />,
      title: "Team Collaboration",
      description: "Experience working with multidisciplinary teams",
    },
    {
      icon: <FaAward className="h-8 w-8 text-cyan-400 mx-auto mb-2" />,
      title: "High Quality",
      description: "Commitment to best practices and clean code",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 relative bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-gray-200 overflow-hidden"
    >
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.15),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* الصورة */}
          <div className="relative animate-fade-in-left flex justify-center order-1 lg:order-none">
            <div className="relative w-full sm:w-4/5 md:w-3/4 lg:w-[400px] rounded-3xl overflow-hidden border border-cyan-400/30 hover:border-purple-400/50 transition-all duration-500 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]">
              <img
                src="/images/about.jpg"
                alt="About Me"
                className="w-full h-auto object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent"></div>
            </div>
          </div>

          {/* النص */}
          <div className="animate-fade-in-right space-y-6 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Frontend Developer specialized in{" "}
              <span className="font-bold">React</span>
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              I am a passionate and detail-oriented Frontend Developer with a
              focus on building elegant, responsive, and user-friendly web
              applications. My expertise lies in React and modern frontend tools.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I enjoy transforming complex ideas into smooth, interactive
              experiences. I’m constantly learning and exploring new technologies
              to stay up-to-date with modern web development trends.
            </p>

            {/* المميزات */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#141414]/70 border border-cyan-400/20 p-6 rounded-2xl hover:border-purple-400/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition-all duration-500 flex flex-col items-center text-center"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
