import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaSass, FaMobileAlt } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiJqueryLogo } from 'react-icons/di';
import { SiTypescript, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';

const techStack = [
  { icon: <FaHtml5 className='text-7xl text-orange-500' />, name: 'HTML5' },
  { icon: <FaCss3Alt className='text-7xl text-blue-400' />, name: 'CSS3' },
  { icon: <FaJs className='text-7xl text-yellow-400' />, name: 'JavaScript' },
  { icon: <SiTypescript className='text-7xl text-sky-400' />, name: 'TypeScript' },
  { icon: <FaBootstrap className='text-7xl text-purple-400' />, name: 'Bootstrap' },
  { icon: <RiTailwindCssFill className='text-7xl text-cyan-400' />, name: 'Tailwind CSS' },
  { icon: <FaSass className='text-7xl text-pink-400' />, name: 'Sass' },
  { icon: <DiJqueryLogo className='text-7xl text-blue-900' />, name: 'jQuery' },
  { icon: <RiReactjsLine className='text-7xl text-cyan-400' />, name: 'React' },
  { icon: <TbBrandNextjs className='text-7xl text-cyan-400' />, name: 'Next.js' },
  { icon: <SiFirebase className='text-7xl text-yellow-500' />, name: 'Firebase' },
  { icon: <FaMobileAlt className='text-7xl text-cyan-400' />, name: 'React Native' },
];

export default function Technologies() {
  const floatVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  });

  return (
    <section
      id="technologies"
      className="relative py-24 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#101010] to-[#0a0a0a] text-gray-200 overflow-hidden"
    >
      {/* خلفية متدرجة بإضاءة خفيفة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.15),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          Technologies & Tools
        </motion.h2>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={floatVariants(2 + (index % 4))}
              initial="initial"
              animate="animate"
              className="group relative flex h-28 w-28 items-center justify-center rounded-2xl 
              bg-[#141414]/60 backdrop-blur-md border border-cyan-400/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]
              hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-500 cursor-pointer"
            >
              {/* أيقونة */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0">
                {tech.icon}
              </div>

              {/* اسم التقنية عند الـ hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                <span className="text-sm font-semibold text-cyan-300 tracking-wide">
                  {tech.name}
                </span>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
