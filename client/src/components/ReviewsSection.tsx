import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data";

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSlidesToShow(mobile ? 1 : window.innerWidth < 1024 ? 2 : 3);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, reviews.length]);

  const updateSliderPosition = () => {
    if (trackRef.current) {
      const slideWidth = 100 / slidesToShow;
      trackRef.current.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    }
  };

  useEffect(() => {
    updateSliderPosition();
  }, [currentSlide, slidesToShow]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = reviews.length - slidesToShow;
      return prev >= maxSlide ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? reviews.length - slidesToShow : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Generate stars
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={index < rating ? "currentColor" : "none"}
          stroke={index < rating ? "none" : "currentColor"}
          strokeWidth="2"
          className={index < rating ? "text-yellow-500" : "text-gray-300"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ));
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Отзывы наших клиентов</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте, что говорят пользователи о ДЭНАС-терапии
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500"
              style={{ width: `${reviews.length * 100}%` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="px-4"
                  style={{ width: `${100 / reviews.length}%` }}
                >
                  <div className="bg-white rounded-lg shadow-md p-6 mx-auto h-full">
                    <div className="flex items-center mb-4">
                      <div className="flex">{renderStars(review.rating)}</div>
                    </div>
                    <p className="text-gray-600 mb-6">"{review.text}"</p>
                    <p className="font-medium text-gray-900">— {review.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-3 z-10 focus:outline-none focus:ring-2 focus:ring-primary-500 hidden md:block"
            onClick={prevSlide}
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="text-gray-600" />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-3 z-10 focus:outline-none focus:ring-2 focus:ring-primary-500 hidden md:block"
            onClick={nextSlide}
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="text-gray-600" />
          </button>
        </motion.div>

        <div className="flex justify-center mt-8 space-x-2">
          {reviews.slice(0, reviews.length - slidesToShow + 1).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? "bg-primary-600" : "bg-gray-300"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
