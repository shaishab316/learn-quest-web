import React from "react";
import { motion } from "framer-motion";
import { FloatingParticles } from "./FloatingParticles";
import {
  Rocket,
  Star,
  Trophy,
  Sparkles,
  Crown,
  Zap,
  BookOpen,
  Target,
  Shield,
  Gem,
  Flame,
} from "lucide-react";
interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}
// Animated 3D-style Castle built with CSS
function AnimatedCastle() {
  return (
    <motion.div
      className="relative"
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
      }}
    >
      {/* Castle Base */}
      <div className="relative">
        {/* Main Tower */}
        <div className="relative mx-auto w-32">
          {/* Tower Roof */}
          <div className="w-0 h-0 mx-auto border-l-40 border-r-40 border-b-50 border-l-transparent border-r-transparent border-b-kingdom-purple" />
          {/* Flag */}
          <motion.div
            className="absolute -top-2 left-1/2 -translate-x-1/2"
            animate={{
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="w-1 h-8 bg-white/80" />
            <div className="absolute top-0 left-1 w-6 h-4 bg-kingdom-yellow rounded-r-sm" />
          </motion.div>
          {/* Tower Body */}
          <div className="w-20 h-28 mx-auto bg-linear-to-b from-kingdom-purple to-purple-800 rounded-t-lg border-2 border-white/20">
            {/* Window */}
            <div className="w-8 h-10 mx-auto mt-4 bg-kingdom-blue/30 rounded-t-full border-2 border-white/30 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-kingdom-yellow/20"
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
          </div>
        </div>

        {/* Side Towers */}
        <div className="absolute -left-8 top-12">
          <div className="w-0 h-0 mx-auto border-l-24 border-r-24 border-b-30 border-l-transparent border-r-transparent border-b-kingdom-blue" />
          <div className="w-12 h-20 bg-linear-to-b from-kingdom-blue to-blue-700 rounded-t-md border-2 border-white/20">
            <div className="w-4 h-6 mx-auto mt-2 bg-kingdom-yellow/30 rounded-t-full border border-white/20" />
          </div>
        </div>

        <div className="absolute -right-8 top-12">
          <div className="w-0 h-0 mx-auto border-l-[24px] border-r-[24px] border-b-[30px] border-l-transparent border-r-transparent border-b-kingdom-pink" />
          <div className="w-12 h-20 bg-linear-to-b from-kingdom-pink to-pink-700 rounded-t-md border-2 border-white/20">
            <div className="w-4 h-6 mx-auto mt-2 bg-kingdom-yellow/30 rounded-t-full border border-white/20" />
          </div>
        </div>

        {/* Castle Base/Wall */}
        <div className="w-48 h-16 mx-auto bg-linear-to-b from-slate-600 to-slate-800 rounded-b-lg border-2 border-white/10 relative -mt-1">
          {/* Gate */}
          <div className="w-12 h-14 mx-auto bg-kingdom-dark rounded-t-full border-2 border-white/20 relative overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-kingdom-yellow/40 to-transparent"
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>
          {/* Battlements */}
          <div className="absolute -top-3 left-2 flex gap-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-slate-500 border border-white/10"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-40">
        <div className="w-full h-full bg-gradient-to-t from-kingdom-purple via-kingdom-blue to-kingdom-pink rounded-full" />
      </div>
    </motion.div>
  );
}
// Mini Quest Card Preview
function MiniQuestCard({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        delay,
        type: "spring",
        stiffness: 150,
      }}
      className="bg-kingdom-blue/20 backdrop-blur-md border border-kingdom-blue/40 rounded-2xl p-4 w-56 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-kingdom-blue rounded-xl flex items-center justify-center">
          <Zap size={20} className="text-kingdom-dark" />
        </div>
        <div>
          <p className="text-white font-bold text-sm">Fraction Quest</p>
          <p className="text-white/50 text-xs">Math Adventure</p>
        </div>
      </div>
      <div className="h-2 bg-kingdom-dark/40 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-kingdom-blue rounded-full"
          initial={{
            width: 0,
          }}
          animate={{
            width: "65%",
          }}
          transition={{
            delay: delay + 0.3,
            duration: 1,
          }}
        />
      </div>
      <div className="flex justify-between mt-2 text-xs">
        <span className="text-white/60">Progress</span>
        <span className="text-kingdom-blue font-bold">65%</span>
      </div>
    </motion.div>
  );
}
// Mini Achievement Badge
function MiniBadge({
  icon: Icon,
  color,
  label,
  delay,
}: {
  icon: React.ElementType;
  color: string;
  label: string;
  delay: number;
}) {
  const colors: Record<string, string> = {
    yellow: "from-kingdom-yellow to-yellow-600 text-kingdom-dark",
    purple: "from-kingdom-purple to-purple-700 text-white",
    blue: "from-kingdom-blue to-blue-600 text-kingdom-dark",
    pink: "from-kingdom-pink to-pink-700 text-white",
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay,
        type: "spring",
        stiffness: 200,
      }}
      className="flex flex-col items-center gap-2"
    >
      <motion.div
        className={`w-14 h-14 rounded-2xl bg-linear-to-br ${colors[color]} flex items-center justify-center shadow-lg border-2 border-white/30`}
        animate={{
          y: [-2, 2, -2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay,
        }}
      >
        <Icon size={24} strokeWidth={2.5} />
      </motion.div>
      <span className="text-white/70 text-xs font-bold">{label}</span>
    </motion.div>
  );
}
// Animated XP Orb
function XPOrb({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay,
        type: "spring",
      }}
      className="relative"
    >
      <motion.div
        animate={{
          y: [-5, 5, -5],
          rotate: [0, 360],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
          },
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="w-16 h-16 rounded-full bg-linear-to-br from-kingdom-yellow via-yellow-400 to-orange-500 flex items-center justify-center shadow-[0_0_30px_rgba(255,202,40,0.6)] border-2 border-white/40"
      >
        <span className="text-kingdom-dark font-black text-lg">XP</span>
      </motion.div>
      {/* Sparkle particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-kingdom-yellow rounded-full"
          style={{
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: [0, (i - 1) * 30],
            y: [0, -20 - i * 10],
            opacity: [1, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.div>
  );
}
// Leaderboard Preview
function MiniLeaderboard({ delay }: { delay: number }) {
  const leaders = [
    {
      name: "Alex",
      xp: 2450,
      color: "bg-kingdom-yellow",
    },
    {
      name: "Sarah",
      xp: 2300,
      color: "bg-gray-300",
    },
    {
      name: "Leo",
      xp: 1950,
      color: "bg-orange-400",
    },
  ];
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        delay,
        type: "spring",
        stiffness: 150,
      }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 w-48 shadow-xl"
    >
      <div className="flex items-center gap-2 mb-3">
        <Trophy size={16} className="text-kingdom-yellow" />
        <span className="text-white font-bold text-sm">Top Heroes</span>
      </div>
      <div className="space-y-2">
        {leaders.map((leader, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: delay + 0.1 * i,
            }}
            className="flex items-center gap-2"
          >
            <div
              className={`w-5 h-5 ${leader.color} rounded-full flex items-center justify-center text-[10px] font-black text-kingdom-dark`}
            >
              {i + 1}
            </div>
            <span className="text-white/80 text-xs font-medium flex-1">
              {leader.name}
            </span>
            <span className="text-kingdom-yellow text-xs font-bold">
              {leader.xp}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
// Main Showcase Component
function KingdomShowcase() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Central Castle */}
      <div className="relative z-10">
        <AnimatedCastle />
      </div>

      {/* Floating UI Elements */}
      <div className="absolute top-12 right-8">
        <MiniQuestCard delay={0.5} />
      </div>

      <div className="absolute bottom-24 left-8">
        <MiniLeaderboard delay={0.7} />
      </div>

      {/* Achievement Badges Row */}
      <div className="absolute top-16 left-12 flex gap-4">
        <MiniBadge icon={Crown} color="yellow" label="King" delay={0.8} />
        <MiniBadge icon={Shield} color="purple" label="Guardian" delay={0.9} />
      </div>

      {/* XP Orb */}
      <div className="absolute bottom-32 right-16">
        <XPOrb delay={1} />
      </div>

      {/* Floating Stars */}
      {[
        {
          top: "20%",
          left: "15%",
          size: 20,
          delay: 0,
        },
        {
          top: "60%",
          right: "10%",
          size: 16,
          delay: 0.5,
        },
        {
          top: "75%",
          left: "25%",
          size: 14,
          delay: 1,
        },
        {
          top: "30%",
          right: "25%",
          size: 18,
          delay: 1.5,
        },
      ].map((star, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: star.delay,
          }}
        >
          <Star
            size={star.size}
            className="text-kingdom-yellow"
            fill="#FFCA28"
          />
        </motion.div>
      ))}

      {/* Floating Gems */}
      <motion.div
        className="absolute top-1/3 left-1/4"
        animate={{
          y: [-8, 8, -8],
          rotate: [-10, 10, -10],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <Gem size={24} className="text-kingdom-blue" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4"
        animate={{
          y: [8, -8, 8],
          rotate: [10, -10, 10],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
      >
        <Flame size={28} className="text-kingdom-pink" />
      </motion.div>

      {/* Bottom Stats Bar */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="bg-kingdom-dark/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-kingdom-yellow rounded-full flex items-center justify-center">
              <Sparkles size={16} className="text-kingdom-dark" />
            </div>
            <div>
              <p className="text-white font-black text-lg leading-none">10K+</p>
              <p className="text-white/50 text-[10px] font-bold">Heroes</p>
            </div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-kingdom-purple rounded-full flex items-center justify-center">
              <BookOpen size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white font-black text-lg leading-none">500+</p>
              <p className="text-white/50 text-[10px] font-bold">Quests</p>
            </div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-kingdom-green rounded-full flex items-center justify-center">
              <Target size={16} className="text-kingdom-dark" />
            </div>
            <div>
              <p className="text-white font-black text-lg leading-none">98%</p>
              <p className="text-white/50 text-[10px] font-bold">Fun Rate</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-kingdom-dark text-white font-sans overflow-hidden relative">
      <FloatingParticles />

      {/* Desktop: 2-column grid | Mobile: Single column centered */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Form */}
        <div className="flex flex-col items-center justify-center p-6 lg:p-12">
          {/* Logo Area */}
          <motion.div
            initial={{
              y: -30,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="mb-8 flex flex-col items-center lg:items-start w-full max-w-md"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-kingdom-blue rounded-xl flex items-center justify-center transform -rotate-6 border-3 border-white shadow-[0_0_25px_rgba(0,212,255,0.6)]">
                <Rocket className="text-white w-6 h-6" strokeWidth={3} />
              </div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                Math<span className="text-kingdom-blue">Kingdom</span>
              </h1>
            </div>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{
              scale: 0.95,
              opacity: 0,
              y: 20,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              delay: 0.1,
            }}
            className="w-full max-w-md"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
              {/* Decorative background glow */}
              <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-kingdom-blue/10 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="text-center lg:text-left mb-8">
                  <h2 className="text-2xl font-black text-white mb-2">
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="text-white/60 font-medium">{subtitle}</p>
                  )}
                </div>

                {children}
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            className="mt-8 text-center lg:text-left w-full max-w-md"
          >
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
              Safe & Secure for Kids
            </p>
          </motion.div>
        </div>

        {/* Right Side - Visual Showcase (hidden on mobile) */}
        <div className="hidden lg:flex relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-linear-to-br from-kingdom-purple/20 via-kingdom-blue/10 to-kingdom-pink/20" />

          {/* Animated Background Shapes */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 right-20 w-64 h-64 bg-kingdom-blue/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute bottom-20 left-20 w-80 h-80 bg-kingdom-purple/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.2, 0.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-kingdom-yellow/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
              }}
            />
          </div>

          {/* Kingdom Showcase */}
          <KingdomShowcase />
        </div>
      </div>
    </div>
  );
}
