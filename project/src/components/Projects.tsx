import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, BarChart3, FileSpreadsheet } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Medical Costs Analysis Database',
      description: 'Developed a comprehensive relational database in SQL for medical costs analysis, including data insertion, manipulation, and advanced statistical analysis. Implemented predictive modeling using linear regression.',
      technologies: ['SQL', 'Data Analysis', 'Linear Regression', 'Statistical Analysis'],
      icon: <Database size={32} />,
      color: 'from-blue-500 to-cyan-500',
      isPlaceholder: false
    },
    {
      title: 'Sales Performance Dashboard',
      description: 'Created dynamic Power BI dashboards for sales performance tracking, resulting in 15% increase in sales through data-driven insights and strategic recommendations.',
      technologies: ['Power BI', 'Data Visualization', 'Excel', 'KPI Tracking'],
      icon: <BarChart3 size={32} />,
      color: 'from-purple-500 to-pink-500',
      isPlaceholder: false
    },
    {
      title: 'Data Cleaning & Transformation Pipeline',
      description: 'Developed automated data cleaning processes using Excel functions and Power Query, improving report accuracy by 35% and reducing manual processing time by 30%.',
      technologies: ['Excel', 'Power Query', 'Data Cleaning', 'Automation'],
      icon: <FileSpreadsheet size={32} />,
      color: 'from-green-500 to-emerald-500',
      isPlaceholder: false
    },
    {
      title: t('projects.placeholder.title') + ' 1',
      description: t('projects.placeholder.description'),
      technologies: ['Coming Soon', 'Data Analytics', 'Visualization'],
      icon: <BarChart3 size={32} />,
      color: 'from-gray-400 to-gray-600',
      isPlaceholder: true
    },
    {
      title: t('projects.placeholder.title') + ' 2',
      description: t('projects.placeholder.description'),
      technologies: ['Coming Soon', 'Machine Learning', 'Python'],
      icon: <Database size={32} />,
      color: 'from-gray-400 to-gray-600',
      isPlaceholder: true
    },
    {
      title: t('projects.placeholder.title') + ' 3',
      description: t('projects.placeholder.description'),
      technologies: ['Coming Soon', 'Business Intelligence', 'Analytics'],
      icon: <FileSpreadsheet size={32} />,
      color: 'from-gray-400 to-gray-600',
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }} // ✅ FIXED FOR MOBILE
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('projects.title')}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 ${
                  project.isPlaceholder ? 'opacity-75' : ''
                }`}
              >
                <div className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          project.isPlaceholder
                            ? 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                            : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {!project.isPlaceholder ? (
                    <div className="flex space-x-4">
                      <motion.a
                        href="https://github.com/chelsea190"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">{t('projects.view')}</span>
                      </motion.a>

                      <motion.a
                        href="https://github.com/chelsea190"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                      >
                        <Github size={16} />
                        <span className="text-sm font-medium">{t('projects.code')}</span>
                      </motion.a>
                    </div>
                  ) : (
                    <div className="text-center">
                      <span className="text-gray-500 dark:text-gray-400 text-sm italic">
                        Coming Soon...
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              More projects are in development. Check back soon for updates!
            </p>
            <motion.a
              href="https://github.com/chelsea190/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
