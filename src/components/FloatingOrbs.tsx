'use client'

import { motion } from 'framer-motion'

export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Violet orb - top right */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-accent-violet/20 blur-[120px] top-[-200px] right-[-200px]"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan orb - bottom left */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-accent-cyan/15 blur-[100px] bottom-[-150px] left-[-150px]"
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small violet orb */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-accent-violet/10 blur-[80px] top-[40%] left-[10%]"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small cyan orb */}
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full bg-accent-cyan/10 blur-[70px] top-[30%] right-[15%]"
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Neural network lines SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="neural" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="#8b5cf6" />
            <circle cx="50" cy="10" r="2" fill="#06b6d4" />
            <circle cx="90" cy="10" r="2" fill="#8b5cf6" />
            <circle cx="30" cy="50" r="2" fill="#06b6d4" />
            <circle cx="70" cy="50" r="2" fill="#8b5cf6" />
            <circle cx="10" cy="90" r="2" fill="#06b6d4" />
            <circle cx="50" cy="90" r="2" fill="#8b5cf6" />
            <circle cx="90" cy="90" r="2" fill="#06b6d4" />
            <line x1="10" y1="10" x2="50" y2="10" stroke="#8b5cf6" strokeWidth="0.5" />
            <line x1="50" y1="10" x2="90" y2="10" stroke="#06b6d4" strokeWidth="0.5" />
            <line x1="10" y1="10" x2="30" y2="50" stroke="#8b5cf6" strokeWidth="0.5" />
            <line x1="90" y1="10" x2="70" y2="50" stroke="#06b6d4" strokeWidth="0.5" />
            <line x1="30" y1="50" x2="70" y2="50" stroke="#8b5cf6" strokeWidth="0.5" />
            <line x1="30" y1="50" x2="10" y2="90" stroke="#06b6d4" strokeWidth="0.5" />
            <line x1="70" y1="50" x2="50" y2="90" stroke="#8b5cf6" strokeWidth="0.5" />
            <line x1="50" y1="90" x2="90" y2="90" stroke="#06b6d4" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural)" />
      </svg>
    </div>
  )
}
