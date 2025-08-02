import { motion } from "motion/react";
import muzzImage from "/assets/Muzz.png";
import project2Image from "/assets/project2.png";
import project3Image from "/assets/project3.png";
import project4Image from "/assets/project4.png";

const Project = () => {
  const projects = [
    {
      title: "Clothing Store",
      description: "A full-stack Music streaming platform  with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: muzzImage,
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Next.js", "TypeScript", "Socket.io", "Tailwind"],
      image: project2Image,
      liveLink: "#",
      githubLink: "https://github.com/Kamlesh4-cloud/Task-Manger.git",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A weather application with location-based forecasts, interactive maps, and detailed weather analytics using external APIs.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      image: project3Image,
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website with parallax effects, smooth animations, and responsive design showcasing creative work.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      image: project4Image,
      liveLink: "#",
      githubLink: "#",
      featured: false
    }
  ];

  return (
    <section className="c-space section-spacing" id="work">
      <motion.h2 
        className="text-heading mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
              project.featured ? 'lg:col-span-2' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {/* Project Image */}
            <div className="h-64 bg-gradient-to-br from-storm to-indigo relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Project Content */}
            <div className="p-6 bg-gradient-to-b from-storm to-indigo">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-royal to-lavender rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-neutral-300 border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <motion.a
                  href={project.liveLink}
                  className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-royal to-lavender rounded-lg text-white hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  className="px-4 py-2 text-sm font-medium border border-white/20 rounded-lg text-neutral-300 hover:text-white hover:border-white/40 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-neutral-300 text-lg mb-6">
          Interested in working together? Let's create something amazing!
        </p>
        <motion.a
          href="#contact"
          className="px-8 py-3 text-lg font-medium bg-gradient-to-r from-royal to-lavender rounded-lg text-white hover:opacity-90 transition-opacity inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Project; 