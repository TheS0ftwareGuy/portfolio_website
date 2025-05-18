// src/app/page.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiTypescript, SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiNextdotjs, SiMongodb, SiPostgresql, SiGit, SiDocker, SiC, SiPython } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { MdWork, MdSchool, MdComputer, MdContacts, MdPerson, MdCode } from 'react-icons/md'

// Profile and project images 
const PROFILE_IMAGE_URL = '/me.jpeg'; 
const UNIVERSITY_LOGO_URL = '/UoG.webp'; 
const PROJECT_PORTFOLIO_IMG = '/portfolio-project.png';
const PROJECT_INVESTMENT_IMG = '/investment-project.png';
const PROJECT_JOB_VACANCIES_IMG = '/job-vacancies-project.png';
const ABOUT_ME_IMAGE_URL = '/ABOUT_ME_IMAGE.webp';

// Section Title Component
const SectionTitle = ({ title, icon }: { title: string, icon?: React.ReactNode }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-green-400 inline-flex items-center">
      {icon && <span className="mr-3 text-4xl md:text-5xl">{icon}</span>}
      {title}
    </h2>
    <div className="w-24 h-1 bg-orange-400 mx-auto mt-3"></div>
  </div>
);

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  liveDemo?: string;
}

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const [matrixRows, setMatrixRows] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    setIsClient(true);

    const generateMatrixLine = () => {
      const characters = '01';
      const lineLength = Math.floor(Math.random() * 15) + 15; // Random length between 15-30
      const line = [];
      for (let i = 0; i < lineLength; i++) {
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        line.push(
          <span
            key={i}
            style={{ '--delay': Math.random() * 5 } as React.CSSProperties}
          >
            {char}
          </span>
        );
      }
      return line;
    };

    const newRows = Array(30).fill(null).map((_, index) => (
      <div 
        key={index} 
        style={{ 
          '--delay': Math.random() * 20,
          marginRight: `${Math.random() * 2}rem`
        } as React.CSSProperties}
      >
        {generateMatrixLine()}
      </div>
    ));
    setMatrixRows(newRows);
  }, []);


  const [text] = useTypewriter({
    words: [
      'Software Developer',
      'Développeur Logiciel',
      'Ingeniero de Software',
      'مطوّر برمجيات',
      'Programista oprogramowania',
      'Yazılım Geliştirici',
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const projects: Project[] = [
    {
      title: 'Portfolio Website V1',
      description: 'This personal portfolio website, showcasing my skills and projects. Built with Next.js, React, TypeScript, and Tailwind CSS.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      image: PROJECT_PORTFOLIO_IMG,
      github: 'https://github.com/TheS0ftwareGuy/portfolio_website',
      liveDemo: 'https://adam-mohamed.dev',
    },
    {
      title: 'Investment Portfolio Management',
      description: 'Developed a Java-based investment portfolio management application featuring dynamic updates, gain calculation, and advanced search using HashMaps, with a Java Swing GUI and file I/O for persistent storage and robust exception handling.',
      technologies: ['Java', 'Java Swing', 'HashMaps', 'Object-Oriented Programming (OOP)', 'File I/O', 'Exception Handling'],
      image: PROJECT_INVESTMENT_IMG,
    },
    {
      title: 'Job Vacancies Analysis',
      description: 'Collaborated on a Python-based data analysis project to examine 10,000+ software engineering job vacancies across Canada, performing large-scale data preprocessing and extraction from a 500,000+ record dataset using real-world Statistics Canada data.',
      technologies: ['Python', 'Pandas', 'Data Preprocessing', 'Data Filtering', 'CSV Handling'],
      image: PROJECT_JOB_VACANCIES_IMG,
      github: 'https://github.com/Dcalim/CIS2250_GP',
    },
  ];

  const experiences = [
    {
      title: 'Python Developer',
      company: 'Northwestern University',
      period: 'April 2025 - Present',
      description: 'Developing ML models for Arabic dialect classification at Northwestern University using a 6,000+ sentence dataset. Focused on NLP preprocessing, feature extraction (BoW, TF-IDF), and training classifiers (Logistic Regression, SVM), with performance benchmarking using precision, recall, and F1-score.',
      icon: <MdWork />,
    },
    {
      title: 'Research Assistant',
      company: 'Nile University',
      period: 'June 2024 - August 2024',
      description: 'Built a Proxmox-based virtual cluster with two 16GB RAM nodes, improving resource utilization by ~40% and reducing VM deployment time by 30%. Deployed and tested Ubuntu VMs with dynamic load distribution for more stable performance under concurrent workloads.',
      icon: <MdSchool />,
    },
    {
      title: 'iOS Developer',
      company: 'OurWaveHub x Apple',
      period: 'July 2022 - August 2022',
      description: 'Developed a fitness tracking app in Swift with features for step counting, food logging, and activity monitoring. Improved UI responsiveness by 25% through optimized layout rendering and applied Agile practices to deliver core features within 3 two-week sprints.',
      icon: <MdComputer />,
    },
  ];

  const skills = [
    { name: 'TypeScript', icon: <SiTypescript className="w-16 h-16 md:w-20 md:h-20" /> },
    { name: 'React', icon: <SiReact className="w-16 h-16 md:w-20 md:h-20 text-[#61DAFB]" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-16 h-16 md:w-20 md:h-20" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="w-16 h-16 md:w-20 md:h-20 text-[#339933]" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="w-16 h-16 md:w-20 md:h-20 text-[#06B6D4]" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-16 h-16 md:w-20 md:h-20 text-[#F7DF1E]" /> },
    { name: 'Java', icon: <FaJava className="w-16 h-16 md:w-20 md:h-20 text-[#007396]" /> },
    { name: 'HTML', icon: <SiHtml5 className="w-16 h-16 md:w-20 md:h-20 text-[#E34F26]" /> },
    { name: 'CSS', icon: <SiCss3 className="w-16 h-16 md:w-20 md:h-20 text-[#1572B6]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-16 h-16 md:w-20 md:h-20 text-[#47A248]" /> },
    { name: 'SQL', icon: <SiPostgresql className="w-16 h-16 md:w-20 md:h-20 text-[#4169E1]" /> },
    { name: 'Docker', icon: <SiDocker className="w-16 h-16 md:w-20 md:h-20 text-[#2496ED]" /> },
    { name: 'C', icon: <SiC className="w-16 h-16 md:w-20 md:h-20 text-[#A8B9CC]" /> },
    { name: 'Python', icon: <SiPython className="w-16 h-16 md:w-20 md:h-20 text-[#3776AB]" /> },
    { name: 'Git', icon: <SiGit className="w-16 h-16 md:w-20 md:h-20 text-[#F05032]" /> },
  ];
  
  const relatedSkills = [
    'Machine Learning',
    'Natural Language Processing',
    'Text Classification',
    'Feature Engineering',
    'Model Evaluation',
    'ProxMox',
    'Agile Development',
    'UI Design',
    'Product Management'
  ];


  return (
    <div className="bg-black text-white min-h-screen relative">
      {isClient && (
        <div className="matrix fixed inset-0 opacity-30"> {/* Increased opacity for better visibility */}
          {matrixRows}
        </div>
      )}

      <div className="relative z-10"> {/* Content wrapper */}
        <Navbar />

        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0 px-4">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-16 w-full">
            {/* Left content - Text */}
            <div className="text-center md:text-left space-y-5 md:space-y-6">
              <h2 className="text-xl md:text-2xl font-mono text-gray-300">Hi there, I'm</h2>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gradient">Adam Mohamed</h1>
              <div className="flex items-center justify-center md:justify-start text-2xl md:text-3xl font-mono text-green-300 h-12">
                {text}
                <Cursor cursorStyle="_" />
              </div>
              <p className="text-md md:text-lg text-gray-300 mt-4 max-w-xl mx-auto md:mx-0">
                I&apos;m a Software Engineering student at the University of Guelph who loves building things that solve real problems. 
                I&apos;m currently looking for a Fall 2025 co-op where I can contribute to meaningful, forward-thinking projects.
              </p>
            </div>

            {/* Right content - Photo + Social Buttons */}
            <div className="flex flex-col items-center space-y-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-orange-400 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <Image
                  src={PROFILE_IMAGE_URL}
                  alt="Adam Mohamed"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-gray-700 object-cover relative"
                  priority
                />
              </div>
              <div className="flex flex-row space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => openLink('https://github.com/TheS0ftwareGuy')}
                  className="flex items-center justify-center gap-x-2 px-6 py-3 text-lg w-auto rounded-lg bg-gray-800 text-gray-200 font-semibold border-2 border-gray-700 shadow-md hover:shadow-lg transition-all hover:border-green-400 hover:text-green-400 glow-on-hover"
                >
                  <FaGithub className="w-6 h-6" />
                  <span>GitHub</span>
                </button>
                <button
                  type="button"
                  onClick={() => openLink('https://www.linkedin.com/in/-adam-mohamed/')}
                  className="flex items-center justify-center gap-x-2 px-6 py-3 text-lg w-auto rounded-lg bg-gray-800 text-gray-200 font-semibold border-2 border-gray-700 shadow-md hover:shadow-lg transition-all hover:border-blue-400 hover:text-blue-400 glow-on-hover"
                >
                  <FaLinkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 md:py-28 bg-gray-900/80 backdrop-blur-md">
          <div className="max-w-screen-xl mx-auto px-6 md:px-8">
            <SectionTitle title="ABOUT ME" icon={<MdPerson />} />
            <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
              <div className="md:col-span-3 space-y-4 text-gray-300 text-lg">
                <p>
                  Hi, I&apos;m Adam! 
                </p>
                <p>
                  A Software Engineering student who fell in love early on with the idea that all you need to build something impactful is an idea and a laptop. 
                  To me, tech is a creative playground, and that curiosity led to countless late nights diving into algorithms, building projects, 
                  and trying to solve real problems through code.
                </p>
                <p>
                  Outside of tech, I&apos;m always looking for the next adventure. I love traveling, hiking, and meeting people from different cultures. 
                  A fun detail: the word Software Developer on my homepage shifts languages depending on the countries I&apos;ve visited, 
                  a small nod to the global perspective I bring to everything I do.
                </p>
              </div>
              <div className="md:col-span-2 flex justify-center">
                 <Image
                    src={ABOUT_ME_IMAGE_URL} 
                    alt="About Adam Mohamed"
                    width={350}
                    height={350}
                    className="rounded-xl shadow-2xl object-cover border-4 border-gray-700"
                  />
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 md:py-28 bg-black/80 backdrop-blur-md">
          <div className="max-w-screen-xl mx-auto px-6 md:px-8">
            <SectionTitle title="EDUCATION" icon={<MdSchool />} />
            <div className="bg-gray-800/70 border border-gray-700 p-6 md:p-8 rounded-xl shadow-2xl max-w-3xl mx-auto card-hover">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Image
                  src={UNIVERSITY_LOGO_URL}
                  alt="University Logo"
                  width={100}
                  height={100}
                  className="rounded-md bg-white p-2" // Added bg for visibility if logo is transparent
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-semibold text-green-300">Bachelor of Computing</h3>
                  <h4 className="text-xl text-green-300 mt-1">Software Engineering Honours</h4>
                  <p className="text-xl text-white">University of Guelph (UoG)</p>
                  <p className="text-gray-400 font-mono">Expected Graduation: May 2028</p>
                  <p className="text-gray-300 mt-3">
                    <span className="font-semibold text-green-400">Key Courses:</span> Data Structures, Analysis of Computer Algorithms, Object-Oriented Programming, Software System Development and Integration, Web Design and Development, Discrete Structures in Computing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-28 bg-gray-900/80 backdrop-blur-md">
            <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                <SectionTitle title="EXPERIENCE" icon={<MdWork />} />
                <div className="relative max-w-3xl mx-auto">
                    {/* The vertical line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
                    
                    {experiences.map((exp, index) => (
                        <div key={index} className={`mb-12 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Content Card */}
                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                                <div className="bg-gray-800/70 border border-gray-700 p-6 rounded-xl shadow-2xl card-hover relative">
                                    {/* Icon/Dot for timeline point (Desktop) */}
                                    <div className={`absolute top-1/2 -mt-3 w-6 h-6 rounded-full bg-green-400 border-4 border-gray-900 hidden md:block ${index % 2 === 0 ? '-left-3 transform -translate-x-1/2 md:translate-x-0 md:-left-[calc(2.5rem+1px)]' : '-right-3 transform translate-x-1/2 md:translate-x-0 md:-right-[calc(2.5rem+1px)]'}`}></div>
                                     {/* Icon/Dot for timeline point (Mobile) */}
                                     <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-green-400 border-4 border-gray-900 md:hidden"></div>


                                    <div className="flex items-center mb-2">
                                        <span className="text-2xl text-orange-400 mr-3">{exp.icon}</span>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                                            <p className="text-lg text-green-300">{exp.company}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400 font-mono mb-3">{exp.period}</p>
                                    <p className="text-gray-300 text-md">{exp.description}</p>
                                </div>
                            </div>
                           {/* Spacer for Desktop view, not needed for mobile as it stacks */}
                           <div className="hidden md:block md:w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-28 bg-black/80 backdrop-blur-md">
          <div className="max-w-screen-xl mx-auto px-6 md:px-8">
            <SectionTitle title="PROJECTS" icon={<MdCode />} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800/70 border border-gray-700 rounded-xl shadow-2xl overflow-hidden flex flex-col project-card">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={350}
                    className="object-cover w-full h-48 md:h-56"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-semibold text-green-300 mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-md mb-4 flex-grow">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-1">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-700 text-orange-300 rounded-full text-xs md:text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4 mt-auto">
                      {project.github && (
                        <button
                          onClick={() => project.github && openLink(project.github)}
                          className="flex items-center gap-x-2 px-4 py-2 text-sm rounded-lg bg-gray-700 text-gray-200 hover:bg-green-500 hover:text-white transition-colors"
                        >
                          <FaGithub /> View Code
                        </button>
                      )}
                      {project.liveDemo && (
                         <button
                           onClick={() => project.liveDemo && openLink(project.liveDemo)}
                           className="flex items-center gap-x-2 px-4 py-2 text-sm rounded-lg bg-gray-700 text-gray-200 hover:bg-orange-500 hover:text-white transition-colors"
                         >
                           <FaEnvelope /> Live Demo
                         </button>
                       )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-28 bg-gray-900/80 backdrop-blur-md">
            <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                <SectionTitle title="SKILLS" icon={<MdComputer />} />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/70 border border-gray-700 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-lg skill-card"
                        >
                            <div className="text-green-400 mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-110">
                                {skill.icon}
                            </div>
                            <h3 className="text-md md:text-lg font-medium text-white">{skill.name}</h3>
                            {/* <p className="text-xs text-orange-300">{skill.level}</p> */}
                        </div>
                    ))}
                </div>
                <div className="mt-16">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-green-300">Related Skills</h3>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {relatedSkills.map((skill: string, index: number) => (
                            <span key={index} className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm md:text-md shadow-md">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-black/80 backdrop-blur-md">
          <div className="max-w-screen-xl mx-auto px-6 md:px-8">
            <SectionTitle title="CONTACT ME" icon={<MdContacts />} />
            <div className="max-w-3xl mx-auto text-center mb-10">
                <p className="text-lg text-gray-300">
                    I'm always excited to connect and discuss new projects, opportunities, or just chat about tech!
                    Feel free to reach out via email or connect with me on LinkedIn.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start max-w-4xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-green-300 mb-4 text-center md:text-left">Get in Touch Directly</h3>
                <a href="mailto:adameid.moh@gmail.com" className="flex items-center space-x-3 p-4 bg-gray-800/70 border border-gray-700 rounded-lg group hover:bg-gray-700/90 transition-colors">
                  <FaEnvelope className="text-green-400 text-2xl group-hover:text-green-300" />
                  <span className="text-lg text-white group-hover:text-green-300 transition-colors">
                    adameid.moh@gmail.com
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/-adam-mohamed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-gray-800/70 border border-gray-700 rounded-lg group hover:bg-gray-700/90 transition-colors"
                >
                  <FaLinkedin className="text-blue-400 text-2xl group-hover:text-blue-300" />
                  <span className="text-lg text-white group-hover:text-blue-300 transition-colors">
                    linkedin.com/in/-adam-mohamed
                  </span>
                </a>
                <a
                  href="https://github.com/TheS0ftwareGuy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-gray-800/70 border border-gray-700 rounded-lg group hover:bg-gray-700/90 transition-colors"
                >
                  <FaGithub className="text-gray-300 text-2xl group-hover:text-white" />
                  <span className="text-lg text-white group-hover:text-gray-100 transition-colors">
                    github.com/TheS0ftwareGuy
                  </span>
                </a>
              </div>

              <form className="bg-gray-800/70 border border-gray-700 p-6 md:p-8 rounded-xl shadow-2xl space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-700/80 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent placeholder-gray-500"
                    placeholder="e.g., Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-700/80 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent placeholder-gray-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-gray-700/80 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent placeholder-gray-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900/50 border-t border-gray-700/50 py-8 backdrop-blur-sm">
          <div className="max-w-screen-xl mx-auto px-6 md:px-8 text-center">
            <p className="text-gray-400">
              Designed & Built by Adam Mohamed &copy; {new Date().getFullYear()}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Fueled by coffee and a passion for code. Built with Next.js, React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}