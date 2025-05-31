import { useEffect, useRef, useState } from "react";

const certificates = [
  {
    title: "Front-End Web Development",
    desc: "Certified by XYZ Academy for excellence in HTML, CSS, and JavaScript.",
    icon: (
      <svg className="w-12 h-12 text-orange-400" fill="none" viewBox="0 0 24 24">
        <path d="M3 3h18l-1.5 18L12 21l-7.5-2L3 3z" fill="#fff" />
        <path d="M12 17V7m0 0l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    color: "from-orange-400 to-yellow-200",
    date: "June 2023",
    issuer: "XYZ Academy",
  },
  {
    title: "React Developer",
    desc: "Completed advanced React Bootcamp with hands-on projects.",
    icon: (
      <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2" fill="#fff" />
        <ellipse rx="10" ry="4" cx="12" cy="12" stroke="currentColor" strokeWidth="2" />
        <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="2" />
        <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    color: "from-cyan-400 to-blue-200",
    date: "August 2023",
    issuer: "React Masters",
  },
  {
    title: "JavaScript Mastery",
    desc: "Awarded for outstanding performance in JavaScript programming.",
    icon: (
      <svg className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#fff" />
        <circle cx="12" cy="12" r="8" fill="currentColor" />
      </svg>
    ),
    color: "from-yellow-400 to-yellow-100",
    date: "May 2023",
    issuer: "JS Institute",
  },
  {
    title: "UI/UX Design",
    desc: "Certification in user interface and experience design principles.",
    icon: (
      <svg className="w-12 h-12 text-fuchsia-400" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    color: "from-fuchsia-400 to-purple-200",
    date: "July 2023",
    issuer: "Design Pro",
  },
  {
    title: "Cloud Architecture",
    desc: "AWS Certified Solutions Architect - Associate level.",
    icon: (
      <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24">
        <path d="M18 10h-1.26A8 8 0 104 15h12a6 6 0 000-12z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    color: "from-blue-400 to-sky-200",
    date: "September 2023",
    issuer: "AWS Training",
  },
  {
    title: "Database Management",
    desc: "MongoDB Certified Developer & Administrator.",
    icon: (
      <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24">
        <ellipse cx="12" cy="16" rx="7" ry="4" stroke="currentColor" strokeWidth="2" />
        <path d="M12 8a7 7 0 00-7 8" stroke="currentColor" strokeWidth="2" />
        <path d="M12 8a7 7 0 017 8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    color: "from-green-400 to-emerald-200",
    date: "October 2023",
    issuer: "MongoDB University",
  },
];

export default function Certificates() {
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
          const cards = containerRef.current.querySelectorAll(".cert-card");
          cards.forEach((card, i) => {
            card.classList.add("opacity-0", "translate-y-10");
            setTimeout(() => {
              card.classList.remove("opacity-0", "translate-y-10");
              card.classList.add("animate-certFadeIn");
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
      id="certificates"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8 overflow-hidden"
      style={{
        background: "radial-gradient(circle at top right, #0c0f1d, #0a0c1a, #080917)",
      }}
    >
      {/* Animated background elements - only appear when section is visible */}
      {isVisible && (
        <>
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-orange-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
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
          Certificates & Credentials
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Validated expertise through recognized certifications from industry-leading platforms
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Certificate cards */}
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl z-10">
        {certificates.map((cert) => (
          <div key={cert.title} className="cert-card relative group cursor-pointer">
            {/* Card background */}
            <div className="absolute inset-0 bg-gradient-to-br rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl"></div>

            {/* Animated glow effect */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
            ></div>

            {/* Card content */}
            <div className="relative z-10 flex flex-col items-center p-8 h-full">
              {/* Ribbon badge */}
              <div className="absolute top-0 right-6 w-24 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xs flex items-center justify-center tracking-widest shadow-lg transform rotate-3">
                VERIFIED
              </div>

              {/* Icon with animated border */}
              <div className="relative mb-6">
                <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="w-20 h-20 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {cert.icon}
                </div>
              </div>

              {/* Title and description */}
              <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-cyan-200 transition-colors duration-500">
                {cert.title}
              </h3>
              <p className="text-sm text-slate-300 text-center mb-4 group-hover:text-white transition-colors duration-500">{cert.desc}</p>

              {/* Issuer and date */}
              <div className="mt-auto w-full flex flex-col items-center">
                <div className="text-slate-400 text-sm mb-2 group-hover:text-slate-200 transition-colors">
                  Issued by: <span className="font-semibold">{cert.issuer}</span>
                </div>
                <div className="inline-flex items-center bg-slate-800/50 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700/50">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l4.25 2.53.75-1.23-3-1.78V7z" />
                  </svg>
                  {cert.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All button */}
      <div
        className={`relative z-10 mt-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-xl group">
          <span className="relative z-10">View All Certificates</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </button>
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
        @keyframes certFadeIn {
          0% {
            opacity: 0;
            transform: translateY(40px) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(0);
          }
        }
        .animate-certFadeIn {
          animation: certFadeIn 0.8s cubic-bezier(0.23, 1.01, 0.32, 1) forwards;
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

        .cert-card {
          height: 100%;
          perspective: 1000px;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .cert-card:hover {
          transform: translateY(-10px) rotateY(5deg) rotateX(5deg);
        }

        .cert-card::before {
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
        .cert-card:hover::before {
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
