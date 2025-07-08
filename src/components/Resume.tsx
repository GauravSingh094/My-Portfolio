import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download, Calendar, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1Acs8btlZAqMpetJJzl0UiWPEaSHpP2MK/view?usp=sharing';
  const downloadUrl = 'https://drive.google.com/uc?export=download&id=1Acs8btlZAqMpetJJzl0UiWPEaSHpP2MK';

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="resume" className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight leading-snug"
              data-aos="fade-up"
            >
              Resume
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Download or view my complete professional resume
            </motion.p>
          </motion.div>

          <motion.div 
            className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-xl p-12 mb-8 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            data-aos="zoom-in"
          >
            {/* Background decoration */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 transform shadow-lg group"
                variants={buttonVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye size={24} />
                <span className="font-semibold text-lg">View Resume</span>
              </motion.a>
              
              <motion.a
                href={downloadUrl}
                download
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 transform shadow-lg group"
                variants={buttonVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Download size={24} />
                </motion.div>
                <span className="font-semibold text-lg">Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Calendar size={18} />
            <span className="font-medium">Last Updated: July 2025</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;