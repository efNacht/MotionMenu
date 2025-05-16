import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">О компании</h3>
            <p className="text-gray-400">
              Мы специализируемся на продаже и продвижении инновационных физиотерапевтических устройств для здоровья и благополучия.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Основные устройства
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Аксессуары
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Новинки
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Специальные предложения
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Покупателям</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Гарантия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Возврат товара
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-400 mr-2 flex-shrink-0 mt-1"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+7 (800) 555-35-35</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-400 mr-2 flex-shrink-0 mt-1"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>info@denas-therapy.ru</span>
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 ДЭНАС-терапия. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
