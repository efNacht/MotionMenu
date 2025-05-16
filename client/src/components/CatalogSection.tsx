import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data";
import ProductModal from "./ProductModal";

type CategoryType = "all" | "Основные устройства" | "Аксессуары";

const CatalogSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  // Filter products based on active category
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Handle category change
  const handleCategoryChange = (category: CategoryType) => {
    setActiveCategory(category);
  };

  // Handle modal open
  const openModal = (productId: number) => {
    setSelectedProduct(productId);
  };

  // Handle modal close
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="catalog" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Каталог устройств</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите наиболее подходящее устройство для ваших потребностей
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <button
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === "all"
                ? "bg-primary-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleCategoryChange("all")}
          >
            Все устройства
          </button>
          <button
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === "Основные устройства"
                ? "bg-primary-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleCategoryChange("Основные устройства")}
          >
            Основные устройства
          </button>
          <button
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === "Аксессуары"
                ? "bg-primary-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleCategoryChange("Аксессуары")}
          >
            Аксессуары
          </button>
        </motion.div>

        {/* Products grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                onClick={() => openModal(product.id)}
              >
                <div 
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = product.buyUrl;
                  }}
                >
                  <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Купить сейчас
                  </div>
                </div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{product.category}</span>
                    <button
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors z-20 relative"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(product.id);
                      }}
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={products.find(p => p.id === selectedProduct)!}
          isOpen={selectedProduct !== null}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default CatalogSection;
