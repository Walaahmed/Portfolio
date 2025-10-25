import { ExternalLink, Github, Eye } from "lucide-react";
import PropTypes from "prop-types";

const Card = ({ children, className }) => (
  <div
    className={`rounded-xl bg-[#141414]/70 border border-cyan-400/20 shadow-[0_0_15px_rgba(6,182,212,0.1)] overflow-hidden backdrop-blur-md hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all duration-500 hover:scale-[1.03] ${className}`}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const CardHeader = ({ children }) => <div className="p-5">{children}</div>;
CardHeader.propTypes = {
  children: PropTypes.node,
};

const CardTitle = ({ children }) => (
  <h3 className="text-xl font-semibold text-white">{children}</h3>
);
CardTitle.propTypes = {
  children: PropTypes.node,
};

const CardContent = ({ children }) => <div className="p-5 pt-0">{children}</div>;
CardContent.propTypes = {
  children: PropTypes.node,
};

const Badge = ({ children, className }) => (
  <span
    className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-400/20 ${className}`}
  >
    {children}
  </span>
);

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 ${className}`}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Clinic System Platform",
      description:
        "Smart Medical Assistant System – a healthcare web platform enhancing clinic efficiency and patient–doctor communication.",
      image: "/projects/img1.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
      liveUrl:
        "https://www.linkedin.com/posts/walaa-ahmed-a73783262_graduationproject-iti-reactjs-activity-7360306439459848192-QDvd",
      githubUrl: "https://github.com/Walaahmed/Clinic-Management-System",
      featured: true,
    },
    {
      id: 2,
      title: "Clothing E-commerce Web App",
      description:
        "An elegant shopping app with product filtering, cart, wishlist, and secure validation using Zod and Axios.",
      image: "/projects/img2.jpg",
      technologies: ["React", "Zod", "Tailwind CSS", "Axios"],
      liveUrl:
        "https://www.linkedin.com/posts/walaa-ahmed-a73783262_react-vite-tailwindabrcss-activity-7340386239377776640-wP1x",
      githubUrl: "https://github.com/Walaahmed/E-Commerce-website-React-",
      featured: true,
    },
    {
      id: 3,
      title: "Vanilla JS E-commerce App",
      description:
        "A full e-commerce app with Admin & User roles using pure JavaScript, HTML, and CSS, including localStorage and real API data.",
      image: "/projects/img3.jpg",
      technologies: ["JavaScript", "CSS", "VanillaJS", "Bootstrap"],
      liveUrl:
        "https://www.linkedin.com/posts/walaa-ahmed-a73783262_javascript-ecommerce-webdevelopment-activity-7328782735689314304-ngqN",
      githubUrl:
        "https://github.com/Walaahmed/E-commerce_Appliction-master/tree/main/E-commerce_Appliction-master",
    },
    {
      id: 4,
      title: "Shop-cart Website",
      description:
        "Built from scratch using Angular and Bootstrap for an interactive shopping experience with product browsing and cart management.",
      image: "/projects/img4.jpg",
      technologies: ["Angular", "Bootstrap", "TypeScript", "DummyJSON API"],
      liveUrl:
        "https://www.linkedin.com/posts/walaa-ahmed-a73783262_angular-bootstrap-ecommerce-activity-7337485094439243776-T5hq",
      githubUrl: "https://github.com/Walaahmed/shop-cart",
    },
    {
      id: 5,
      title: "Movies & TV Shows App",
      description:
        "Angular 17 movie app integrated with TMDB API, featuring authentication and dynamic routes for browsing and saving favorites.",
      image: "/projects/img5.jpg",
      technologies: ["Angular", "Bootstrap", "TypeScript", "TMDB API"],
      liveUrl:
        "https://www.linkedin.com/posts/walaa-ahmed-a73783262_angular-webdevelopment-teamwork-activity-7327652137713197059-_G6P",
      githubUrl: "https://github.com/Walaahmed/movie-app",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "Interactive personal portfolio built with React, Framer Motion, and Tailwind for smooth animations and modern UI.",
      image: "/projects/img7.png",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/Walaahmed/Portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#101010] to-[#0a0a0a] text-gray-200 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.15),transparent_60%)]"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of my best work — crafted with performance, beauty, and
            precision in mind.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative group overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {project.featured && (
                  <Badge className="absolute top-3 right-3 bg-cyan-600 text-white">
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300">
                  <Button
                    onClick={() => window.open(project.liveUrl, "_blank")}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90"
                  >
                    <Eye className="h-4 w-4" /> Preview
                  </Button>
                  <Button
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    className="bg-transparent border border-cyan-400/50 hover:bg-cyan-400/10"
                  >
                    <Github className="h-4 w-4" /> Code
                  </Button>
                </div>
              </div>

              {/* Title + Content */}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => window.open(project.liveUrl, "_blank")}
                    className="flex-1"
                  >
                    <ExternalLink className="h-4 w-4" /> View
                  </Button>
                  <Button
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    className="bg-transparent border border-cyan-400/50 hover:bg-cyan-400/10"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
