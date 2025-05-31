import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about_me"
      className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 flex flex-col items-center justify-center py-16 px-4 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-indigo-100 opacity-70 blur-3xl z-0"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-cyan-100 opacity-50 blur-3xl z-0"></div>

      {/* Animated circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-indigo-200 opacity-30 z-0"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full bg-cyan-200 opacity-30 z-0"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Content container */}
      <div className="max-w-6xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile image section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-2xl p-1 w-72 h-72 lg:w-80 lg:h-80">
              <div className="bg-white w-full h-full rounded-2xl overflow-hidden border-8 border-white">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-yellow-400 opacity-20 blur-xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-indigo-400 opacity-30 blur-xl z-0"></div>

            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
              Educator & Developer
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              About <span className="text-cyan-500">Me</span>
            </motion.h2>

            <motion.p
              className="text-lg text-indigo-800 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I&apos;m passionate about teaching and empowering students to become skilled web developers. With years of experience in HTML,
              CSS, JavaScript, React, and modern web technologies, I&apos;m dedicated to helping you build a strong foundation and launch
              your career in tech. My classes are hands-on, project-based, and tailored for all levels.
            </motion.p>

            <div className="flex flex-wrap gap-6">
              <motion.div
                className="bg-white rounded-2xl shadow-xl p-6 w-full sm:w-64 backdrop-blur-sm border border-white/30 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-cyan-100 opacity-50"></div>
                <div className="flex items-start mb-3">
                  <div className="bg-cyan-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mt-1">Experience</h3>
                </div>
                <p className="text-indigo-700 pl-12">5+ years in software development and teaching web technologies.</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl shadow-xl p-6 w-full sm:w-64 backdrop-blur-sm border border-white/30 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-indigo-100 opacity-50"></div>
                <div className="flex items-start mb-3">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mt-1">Mission</h3>
                </div>
                <p className="text-indigo-700 pl-12">To inspire and guide the next generation of web creators through quality education.</p>
              </motion.div>
            </div>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                View My Courses
              </button>
              <button className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg border border-indigo-200 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Contact Me
              </button>
            </motion.div>
          </div>
        </div>

        {/* Teaching approach section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-white/30 backdrop-blur-sm">
            <div className="text-cyan-500 text-4xl mb-4">01</div>
            <h3 className="text-xl font-bold text-indigo-900 mb-3">Hands-On Learning</h3>
            <p className="text-indigo-700">Practical, project-based curriculum that emphasizes building real applications from day one.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-white/30 backdrop-blur-sm">
            <div className="text-cyan-500 text-4xl mb-4">02</div>
            <h3 className="text-xl font-bold text-indigo-900 mb-3">Modern Curriculum</h3>
            <p className="text-indigo-700">Focus on cutting-edge technologies and industry best practices used by professionals.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-white/30 backdrop-blur-sm">
            <div className="text-cyan-500 text-4xl mb-4">03</div>
            <h3 className="text-xl font-bold text-indigo-900 mb-3">Personalized Guidance</h3>
            <p className="text-indigo-700">Tailored support and feedback to help each student overcome their unique challenges.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
