import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Chigozie.pdf';
    link.download = 'Chigozie_Uba_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      icon: <Mail size={24} />,
      href: 'mailto:chigozieuba08@gmail.com',
      label: 'Email'
    },
    {
      icon: <Github size={24} />,
      href: 'https://github.com/chelsea190/',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://linkedin.com/in/chigozie-uba',
      label: 'LinkedIn'
    },
    {
      icon: <Phone size={24} />,
      href: 'tel:+2348122727119',
      label: 'Phone'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-4"
            >
              {t('hero.greeting')}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Chigozie <span className="text-blue-600 dark:text-blue-400">Uba</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8"
            >
              {t('hero.title')}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg"
            >
              <Mail size={20} />
              <span>{t('hero.cta.contact')}</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg"
            >
              <Download size={20} />
              <span>{t('hero.cta.resume')}</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-xl transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;