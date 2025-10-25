import { FaCheckCircle } from "react-icons/fa";

const Internship = () => {
  const internships = [
    {
      title: "Frontend Developer & Cross Platform Mobile Development",
      date: "(Feb 2025 – July 2025)",
      image: "/images/internship.jpg",
      responsibilities: [
        "Completed intensive training in HTML, CSS, JavaScript, TypeScript, and frameworks like ReactJS and Angular.",
        "Learned Cross Platform Mobile Development using Flutter and React Native.",
        "Built real-world projects simulating industry practices, applying API integration, Firebase, and state management.",
        "Participated in team-based development following Agile methodologies and Git version control.",
        "Improved UI/UX design principles, component reusability, and performance optimization.",
      ],
      technologies: ["ReactJS", "Angular", "Flutter", "React Native", "Firebase", "Agile", "Git"],
    },
    {
      title: "Web Design Intern – NTL",
      date: "(Aug 2024 – Oct 2024)",
      image: "/images/nti.jpg",
      responsibilities: [
        "Designed responsive and visually appealing web pages using HTML5, CSS3, and JavaScript.",
        "Collaborated with developers to enhance UI/UX experiences.",
        "Worked on converting Figma designs into pixel-perfect, interactive websites.",
        "Optimized layouts for better accessibility and faster load times.",
        "Gained experience with cross-browser compatibility and responsive design standards.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Figma", "UI/UX", "Responsive Design"],
    },
  ];

  return (
    <section
      id="internship"
      className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-gray-200 relative overflow-hidden"
    >
      {/* خلفية ناعمة متدرجة بالألوان */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.15),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Internships
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-20">
          {internships.map((internship, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                index % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right"
              }`}
            >
              {/* الصورة */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-cyan-400/20 hover:border-purple-400/40 transition-all duration-500 shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]">
                  <img
                    src={internship.image}
                    alt={internship.title}
                    className="rounded-2xl w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* المحتوى */}
              <div className="bg-[#141414]/70 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-8 shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:border-purple-400/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  {internship.title}
                </h3>
                <p className="text-gray-400 mb-6">{internship.date}</p>

                <div className="space-y-4">
                  {internship.responsibilities.map((res, i) => (
                    <div
                      key={i}
                      className="flex gap-3 group hover:translate-x-2 transition-transform duration-300"
                    >
                      <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0 group-hover:text-purple-400 transition-colors" />
                      <p className="text-gray-300 leading-relaxed">{res}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {internship.technologies.map((tech, t) => (
                    <span
                      key={t}
                      className="px-4 py-1.5 bg-[#0a0a0a]/60 text-cyan-400 border border-cyan-400/20 rounded-full text-sm font-medium hover:bg-cyan-400/10 hover:border-purple-400/40 hover:text-purple-400 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
