"use client"
import { 
  Code,
  ExternalLink,
  Github,
  Heart,
  Linkedin,
  Mail,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Pietrobutton() {
  const socialLinks = [
    { 
      name: 'Portfolio', 
      icon: ExternalLink, 
      href: 'https://pietrocode.com',
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/Pietro923',
      color: 'from-gray-600 to-gray-800'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/pietrobonacossa',
      color: 'from-blue-600 to-blue-800'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      href: 'mailto:jpbonacossa@gmail.com',
      color: 'from-red-600 to-red-800'
    },
  ];

  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
          aria-label="Información del desarrollador"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Code className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors" />
          </motion.div>
          <span className="text-sm font-medium">Desarrollado por Pietro</span>
        </motion.button>
      </PopoverTrigger>

      <PopoverContent 
        className="w-80 p-0 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden" 
        side="top" 
        sideOffset={12}
        align="center"
      >
        {/* Header con gradiente animado */}
        <motion.div 
          className="relative p-6 bg-gradient-to-r from-red-600 via-red-700 to-red-800 overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Efecto de brillo animado */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-xl text-white">Pietro Bonacossa</h3>
                <p className="text-red-100 text-sm mt-1 flex items-center gap-1">
                  <Code className="w-3 h-3" />
                  Full Stack Developer
                </p>
              </div>
              <motion.span 
                className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/30"
                whileHover={{ scale: 1.05 }}
              >
                Disponible
              </motion.span>
            </div>
          </div>
        </motion.div>
        
        {/* Descripción */}
        <motion.div 
          className="p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Especialista en desarrollo de aplicaciones web modernas. 
            Transformo ideas en experiencias digitales excepcionales.
          </p>
          
          {/* Skills tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md border border-gray-600/50"
              >
                {skill}
              </motion.span>
            ))}
          </div>
          
          {/* Social Links Grid */}
          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-2 p-3 bg-gray-700/30 hover:bg-gray-700/60 rounded-xl transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50 overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Efecto de gradiente en hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <Icon className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors relative z-10" />
                  <span className="text-sm font-medium relative z-10">{link.name}</span>
                  
                  {/* Flecha que aparece en hover */}
                  <motion.div
                    className="absolute right-2 opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="w-3 h-3 text-gray-400" />
                  </motion.div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
        
        {/* Footer */}
        <motion.div 
          className="px-4 py-3 bg-gradient-to-r from-gray-900 to-black border-t border-gray-700/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <span>Desarrollado con</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            </motion.div>
            <span>usando</span>
            <span className="font-semibold text-white">Next.js</span>
            <span className="text-gray-500">&</span>
            <span className="font-semibold text-white">TypeScript</span>
          </div>
        </motion.div>
      </PopoverContent>
    </Popover>
  );
}