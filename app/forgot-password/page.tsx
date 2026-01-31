"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import { CartoonButton } from "@/components/CartoonButton";
import { AuthLayout } from "@/components/AuthLayout";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <AuthLayout title="Spell Sent!" subtitle="Check your magic inbox">
        <div className="text-center space-y-6">
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            className="w-20 h-20 bg-kingdom-green/20 rounded-full flex items-center justify-center mx-auto border-2 border-kingdom-green"
          >
            <CheckCircle2 size={40} className="text-kingdom-green" />
          </motion.div>

          <p className="text-white/80 font-medium">
            We&apos;ve sent a magic link to{" "}
            <span className="text-kingdom-yellow font-bold">{email}</span>.
            Click it to create a new password!
          </p>

          <CartoonButton
            variant="primary"
            fullWidth
            onClick={() => router.back()}
          >
            Back to Login
          </CartoonButton>

          <button
            onClick={() => setIsSubmitted(false)}
            className="text-white/40 text-sm font-bold hover:text-white transition-colors"
          >
            Try a different email
          </button>
        </div>
      </AuthLayout>
    );
  }
  return (
    <AuthLayout title="Lost Password?" subtitle="Don't worry, we can fix it!">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-kingdom-blue/10 border border-kingdom-blue/20 rounded-2xl p-4 flex gap-3 items-start">
          <div className="text-2xl">🤔</div>
          <p className="text-sm text-white/80 leading-relaxed">
            Enter your magic email address and we&apos;ll send you a spell to
            reset your password.
          </p>
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label className="text-white/60 text-sm font-bold uppercase tracking-wider ml-2">
            Magic Email
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
              <Mail size={20} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hero@mathkingdom.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-kingdom-blue focus:ring-1 focus:ring-kingdom-blue transition-all font-bold"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <CartoonButton
          variant="secondary"
          fullWidth
          icon={Send}
          onClick={() => {}} // Form handles submit
        >
          Send Reset Spell
        </CartoonButton>

        {/* Back Link */}
        <button
          type="button"
          onClick={() => router.back()}
          className="w-full flex items-center justify-center gap-2 text-white/60 font-bold hover:text-white transition-colors py-2"
        >
          <ArrowLeft size={16} />
          Back to Login
        </button>
      </form>
    </AuthLayout>
  );
}
