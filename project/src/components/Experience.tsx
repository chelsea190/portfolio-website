import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: 'Sales Analyst',
      company: 'Global Trust Consulting',
      location: 'Lagos, Nigeria',
      period: 'August 2023 - May 2024',
      achievements: [
        'Conducted data cleaning and transformation using Excel functions like IF, VLOOKUP, and INDEX/MATCH to ensure data quality and consistency and Power Query to streamline data cleaning and integration, improving the accuracy and efficiency of sales reports by 35%.',
        'Performed comprehensive data analysis using pivot tables, charts, and descriptive statistics to identify trends and patterns within datasets',
        'Leveraged Power BI to create dynamic dashboards and visual reports, identifying key performance trends and providing insights that informed marketing and sales strategies, leading to a 15% increase in sales.',
        'By optimizing SQL queries, enhanced data extraction processes by 30%, reducing manual data handling and processing time.',
        'Conducted in-depth analysis of sales data to identify trends and provide actionable insights to improve sales strategies.',
        'Utilized SQL to manage and query large datasets, improving data retrieval efficiency by 30%.',
        'Developed a relational database in SQL for a medical costs analysis project, including data insertion, manipulation, and employing descriptive statistics and analysis techniques.'
      ]
    },
    {
      title: 'Sales Analyst',
      company: 'Kiddies Children Store',
      location: 'Lagos, Nigeria',
      period: 'January 2023 - June 2023',
      achievements: [
        'Analyzed sales data to identify purchasing patterns and seasonal trends, providing actionable insights that helped optimize inventory management and improve sales forecasting.',
        'Developed sales reports using Excel and Power BI to visualize data and track key performance indicators (KPIs), which enabled better decision-making for marketing and sales strategies.',
        'Implemented sales performance dashboards, enhancing the visibility of sales metrics for the management team, which improved real-time decision-making.',
        'Collaborated with the marketing team to recommend strategies based on data analysis, leading to a 10% increase in overall sales during the period.'
      ]
    },
    {
      title: 'Data Analyst Intern',
      company: 'KPMG',
      location: 'Remote',
      period: '2022',
      achievements: [
        'Assisting in cleaning and transforming raw data using Excel functions (e.g., IF, VLOOKUP, INDEX/MATCH) to ensure data quality and consistency.',
        'Removing duplicates, correcting errors, and formatting data for analysis.',
        'Incorporated Power BI for Data Visualization',
        'Completed a KPMG AU Data Analytics job simulation on Forage, advising a client on customer targeting. Tasks included assessing data quality, analyzing data to target high-value customers, and developing dashboards for visual communication of findings.'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('experience.title')}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 hidden md:block"></div>
                  
                  <div className="md:ml-20 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end space-y-2">
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achIndex * 0.1, duration: 0.5 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {index === 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mt-6 flex items-center space-x-2 text-green-600 dark:text-green-400"
                      >
                        <TrendingUp size={20} />
                        <span className="font-semibold">Key Impact: 35% improvement in report accuracy</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;