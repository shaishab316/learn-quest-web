import { motion } from "framer-motion";
import { Crown } from "lucide-react";

interface LevelBadgeProps {
  level: number;
}

export function LevelBadge({ level }: LevelBadgeProps) {
  return (
    <motion.div
      className="relative w-28 h-28 flex items-center justify-center cursor-pointer group"
      whileHover={{
        scale: 1.15,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
      }}
    >
      {/* Rotation animation on hover - separate from scale */}
      <motion.div
        className="absolute inset-0"
        whileHover={{
          rotate: [0, -5, 5, -5, 5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        {/* Sparkle Burst on Hover */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          whileHover={{
            opacity: 1,
            scale: 1.5,
          }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-kingdom-yellow rounded-full"
              animate={{
                x: Math.cos(i * 45 * (Math.PI / 180)) * 60,
                y: Math.sin(i * 45 * (Math.PI / 180)) * 60,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>

        {/* Bubbly Shield Shape Background */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full drop-shadow-xl z-10"
        >
          {/* Soft rounded shield */}
          <path
            d="M50 95 C20 85 5 65 5 35 C5 15 25 5 50 5 C75 5 95 15 95 35 C95 65 80 85 50 95 Z"
            fill="url(#gradient-badge)"
            stroke="#FFFFFF"
            strokeWidth="4"
            className="filter drop-shadow-lg"
          />

          {/* Shine highlight */}
          <path
            d="M20 35 C20 20 35 15 50 15 C40 15 30 20 30 35 C30 55 40 70 50 80 C30 70 20 55 20 35 Z"
            fill="white"
            fillOpacity="0.2"
          />

          <defs>
            <linearGradient
              id="gradient-badge"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#BB86FC" />
              <stop offset="50%" stopColor="#9F5AFD" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center -mt-2">
          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Crown
              size={28}
              className="text-kingdom-yellow mb-1 drop-shadow-md"
              fill="#FFCA28"
              strokeWidth={2.5}
            />
          </motion.div>
          <span className="text-[10px] font-black text-white/90 uppercase tracking-widest bg-black/20 px-2 rounded-full mb-0.5">
            Level
          </span>
          <span
            className="text-4xl font-black text-white drop-shadow-lg leading-none"
            style={{
              textShadow: "0 2px 0 rgba(0,0,0,0.3)",
            }}
          >
            {level}
          </span>
        </div>

        {/* Jewels on the badge */}
        <div className="absolute top-[25%] left-[15%] w-2 h-2 bg-kingdom-blue rounded-full border border-white/50 z-20" />
        <div className="absolute top-[25%] right-[15%] w-2 h-2 bg-kingdom-blue rounded-full border border-white/50 z-20" />
        <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-kingdom-pink rounded-full border border-white/50 z-20" />
      </motion.div>
    </motion.div>
  );
}
