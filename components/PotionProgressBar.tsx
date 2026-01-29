import React from "react";
import { motion } from "framer-motion";

interface PotionProgressBarProps {
  current: number;
  max: number;
  label?: string;
}

export function PotionProgressBar({
  current,
  max,
  label,
}: PotionProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (current / max) * 100));

  return (
    <div className="w-full max-w-md mx-auto">
      {label && (
        <div className="flex justify-between items-center mb-2 px-2">
          <span className="text-white font-bold text-sm tracking-wide">
            {label}
          </span>
          <span className="text-cyan-400 font-bold text-sm">
            {current}/{max}
          </span>
        </div>
      )}

      {/* Potion Bottle Container */}
      <div className="relative h-12 bg-slate-900/60 rounded-full border-4 border-white/20 overflow-hidden backdrop-blur-sm shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
        {/* Liquid Container */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          initial={{ height: "0%" }}
          animate={{ height: `${percentage}%` }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
        >
          {/* Base Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-blue-500 to-cyan-400" />

          {/* Primary Wave */}
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
              className="absolute top-0 left-0 w-[200%] h-8"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(103, 232, 249, 0.8) 0%, rgba(59, 130, 246, 0.6) 50%, transparent 70%)",
                filter: "blur(1px)",
              }}
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 1200 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50 L1200,100 L0,100 Z"
                  fill="rgba(103, 232, 249, 0.4)"
                />
              </svg>
            </motion.div>
          </div>

          {/* Secondary Wave (offset) */}
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
              className="absolute top-0 left-0 w-[200%] h-8"
              style={{
                filter: "blur(2px)",
              }}
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "linear",
              }}
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 1200 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,60 Q200,30 400,60 T800,60 T1200,60 L1200,100 L0,100 Z"
                  fill="rgba(59, 130, 246, 0.3)"
                />
              </svg>
            </motion.div>
          </div>

          {/* Bubbles */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/30"
                style={{
                  width: `${4 + (i % 3) * 2}px`,
                  height: `${4 + (i % 3) * 2}px`,
                  left: `${10 + i * 12}%`,
                  bottom: "0%",
                }}
                animate={{
                  y: [0, -60, -80],
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 1, 0.8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5 + i * 0.3,
                  delay: i * 0.3,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{
              width: "30%",
            }}
            animate={{
              x: ["-30%", "130%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          />

          {/* Inner Glow */}
          <div className="absolute inset-0 bg-cyan-400/20 blur-xl" />
        </motion.div>

        {/* Glass Shine Effects */}
        <div className="absolute top-2 left-3 right-1/3 h-4 bg-gradient-to-r from-white/30 via-white/10 to-transparent rounded-full blur-sm pointer-events-none" />
        <div className="absolute bottom-2 right-3 w-3 h-3 bg-white/20 rounded-full blur-[2px] pointer-events-none" />

        {/* Top Highlight */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
