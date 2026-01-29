"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Wand2, Sparkles, LogIn } from "lucide-react";
import { CartoonButton } from "./CartoonButton";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen bg-kingdom-dark flex items-center justify-center p-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-kingdom-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-kingdom-purple/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-kingdom-pink/10 rounded-full blur-3xl" />

      {/* Floating particles */}
      <motion.div
        className="absolute top-10 left-10 w-3 h-3 bg-kingdom-yellow rounded-full"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/4 right-20 w-2 h-2 bg-kingdom-blue rounded-full"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-20 w-2 h-2 bg-kingdom-pink rounded-full"
        animate={{ y: [0, 15, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="relative w-full max-w-md"
      >
        <div className="relative bg-gradient-to-br from-kingdom-dark via-kingdom-dark to-kingdom-dark border-2 border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden backdrop-blur-md">
          {/* Decorative top gradient */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-kingdom-yellow/20 via-kingdom-purple/10 to-transparent blur-2xl" />
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-kingdom-yellow/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-kingdom-purple/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-8">
              <motion.div
                className="flex justify-center mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-kingdom-yellow via-kingdom-pink to-kingdom-purple rounded-2xl flex items-center justify-center shadow-lg">
                  <Wand2 className="text-white" size={28} />
                </div>
              </motion.div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-kingdom-yellow via-kingdom-pink to-kingdom-blue mb-2">
                LearnQuest
              </h1>
              <p className="text-white/60 font-bold text-sm">
                Welcome back, adventurer!
              </p>
            </motion.div>

            {/* Form Container */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {/* Email Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-white/70 text-xs font-bold uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-kingdom-blue/60"
                    size={20}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hero@learnquest.com"
                    className="w-full bg-white/5 border-2 border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-kingdom-blue focus:ring-2 focus:ring-kingdom-blue/20 transition-all font-semibold backdrop-blur-sm hover:border-white/20"
                  />
                </div>
              </motion.div>

              {/* Password Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-white/70 text-xs font-bold uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-kingdom-purple/60"
                    size={20}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your secret password"
                    className="w-full bg-white/5 border-2 border-white/10 rounded-2xl pl-12 pr-12 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-kingdom-purple focus:ring-2 focus:ring-kingdom-purple/20 transition-all font-semibold backdrop-blur-sm hover:border-white/20"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </motion.div>

              {/* Remember me & Forgot password */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-between pt-2"
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-lg bg-white/10 border border-white/20 cursor-pointer accent-kingdom-yellow"
                  />
                  <span className="text-xs font-bold text-white/60">
                    Remember me
                  </span>
                </label>
                <button className="text-xs font-bold text-kingdom-blue hover:text-kingdom-blue/80 transition-colors">
                  Forgot password?
                </button>
              </motion.div>

              {/* Magic Login Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <CartoonButton
                  variant="accent"
                  icon={LogIn}
                  onClick={handleLogin}
                  disabled={isLoading || !email || !password}
                  className="w-full justify-center"
                >
                  {isLoading ? "Entering Kingdom..." : "Enter the Kingdom"}
                </CartoonButton>
              </motion.div>

              {/* Sign up link */}
              <motion.div variants={itemVariants} className="text-center pt-4">
                <p className="text-white/60 text-sm font-semibold">
                  New to LearnQuest?{" "}
                  <button className="text-kingdom-yellow hover:text-kingdom-yellow/80 font-black transition-colors">
                    Create Account
                  </button>
                </p>
              </motion.div>
            </motion.div>

            {/* Bottom Decoration */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-white/10 flex justify-center gap-2"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="text-kingdom-yellow" size={16} />
              </motion.div>
              <span className="text-xs text-white/40 font-bold">
                Level Up Your Learning
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              >
                <Sparkles className="text-kingdom-yellow" size={16} />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-kingdom-yellow/20 via-kingdom-purple/20 to-kingdom-blue/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ pointerEvents: "none" }}
        />
      </motion.div>
    </div>
  );
}
