import { motion } from "framer-motion";

export default function Courses() {
  return (
    <section
      id="courses"
      className="min-h-screen bg-gradient-to-br from-indigo-50 to-sky-50 flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-100 opacity-40 blur-3xl z-0"></div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-cyan-200 opacity-30 animate-float z-0"></div>
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full bg-purple-200 opacity-30 animate-float2 z-0"></div>

      {/* Content container */}
      <div className="max-w-6xl mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            Featured <span className="text-cyan-500">Courses</span>
          </h2>
          <p className="text-lg text-indigo-700 max-w-2xl mx-auto">
            Transform your skills with my project-based, hands-on learning approach
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Course Card 1 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col items-center text-center group-hover:shadow-2xl transition-all duration-300">
              <div className="mb-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center p-4">
                <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22V12h6v10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">HTML & CSS Mastery</h3>
              <p className="text-indigo-700 mb-6">Start from scratch and build beautiful, responsive websites.</p>

              <div className="w-full mb-6">
                <div className="flex justify-between text-sm text-indigo-600 mb-2">
                  <span>Beginner to Advanced</span>
                  <span>24 Lessons</span>
                </div>
                <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-400 to-amber-400 w-4/5"></div>
                </div>
              </div>

              <div className="mt-auto flex justify-between w-full items-center">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-indigo-900">4.9</span>
                  <span className="text-indigo-600 ml-1">(128)</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Course Card 2 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col items-center text-center group-hover:shadow-2xl transition-all duration-300">
              <div className="mb-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center p-4">
                <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">JavaScript Essentials</h3>
              <p className="text-indigo-700 mb-6">Learn the fundamentals and advanced concepts of JavaScript.</p>

              <div className="w-full mb-6">
                <div className="flex justify-between text-sm text-indigo-600 mb-2">
                  <span>Intermediate Level</span>
                  <span>32 Lessons</span>
                </div>
                <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 w-4/5"></div>
                </div>
              </div>

              <div className="mt-auto flex justify-between w-full items-center">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-indigo-900">4.8</span>
                  <span className="text-indigo-600 ml-1">(96)</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Course Card 3 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col items-center text-center group-hover:shadow-2xl transition-all duration-300">
              <div className="mb-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-100 to-fuchsia-100 flex items-center justify-center p-4">
                <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">React Bootcamp</h3>
              <p className="text-indigo-700 mb-6">Master React and build dynamic, modern web apps.</p>

              <div className="w-full mb-6">
                <div className="flex justify-between text-sm text-indigo-600 mb-2">
                  <span>Advanced Level</span>
                  <span>48 Lessons</span>
                </div>
                <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 w-4/5"></div>
                </div>
              </div>

              <div className="mt-auto flex justify-between w-full items-center">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-indigo-900">4.9</span>
                  <span className="text-indigo-600 ml-1">(142)</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional courses */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-lg mr-4">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Node.js Backend Development</h3>
              <p className="text-indigo-700 mb-4">Build robust backend services and APIs with Node.js and Express</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-indigo-600 font-medium">18 Lessons</span>
                <button className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-200 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-br from-red-100 to-pink-100 p-3 rounded-lg mr-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Responsive Design Mastery</h3>
              <p className="text-indigo-700 mb-4">Create beautiful responsive layouts with CSS Grid and Flexbox</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-indigo-600 font-medium">16 Lessons</span>
                <button className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-200 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl mr-4">
            View All Courses
          </button>
          <button className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg border border-indigo-200 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Contact for Custom Training
          </button>
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
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
