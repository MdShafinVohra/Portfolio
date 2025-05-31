import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern, responsive portfolio built with React and Tailwind CSS to showcase my work and teaching services.",
    color: "bg-gradient-to-br from-cyan-500 to-blue-500",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Student Portal",
    desc: "A web app for students to track progress, access resources, and submit assignments.",
    color: "bg-gradient-to-br from-violet-500 to-purple-600",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "E-commerce Demo",
    desc: "A sample e-commerce site built as a class project, featuring product listings and a shopping cart.",
    color: "bg-gradient-to-br from-amber-500 to-orange-500",
    tags: ["Next.js", "Stripe", "Firebase"],
  },
  {
    title: "Blog Platform",
    desc: "A full-featured blog platform with markdown support, user authentication, and comments.",
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    tags: ["React", "GraphQL", "Sanity CMS"],
  },
  {
    title: "Quiz App",
    desc: "Interactive quiz application with timer, scoring, and analytics dashboard.",
    color: "bg-gradient-to-br from-yellow-400 to-amber-500",
    tags: ["React", "TypeScript", "Jest"],
  },
  {
    title: "Portfolio CMS",
    desc: "A headless CMS for managing portfolio content, built with React and Node.js.",
    color: "bg-gradient-to-br from-orange-500 to-red-500",
    tags: ["React", "Node.js", "Express"],
  },
  {
    title: "Landing Page Collection",
    desc: "A set of beautiful, animated landing pages for various business niches.",
    color: "bg-gradient-to-br from-pink-500 to-rose-500",
    tags: ["HTML/CSS", "GSAP", "Three.js"],
  },
  {
    title: "Weather Dashboard",
    desc: "A real-time weather dashboard using public APIs, charts, and geolocation.",
    color: "bg-gradient-to-br from-sky-500 to-blue-600",
    tags: ["React", "Chart.js", "OpenWeather API"],
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered) {
          setAnimationTriggered(true);
        }
      },
      { threshold: 0.15 }
    );
    const sectionNode = sectionRef.current;
    if (sectionNode) observer.observe(sectionNode);
    return () => {
      if (sectionNode) observer.unobserve(sectionNode);
    };
  }, [animationTriggered]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 flex flex-col items-center justify-center py-16 px-4 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow z-0"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow animation-delay-2000 z-0"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InBhdHRlcm4iIHg9IjAiIHk9IjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+CiAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0icmdiYSgyMDAsIDIwMCwgMjU1LCAwLjAzKSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+Cjwvc3ZnPg==')] opacity-20 z-0"></div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 text-7xl text-cyan-400/20 font-bold z-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {"</>"}
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-10 text-7xl text-indigo-400/20 font-bold z-0"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {"{}"}
      </motion.div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={animationTriggered ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Explore my work showcasing modern web development techniques and creative solutions
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto mt-6"></div>
      </motion.div>

      {/* Projects grid */}
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={animationTriggered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            {/* Project card */}
            <div className={`${project.color} rounded-2xl shadow-xl p-8 h-full flex flex-col relative overflow-hidden`}>
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-slate-200 mb-6">{project.desc}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-black/30 text-slate-200 px-3 py-1 rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>
            </div>

            {/* Hover effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-xl -z-10"
              animate={activeProject === index ? { scale: 1.2, opacity: 0.3 } : { scale: 1, opacity: 0 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </motion.div>
        ))}
      </div>

      {/* View more button */}
      <motion.div
        className="relative z-10 mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={animationTriggered ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold rounded-full shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-xl group">
          <span className="relative z-10">View All Projects</span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </button>
      </motion.div>

      <style>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
