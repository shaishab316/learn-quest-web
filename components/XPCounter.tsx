"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
interface XPCounterProps {
  xp: number;
}
export function XPCounter({ xp }: XPCounterProps) {
  const [isWobbling, setIsWobbling] = useState(false);
  // Spring animation for the number
  const springValue = useSpring(0, {
    stiffness: 40,
    damping: 10,
  });
  const displayValue = useTransform(springValue, (current) =>
    Math.round(current).toLocaleString(),
  );
  useEffect(() => {
    springValue.set(xp);
    // Trigger wobble on update
    setIsWobbling(true);
    const timer = setTimeout(() => setIsWobbling(false), 1000);
    return () => clearTimeout(timer);
  }, [xp, springValue]);
  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      <motion.div
        animate={
          isWobbling
            ? {
                rotate: [0, -5, 5, -3, 3, 0],
                scale: [1, 1.1, 1],
              }
            : {}
        }
        transition={{
          duration: 0.5,
        }}
        className="relative z-10"
      >
        <div className="flex items-baseline gap-2">
          <motion.span
            className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-kingdom-blue to-blue-600 drop-shadow-[0_4px_0_rgba(0,0,0,0.2)]"
            style={{
              WebkitTextStroke: "3px #005f80",
              filter: "drop-shadow(0 4px 0 #005f80)",
            }}
          >
            <motion.span>{displayValue}</motion.span>
          </motion.span>
          <span className="text-3xl font-black text-kingdom-yellow drop-shadow-[0_2px_0_#b38600] rotate-6 inline-block">
            XP
          </span>
        </div>
      </motion.div>

      {/* Decorative background glow */}
      <motion.div
        className="absolute inset-0 bg-kingdom-blue/20 rounded-full blur-2xl"
        animate={{
          scale: [0.9, 1.2, 0.9],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* Floating sparkles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {i % 2 === 0 ? (
            <Sparkles
              size={24}
              className="text-kingdom-yellow"
              fill="#FFCA28"
            />
          ) : (
            <Star size={16} className="text-kingdom-purple" fill="#BB86FC" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
