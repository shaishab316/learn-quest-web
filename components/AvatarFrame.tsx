import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Heart, Zap, Sparkles } from 'lucide-react';
interface AvatarFrameProps {
  imageUrl: string;
  name: string;
}
export function AvatarFrame({ imageUrl, name }: AvatarFrameProps) {
  return (
    <div className="relative inline-block group cursor-pointer">
      {/* Decorative Rotating Frame Background */}
      <motion.div
        className="absolute -inset-4 rounded-full opacity-70"
        style={{
          background:
          'conic-gradient(from 0deg, #FFCA28, #FF6B6B, #BB86FC, #00D4FF, #FFCA28)'
        }}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }} />


      {/* Pulse Effect */}
      <motion.div
        className="absolute -inset-4 bg-white/20 rounded-full z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }} />


      {/* Static Frame Border */}
      <div className="absolute -inset-1.5 bg-white rounded-full z-10 border-4 border-kingdom-dark" />

      {/* Avatar Image */}
      <div className="relative z-20 w-28 h-28 rounded-full overflow-hidden border-4 border-white bg-kingdom-dark shadow-inner">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />

        {/* Glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-kingdom-purple/20 to-transparent pointer-events-none" />
      </div>

      {/* Stickers/Badges - More playful arrangement */}
      <motion.div
        className="absolute -top-3 -right-3 z-30 bg-kingdom-yellow text-kingdom-dark p-2 rounded-full border-2 border-white shadow-lg transform rotate-12"
        whileHover={{
          scale: 1.2,
          rotate: 25
        }}>

        <Star size={18} fill="#0F0F1A" strokeWidth={2.5} />
      </motion.div>

      <motion.div
        className="absolute bottom-1 -left-3 z-30 bg-kingdom-purple text-white p-2 rounded-full border-2 border-white shadow-lg transform -rotate-12"
        whileHover={{
          scale: 1.2,
          rotate: -25
        }}>

        <Trophy size={18} fill="white" strokeWidth={2.5} />
      </motion.div>

      <motion.div
        className="absolute top-0 -left-2 z-30 bg-kingdom-pink text-white p-1.5 rounded-full border-2 border-white shadow-lg transform -rotate-6"
        whileHover={{
          scale: 1.2,
          rotate: -15
        }}>

        <Heart size={14} fill="white" strokeWidth={2.5} />
      </motion.div>

      {/* Name Tag */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-30">
        <motion.div
          className="bg-white text-kingdom-dark border-2 border-kingdom-dark px-4 py-1.5 rounded-full text-sm font-black shadow-[0_4px_0_rgba(0,0,0,0.2)] flex items-center gap-1"
          whileHover={{
            y: -2
          }}>

          {name}
          <Sparkles size={12} className="text-kingdom-yellow" fill="#FFCA28" />
        </motion.div>
      </div>
    </div>);

}