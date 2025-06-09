import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director, Global Trust Consulting',
      content: 'Chigozie\'s analytical skills and attention to detail significantly improved our sales reporting accuracy. His Power BI dashboards provided insights that directly contributed to our 15% sales increase.',
      rating: 5,
      isPlaceholder: false
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager, Kiddies Children Store',
      content: 'Working with Chigozie was a game-changer for our inventory management. His data analysis helped us identify seasonal trends and optimize our stock levels, resulting in improved sales performance.',
      rating: 5,
      isPlaceholder: false
    },
    {
      name: t('testimonials.placeholder.name'),
      role: t('testimonials.placeholder.role'),
      content: t('testimonials.placeholder.text'),
      rating: 5,
      isPlaceholder: true
    },
    {
      name: t('testimonials.placeholder.name'),
      role: t('testimonials.placeholder.role'),
      content: t('testimonials.placeholder.text'),
      rating: 5,
      isPlaceholder: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('testimonials.title')}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 relative ${
                  testimonial.isPlaceholder ? 'opacity-60' : ''
                }`}
              >
                <div className="absolute top-4 right-4">
                  <Quote className="text-blue-600 dark:text-blue-400 opacity-20" size={32} />
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        testimonial.isPlaceholder
                          ? 'text-gray-400'
                          : 'text-yellow-400 fill-current'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                    testimonial.isPlaceholder
                      ? 'bg-gray-400'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500'
                  }`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                {testimonial.isPlaceholder && (
                  <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 bg-opacity-50 rounded-xl flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 font-medium">
                      Testimonial Placeholder
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Have you worked with me? I'd love to feature your testimonial here!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Share Your Experience
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;