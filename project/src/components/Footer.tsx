import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/chelsea190/',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/chigozie-uba',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:chigozieuba08@gmail.com',
      label: 'Email'
    },
    {
      icon: <Phone size={20} />,
      href: 'tel:+2348122727119',
      label: 'Phone'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">Chigozie Uba</h3>
            <p className="text-gray-400 leading-relaxed">
              Data Analyst passionate about transforming data into actionable insights. 
              Specializing in Excel, Power BI, SQL, and data visualization.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <a 
                  href="mailto:chigozieuba08@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  chigozieuba08@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-green-400" />
                <a 
                  href="tel:+2348122727119"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +234 812 272 7119
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400">Lagos, Nigeria</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© 2024 Chigozie Uba.</span>
            <span>{t('footer.rights')}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>{t('footer.built')}</span>
            <Heart size={16} className="text-red-500" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;