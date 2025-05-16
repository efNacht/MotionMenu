import { motion } from "framer-motion";

const IndicationsSection = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const indications = [
    {
      title: "Заболевания опорно-двигательного аппарата",
      description: "Лечение и профилактика артрита, остеохондроза, радикулита, травм, мышечных и суставных болей",
      icon: "path",
      color: "red"
    },
    {
      title: "Заболевания сердечно-сосудистой системы",
      description: "Помощь при нормализации артериального давления, профилактика и комплексное лечение гипертонии",
      icon: "briefcase-medical",
      color: "blue"
    },
    {
      title: "Респираторные заболевания",
      description: "Лечение насморка, кашля, бронхита, ускорение выздоровления при ОРВИ и гриппе",
      icon: "lungs",
      color: "green"
    },
    {
      title: "Неврологические нарушения",
      description: "Облегчение головной боли, мигрени, невралгии, стресса и нарушений сна",
      icon: "brain",
      color: "purple"
    },
    {
      title: "Гастроэнтерологические проблемы",
      description: "Помощь при нарушениях пищеварения, гастрите, колите и других заболеваниях ЖКТ",
      icon: "stomach",
      color: "yellow"
    },
    {
      title: "Косметологические процедуры",
      description: "Улучшение состояния кожи, борьба с морщинами, отёками и признаками старения",
      icon: "face",
      color: "pink"
    }
  ];

  const getIconForIndication = (iconName: string) => {
    switch (iconName) {
      case "path":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        );
      case "briefcase-medical":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 8v13H3V8"></path>
            <path d="M1 3h22v5H1z"></path>
            <path d="M10 12h4"></path>
          </svg>
        );
      case "lungs":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
        );
      case "brain":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        );
      case "stomach":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"></path>
            <circle cx="12" cy="10" r="3"></circle>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        );
      case "face":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9z"></path>
            <path d="M9 9v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case "red":
        return "bg-red-100 text-red-500";
      case "blue":
        return "bg-blue-100 text-blue-500";
      case "green":
        return "bg-green-100 text-green-500";
      case "purple":
        return "bg-purple-100 text-purple-500";
      case "yellow":
        return "bg-yellow-100 text-yellow-500";
      case "pink":
        return "bg-pink-100 text-pink-500";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  return (
    <section id="indications" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Показания к применению</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            ДЭНАС-терапия эффективна для лечения и профилактики различных состояний
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {indications.map((indication, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex-shrink-0 mr-4">
                <div className={`w-12 h-12 ${getColorClass(indication.color)} rounded-full flex items-center justify-center`}>
                  {getIconForIndication(indication.icon)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{indication.title}</h3>
                <p className="text-gray-600">{indication.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img
            src="https://pixabay.com/get/gfb3264ac8f793ae3636c83aab8446b74be3363f7c7c8c9ba594bd01568a848acef13e7dc7495e05cab8860c788906e0c5112c85a60c5705fe9989f2150e4f43f_1280.jpg"
            alt="Результаты ДЭНАС-терапии"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg mb-6"
          />

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Важно помнить</h3>
            <p className="text-gray-600">
              Перед применением ДЭНАС-терапии рекомендуется проконсультироваться с врачом, особенно при наличии хронических заболеваний, беременности или кардиостимулятора. Следуйте инструкциям в руководствах пользователя для достижения максимальной эффективности и безопасности процедур.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndicationsSection;
