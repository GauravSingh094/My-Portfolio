import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Mindrift – Quiz Web App',
      description: 'A real-time quiz platform supporting 1000+ users, featuring live quizzes, anti-cheating, Firebase sync, leaderboard, and smooth animations.',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Firestore', 'Realtime DB'],
      githubUrl: 'https://github.com/GauravSingh094/Mindrift-Quiz',
      liveUrl: null,
      gradient: 'from-indigo-500 to-cyan-600',
      featured: true
    },
    {
      title: 'PetClinic Java App',
      description: 'A comprehensive Spring Boot project featuring role-based authentication (admin/user), pet management system, appointment scheduling, and robust database integration.',
      technologies: ['Spring Boot', 'Spring MVC', 'JPA', 'MySQL', 'Thymeleaf', 'Java'],
      githubUrl: 'https://github.com/gauravsingh/petclinic',
      liveUrl: null,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'NTC Champ 11',
      description: 'A dynamic fantasy sports application designed for college-level tournaments, featuring real-time scoring, team management, and competitive gameplay powered by Firebase.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Cloud Functions'],
      githubUrl: 'https://github.com/gauravsingh/ntc-champ-11',
      liveUrl: null,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'SoulSync',
      description: 'An innovative music streaming application featuring dynamic content delivery, personalized playlist creation, and seamless user experience across devices.',
      technologies: ['React Native', 'JavaScript', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/gauravsingh/soulsync',
      liveUrl: null,
      gradient: 'from-purple-500 to-pink-600'
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

  return (
    <section id="projects" className="min-h-screen py-20 flex items-center">
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
          >
            Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Work I've Done
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              data-aos="fade-up"
              data-aos-delay={index * 75}
            >
              {project.featured && (
                <motion.div 
                  className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                >
                  <Star size={14} />
                  <span>Featured</span>
                </motion.div>
              )}
              
              <motion.div 
                className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="text-white text-center relative z-10">
                  <motion.h3 
                    className="text-3xl font-bold mb-3"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div 
                    className="w-20 h-1 bg-white/40 mx-auto"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  />
                </div>
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-white/60" />
                </motion.div>
              </motion.div>
              
              <div className="p-8">
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + techIndex * 0.05, duration: 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div 
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 flex-1 justify-center"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={18} />
                    <span className="font-medium">Code</span>
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex-1 justify-center"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={18} />
                      <span className="font-medium">Live</span>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;