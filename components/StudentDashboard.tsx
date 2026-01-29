import React, { Children } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  BookOpen,
  Star,
  Zap,
  Map,
  Settings,
  Bell,
  BoxIcon,
  Flame,
  Gift,
  Trophy,
  Calendar,
  Gamepad2,
} from "lucide-react";
import { FloatingParticles } from "./FloatingParticles";
import { XPCounter } from "./XPCounter";
import { LevelBadge } from "./LevelBadge";
import { PotionProgressBar } from "./PotionProgressBar";
import { AvatarFrame } from "./AvatarFrame";
import { QuestCard } from "./QuestCard";
import { CartoonButton } from "./CartoonButton";
export function StudentDashboard() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-kingdom-dark text-white selection:bg-kingdom-purple selection:text-white font-sans">
      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Top Navigation Bar */}
        <header className="flex justify-between items-center mb-8 bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-lg">
          <motion.div
            initial={{
              x: -20,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            className="flex items-center gap-3"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-kingdom-blue to-blue-600 rounded-2xl flex items-center justify-center transform -rotate-6 border-2 border-white shadow-[0_0_15px_rgba(0,212,255,0.5)] group cursor-pointer hover:rotate-0 transition-transform">
              <img src="/logo.png" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight leading-none">
                Learn Quest
              </h1>
              <p className="text-xs font-bold text-white/50 tracking-wider uppercase">
                Student Portal
              </p>
            </div>
          </motion.div>

          {/* Streak Counter */}
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            className="hidden md:flex items-center gap-2 bg-kingdom-dark/50 px-4 py-2 rounded-full border border-orange-500/30 shadow-[0_0_15px_rgba(255,100,0,0.2)]"
          >
            <div className="relative">
              <Flame
                className="text-orange-500 fill-orange-500 animate-pulse"
                size={24}
              />

              <div className="absolute inset-0 bg-orange-500 blur-md opacity-50 animate-pulse" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black text-orange-400">7 Days</span>
              <span className="text-[10px] font-bold text-white/60 uppercase">
                Streak on fire!
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{
              x: 20,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            className="flex items-center gap-3"
          >
            <button className="w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-colors relative flex items-center justify-center group">
              <Bell
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />

              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-kingdom-pink rounded-full border-2 border-kingdom-dark animate-bounce" />
            </button>
            <button className="w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center group">
              <Settings
                size={20}
                className="group-hover:rotate-90 transition-transform duration-500"
              />
            </button>
          </motion.div>
        </header>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left Sidebar / Profile Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 xl:col-span-3 space-y-6"
          >
            {/* Profile Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 text-center relative overflow-hidden shadow-2xl group">
              <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-kingdom-blue/20 to-transparent opacity-50" />

              {/* Animated background circles */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-kingdom-purple/20 rounded-full blur-xl animate-pulse-slow" />
              <div
                className="absolute bottom-10 left-10 w-16 h-16 bg-kingdom-yellow/10 rounded-full blur-xl animate-pulse-slow"
                style={{
                  animationDelay: "1s",
                }}
              />

              <div className="relative z-10 flex flex-col items-center gap-6">
                <AvatarFrame
                  imageUrl="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  name="Alex Explorer"
                />

                <div className="mt-2 transform hover:scale-105 transition-transform duration-300">
                  <LevelBadge level={12} />
                </div>

                <div className="w-full bg-black/20 rounded-2xl p-4 border border-white/5">
                  <XPCounter xp={2450} />
                  <p className="text-xs font-bold text-white/50 mt-2 uppercase tracking-widest">
                    550 XP to Level 13
                  </p>
                </div>

                <div className="w-full">
                  <PotionProgressBar
                    current={7}
                    max={10}
                    label="Daily Energy"
                  />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <CartoonButton
                variant="accent"
                icon={BoxIcon}
                className="text-sm py-4"
              >
                Bag
              </CartoonButton>
              <CartoonButton
                variant="secondary"
                icon={Map}
                className="text-sm py-4"
              >
                Map
              </CartoonButton>
            </div>

            {/* Daily Bonus Teaser */}
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="bg-gradient-to-br from-kingdom-pink/20 to-purple-500/20 border border-kingdom-pink/30 rounded-3xl p-4 flex items-center gap-4 cursor-pointer relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-kingdom-pink rounded-xl flex items-center justify-center text-white shadow-lg transform -rotate-6">
                <Gift size={24} className="animate-bounce" />
              </div>
              <div>
                <h4 className="font-black text-white">Daily Bonus</h4>
                <p className="text-xs text-white/70">Spin the wheel!</p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-kingdom-pink/30 rounded-full blur-xl" />
            </motion.div>
          </motion.div>

          {/* Main Quest Area */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            {/* Welcome Banner */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-kingdom-purple via-indigo-600 to-blue-600 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl border-2 border-white/10"
            >
              <div className="relative z-10 max-w-xl">
                <div className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white mb-4 border border-white/20">
                  ✨ Daily Challenge Active
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight drop-shadow-lg">
                  Ready for adventure,
                  <br />
                  Alex?
                </h2>
                <p className="text-white/90 text-lg mb-8 font-medium max-w-md leading-relaxed">
                  The{" "}
                  <span className="text-kingdom-yellow font-bold">
                    Dragon of Algebra
                  </span>{" "}
                  awaits! Complete 3 quests to unlock the Treasure Chest.
                </p>
                <div className="flex gap-4">
                  <CartoonButton variant="primary" icon={Rocket}>
                    Start Adventure
                  </CartoonButton>
                  <CartoonButton variant="secondary" icon={Gamepad2}>
                    Play Mini-Game
                  </CartoonButton>
                </div>
              </div>

              {/* Mascot & Decorations */}
              <div className="absolute right-4 bottom-0 md:right-10 md:bottom-0 transform translate-y-10 md:translate-y-4 hover:-translate-y-2 transition-transform duration-500">
                {/* Simple CSS Mascot Placeholder - In real app would be an image */}
                <div className="relative w-48 h-48">
                  <div
                    className="absolute bottom-0 w-full h-full bg-contain bg-no-repeat bg-center drop-shadow-2xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn-icons-png.flaticon.com/512/4515/4515646.png")',
                    }}
                  ></div>
                  {/* Floating speech bubble */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 1,
                    }}
                    className="absolute -top-4 -left-10 bg-white text-kingdom-dark px-4 py-2 rounded-xl rounded-br-none font-bold text-sm shadow-lg transform -rotate-6"
                  >
                    Let's go! 🚀
                  </motion.div>
                </div>
              </div>

              <div className="absolute top-10 right-1/3 w-32 h-32 bg-kingdom-blue rounded-full blur-[80px] opacity-60" />
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-kingdom-pink rounded-full blur-[60px] opacity-50" />

              {/* Floating shapes */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute top-10 right-10 opacity-30"
              >
                <Star size={40} fill="white" />
              </motion.div>
            </motion.div>

            {/* Quests Grid */}
            <div>
              <div className="flex justify-between items-end mb-6 px-2">
                <div>
                  <h3 className="text-2xl font-black flex items-center gap-2 text-white">
                    <BookOpen className="text-kingdom-blue" strokeWidth={3} />
                    Active Quests
                  </h3>
                  <p className="text-white/50 text-sm font-medium ml-9">
                    Your journey continues...
                  </p>
                </div>
                <button className="text-kingdom-blue font-bold hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full text-sm hover:bg-white/10">
                  View All Quests →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <QuestCard
                  title="Fraction Forest"
                  description="Master the art of dividing pizzas among hungry goblins."
                  reward="150 XP"
                  progress={2}
                  total={5}
                  icon={Zap}
                  color="blue"
                  mascot="🍕"
                />

                <QuestCard
                  title="Geometry Castle"
                  description="Find all the hidden triangles in the royal palace."
                  reward="200 XP"
                  progress={4}
                  total={4}
                  icon={Star}
                  color="purple"
                  isCompleted
                  mascot="🏰"
                />

                <QuestCard
                  title="Potion Brewing"
                  description="Mix the right amount of ingredients using ratios."
                  reward="300 XP"
                  progress={1}
                  total={3}
                  icon={BoxIcon}
                  color="pink"
                  mascot="🧪"
                />

                <QuestCard
                  title="Dragon's Hoard"
                  description="Count the gold coins using multiplication spells."
                  reward="500 XP"
                  progress={0}
                  total={10}
                  icon={Trophy}
                  color="yellow"
                  mascot="🐉"
                />
              </div>
            </div>

            {/* Recent Achievements */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-8 relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-black flex items-center gap-2">
                  <Trophy className="text-kingdom-yellow" strokeWidth={3} />
                  Trophy Cabinet
                </h3>
                <span className="text-xs font-bold text-white/40 bg-white/5 px-3 py-1 rounded-full">
                  12/50 Collected
                </span>
              </div>

              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                    }}
                    className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-pointer"
                  >
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all shadow-lg relative overflow-hidden
                      ${i < 4 ? "bg-gradient-to-br from-white/10 to-white/5 border-kingdom-yellow/50 group-hover:border-kingdom-yellow" : "bg-black/20 border-white/5 grayscale opacity-50"}
                    `}
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Star
                        size={32}
                        className={
                          i < 4
                            ? "text-kingdom-yellow drop-shadow-md"
                            : "text-white/20"
                        }
                        fill={i < 4 ? "#FFCA28" : "none"}
                        strokeWidth={2.5}
                      />

                      {i < 4 && (
                        <div className="absolute inset-0 bg-kingdom-yellow/10 blur-xl group-hover:bg-kingdom-yellow/20 transition-colors" />
                      )}
                    </div>
                    <span className="text-xs font-bold text-white/60 group-hover:text-white transition-colors">
                      Badge {i}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
