import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.div 
              className="w-40 h-40 mx-auto mb-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <span className="text-5xl font-bold text-white">GS</span>
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight tracking-tight"
              variants={itemVariants}
            >
              Gaurav Singh
            </motion.h1>
            
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <motion.p 
                className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-medium"
                variants={itemVariants}
              >
                Full-Stack Developer | Java + Python Enthusiast | Flutter Learner
              </motion.p>
              
              <motion.div
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              />
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Passionate about building scalable apps using modern technologies. Skilled in Java, Python, Flutter, React, and Firebase. 
              Eager to explore full-stack development and contribute to innovative tech solutions.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { href: "https://www.linkedin.com/in/gaurav-singh-276944292", icon: Linkedin, color: "bg-blue-600 hover:bg-blue-700", delay: 0 },
              { href: "https://github.com/GauravSingh094", icon: Github, color: "bg-gray-800 hover:bg-gray-900", delay: 0.1 },
              { href: "mailto:gauravsinghx2510@gmail.com", icon: Mail, color: "bg-green-600 hover:bg-green-700", delay: 0.2 }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`p-4 ${social.color} text-white rounded-full transition-all duration-300 transform shadow-lg`}
                variants={socialVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.0 + social.delay }}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            onClick={() => scrollToSection('skills')}
            className="group p-4 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={28} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;