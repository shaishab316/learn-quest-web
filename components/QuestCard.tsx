import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, BoxIcon, Play, Gift } from 'lucide-react';
interface QuestCardProps {
  title: string;
  description: string;
  reward: string;
  progress: number;
  total: number;
  icon: BoxIcon;
  color: 'blue' | 'purple' | 'yellow' | 'pink';
  isCompleted?: boolean;
  mascot?: string; // Emoji mascot
}
export function QuestCard({
  title,
  description,
  reward,
  progress,
  total,
  icon: Icon,
  color,
  isCompleted = false,
  mascot = '🎯'
}: QuestCardProps) {
  const colorMap = {
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-400',
      text: 'text-blue-300',
      accent: 'bg-blue-500',
      shadow: 'shadow-blue-500/20',
      gradient: 'from-blue-400 to-cyan-300'
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-400',
      text: 'text-purple-300',
      accent: 'bg-purple-500',
      shadow: 'shadow-purple-500/20',
      gradient: 'from-purple-400 to-fuchsia-300'
    },
    yellow: {
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-400',
      text: 'text-yellow-300',
      accent: 'bg-yellow-500',
      shadow: 'shadow-yellow-500/20',
      gradient: 'from-yellow-400 to-orange-300'
    },
    pink: {
      bg: 'bg-pink-500/10',
      border: 'border-pink-400',
      text: 'text-pink-300',
      accent: 'bg-pink-500',
      shadow: 'shadow-pink-500/20',
      gradient: 'from-pink-400 to-rose-300'
    }
  };
  const styles = colorMap[color];
  const percent = progress / total * 100;
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -8,
        rotate: [-1, 1, 0]
      }}
      className={`
        relative overflow-hidden
        ${styles.bg} border-[3px] ${styles.border}
        rounded-[2rem] p-6
        shadow-xl ${styles.shadow}
        flex flex-col gap-4
        backdrop-blur-md
        group
      `}>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
            'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />

      </div>

      {/* Header */}
      <div className="flex justify-between items-start relative z-10">
        <div className="relative">
          <div
            className={`w-14 h-14 rounded-2xl ${styles.accent} flex items-center justify-center text-white shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}>

            <Icon size={28} strokeWidth={2.5} />
          </div>
          {/* Mascot Emoji */}
          <div
            className="absolute -bottom-2 -right-2 text-2xl filter drop-shadow-md animate-bounce"
            style={{
              animationDuration: '3s'
            }}>

            {mascot}
          </div>
        </div>

        <div className="bg-kingdom-dark/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-black text-white flex items-center gap-1.5 border border-white/10 shadow-lg">
          <span className="text-kingdom-yellow text-lg">★</span> {reward}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
          {title}
        </h3>
        <p className="text-white/70 text-sm font-medium leading-relaxed">
          {description}
        </p>
      </div>

      {/* Progress */}
      <div className="mt-auto relative z-10 bg-black/20 p-3 rounded-xl border border-white/5">
        <div className="flex justify-between text-xs font-bold text-white/90 mb-2">
          <span className="uppercase tracking-wider opacity-70">Progress</span>
          <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">
            {progress}/{total}
          </span>
        </div>

        {/* Candy Bar Progress */}
        <div className="h-4 bg-black/40 rounded-full overflow-hidden border border-white/10 relative">
          <motion.div
            className={`h-full bg-gradient-to-r ${styles.gradient}`}
            initial={{
              width: 0
            }}
            animate={{
              width: `${percent}%`
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: 'spring'
            }}>

            {/* Striped candy pattern */}
            <div
              className="absolute inset-0 w-full h-full opacity-30"
              style={{
                backgroundImage:
                'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
                backgroundSize: '1rem 1rem'
              }} />

            {/* Shine */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/30" />
          </motion.div>
        </div>
      </div>

      {/* Status Icon or Action Button */}
      {isCompleted ?
      <div className="absolute top-4 right-4">
          <motion.div
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          className="bg-kingdom-green text-kingdom-dark p-2 rounded-full shadow-lg border-2 border-white">

            <CheckCircle2 size={24} strokeWidth={3} />
          </motion.div>
        </div> :

      <motion.button
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.9
        }}
        className={`absolute bottom-6 right-6 w-10 h-10 rounded-full ${styles.bg} ${styles.text} flex items-center justify-center border-2 ${styles.border} opacity-0 group-hover:opacity-100 transition-opacity`}>

          <Play size={20} fill="currentColor" />
        </motion.button>
      }

      {/* Confetti for completed */}
      {isCompleted &&
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) =>
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animation: `pulse 1s infinite ${Math.random()}s`
          }} />

        )}
        </div>
      }
    </motion.div>);

}