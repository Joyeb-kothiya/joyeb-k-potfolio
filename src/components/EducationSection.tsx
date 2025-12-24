import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative">
      <motion.div 
        className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-primary font-medium mb-3 text-sm md:text-base">My academic journey</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div 
            className="glass rounded-xl md:rounded-2xl p-5 md:p-8 hover-lift hover-glow"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <motion.div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
              </motion.div>
              
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-display font-bold mb-1 md:mb-2">
                  Adarsh College, Botad
                </h3>
                <p className="text-base md:text-lg text-primary font-medium mb-3 md:mb-4">
                  Undergraduate Student
                </p>
                
                <div className="flex flex-wrap gap-3 md:gap-4 text-muted-foreground">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 4 }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs md:text-sm">2nd Year (Current)</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 4 }}
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs md:text-sm">Botad, Gujarat, India</span>
                  </motion.div>
                </div>

                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border/50">
                  <p className="text-muted-foreground text-sm md:text-base">
                    Balancing academics with self-taught web development, continuously growing 
                    my technical skills alongside my formal education.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
