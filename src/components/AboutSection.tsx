import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Sparkles, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing maintainable & scalable code" },
  { icon: Palette, label: "UI Design", desc: "Creating beautiful user interfaces" },
  { icon: Zap, label: "Fast Learner", desc: "Adapting to new technologies quickly" },
  { icon: Sparkles, label: "Creative", desc: "Bringing ideas to life with code" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-primary font-medium mb-3 text-sm md:text-base">Get to know me</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Hey there! I'm a <span className="text-foreground font-medium">2nd-year college student</span> at 
                Adarsh College, Botad, on an exciting journey into the world of web development.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                My coding adventure began just <span className="text-foreground font-medium">6 months ago</span>, 
                and since then, I've been self-teaching myself everything from the ground up. 
                What started as curiosity has transformed into a genuine passion for creating digital experiences.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                I've developed strong foundations in <span className="text-primary font-medium">HTML, CSS, 
                and JavaScript</span>, and I'm currently diving deeper into <span className="text-primary font-medium">
                React, Tailwind CSS, and UI design principles</span>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                My interests span across frontend UI development, smooth animations, full-stack logic, 
                and visual design. I believe in the power of combining aesthetics with functionality.
              </motion.p>
            </div>

            <motion.div 
              className="pt-3 md:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <p className="text-base md:text-lg font-display font-medium text-foreground">
                "Passionate about creating beautiful and functional web experiences through continuous 
                learning and innovation."
              </p>
            </motion.div>

            <motion.a
              href="#contact"
              className="btn-primary inline-flex mt-3 md:mt-4 text-sm md:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
            </motion.a>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass rounded-xl md:rounded-2xl p-4 md:p-6 hover-lift hover-glow group cursor-default"
              >
                <motion.div 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-primary flex items-center justify-center mb-3 md:mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </motion.div>
                <h3 className="font-display font-semibold text-base md:text-lg mb-1">{item.label}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
