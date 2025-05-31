import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex flex-col items-center justify-center relative overflow-hidden px-4 py-16">
      {/* Animated background elements */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow z-0"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow animation-delay-2000 z-0"></div>

      {/* Floating code brackets */}
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

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InBhdHRlcm4iIHg9IjAiIHk9IjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+CiAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0icmdiYSgyMDAsIDIwMCwgMjU1LCAwLjAzKSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+Cjwvc3ZnPg==')] opacity-30 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6">
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700 mb-6">
            <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-cyan-400 text-sm font-medium">Full Stack Developer & Educator</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transforming <span className="text-cyan-400">Ideas</span> into
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Digital Reality</span>
        </motion.h1>

        <motion.p
          className="text-xl text-slate-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I create immersive web experiences and teach the next generation of developers how to master modern web technologies.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-indigo-600 transition-all duration-300 group relative overflow-hidden">
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
          </button>
          <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-bold rounded-xl shadow-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">View Courses</span>
          </button>
        </motion.div>

        {/* Tech stack showcase */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border border-slate-700">
            <div className="text-xl font-bold text-white">React</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border border-slate-700">
            <div className="text-xl font-bold text-amber-400">JavaScript</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border border-slate-700">
            <div className="text-xl font-bold text-cyan-400">Node.js</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border border-slate-700">
            <div className="text-xl font-bold text-emerald-400">MongoDB</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border border-slate-700">
            <div className="text-xl font-bold text-violet-400">Next.js</div>
          </div>
        </motion.div>
      </div>

      {/* Hero image/device mockup */}
      <motion.div
        className="relative z-10 mt-12 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 relative overflow-hidden">
          {/* Device frame */}
          <div className="relative bg-slate-800 rounded-xl border border-slate-700 shadow-2xl overflow-hidden mx-auto w-full max-w-2xl">
            {/* Device top bar */}
            <div className="h-8 bg-slate-900 border-b border-slate-700 flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              </div>
            </div>

            {/* Screen content */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 h-96 flex items-center justify-center p-8">
              {/* Code snippet animation */}
              <div className="w-full max-w-md">
                <div className="flex mb-4">
                  <div className="text-cyan-400 mr-4">1</div>
                  <div className="text-purple-400">function</div>
                  <div className="text-white ml-2">animateHero()</div>
                  <div className="text-white">{"{"}</div>
                </div>
                <div className="flex mb-4 ml-8">
                  <div className="text-cyan-400 mr-4">2</div>
                  <div className="text-amber-300">return</div>
                  <div className="text-emerald-400">{"<"}</div>
                  <div className="text-cyan-300">div</div>
                  <div className="text-emerald-400">{">"}</div>
                </div>
                <div className="flex mb-4 ml-16">
                  <div className="text-cyan-400 mr-4">3</div>
                  <div className="text-emerald-400">{"<"}</div>
                  <div className="text-cyan-300">HeroSection</div>
                  <div className="text-white">/</div>
                  <div className="text-emerald-400">{">"}</div>
                </div>
                <div className="flex mb-4 ml-8">
                  <div className="text-cyan-400 mr-4">4</div>
                  <div className="text-emerald-400">{"<"}</div>
                  <div className="text-emerald-400">{"/"}</div>
                  <div className="text-cyan-300">div</div>
                  <div className="text-emerald-400">{">"}</div>
                </div>
                <div className="flex">
                  <div className="text-cyan-400 mr-4">5</div>
                  <div className="text-white">{"}"}</div>
                </div>

                {/* Animated cursor */}
                <motion.div
                  className="absolute ml-24 mt-2 h-6 w-0.5 bg-cyan-400"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                ></motion.div>
              </div>
            </div>

            {/* Device bottom bar */}
            <div className="h-4 bg-slate-900 border-t border-slate-700"></div>
          </div>

          {/* Floating elements around device */}
          <motion.div
            className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>
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
