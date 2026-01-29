import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
interface PotionProgressBarProps {
  current: number;
  max: number;
  label?: string;
}
export function PotionProgressBar({
  current,
  max,
  label
}: PotionProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, current / max * 100));
  return (
    <div className="w-full max-w-md mx-auto group">
      {label &&
      <div className="flex justify-between items-center mb-2 px-2">
          <span className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
            <Sparkles size={14} className="text-kingdom-blue" />
            {label}
          </span>
          <span className="text-kingdom-blue font-black text-sm bg-white/10 px-2 py-0.5 rounded-lg">
            {current}/{max}
          </span>
        </div>
      }

      {/* Potion Bottle Container */}
      <div className="relative h-14 bg-kingdom-dark/60 rounded-full border-[3px] border-white/20 overflow-hidden backdrop-blur-md shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
        {/* Liquid */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 via-kingdom-blue to-cyan-300"
          initial={{
            width: '0%'
          }}
          animate={{
            width: `${percentage}%`
          }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 15
          }}>

          {/* Wave effect on top of liquid */}
          <div className="absolute top-0 right-0 w-4 h-full bg-white/30 skew-x-12 blur-sm" />

          {/* Bubbles inside liquid */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) =>
            <div
              key={i}
              className="absolute bg-white/40 rounded-full"
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                left: `${Math.random() * 100}%`,
                bottom: '-10px',
                animation: `bubble-rise ${1 + Math.random() * 2}s infinite ${Math.random() * 2}s linear`
              }} />

            )}
          </div>

          {/* Glow */}
          <div className="absolute inset-0 bg-kingdom-blue/20 blur-sm" />
        </motion.div>

        {/* Glass Reflection/Shine */}
        <div className="absolute top-1 left-2 right-2 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-full pointer-events-none" />

        {/* Measurement marks */}
        <div className="absolute inset-0 flex justify-evenly items-end pb-1 pointer-events-none opacity-30">
          <div className="w-0.5 h-2 bg-white" />
          <div className="w-0.5 h-3 bg-white" />
          <div className="w-0.5 h-2 bg-white" />
          <div className="w-0.5 h-3 bg-white" />
          <div className="w-0.5 h-2 bg-white" />
        </div>
      </div>

      {/* Floating magic particles above */}
      <div className="relative h-4 w-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-[50%] bottom-0"
          animate={{
            y: [-5, -15],
            opacity: [1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}>

          <Sparkles size={12} className="text-kingdom-blue" />
        </motion.div>
      </div>
    </div>);

}