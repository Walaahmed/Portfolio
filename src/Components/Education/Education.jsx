import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#0d0d0f] via-[#111113] to-[#0d0d0f] text-gray-100 relative overflow-hidden"
    >
      {/* subtle glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.15),transparent_60%)]"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side — Image */}
          <div className="relative group animate-fade-in-left">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative border border-cyan-500/30 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:scale-105 transition-transform duration-500">
              <img
                src="/images/education.jpg"
                alt="Minia University"
                className="rounded-2xl w-full max-w-md mx-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Side — Details */}
          <div className="space-y-6 animate-fade-in-right">
            <div className="bg-[#1a1a1d]/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8 shadow-[0_0_20px_rgba(139,92,246,0.1)] hover:border-cyan-400/40 transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                <FaGraduationCap className="text-cyan-400 text-4xl" />
                Faculty of Computers and Information, Minia University
              </h3>
              <p className="text-gray-400 text-lg mb-6">(Sep 2020 - July 2024)</p>

              <p className="text-lg">
                <span className="font-semibold text-cyan-400">Grade of Graduation project:</span>{" "}
                Excellent (A)
              </p>

              <div className="mt-8 p-4 bg-[#101012] rounded-xl border border-cyan-500/20 shadow-inner">
                <p className="text-gray-300 leading-relaxed">
                  Specialized in Computer Science with a focus on Artificial Intelligence,
                  Machine Learning, and Software Engineering. Developed a strong foundation
                  in algorithms, data structures, and modern web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
