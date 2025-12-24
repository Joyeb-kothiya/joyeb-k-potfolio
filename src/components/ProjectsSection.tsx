import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Sparkles } from "lucide-react";

const featuredProject = {
  title: "Code Breaker Website",
  description: "A comprehensive web platform built specifically for college students to access resources, collaborate on projects, and enhance their learning experience.",
  techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  liveUrl: "https://ziki-code-breaker.vercel.app/",
};

const comingSoonProjects = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-medium mb-3 text-sm md:text-base">My recent work</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          <motion.div 
            className="card-project p-6 md:p-8 lg:p-10 group"
            whileHover={{ scale: 1.01, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.span 
                className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs md:text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Featured
              </motion.span>
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
              {featuredProject.title}
            </h3>
            <p className="text-muted-foreground mb-4 md:mb-6 max-w-2xl text-sm md:text-base leading-relaxed">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {featuredProject.techStack.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-2 md:px-3 py-1 rounded-lg bg-muted text-xs md:text-sm font-medium"
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <motion.a
              href={featuredProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Coming Soon Projects Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
          {comingSoonProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="card-project p-4 md:p-5 lg:p-6 relative group cursor-default aspect-square flex flex-col items-center justify-center"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              />
              <motion.div
                className="relative z-10 flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2 
                  }}
                >
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary/60 mb-2 md:mb-3" />
                </motion.div>
                <span className="text-xs md:text-sm font-medium text-muted-foreground">
                  Coming Soon
                </span>
              </motion.div>
              <motion.div 
                className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-accent"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
