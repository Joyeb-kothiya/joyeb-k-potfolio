import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Bell } from "lucide-react";

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">Thoughts & Insights</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
            <span className="text-gradient">Blog</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-12 text-center hover-lift">
            <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-muted-foreground" />
            </div>
            
            <h3 className="text-2xl font-display font-bold mb-4">
              Coming Soon
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              I'm working on some exciting articles about web development, design patterns, 
              and my journey as a self-taught developer. Stay tuned!
            </p>

            <div className="flex items-center justify-center gap-2 text-primary">
              <Bell className="w-5 h-5 animate-pulse" />
              <span className="font-medium">Articles launching soon</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
