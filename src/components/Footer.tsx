import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/GauravSingh094',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/gaurav-singh-276944292',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:gauravsinghx2510@gmail.com',
      color: 'hover:text-green-400'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <motion.h3 
                className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Gaurav Singh
              </motion.h3>
              <p className="text-gray-300 text-lg mb-6 font-medium">
                Full-Stack Developer • Java + Python Enthusiast • Flutter Learner
              </p>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Passionate about building scalable applications using modern technologies. 
                Always eager to learn and contribute to innovative tech solutions.
              </p>
            </motion.div>

            {/* Navigation Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-6 text-white">Navigation</h4>
              <nav className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-gray-300 hover:text-white transition-colors duration-300 text-left hover:translate-x-1"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-6 text-white">Get In Touch</h4>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-3 text-gray-300"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaEnvelope className="text-green-400 flex-shrink-0" />
                  <a 
                    href="mailto:gauravsinghx2510@gmail.com" 
                    className="hover:text-white transition-colors duration-300 break-all"
                  >
                    gauravsinghx2510@gmail.com
                  </a>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 text-gray-300"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" />
                  <span>India</span>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h5 className="text-lg font-medium mb-4 text-white">Follow Me</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-800 rounded-lg text-gray-300 ${social.color} transition-all duration-300 hover:bg-gray-700`}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            className="border-t border-gray-700 pt-8"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <motion.p 
                className="text-gray-400 text-center md:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                © {currentYear} Gaurav Singh. All rights reserved.
              </motion.p>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <span className="font-medium">Back to Top</span>
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaArrowUp size={16} />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;