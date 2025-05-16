import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -inset-x-20 -top-20 transform translate-x-1/2 translate-y-1 sm:translate-x-0 h-[500px] w-[1000px] rotate-[-10deg] bg-gradient-to-br from-primary-400 to-primary-700 blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 -right-20 h-[300px] w-[800px] rounded-full bg-gradient-to-tr from-[#F05252] to-primary-400 blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              <span className="block">Инновационная</span>
              <span className="block text-primary-600">ДЭНАС-терапия</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl">
              Современный метод физиотерапии для эффективного лечения и профилактики различных заболеваний без лекарств
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
              >
                Выбрать устройство
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-50 hover:bg-primary-100 transition-colors duration-200"
              >
                Узнать больше
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Image of DENAS therapy device in use */}
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="ДЭНАС-терапия в действии"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />

            {/* Feature badges */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 md:flex items-center hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary-500 mr-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="font-medium">Быстрый результат</span>
            </motion.div>

            <motion.div 
              className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 md:flex items-center hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary-500 mr-2"
              >
                <path d="M5 7l5 5-5 5"></path>
                <path d="M12 19l7-7-7-7"></path>
              </svg>
              <span className="font-medium">Современные технологии</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
