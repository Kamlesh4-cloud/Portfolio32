

import { motion } from "motion/react";

const About = () => {
  const skills = [
    { name: "React", icon: "⚛️", level: 90 },
    { name: "JavaScript", icon: "Js", level: 85 },
    { name: "Python", icon: "🐍", level: 80 },
    { name: "Java", icon: "☕", level: 75 },
    { name: "C#", icon: "C++", level: 70 },
    { name: "Linux", icon: "🐧", level: 75 },
    { name: "CSS", icon: "🎨", level: 85 },
    { name: "Node.js", icon: "🟢", level: 80 },
  ];

  const experiences = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
      icon: "💻",
      color: "from-royal to-lavender"
    },
    {
      title: "Backend Development", 
      description: "Creating robust APIs and server-side applications with various technologies.",
      icon: "⚙️",
      color: "from-aqua to-mint"
    },
    {
      title: "Full-Stack Solutions",
      description: "End-to-end development from database design to deployment and maintenance.",
      icon: "🔄",
      color: "from-fuchsia to-coral"
    },
    {
      title: "Problem Solving",
      description: "Analyzing complex problems and implementing efficient, scalable solutions.",
      icon: "🧠",
      color: "from-orange to-sand"
    }
  ];

  return (
    <section className="c-space section-spacing" id="about">
      {/* Introduction Card */}
      <motion.div
        className="mb-12 p-8 bg-gradient-to-br from-storm to-indigo rounded-2xl border border-white/10 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-royal to-lavender bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love creating innovative solutions that combine elegant design with powerful functionality. 
            My journey in tech has equipped me with skills across the entire development stack.
          </motion.p>
        </div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-white text-center">Technical Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="p-4 bg-gradient-to-br from-storm to-indigo rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{skill.icon}</div>
                <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-royal to-lavender h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="text-xs text-neutral-400 mt-1">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-white text-center">What I Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className={`p-6 bg-gradient-to-br ${exp.color} rounded-2xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{exp.icon}</div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                  <p className="text-neutral-200 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Info Card */}
      <motion.div
        className="mt-12 p-8 bg-gradient-to-br from-storm to-indigo rounded-2xl border border-white/10 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">🎯</div>
            <h4 className="text-lg font-semibold text-white mb-2">Focus</h4>
            <p className="text-neutral-300">Clean, efficient, and scalable code</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🚀</div>
            <h4 className="text-lg font-semibold text-white mb-2">Approach</h4>
            <p className="text-neutral-300">Modern technologies and best practices</p>
          </div>
          <div>
            <div className="text-3xl mb-2">💡</div>
            <h4 className="text-lg font-semibold text-white mb-2">Innovation</h4>
            <p className="text-neutral-300">Creative solutions to complex problems</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;