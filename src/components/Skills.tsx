import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Wrench, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code className="w-8 h-8" />,
      skills: ['Java', 'Python', 'C', 'Dart', 'JavaScript'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-8 h-8" />,
      skills: ['HTML', 'CSS', 'Next.js', 'Bootstrap', 'JSP', 'Thymeleaf'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      skills: ['Flutter', 'Dart', 'React Native'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Wrench className="w-8 h-8" />,
      skills: ['React.js', 'Node.js', 'Spring Boot', 'Spring MVC', 'JPA'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Tools & Technologies',
      icon: <Database className="w-8 h-8" />,
      skills: ['Firebase', 'MongoDB', 'Git', 'VS Code', 'Postman'],
      color: 'from-red-500 to-red-600'
    }
  ];

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

  const cardVariants = {
    hidden: { 
      y: 40, 
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 flex items-center">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight leading-snug"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Things I'm good at
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <motion.div 
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform duration-300`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {category.icon}
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold mb-6 text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {category.title}
              </motion.h3>
              
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-default"
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2
                    }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;