import { useEffect, useRef, useState } from "react";

const skills = [
  {
    name: "HTML & CSS",
    desc: "Semantic HTML, Flexbox, Grid, Responsive Design",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 3h18l-1.5 18L12 21l-7.5-2L3 3z" />
        <path d="M12 17V7m0 0l-4 4m4-4l4 4" />
      </svg>
    ),
    color: "bg-gradient-to-br from-orange-500 to-amber-400",
  },
  {
    name: "JavaScript",
    desc: "ES6+, DOM, Fetch API, Async/Await",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <text x="7" y="17" fontSize="8" fill="#222">
          JS
        </text>
      </svg>
    ),
    color: "bg-gradient-to-br from-yellow-400 to-amber-500",
  },
  {
    name: "React",
    desc: "Hooks, State Management, Routing",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2" />
        <ellipse rx="10" ry="4" cx="12" cy="12" />
        <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(60 12 12)" />
        <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(120 12 12)" />
      </svg>
    ),
    color: "bg-gradient-to-br from-cyan-400 to-blue-500",
  },
  {
    name: "Tools",
    desc: "Git, GitHub, Vite, Tailwind CSS, Figma",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
    color: "bg-gradient-to-br from-indigo-500 to-violet-600",
  },
  {
    name: "TypeScript",
    desc: "Static typing, interfaces, generics, type safety",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" />
        <g>
          <path d="M7 9h10v2h-4v6h-2v-6H7V9z" fill="#fff" />
        </g>
      </svg>
    ),
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "Redux",
    desc: "State management, middleware, Redux Toolkit",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
        <g>
          <circle cx="12" cy="12" r="10" fill="#fff" />
          <path d="M7.5 15.5c1.5 2 7.5 2 9 0" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" />
          <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" />
          <circle cx="12" cy="8.5" r="1.2" fill="currentColor" />
        </g>
      </svg>
    ),
    color: "bg-gradient-to-br from-purple-500 to-purple-700",
  },
  {
    name: "Node.js",
    desc: "Express, REST APIs, backend JS, npm",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <g>
          <ellipse cx="12" cy="12" rx="10" ry="10" fill="#fff" />
          <path d="M8 13c0 2 8 2 8 0 0-2-8-2-8 0z" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </g>
      </svg>
    ),
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  {
    name: "MongoDB",
    desc: "NoSQL, Mongoose, Atlas, aggregation",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-green-700" fill="none" viewBox="0 0 24 24">
        <g>
          <ellipse cx="12" cy="12" rx="10" ry="8" fill="#fff" />
          <path d="M12 4c2 4 2 12 0 16-2-4-2-12 0-16z" fill="currentColor" />
        </g>
      </svg>
    ),
    color: "bg-gradient-to-br from-green-500 to-green-800",
  },
  {
    name: "Sass/SCSS",
    desc: "Advanced CSS, variables, mixins, nesting",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-pink-500" fill="none" viewBox="0 0 24 24">
        <g>
          <ellipse cx="12" cy="12" rx="10" ry="8" fill="#fff" />
          <path d="M6 16c2-4 10-4 12 0" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </g>
      </svg>
    ),
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
  {
    name: "Framer Motion",
    desc: "React animations, motion, transitions",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-fuchsia-500" fill="none" viewBox="0 0 24 24">
        <g>
          <rect width="24" height="24" rx="4" fill="#fff" />
          <path d="M7 7h10v4H7z" fill="currentColor" />
          <path d="M7 13h5v4H7z" fill="currentColor" />
        </g>
      </svg>
    ),
    color: "bg-gradient-to-br from-fuchsia-500 to-purple-700",
  },
  {
    name: "Jest",
    desc: "Unit testing, React Testing Library, coverage",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-red-500" fill="none" viewBox="0 0 24 24">
        <g>
          <circle cx="12" cy="12" r="10" fill="#fff" />
          <circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" />
          <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" />
          <circle cx="12" cy="8.5" r="1.2" fill="currentColor" />
        </g>
      </svg>
    ),
    color: "bg-gradient-to-br from-red-500 to-red-700",
  },
  {
    name: "Firebase",
    desc: "Auth, Firestore, hosting, cloud functions",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" fill="none" viewBox="0 0 24 24">
        <g>
          <polygon points="12,2 22,22 2,22" fill="#fff" />
          <polygon points="12,6 18,20 6,20" fill="currentColor" />
        </g>
      </svg>
    ),
    color: "bg-gradient-to-br from-yellow-500 to-amber-600",
  },
  {
    name: "Docker",
    desc: "Containers, Docker Compose, deployment",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-400" fill="none" viewBox="0 0 24 24">
        <g>
          <rect width="24" height="24" rx="4" fill="#fff" />
          <rect x="6" y="14" width="12" height="4" fill="currentColor" />
          <rect x="8" y="10" width="2" height="4" fill="currentColor" />
          <rect x="12" y="10" width="2" height="4" fill="currentColor" />
          <rect x="16" y="10" width="2" height="4" fill="currentColor" />
        </g>
      </svg>
    ),
    color: "bg-gradient-to-br from-blue-500 to-blue-800",
  },
  {
    name: "GraphQL",
    desc: "Queries, mutations, Apollo Client",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-pink-500" fill="none" viewBox="0 0 24 24">
        <g>
          <polygon points="12,2 22,22 2,22" fill="#fff" />
          <path d="M12 6L19 20H5L12 6z" fill="currentColor" />
        </g>
      </svg>
    ),
    color: "bg-gradient-to-br from-pink-500 to-fuchsia-700",
  },
  {
    name: "Next.js",
    desc: "SSR, SSG, API routes, modern React",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-black" fill="none" viewBox="0 0 24 24">
        <g>
          <rect width="24" height="24" rx="4" fill="#fff" />
          <path d="M7 7h10v10H7z" fill="currentColor" />
        </g>
      </svg>
    ),
    color: "bg-gradient-to-br from-gray-800 to-black",
  },
];

