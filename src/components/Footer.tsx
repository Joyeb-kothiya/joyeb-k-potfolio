import { motion } from "framer-motion";
import { Github, Instagram, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/joyeb-kothiya" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/joyeb_29" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 border-t border-border/50">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={logo} alt="Joyeb Kothiya" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
            <span className="font-display font-semibold text-base md:text-lg">
              Joyeb<span className="text-primary">.</span>
            </span>
          </motion.a>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-xl bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label={link.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <link.icon className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-xs md:text-sm text-muted-foreground text-center flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {currentYear} Joyeb Kothiya. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-destructive inline mx-1" />
            </motion.span>
            in India
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
