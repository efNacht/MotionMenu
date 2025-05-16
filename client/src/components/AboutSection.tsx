import { motion } from "framer-motion";

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">О ДЭНАС-терапии</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Динамическая электронейростимуляция - современный метод физиотерапевтического лечения
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://pixabay.com/get/g7365e5c847db1fc86b7249204c8cbcb1dba22817762b96052cc79bed220adf790d9e95840224c78d13b0edb8e4b943b1b0882896766be3c2ea0602f1535c6186_1280.jpg"
              alt="Демонстрация ДЭНАС-терапии"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              Что такое ДЭНАС-терапия?
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6"
              variants={itemVariants}
            >
              ДЭНАС-терапия (Динамическая ЭлектроНейроАдаптивная Стимуляция) - это метод воздействия на организм человека импульсными токами низкой частоты и малой силы через специально разработанные устройства.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-6"
              variants={itemVariants}
            >
              Метод основан на стимуляции рефлекторных зон и акупунктурных точек, что позволяет организму активировать собственные резервы для борьбы с заболеваниями и восстановления.
            </motion.p>

            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
            >
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
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
                  className="text-primary-500 mr-3 flex-shrink-0 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-gray-700">Безопасный неинвазивный метод лечения</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
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
                  className="text-primary-500 mr-3 flex-shrink-0 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-gray-700">Эффективен при лечении широкого спектра заболеваний</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
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
                  className="text-primary-500 mr-3 flex-shrink-0 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-gray-700">Может применяться как самостоятельно, так и в комплексе с другими методами</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
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
                  className="text-primary-500 mr-3 flex-shrink-0 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-gray-700">Отсутствие привыкания и минимум противопоказаний</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
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
                className="text-primary-600"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Современная технология</h4>
            <p className="text-gray-600">
              ДЭНАС-терапия основана на новейших достижениях в области нейрофизиологии и рефлексотерапии
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
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
                className="text-primary-600"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Лечение без лекарств</h4>
            <p className="text-gray-600">
              Активизирует естественные резервы организма, снижая необходимость в фармакологических препаратах
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
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
                className="text-primary-600"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Универсальность применения</h4>
            <p className="text-gray-600">
              Эффективен при лечении различных заболеваний - от простуды до хронических болевых синдромов
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