export default function Skills() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered) {
          setIsVisible(true);
          setAnimationTriggered(true);

          // Trigger card animations with staggered delay
          const cards = containerRef.current.querySelectorAll(".skill-card");
          cards.forEach((card, i) => {
            card.classList.add("opacity-0", "scale-50", "rotate-12");
            setTimeout(() => {
              card.classList.remove("opacity-0", "scale-50", "rotate-12");
              card.classList.add("animate-skillIn");
            }, 200 + i * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationTriggered]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8 overflow-hidden"
      style={{
        background: "radial-gradient(circle at top right, #0c0f1d, #0a0c1a, #080917)",
      }}
    >
      {/* Animated background elements - only appear when section is visible */}
      {isVisible && (
        <>
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow animation-delay-4000"></div>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute top-20 left-5 w-16 h-16 rounded-full bg-cyan-500/10 filter blur-xl animate-float z-0"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 rounded-full bg-orange-500/10 filter blur-xl animate-float2 z-0"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-yellow-500/10 filter blur-xl animate-float3 z-0"></div>
        </>
      )}

      {/* Section header */}
      <div
        className={`relative z-10 text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 tracking-wider">
          Technical Skills
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Expertise across the modern web development stack with specialized knowledge in key technologies
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Skills cards */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 justify-center items-center w-full max-w-7xl z-10"
      >
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card relative group cursor-pointer">
            {/* Card background */}
            <div className="absolute inset-0 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl"></div>

            {/* Animated glow effect */}
            <div
              className={`absolute inset-0 rounded-2xl ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
            ></div>

            {/* Card content */}
            <div className="relative z-10 flex flex-col items-center p-6 h-full">
              {/* Icon with animated border */}
              <div className="relative mb-4 w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {skill.icon}
              </div>

              {/* Title and description */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 text-center group-hover:text-cyan-200 transition-colors duration-500">
                {skill.name}
              </h3>
              <p className="text-sm text-slate-300 text-center group-hover:text-white transition-colors duration-500">{skill.desc}</p>

              {/* Skill level indicator */}
              <div className="mt-4 w-full">
                <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                </div>
                <div className="text-xs text-slate-400 mt-1 text-right">Expert level</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator (only shows before animation triggers) */}
      {!isVisible && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-slate-400 text-sm mb-2">Scroll down to view</span>
          <div className="w-8 h-14 rounded-3xl border-2 border-slate-500 flex justify-center p-1">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes skillIn {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.5) rotate(12deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0);
          }
        }
        .animate-skillIn {
          animation: skillIn 0.8s cubic-bezier(0.23, 1.01, 0.32, 1) forwards;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-25px) translateX(-15px);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(20px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 10s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 12s ease-in-out infinite;
        }

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
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .skill-card {
          height: 220px;
          perspective: 1000px;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .skill-card:hover {
          transform: translateY(-10px) rotateY(5deg) rotateX(5deg);
        }

        .skill-card::before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #00ccff, #00ffcc, #00ccff);
          background-size: 400% 400%;
          border-radius: 24px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.5s ease;
          animation: border-glow 3s ease-in-out infinite;
        }
        .skill-card:hover::before {
          opacity: 1;
        }

        @keyframes border-glow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
