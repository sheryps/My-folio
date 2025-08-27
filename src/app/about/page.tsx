'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall, 
  cardHoverTransition
} from '@/utils/animations'
const Page = () => {
  return (
        <div className="container max-w-7xl mx-auto py-12 pt-20">
      <motion.h1 className="text-4xl font-bold mb-8 text-center pt-5" {...fadeInDown}>
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16">
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div 
            variants={fadeInUp}
            {...cardHover}
            transition={cardHoverTransition}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <FaCode size={20}  color='blue'/>
            <h3 className="text-xl font-semibold mb-2 mt-5">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            {...cardHover}
            transition={cardHoverTransition}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <FaLaptopCode size={20} color='blue'/>
            <h3 className="text-xl font-semibold mb-2 mt-5">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>
                    <motion.div 
            variants={fadeInUp}
            {...cardHover}
            transition={cardHoverTransition}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <FaLaptopCode size={20} color='blue'/>
            <h3 className="text-xl font-semibold mb-2 mt-5">Mobile Development</h3>
            <ul className="text-secondary space-y-2">
              <li>React-Native</li>
              <li>Flutter</li>
              <li>Dart Language</li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            {...cardHover}
            transition={cardHoverTransition}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" >
            <FaGraduationCap size={20} color='blue'/>
            <h3 className="text-xl font-semibold mb-2 mt-5">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>FireBase</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn}
        transition={{ delay: 0.4 }}>
        
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"  variants={staggerContainer}
          initial="initial"
          animate="animate">
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
            transition={cardHoverTransition}
          >
            <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer</h3>
            <p className="text-primary mb-2">Company Name • 2020 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Led development of multiple web applications using React and Node.js</li>
              <li>Implemented CI/CD pipelines reducing deployment time by 50%</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            {...cardHoverSmall}
            transition={cardHoverTransition}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-2">Previous Company • 2018 - 2020</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed and maintained RESTful APIs</li>
              <li>Built responsive user interfaces with modern JavaScript frameworks</li>
              <li>Optimized database queries improving performance by 40%</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn}
        transition={{ delay: 0.6 }}>
        <motion.h2 
          {...fadeInUp}
          className="section-title"
        >
          Education
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto">
            {/* PGDAC */}
            <motion.div 
            variants={fadeInUp}
            {...cardHoverSmall}
            transition={cardHoverTransition}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">PG Diploma in Automation and Control</h3>
            <p className="text-primary mb-2">Saintgits College of Engineering • 2018 - 2020</p>
            <p className="text-secondary">
              Graduated with PG Diploma in PLC,Scada Programming.
            </p>
          </motion.div>
            {/* btech */}
          <motion.div 
            variants={fadeInUp}
            {...cardHoverSmall}
            transition={cardHoverTransition}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md mt-3">
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Electronics & Instrumentation</h3>
            <p className="text-primary mb-2">Saintgits College of Engineering • 2014 - 2018</p>
            <p className="text-secondary">
              Graduated with honors. Focused on Engineering.
            </p>
          </motion.div>
          {/* higher secondary */}
          <motion.div 
            variants={fadeInUp}
            {...cardHoverSmall}
            transition={cardHoverTransition}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md mt-3">
            <h3 className="text-xl font-semibold mb-2">Higher Secondary Education</h3>
            <p className="text-primary mb-2">IHRD Technical Higher Secondary School • 2012 - 2014</p>
            <p className="text-secondary">
              Graduated +2,Qualified with Computer Programming and developed Programming Skills.
            </p>
          </motion.div>
          {/* 10 th */}
            <motion.div 
            variants={fadeInUp}
            {...cardHoverSmall}
            transition={cardHoverTransition}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md mt-3">
            <h3 className="text-xl font-semibold mb-2">Secondary Education</h3>
            <p className="text-primary mb-2">IHRD Technical Higher Secondary School • 2009 - 2012</p>
            <p className="text-secondary">
              Graduated 10-th,Learned Computer Programming and started to have keen interest in coding.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Page