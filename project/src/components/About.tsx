import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

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
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
              {t('about.title')}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {t('about.education.title')}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {t('about.education.degree')}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {t('about.education.school')}
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                      <Globe className="text-green-600 dark:text-green-400" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {t('about.languages.title')}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                    {t('about.languages.english')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {t('about.languages.french')}
                  </p>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-blue-100 dark:border-gray-600"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <Award className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Key Strengths</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['Analytical Skills', 'Attention to Detail', 'Adaptability', 'Data Visualization'].map((strength) => (
                    <div key={strength} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{strength}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Professional Highlights</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span>2+ Years Data Analytics Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span>Expert in Excel & Power BI</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span>SQL Database Management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span>Data Visualization Specialist</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;