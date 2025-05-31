import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-br from-indigo-50 to-sky-100 flex flex-col items-center justify-center py-16 px-4 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-indigo-200 opacity-20 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-0"></div>

      {/* Floating bubbles */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-indigo-300 opacity-20 animate-float z-0"></div>
      <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-cyan-300 opacity-20 animate-float2 z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-sky-300 opacity-20 animate-float3 z-0"></div>

      {/* Content container */}
      <div className="max-w-6xl mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            What I <span className="text-cyan-500">Offer</span>
          </h2>
          <p className="text-lg text-indigo-700 max-w-2xl mx-auto mb-12">
            Comprehensive services designed to help you master web development and advance your career
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto mb-16"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col items-center text-center group-hover:shadow-2xl transition-all duration-300">
              <div className="mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-100 to-indigo-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Web Development Training</h3>
              <p className="text-indigo-700 mb-6">
                Comprehensive classes in HTML, CSS, JavaScript, React, and more. Learn by building real projects.
              </p>
              <ul className="text-left text-indigo-600 space-y-2 mb-8 w-full">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Frontend development fundamentals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Modern frameworks and libraries</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-world project experience</span>
                </li>
              </ul>
              <button className="mt-auto px-6 py-2 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white rounded-full font-medium hover:scale-105 transition-transform duration-300">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col items-center text-center group-hover:shadow-2xl transition-all duration-300">
              <div className="mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">1:1 Mentorship</h3>
              <p className="text-indigo-700 mb-6">Personalized guidance, code reviews, and career advice to help you grow faster.</p>
              <ul className="text-left text-indigo-600 space-y-2 mb-8 w-full">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personalized learning path</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Code reviews and feedback</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Career guidance and interview prep</span>
                </li>
              </ul>
              <button className="mt-auto px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-medium hover:scale-105 transition-transform duration-300">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col items-center text-center group-hover:shadow-2xl transition-all duration-300">
              <div className="mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Project Consulting</h3>
              <p className="text-indigo-700 mb-6">
                Get help with your portfolio, freelance projects, or startup ideas from an experienced developer.
              </p>
              <ul className="text-left text-indigo-600 space-y-2 mb-8 w-full">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Portfolio project guidance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Technical architecture review</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Code optimization strategies</span>
                </li>
              </ul>
              <button className="mt-auto px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full font-medium hover:scale-105 transition-transform duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Testimonial section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl p-10 text-white max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10"></div>

          <div className="relative z-10">
            <div className="text-6xl text-indigo-300 absolute top-0 left-6">&quot;</div>
            <p className="text-xl italic mb-6 px-10 pt-8">
              Working with Shafin transformed my career. His mentorship helped me land my first developer job in just 3 months. The
              personalized guidance and real-world project experience were invaluable.
            </p>
            <div className="flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <div className="ml-4 text-left">
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-indigo-200">Junior Frontend Developer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
}
