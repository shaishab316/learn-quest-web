import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  ClipboardCheck,
  Plus,
  Trophy,
  Settings,
  Search,
  GraduationCap,
} from "lucide-react";
import { FloatingParticles } from "./FloatingParticles";
import { SubmissionCard } from "./SubmissionCard";
import { CreateQuestModal } from "./CreateQuestModal";
import { AvatarFrame } from "./AvatarFrame";
import { StatCard } from "./StatCard";

export function TeacherDashboard() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
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
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-kingdom-dark text-white selection:bg-kingdom-purple selection:text-white">
      <FloatingParticles />
      <CreateQuestModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 md:py-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-kingdom-purple rounded-xl flex items-center justify-center transform rotate-3 border-2 border-white shadow-[0_0_15px_rgba(187,134,252,0.5)]">
              <GraduationCap className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight leading-none">
                Teacher<span className="text-kingdom-purple">Panel</span>
              </h1>
              <p className="text-white/50 text-sm font-bold">
                Class 5-A • Math & Science
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              x: 50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            className="flex items-center gap-4"
          >
            <div className="hidden md:flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 mr-4">
              <Search size={18} className="text-white/40" />
              <input
                type="text"
                placeholder="Search students..."
                className="bg-transparent border-none focus:outline-none text-sm text-white placeholder:text-white/30 w-40"
              />
            </div>
            <AvatarFrame
              imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              name="Ms. Johnson"
            />
          </motion.div>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              label="Total Students"
              value="28"
              icon={Users}
              color="blue"
              trend="+2 this week"
            />
            <StatCard
              label="Pending Reviews"
              value="12"
              icon={ClipboardCheck}
              color="yellow"
            />
            <StatCard
              label="Active Quests"
              value="5"
              icon={Trophy}
              color="purple"
            />
            <StatCard
              label="XP Awarded"
              value="12.5k"
              icon={Trophy}
              color="green"
              trend="+15% vs last week"
            />
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Reviews & Actions */}
            <div className="lg:col-span-8 space-y-8">
              {/* Pending Reviews Section */}
              <motion.div variants={itemVariants}>
                <div className="flex justify-between items-end mb-6">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <ClipboardCheck className="text-kingdom-yellow" />
                    Pending Reviews
                    <span className="bg-kingdom-yellow text-kingdom-dark text-xs px-2 py-1 rounded-full font-black">
                      12
                    </span>
                  </h3>
                  <button className="text-kingdom-blue font-bold hover:text-white transition-colors text-sm">
                    View All
                  </button>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                  <SubmissionCard
                    studentName="Leo Lionheart"
                    studentLevel={8}
                    questTitle="Fraction Forest Adventure"
                    subject="Math"
                    submittedAt="2h ago"
                    maxXP={500}
                    previewType="text"
                    previewContent="I divided the pizza into 8 slices because the denominator was 8..."
                  />
                  <SubmissionCard
                    studentName="Sarah Star"
                    studentLevel={11}
                    questTitle="Solar System Model"
                    subject="Science"
                    submittedAt="4h ago"
                    maxXP={800}
                    previewType="image"
                    previewContent=""
                  />
                  <SubmissionCard
                    studentName="Mikey Magic"
                    studentLevel={6}
                    questTitle="History Timeline"
                    subject="History"
                    submittedAt="5h ago"
                    maxXP={400}
                    previewType="text"
                    previewContent="The timeline starts in 1776 with the Declaration of Independence..."
                  />
                </div>
              </motion.div>

              {/* Quick Actions Grid */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold mb-6 text-white/80">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="bg-linear-to-br from-kingdom-blue/20 to-kingdom-blue/5 border border-kingdom-blue/30 hover:border-kingdom-blue p-6 rounded-3xl flex flex-col items-center gap-3 group transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-kingdom-blue rounded-full flex items-center justify-center text-kingdom-dark group-hover:scale-110 transition-transform">
                      <Plus size={24} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-kingdom-blue">
                      New Quest
                    </span>
                  </button>

                  <button className="bg-linear-to-br from-kingdom-purple/20 to-kingdom-purple/5 border border-kingdom-purple/30 hover:border-kingdom-purple p-6 rounded-3xl flex flex-col items-center gap-3 group transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 bg-kingdom-purple rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Users size={24} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-kingdom-purple">
                      Students
                    </span>
                  </button>

                  <button className="bg-linear-to-br from-kingdom-yellow/20 to-kingdom-yellow/5 border border-kingdom-yellow/30 hover:border-kingdom-yellow p-6 rounded-3xl flex flex-col items-center gap-3 group transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 bg-kingdom-yellow rounded-full flex items-center justify-center text-kingdom-dark group-hover:scale-110 transition-transform">
                      <Trophy size={24} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-kingdom-yellow">
                      Rewards
                    </span>
                  </button>

                  <button className="bg-linear-to-br from-kingdom-pink/20 to-kingdom-pink/5 border border-kingdom-pink/30 hover:border-kingdom-pink p-6 rounded-3xl flex flex-col items-center gap-3 group transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 bg-kingdom-pink rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Settings size={24} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-kingdom-pink">
                      Settings
                    </span>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Leaderboard */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <div className="bg-white/5 backdrop-blur-lg rounded-[2.5rem] p-8 border border-white/10 h-full">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Trophy className="text-kingdom-yellow" />
                    Class Leaders
                  </h3>
                  <span className="text-xs font-bold text-white/40 uppercase">
                    This Week
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "Alex Explorer",
                      xp: 2450,
                      level: 12,
                      change: "+450",
                    },
                    {
                      name: "Sarah Star",
                      xp: 2300,
                      level: 11,
                      change: "+320",
                    },
                    {
                      name: "Leo Lionheart",
                      xp: 1950,
                      level: 8,
                      change: "+150",
                    },
                    {
                      name: "Maya Moon",
                      xp: 1800,
                      level: 8,
                      change: "+200",
                    },
                    {
                      name: "Mikey Magic",
                      xp: 1650,
                      level: 6,
                      change: "+100",
                    },
                  ].map((student, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group"
                    >
                      <div
                        className={`
                        w-8 h-8 rounded-full flex items-center justify-center font-black text-sm
                        ${index === 0 ? "bg-kingdom-yellow text-kingdom-dark" : index === 1 ? "bg-gray-300 text-gray-800" : index === 2 ? "bg-orange-400 text-white" : "bg-white/10 text-white/60"}
                      `}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white group-hover:text-kingdom-blue transition-colors">
                          {student.name}
                        </h4>
                        <p className="text-xs text-white/50">
                          Level {student.level} Warrior
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-kingdom-yellow">
                          {student.xp}
                        </div>
                        <div className="text-[10px] text-kingdom-green font-bold">
                          {student.change} XP
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 py-3 rounded-xl border border-white/10 text-white/60 font-bold hover:bg-white/5 hover:text-white transition-colors text-sm">
                  View Full Leaderboard
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
