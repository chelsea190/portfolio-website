import React from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart3, FileSpreadsheet, Cloud, Brain, Users, Target, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const technicalSkills = [
    { name: 'Microsoft Excel', level: 95, icon: <FileSpreadsheet size={24} />, color: 'bg-green-500' },
    { name: 'Power BI', level: 90, icon: <BarChart3 size={24} />, color: 'bg-yellow-500' },
    { name: 'SQL', level: 85, icon: <Database size={24} />, color: 'bg-blue-500' },
    { name: 'AWS Cloud Solutions', level: 75, icon: <Cloud size={24} />, color: 'bg-orange-500' },
    { name: 'Data Visualization', level: 90, icon: <BarChart3 size={24} />, color: 'bg-purple-500' },
    { name: 'Data Cleaning', level: 95, icon: <Database size={24} />, color: 'bg-indigo-500' }
  ];

  const softSkills = [
    { name: 'Analytical Thinking', icon: <Brain size={24} />, description: 'Strong problem-solving and critical thinking abilities' },
    { name: 'Attention to Detail', icon: <Target size={24} />, description: 'Meticulous approach to data accuracy and quality' },
    { name: 'Team Collaboration', icon: <Users size={24} />, description: 'Effective communication and teamwork skills' },
    { name: 'Adaptability', icon: <Lightbulb size={24} />, description: 'Quick to learn new technologies and methodologies' }
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
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
              {t('skills.title')}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                  <Database className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                {t('skills.technical')}
              </h3>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-gray-600 dark:text-gray-400">
                          {skill.icon}
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                        className={`h-3 rounded-full ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg mr-3">
                  <Brain className="text-green-600 dark:text-green-400" size={24} />
                </div>
                {t('skills.soft')}
              </h3>
              
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <div className="text-blue-600 dark:text-blue-400">
                          {skill.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {skill.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Skills Summary</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">2+</div>
                  <div className="text-blue-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">6+</div>
                  <div className="text-blue-100">Technical Skills</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">35%</div>
                  <div className="text-blue-100">Efficiency Improvement</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;