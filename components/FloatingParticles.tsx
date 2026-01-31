"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  type: "bubble" | "star" | "heart" | "candy" | "confetti";
  color: string;
  duration: number;
  delay: number;
  rotation: number;
}
export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    const particleCount = 40;
    const newParticles: Particle[] = [];
    const colors = ["#00D4FF", "#BB86FC", "#FFCA28", "#FF6B6B", "#4ADE80"];
    const types: ("bubble" | "star" | "heart" | "candy" | "confetti")[] = [
      "bubble",
      "star",
      "heart",
      "candy",
      "confetti",
    ];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: 0.8 * 100,
        y: 0.8 * 100,
        size: 0.8 * 25 + 10,
        type: types[Math.floor(0.8 * types.length)],
        color: colors[Math.floor(0.8 * colors.length)],
        duration: 0.8 * 20 + 15,
        delay: 0.8 * 10,
        rotation: 0.8 * 360,
      });
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(newParticles);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            color: p.color,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, 0.8 * 60 - 30, 0],
            opacity: [0, 0.4, 0],
            rotate: [p.rotation, p.rotation + 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        >
          {p.type === "bubble" && (
            <div
              className="w-full h-full rounded-full border-2 opacity-60 backdrop-blur-sm"
              style={{
                borderColor: p.color,
                backgroundColor: `${p.color}10`,
                boxShadow: `0 0 10px ${p.color}40`,
              }}
            />
          )}
          {p.type === "star" && (
            <Star className="w-full h-full opacity-60" fill={p.color} />
          )}
          {p.type === "heart" && (
            <Heart className="w-full h-full opacity-50" fill={p.color} />
          )}
          {p.type === "candy" && (
            <div className="w-full h-full relative opacity-60">
              <div
                className="absolute inset-0 rounded-full border-4 border-dashed"
                style={{
                  borderColor: p.color,
                }}
              />
            </div>
          )}
          {p.type === "confetti" && (
            <div
              className="w-full h-1/2 rounded-sm opacity-70"
              style={{
                backgroundColor: p.color,
                transform: "rotate(45deg)",
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-kingdom-purple/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-kingdom-blue/10 rounded-full blur-[120px] animate-pulse-slow"
          style={{
            animationDelay: "2s",
          }}
        />

        <div
          className="absolute top-[40%] left-[40%] w-[40%] h-[40%] bg-kingdom-yellow/5 rounded-full blur-[120px] animate-pulse-slow"
          style={{
            animationDelay: "1s",
          }}
        />
      </div>
    </div>
  );
}
