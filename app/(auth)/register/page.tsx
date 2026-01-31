"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  GraduationCap,
  Rocket,
  Check,
  Sparkles,
} from "lucide-react";
import { CartoonButton } from "@/components/CartoonButton";
import Link from "next/link";

export default function SignupPage() {
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onSignup();
  };

  // Calculate password strength for potion effect
  const getStrength = (pass: string) => {
    if (!pass) return 0;
    let score = 0;
    if (pass.length > 5) score += 25;
    if (pass.length > 8) score += 25;
    if (/[A-Z]/.test(pass)) score += 25;
    if (/[0-9]/.test(pass)) score += 25;
    return score;
  };

  const strength = getStrength(password);
  return (
    <div>
      <div className="text-center lg:text-left mb-8">
        <h2 className="text-2xl font-black text-white mb-2">
          Join the Adventure!
        </h2>
        <p className="text-white/60 font-medium">Create your hero profile</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Role Selector */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`
              relative p-4 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-2
              ${role === "student" ? "bg-kingdom-blue/20 border-kingdom-blue shadow-[0_0_15px_rgba(0,212,255,0.3)] scale-105 z-10" : "bg-white/5 border-white/10 hover:bg-white/10 text-white/60"}
            `}
          >
            <div
              className={`
              w-10 h-10 rounded-full flex items-center justify-center
              ${role === "student" ? "bg-kingdom-blue text-kingdom-dark" : "bg-white/10"}
            `}
            >
              <Rocket size={20} strokeWidth={2.5} />
            </div>
            <span
              className={`font-bold ${role === "student" ? "text-white" : ""}`}
            >
              Student
            </span>
            {role === "student" && (
              <div className="absolute -top-2 -right-2 bg-kingdom-yellow text-kingdom-dark p-1 rounded-full">
                <Check size={12} strokeWidth={4} />
              </div>
            )}
          </button>

          <button
            type="button"
            onClick={() => setRole("teacher")}
            className={`
              relative p-4 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-2
              ${role === "teacher" ? "bg-kingdom-purple/20 border-kingdom-purple shadow-[0_0_15px_rgba(187,134,252,0.3)] scale-105 z-10" : "bg-white/5 border-white/10 hover:bg-white/10 text-white/60"}
            `}
          >
            <div
              className={`
              w-10 h-10 rounded-full flex items-center justify-center
              ${role === "teacher" ? "bg-kingdom-purple text-white" : "bg-white/10"}
            `}
            >
              <GraduationCap size={20} strokeWidth={2.5} />
            </div>
            <span
              className={`font-bold ${role === "teacher" ? "text-white" : ""}`}
            >
              Teacher
            </span>
            {role === "teacher" && (
              <div className="absolute -top-2 -right-2 bg-kingdom-yellow text-kingdom-dark p-1 rounded-full">
                <Check size={12} strokeWidth={4} />
              </div>
            )}
          </button>
        </div>

        {/* Name Input */}
        <div className="space-y-2">
          <label className="text-white/60 text-sm font-bold uppercase tracking-wider ml-2">
            Hero Name
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
              <User size={20} />
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Super Math Wizard"
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-kingdom-yellow focus:ring-1 focus:ring-kingdom-yellow transition-all font-bold"
              required
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label className="text-white/60 text-sm font-bold uppercase tracking-wider ml-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
              <Mail size={20} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@school.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-kingdom-blue focus:ring-1 focus:ring-kingdom-blue transition-all font-bold"
              required
            />
          </div>
        </div>

        {/* Password Input with Strength Meter */}
        <div className="space-y-2">
          <label className="text-white/60 text-sm font-bold uppercase tracking-wider ml-2">
            Create Password
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
              <Lock size={20} />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-kingdom-purple focus:ring-1 focus:ring-kingdom-purple transition-all font-bold"
              required
            />
          </div>

          {/* Strength Indicator */}
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mt-2 mx-2">
            <motion.div
              className={`h-full rounded-full ${strength <= 25 ? "bg-red-400" : strength <= 50 ? "bg-kingdom-yellow" : strength <= 75 ? "bg-kingdom-blue" : "bg-kingdom-green"}`}
              initial={{
                width: 0,
              }}
              animate={{
                width: `${strength}%`,
              }}
              transition={{
                duration: 0.3,
              }}
            />
          </div>
          <div className="flex justify-between px-2 text-[10px] font-bold uppercase tracking-wider text-white/40">
            <span>Weak</span>
            <span>Strong</span>
          </div>
        </div>

        {/* Terms Checkbox */}
        <label className="flex items-start gap-3 cursor-pointer group p-2">
          <div className="relative mt-0.5">
            <input type="checkbox" className="peer sr-only" required />
            <div className="w-5 h-5 border-2 border-white/20 rounded-md peer-checked:bg-kingdom-green peer-checked:border-kingdom-green transition-all" />
            <div className="absolute inset-0 text-kingdom-dark opacity-0 peer-checked:opacity-100 flex items-center justify-center transition-opacity">
              <Check size={14} strokeWidth={4} />
            </div>
          </div>
          <span className="text-white/60 text-xs font-medium leading-tight group-hover:text-white/80 transition-colors">
            I promise to be a good hero and follow the{" "}
            <span className="text-kingdom-blue underline">Kingdom Rules</span>{" "}
            (Terms of Service)
          </span>
        </label>

        {/* Signup Button */}
        <CartoonButton
          variant="accent"
          fullWidth
          icon={Sparkles}
          onClick={() => {}} // Form handles submit
        >
          Start Your Quest!
        </CartoonButton>

        {/* Login Link */}
        <div className="text-center pt-2">
          <p className="text-white/60 font-medium">
            Already a hero?{" "}
            <Link
              href="/login"
              className="text-kingdom-yellow font-bold hover:text-kingdom-yellow/80 hover:underline transition-all"
            >
              Log in here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
